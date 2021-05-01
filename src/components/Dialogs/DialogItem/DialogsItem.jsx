import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


// ДЛЯ КТО,КОМУ ПИШЕТ
const DialogsItem = (props) => {





    let path = "/dialogs/" + props.id;
    return (
        <div className={`${style.dialog}  ${style.active}`}>

            <img src={props.ava} alt="photos"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>


    )
}
export default DialogsItem;
