import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import avaFriendsReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'; //С А Н К И


let reducersPack = combineReducers({
    profilePage: profileReducer, // reducer- ДАННЫЕ ПРОФИЛЯ
    dialogsPage: dialogsReducer, // reducer- ДАННЫЕ КОМПОНЕНТЫ (DIALOGS)
    avaFriends: avaFriendsReducer, // reducer- ДАННЫЕ КОМПОНЕНТЫ (SIDEBAR)
    usersPage: usersReducer, // reducer- ВХОДЯЩИЕ ДАННЫЕ С USERS (API)
    auth: authReducer // reducer- ОТВЕЧАЕТ ЗА ЛОГИРОВАНИЕ ПРИ ВХОДЕ

})

let store = createStore(reducersPack, applyMiddleware(thunkMiddleware));

//ДЛЯ ОТОБРАЖЕНИЯ ГЛОБАЛЬНО-МОЖНО ОТСЛЕДИТЬ (CONSOLE)
window.store = store

export default store;