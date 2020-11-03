import React, {Suspense} from 'react';
import './App.css';
import HeaderContainer from "./commponents/Header/HeaderContainer";
import ProfileContainer from "./commponents/Profile/ProfileContainer";
import News from "./commponents/News/News";
import Music from "./commponents/Music/Music";
import Settings from "./commponents/Settings/Settings";
import Login from "./commponents/Login/Login";
import Main from "./commponents/Main/Main";
import {connect} from "react-redux";
import {initialization} from "./redux/reducer/appReducer";
import Preloader from "./commponents/Common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter, Route, Redirect} from "react-router-dom";
import {withSuspense} from "./HOC/withSuspense";

const MessagesContainer = React.lazy(() => import('./commponents/Messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./commponents/Users/UsersContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initialization()
    }

    render() {
        if (!this.props.isInitialization) {
            return (<Preloader/>)
        }
        return (
            <section className="App">
                <HeaderContainer/>
                <Route exact path="/">
                    <Redirect to='/main'/>
                </Route>
                <Route path='/main' render={() => <Main/>}/>
                <Route path="/login" render={() => <Login/>}/>
                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                <Route path="/messages" render={withSuspense(MessagesContainer)}/>
                <Route path="/users" render={withSuspense(UsersContainer)}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInitialization: state.app.isInitialization
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initialization}))(App);
