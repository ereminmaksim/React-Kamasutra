import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    // СДЕСЬ ОБЪЕКТ ЖИЗНЕННОГО ЦИКЛА === СДЕСЬ ВЫПОЛНЯЮТСЯ ВСЕ САЙД-ЭФФЕКТЫ
    //МЕТОДЫ КОТОРЫЕ ЕСТЬ У ОБЪЕКТА, ОНИ СОЗДАНЫ С ПОМОЩЬЮ ЭТОГО КЛАССА
    //ЭТОТ ОБЪЕКТ ОТВЕЧАЕТ ЗА КОМПОНЕНТУ И REACT ВЗАИМОДЕЙСТВУЕТ С ЭТИМ ОБЪЕКТОМ
    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        //САНКА
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

/*********************************************************************/

//Здесь происходит проверка на авторизацию и просмотр данной страницы
// если USER авторизован
//КОМПОНЕНТА hoc!!!
//ДВОЙНОЙ КОННЕКТ, ДЛЯ ОБЁРТКИ REDIRECT И НИЖЕ ДЛЯ CONTAINER COMPONENT

let AuthRedirectComponent = withAuthRedirect (ProfileContainer)
// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// })

// AuthRedirectComponent = connect(mapStateToPropsForRedirect) (AuthRedirectComponent)

/*********************************************************************/


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


//withRouter работает с новым объектом входящим с URL:
let WithUrlDataContainerComponent = withRouter (AuthRedirectComponent)


export default connect(mapStateToProps, {getUsersProfile})////САНКА
    (WithUrlDataContainerComponent);