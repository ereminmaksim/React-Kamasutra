// import React from 'react';
// import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
// import Dialogs from "./Dialogs";
// import StoreContextApi from "../../StoreContextApi/StoreContextApi";
// // import store from "../../Redux/reduxStore";
//
//
// const DialogsContainerDonTReturnIt = () => {
//
//     // // РАБОТАЕМ ВНУТРИ ДИАЛОГОВ С ЛОКАЛЬНЫМ СТЕЙСТОМ ЗАКИНУВ ЕГО В ПЕРЕМЕННУЮ
//     // let state = props.store.getState().dialogsPage
//     //
//     // // ДЛЯ ВВОДА BUTTON
//     // let onSendMessageClick = () => {
//     //     props.store.dispatch(sendMessageActionCreator())
//     // }
//     //
//     // // ДЛЯ ВВОДА СООБЩЕНИЙ ТЕКСТАРЕЯ
//     // let onNewMessageChange = (body) => {
//     //     props.store.dispatch(updateNewMessageBodyCreator(body));
//     // }
//
//     return <StoreContextApi.Consumer>
//         {
//             (store) => {
//                 let state = store.getState().dialogsPage
//                 // ************************
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageActionCreator())
//                 }
//                 // ************************
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }
//                 // ************************
//                 return <Dialogs updateNewMessageBody={onNewMessageChange}
//                                 onSendMessageClick={onSendMessageClick}
//                                 dialogsPage={state}/>
//             }
//
//         }
//     </StoreContextApi.Consumer>
// }
//
// export default DialogsContainerDonTReturnIt;