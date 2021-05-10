const FOLLOW_USERS = "FOLLOW-USERS";
const UNFOLLOW_USERS = "UNFOLLOW-USERS";
const SET_USERS = "SET-USERS";
//ДЛЯ КЛИКА ПО СТРАНИЦАМ
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
// ДЛЯ ПОЛЬЗОВАТЕЛЕЙ С API
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";


let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USERS:
            return {
                ...state,
                // usersData: [...state.usersData], НИЖЕ ТОЖЕ САМОЕ ДЕЙСТВИЕ
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW_USERS:
            return {
                ...state,
                // usersData: [...state.usersData], НИЖЕ ТОЖЕ САМОЕ ДЕЙСТВИЕ
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: {
            return {...state, usersData: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state

    }
}
export const followAC = (userId) => ({type: FOLLOW_USERS, userId})
export const undFollowAC = (userId) => ({type: UNFOLLOW_USERS, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})

export default usersReducer;