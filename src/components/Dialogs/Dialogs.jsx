import React from 'react';
import style from './Dialogs.module.css';
import Messages from './../Dialogs/Messages/Messages';
import DialogsItem from './../Dialogs/DialogItem/DialogsItem';
import {Button} from '@material-ui/core';
import {Field, reduxForm} from "redux-form";


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

    // let newMessageBody = state.newMessageBody;



    // // ДЛЯ ВВОДА СООБЩЕНИЙ ТЕКСТАРЕЯ
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value
    //     props.updateNewMessageBody(body)
    // }
    //
    // // ДЛЯ ВВОДА BUTTON
    // let onSendMessageClick = () => {
    //     props.onSendMessageClick()
    // }



    //ДЛЯ ПРОВЕРКИ на вход REDUX-FORM!!!
    let addMessage = (value) => {
        props.onSendMessageClick(value.login)
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
                <DialogsReduxForm  onSubmit={addMessage}/>
            </div>


        </div>

    )
}

const DialogsForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={style.wrapper}>
            <Field type="text"
                   name={'login'}
                   component="input"
                   className={style.inputs}
                // ref={ newPost }
                   placeholder="Отправить"/>
            <Button variant="contained"
                    color="primary">
                Send
            </Button>
        </form>
    )
}


/*
 *reduxForm - обёртка над всеми формами, можно сказать что это - (HOC)
 */
const DialogsReduxForm = reduxForm({

    form: 'dialogMessageForm'//dialogMessageForm - ниже уникальное имя для формы!!!
})(DialogsForm)



export default Dialogs;
