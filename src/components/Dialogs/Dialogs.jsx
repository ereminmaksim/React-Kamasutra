import React from 'react';
import style from './Dialogs.module.css';
import Messages from './../Dialogs/Messages/Messages';
import DialogsItem from './../Dialogs/DialogItem/DialogsItem';


const Dialogs = (props) => {

    // MAP ДЛЯ ИМЕН
    let dialogItemElements = props.dialogItem
        .map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

    // MAP ДЛЯ СООБЩЕНИЙ
    let messagesDateElements = props.messagesDate
        .map(messages => <Messages key={messages.id} message={messages.message}/>)


    return (
        <div className={style.dialogs}>
            {/*****************************************************************************************/}
            {/*ЛЕВАЯ СТОРОНА*/}
            <div className={style.dialogs_items}>
                <div>
                    {dialogItemElements}
                </div>
            </div>
            {/*****************************************************************************************/}
            {/*ПРАВАЯ СТОРОНА*/}
            <div className={style.messages}>
                <div>
                    {messagesDateElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
