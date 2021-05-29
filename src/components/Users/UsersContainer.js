import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    setFollowingProgress,
    getUsersSunCreator
} from "../../Redux/usersReducer";
import React from "react";
import UsersFunction from "./UsersFunction";
import Preloader from "../common/Preloader/Preloader";


//НИЖЕ КЛАССОВАЯ КОМПОНЕНТА

class UsersClass extends React.Component {
    /**
     * componentDidMount()
     * componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM).
     * В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
     * Это хорошее место для создания сетевых запросов.
     */

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize) //Санка!!!
    }

    //ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ ЮЗЕРАМИ!!!
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

// ОБЯЗАТЕЛЬНО ЕСТЬ МЕТОД RENDER()ИДЁТ ОТРИСОВКА *.JSX
    render() {

        // debugger
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFunction totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           usersData={this.props.usersData}
                           unFollow={this.props.unFollow}
                           follow={this.props.follow}
                           setFollowingProgress={this.props.setFollowingProgress}
                           followingInProgress={this.props.followingInProgress}

            />
        </>
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
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}
// ************************
/**
 * ВНОСИМ ИЗМЕНЕНИЯ В mapDispatchToProps, ОНА НАМ ТЕПЕРЕЬ НЕ НУЖНА!!!
 * @param dispatch
 * @returns {{setTotalUsersCount: setTotalUsersCount, setIsFetching: setIsFetching, undFollow: unFollow, follows: follow, setCurrentPage: setCurrentPage}}
 */


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    setFollowingProgress,
    getUsers: getUsersSunCreator
})(UsersClass);
