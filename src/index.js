import reportWebVitals from './reportWebVitals';
import store from "./Redux/reduxStore";
// ------------------------------------------------//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import {addPost, delPost,updatePost} from "./Redux/State";
// import {delPost} from "./Redux/State";



/**
 * ДОБАВЛЕНИЕ ФУНКЦИИ ДЛЯ ПОЛНОЙ ОТРИСОВКИ ДОМ-ДЕРЕВА!!!
 * rerenderEntireTree()
 */

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={ state }
                     dispatch={store.dispatch.bind(store)}
                     store= {store}/>

            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

//ПЕРЕДАЛИ STORE ПРОРИСОВКУ, ПОСЛЕ ВВОДА ПОСТА!!!
store.subscribe(() => {
     let state = store.getState()
    rerenderEntireTree(state);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
