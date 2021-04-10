import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Redux/State";
// ------------------------------------------------//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, delPost,updatePost} from "./Redux/State";
// import {delPost} from "./Redux/State";



/**
 * ДОБАВЛЕНИЕ ФУНКЦИИ ДЛЯ ПОЛНОЙ ОТРИСОВКИ ДОМ-ДЕРЕВА!!!
 * rerenderEntireTree()
 */

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={ addPost }
                     delPost={ delPost }
                     updatePost={updatePost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
