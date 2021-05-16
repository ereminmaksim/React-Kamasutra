import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    // СДЕСЬ ОБЪЕКТ ЖИЗНЕННОГО ЦИКЛА === СДЕСЬ ВЫПОЛНЯЮТСЯ ВСЕ САЙД-ЭФФЕКТЫ
    //МЕТОДЫ КОТОРЫЕ ЕСТЬ У ОБЪЕКТА, ОНИ СОЗДАНЫ С ПОМОЩЬЮ ЭТОГО КЛАССА
    //ЭТОТ ОБЪЕКТ ОТВЕЧАЕТ ЗА КОМПОНЕНТУ И REACT ВЗАИМОДЕЙСТВУТ С ЭТИМ ОБЪЕКТОМ
    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


//withRouter работает с новым объектом входящим с URL:
let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUsersProfile})
(WithUrlDataContainerComponent);