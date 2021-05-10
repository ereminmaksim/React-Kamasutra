/**
 * Ver. 1
 */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import State from './Redux/State';
//
//
// //// КОНВЕРСИЯ ПОСТОВ
// let postData = [
//     {id: 1, message: "Hi? how are you?", likesCount: 1},
//     {id: 2, message: "Cool!!! my brother", likesCount: 11},
//     {id: 3, message: "Two ships, two directions. Sounds like providence, doesn't it, Morpheus?"},
//     {id: 4, message: "You've never believed in The One.", likesCount: 5},
//     {id: 5, message: "I still don't.", likesCount: 17},
//     {id: 6, message: "Then why are you doing this?", likesCount: 8},
//     {id: 7, message: "I believe in him.", likesCount: 3},
// ]
//
// // КОНВЕРСИЯ ИМЁН
// let dialogItem = [
//     {id: 1, name: 'Санька'},
//     {id: 2, name: 'Кирилл'},
//     {id: 3, name: 'Сенька'},
//     {id: 4, name: 'Иван'},
//     {id: 5, name: 'Борис-Бритва'},
//     {id: 6, name: 'Социапат-охотник'}
// ]
//
// // КОНВЕРСИЯ ДИАЛОГОВ
// let messagesDate = [
//     {id: 1, message: 'How are you'},
//     {id: 2, message: 'i, everything is fine'},
//     {id: 3, message: 'Yes, and so do I'},
//     {id: 4, message: 'Yo'},
//     {id: 5, message: 'I, don`t know'},
//     {id: 6, message: 'listen to me, people'}
// ]
//
//
// ReactDOM.render(
//     <React.StrictMode>
//         {/*<App postData={postData} dialogItem={dialogItem} messagesDate={messagesDate}/>*/}
//     </React.StrictMode>,
//     document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);


/**
 * Ver.2
 */
// import ReactDOM from "react-dom";
// import React from "react";
// import {BrowserRouter} from "react-router-dom";
// import App from "./App";
// import State, {addPost, delPost} from "./Redux/State";
// import reportWebVitals from "./reportWebVitals";
//
// /**
//  * ДОБАВЛЕНИЕ ФУНКЦИИ ДЛЯ ПОЛНОЙ ОТРИСОВКИ ДОМ-ДЕРЕВА!!!
//  * rerenderEntireTree()
//  */
//
// let rerenderEntireTree =() => {
//
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App state={State} addPost={addPost} delPost={delPost}/>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
// rerenderEntireTree();
//
//
//
//
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

