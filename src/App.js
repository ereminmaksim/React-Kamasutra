import logo from './logo.svg';
import React from 'react';
import './App.css';

// ниже компоненты!!!
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/Profile";


const App = () => {
    return (

        <div className="app_wrapper">
            <Header />
            <Navbar />
            <MyPosts />
        </div>
    );
}

export default App;
