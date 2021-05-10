// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route} from "react-router-dom";// РОУТЕР
//КОМПОНЕНТЫ!!!
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {

debugger
    return (
            <div className="app_wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">

                    <Route path="/dialogs"
                           render={() => <DialogsContainer

                           />}/>

                    <Route path="/profile"
                           render={() => <Profile
                               />}/>

                    <Route path="/users"
                           render={() => <UsersContainer
                           />}/>

                    <Route path="/music" component={Music} />
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    );
}

export default App;




