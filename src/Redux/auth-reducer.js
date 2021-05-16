//КОМПОНЕНТА ДЛЯ ЛОГИРОВАНИЯ!!!

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

export const setAuthUsersData = (id,email,login) => ({type: SET_USERS_DATA, data: {id, email, login}})
//ДЛЯ ПОНИМАНИЯ: data:userId, email, login | НО МОЖНО БЫЛО БЫ И ПЕРЕДАТЬ ПРОСТО DATA ВНУТРИ КОТОРОГО И ЛЕЖАЛ БЫ ОБЪЕКТ
export default authReducer;