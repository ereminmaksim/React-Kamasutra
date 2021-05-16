import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUsersData} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }// ОБЪЕКТ В КОТОРОМ СИДЯТ НАСТРОЙКИ ЗАПРОСА(МОЖНО ИЗМЕНЯТЬ)
        )
            .then(response => {
                if (response.data.resultCode === 0) {// data структцра axios
                    let {id,email,login} = response.data.data;
                    this.props.setAuthUsersData(id,email,login)// data.data поэтому и
                    // пишем структура api(data) получаеца такая дурь (ata.data)
                }
            })
    }
    // id,email,login: null,
    // email: null,
    // login: null,
    render() {
        return (

            <Header {...this.props} />

        );
    }
}

// export default HeaderContainer

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login

})

export default connect(mapStateToProps,
    {setAuthUsersData})
(HeaderContainer);