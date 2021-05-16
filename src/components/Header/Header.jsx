import React from 'react';
import style from './Header.module.css';
import userAva from './../../assets/img/logoza.ru.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
        <img src={userAva} alt=""/>

        <div className={style.loginBlock}>
            {props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink>}

        </div>
            </header>


}

export default Header;