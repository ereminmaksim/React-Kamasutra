//КОМПОНЕНТА ДЛЯ ЛОГИРОВАНИЯ!!!

import {authIPI, usersAPI} from "../API/api";
import {setUsersProfile} from "./profileReducer";

const SET_USERS_DATA = "SET-USERS-DATA";
// const UNFOLLOW_USERS = "UNFOLLOW-USERS";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false// ЗАЛОГИНЕН ИЛИ НЕТ?!
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data, //data(название которое мы дали для принятия входящих данных
                //в данном случае это то что придёт у нас с initialState)
                isAuth: true
            }

        default:
            return state

    }
}

export const setAuthUsersData = (id, email, login) => ({type: SET_USERS_DATA, data: {id, email, login}})

//САНКА
export const getAuthUsersData = () => {
    return (dispatch) => {
        authIPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {// data структура axios
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUsersData(id, email, login))// data.data поэтому и
                    // пишем структура api(data) получаеца такая дурь (data.data)
                }
            })
    }
}


//ДЛЯ ПОНИМАНИЯ: data:userId, email, login | НО МОЖНО БЫЛО БЫ И ПЕРЕДАТЬ ПРОСТО DATA ВНУТРИ КОТОРОГО И ЛЕЖАЛ БЫ ОБЪЕКТ
export default authReducer;