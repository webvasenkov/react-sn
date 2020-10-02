import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./commponents/Header/Header";
import Profile from "./commponents/Profile/Profile";
import Messages from "./commponents/Messages/Messages";
import Friends from "./commponents/Friends/Friends";
import News from "./commponents/News/News";
import Music from "./commponents/Music/Music";
import Settings from "./commponents/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route path="/profile" render={() => <Profile profileState={props.appState.profilePage} addPost={props.addPost}/>}/>
                <Route path="/messages" render={() => <Messages messagesState={props.appState.messagesPage}/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </BrowserRouter>
    );
}


export default App;
