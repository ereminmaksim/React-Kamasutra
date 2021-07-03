import React from 'react';
import {sendMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



// ************************
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
// ************************
const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        },
        // updateNewMessageBody: (body) => {
        //     dispatch(updateNewMessageBodyCreator(body))
        // }
    }
}


/**
 * Функция compose()
 * Создание не простой функциональности, путем композиции простых функции в JavaScript.
 * Композиция - создание сложной функциональности за счет объединения более простых функций.
 * В некотором смысле, композиция - это вложение функций, каждая из которых передает свой
 * результат в качестве входных данных для другой функции. Но вместо того, чтобы создавать
 * неразборчивое количество вложений, мы создадим функцию более высокого порядка - compose(),
 * которая принимает все функции, которые мы хотим объединить, и возвращает нам новую функцию
 * для использования.
 */

// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs)


/*********************************************************************/

//Здесь происходит проверка на авторизацию и просмотр данной страницы
// если USER авторизован
//ДВОЙНОЙ КОННЕКТ, ДЛЯ ОБЁРТКИ REDIRECT И НИЖЕ ДЛЯ CONTAINER COMPONENT
// let AuthRedirectComponent = withAuthRedirect(Dialogs)

/*********************************************************************/

//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
