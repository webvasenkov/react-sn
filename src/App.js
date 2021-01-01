import React from 'react';
import './App.css';
import HeaderContainer from "./commponents/Header/HeaderContainer";
import ProfileContainer from "./commponents/Profile/ProfileContainer";
import News from "./commponents/News/News";
import Music from "./commponents/Music/Music";
import Login from "./commponents/Login/Login";
import Main from "./commponents/Main/Main";
import Error from "./commponents/Common/Error/Error";
import Preloader from "./commponents/Common/Preloader/Preloader";
import { connect } from "react-redux";
import { globalError, initialization } from "./redux/reducer/appReducer";
import { compose } from "redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { withSuspense } from "./HOC/withSuspense";

const MessagesContainer = React.lazy(() => import('./commponents/Messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./commponents/Users/UsersContainer'))
const SettingsContainer = React.lazy(() => import('./commponents/Settings/SettingsContainer'))

class App extends React.Component {
    catchAllUnhandledErrors(promiseRejectionEvent) {
        this.props.globalError()
    }

    componentDidMount() {
        this.props.initialization()
        this.catchAllUnhandledErrors = this.catchAllUnhandledErrors.bind(this)
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.isInitialization) {
            return (<Preloader />)
        }
        return (
            <section className="App">
                <HeaderContainer />
                <Switch>
                    <Redirect exact from="/" to='/main' />
                    <Route path='/main' render={() => <Main />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
                    <Route path="/messages" render={withSuspense(MessagesContainer)} />
                    <Route path="/users" render={withSuspense(UsersContainer)} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={withSuspense(SettingsContainer)} />
                </Switch>
                {this.props.error && <Error errorText={this.props.error} />}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInitialization: state.app.isInitialization,
        error: state.app.globalError
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { initialization, globalError }))(App);
