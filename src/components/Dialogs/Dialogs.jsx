import React from 'react';
import style from './Dialogs.module.css';
import Messages from './../Dialogs/Messages/Messages';
import DialogsItem from './../Dialogs/DialogItem/DialogsItem';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';

//Взята из библиотеки (react-router-dom)компонента для перехода в нашем случае LOGIN
import {Redirect} from "react-router";

const Dialogs = (props) => {

let state = props.dialogsPage
//*************************************************************************
    let dialogItemElements = state.dialogItem
        .map((dialog, index) => <DialogsItem
            key={index}
            name={dialog.name}
            id={dialog.id}
            ava={dialog.ava}/>)
//*************************************************************************
    // MAP ДЛЯ СООБЩЕНИЙ
    let messagesDateElements = state.messagesDate
        .map((messages, index) => <Messages key={index} message={messages.message}/>)
//*************************************************************************

    let newMessageBody = state.newMessageBody;

    // ДЛЯ ВВОДА BUTTON
    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    // ДЛЯ ВВОДА СООБЩЕНИЙ ТЕКСТАРЕЯ
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }





    return (
        <div className={style.dialogs}>
            {/*****************************************************************************************/}
            {/*            ЛЕВАЯ СТОРОНА*/}
            <div className={`${style.dialogs_items} ${style.container}`}>
                <div>
                    {dialogItemElements}
                </div>
            </div>

            {/*****************************************************************************************/}
            {/*            ПРАВАЯ СТОРОНА*/}
            <div className={`${style.messages} ${style.container} ${style.darker}`}>
                <div>
                    {messagesDateElements}
                </div>
                <div className={style.wrapper}>
            {/*****************************************************************************************/}
                <Input value={newMessageBody}
                       onChange={onNewMessageChange}
                       className={style.inputs}
                       // ref={ newPost }
                       placeholder="Enter message"/>
            {/*****************************************************************************************/}
                <Button onClick={ onSendMessageClick }
                        variant="contained"
                        color="primary">
                    Send
                </Button>
                </div>
            </div>



        </div>

    )
}

export default Dialogs;
