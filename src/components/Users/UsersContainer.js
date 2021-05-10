import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, undFollowAC} from "../../Redux/usersReducer";
import React from "react";
import axios from "axios";
import UsersFunction from "./UsersFunction";

//НИЖЕ КЛАССОВАЯ КОМПОНЕНТА

class UsersClass extends React.Component {
    /**
     * componentDidMount()
     * componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM).
     * В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
     * Это хорошее место для создания сетевых запросов.
     */

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`).then
        (response => {
            this.props.setUsersAC(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    //ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ ЮЗЕРАМИ!!!
    onPageChanged = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}&count=${this.props.pageSize}`).then
        (response => {
            this.props.setUsersAC(response.data.items)
        })
        this.props.setCurrentPage(pageNumber)
    }

// ОБЯЗАТЕЛЬНО ЕСТЬ МЕТОД RENDER()ИДЁТ ОТРИСОВКА *.JSX
    render() {

        debugger
        return <UsersFunction totalUsersCount={this.props.totalUsersCount}
                              pageSize={this.props.pageSize}
                              currentPage={this.props.currentPage}
                              onPageChanged={this.onPageChanged}
                              usersData={this.props.usersData}
                              undFollow={this.props.undFollow}
                              follows={this.props.follows}
        />



    }
}

/**
 *
 * @param state
 * @returns {{usersData: ([]|*), totalUsersCount: (number|*), pageSize: (number|*), currentPage: (number|*)}}
 */

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}
// ************************
const mapDispatchToProps = (dispatch) => {
    return {
        follows: (userId) => {
            dispatch(followAC(userId))
        },
        undFollow: (userId) => {
            dispatch(undFollowAC(userId))
        },
        setUsersAC: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
