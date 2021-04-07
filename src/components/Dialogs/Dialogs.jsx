import React from 'react';
import style from './Dialogs.module.css';
import Messages from './../Dialogs/Messages/Messages';
import DialogsItem from './../Dialogs/DialogItem/DialogsItem';


const Dialogs = (props) => {



    let newPost = React.createRef();
    // *********************************
    let addPost = () =>{
        let post = newPost.current.value;
        alert(post)
    }


    // MAP ДЛЯ ИМЕН
    let dialogItemElements = props.state.dialogItem
        .map(dialog => <DialogsItem
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
            ava={dialog.ava}/>)

    // MAP ДЛЯ СООБЩЕНИЙ
    let messagesDateElements = props.state.messagesDate
        .map(messages => <Messages key={messages.id} message={messages.message}/>)



    return (
        <div className={style.dialogs}>
            {/*****************************************************************************************/}
            {/*            ЛЕВАЯ СТОРОНА*/}
            <div className={`${style.dialogs_items} ${style.container}`}>
                <div>

                    {dialogItemElements}
                    <textarea ref={ newPost } placeholder="enter a message"/>
                    <button onClick={ addPost }>Please Add</button>

                </div>
            </div>

            {/*****************************************************************************************/}
            {/*            ПРАВАЯ СТОРОНА*/}
            <div className={`${style.messages} ${style.container} ${style.darker}`}>
                <div>
                    {messagesDateElements}
                </div>
            </div>


        </div>

    )
}

export default Dialogs;
