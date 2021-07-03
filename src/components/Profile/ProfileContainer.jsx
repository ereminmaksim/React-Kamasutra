import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, profileStatus, profileStatusUpdate} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    // СДЕСЬ ОБЪЕКТ ЖИЗНЕННОГО ЦИКЛА === СДЕСЬ ВЫПОЛНЯЮТСЯ ВСЕ САЙД-ЭФФЕКТЫ
    //МЕТОДЫ КОТОРЫЕ ЕСТЬ У ОБЪЕКТА, ОНИ СОЗДАНЫ С ПОМОЩЬЮ ЭТОГО КЛАССА
    //ЭТОТ ОБЪЕКТ ОТВЕЧАЕТ ЗА КОМПОНЕНТУ И REACT ВЗАИМОДЕЙСТВУЕТ С ЭТИМ ОБЪЕКТОМ
    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12333
        }
        //САНКА
        this.props.getUsersProfile(userId)
        this.props.profileStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status ={this.props.status}
            updateStatus = {this.props.profileStatusUpdate}/>
        );
    }
}


//Здесь происходит проверка на авторизацию и просмотр данной страницы
// если USER авторизован
//КОМПОНЕНТА hoc!!!
//ДВОЙНОЙ КОННЕКТ, ДЛЯ ОБЁРТКИ REDIRECT И НИЖЕ ДЛЯ CONTAINER COMPONENT

// let AuthRedirectComponent = withAuthRedirect (ProfileContainer)
// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// })

// AuthRedirectComponent = connect(mapStateToPropsForRedirect) (AuthRedirectComponent)

/*********************************************************************/


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status
})


/*********************************************************************/


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

export default compose(
    withRouter,
    connect(mapStateToProps, {getUsersProfile, profileStatus, profileStatusUpdate}),
    // уберём дабы не мешала при входе на профиль, выдавая Redirect а Компонент Login
    //withAuthRedirect

)(ProfileContainer);

/*********************************************************************/




//withRouter работает с новым объектом входящим с URL:
// let WithUrlDataContainerComponent = withRouter (AuthRedirectComponent)


// export default connect(mapStateToProps, {getUsersProfile})////САНКА
//     (WithUrlDataContainerComponent);