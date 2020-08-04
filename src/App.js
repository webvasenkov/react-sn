import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./commponents/Header";
import Profile from "./commponents/Profile";
import AddPost from "./commponents/AddPost";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Profile/>
            <AddPost/>
        </div>
    );
}


export default App;
