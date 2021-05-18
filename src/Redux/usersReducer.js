const FOLLOW_USERS = "FOLLOW-USERS";
const UNFOLLOW_USERS = "UNFOLLOW-USERS";
const SET_USERS = "SET-USERS";
//ДЛЯ КЛИКА ПО СТРАНИЦАМ
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
// ДЛЯ ПОЛЬЗОВАТЕЛЕЙ С API
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"; //PRELOADER
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";//СПРЯТАТЬ КНОПКУ


let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true, // PRELOADER -КРУТИЛКА:)
    followingInProgress: [] //СПРЯТАТЬ КНОПКУ ПОСЛЕ ЗАПРОСА НА СЕРВЕР
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state

    }
}
export const follow = (userId) => ({type: FOLLOW_USERS, userId})
export const undFollow = (userId) => ({type: UNFOLLOW_USERS, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export default usersReducer;










