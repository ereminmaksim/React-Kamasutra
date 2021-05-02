import React from 'react';
import style from './Dialogs.module.css';
import Messages from './../Dialogs/Messages/Messages';
import DialogsItem from './../Dialogs/DialogItem/DialogsItem';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
//CREATOR
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";


const Dialogs = (props) => {
    // MAP ДЛЯ ИМЕН

    // let newPost = React.createRef();
    // *********************************
    // let addPost = () =>{
    //     let post = newPost.current.value;
    //     alert(post)
    // }

// РАБОТАЕМ ВНУТРИ ДИАЛОГОВ С ЛОКАЛЬНЫМ СТЕЙСТОМ ЗАКИНУВ ЕГО В ПЕРЕМЕННУЮ
let state = props.store.getState().dialogsPage

    let dialogItemElements = state.dialogItem
        .map((dialog, index) => <DialogsItem
            key={index}
            name={dialog.name}
            id={dialog.id}
            ava={dialog.ava}/>)

    // MAP ДЛЯ СООБЩЕНИЙ
    let messagesDateElements = state.messagesDate
        .map((messages, index) => <Messages key={index} message={messages.message}/>)

    let newMessageBody = state.newMessageBody;

    // ДЛЯ ВВОДА BUTTON
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    // ДЛЯ ВВОДА СООБЩЕНИЙ ТЕКСТАРЕЯ
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
