import React from 'react';
import style from './../Dialogs.module.css';


// ДЛЯ СООБЩЕНИЙ
const Messages = (props) => {


    return (

        <div className={style.message}>{props.message}</div>

)
}


export default Messages;
