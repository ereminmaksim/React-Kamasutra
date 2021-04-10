import React from 'react';
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css';
import DialogsItem from "../Dialogs/DialogItem/DialogsItem";

const Navbar = (props) => {

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile">Profile</NavLink></div>

            <div className={style.item}>
                <NavLink to="/dialogs">Message</NavLink></div>

            <div className={style.item}>
                <NavLink to="/news">News</NavLink></div>

            <div className={style.item}>
                <NavLink to="/music">Music</NavLink></div>

            <div className={style.item}>
                <NavLink to="/settings">Settings</NavLink></div>

            <div className={style.item}>
                <div className={style.itemFriends}>
                <NavLink to="/friends">Friends</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;



