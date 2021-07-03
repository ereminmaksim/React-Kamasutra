import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUsersData} from "../../Redux/auth-reducer";
import {authIPI} from "../../API/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUsersData()
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
    {getAuthUsersData})
(HeaderContainer);