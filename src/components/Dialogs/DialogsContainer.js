import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



// ************************
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
// ************************
const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}


/*********************************************************************/

//Здесь происходит проверка на авторизацию и просмотр данной страницы
// если USER авторизован
//ДВОЙНОЙ КОННЕКТ, ДЛЯ ОБЁРТКИ REDIRECT И НИЖЕ ДЛЯ CONTAINER COMPONENT
let AuthRedirectComponent = withAuthRedirect(Dialogs)

/*********************************************************************/



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)


export default DialogsContainer;
