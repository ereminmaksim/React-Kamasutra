import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";// РОУТЕР
//КОМПОНЕНТЫ!!!
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";



const App = (props) => {

debugger
    return (
            <div className="app_wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">

                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>

                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               delPost={props.delPost}
                               updatePost={props.updatePost}
                               />}/>

                    <Route path="/music" component={Music} />
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    );
}

export default App;




