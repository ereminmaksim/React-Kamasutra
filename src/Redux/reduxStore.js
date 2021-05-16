import {combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import avaFriendsReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";

let reducersPack = combineReducers({
    profilePage: profileReducer, // reducer- ДАННЫЕ ПРОФИЛЯ
    dialogsPage: dialogsReducer, // reducer- ДАННЫЕ КОМПОНЕНТЫ (DIALOGS)
    avaFriends: avaFriendsReducer, // reducer- ДАННЫЕ КОМПОНЕНТЫ (SIDEBAR)
    usersPage: usersReducer, // reducer- ВХОДЯЩИЕ ДАННЫЕ С USERS (API)
    auth: authReducer // reducer- ОТВЕЧАЕТ ЗА ЛОГИРОВАНИЕ ПРИ ВХОДЕ

})

let store = createStore(reducersPack);

//ДЛЯ ОТОБРАЖЕНИЯ ГЛОБАЛЬНО-МОЖНО ОТСЛЕДИТЬ (CONSOLE)
window.store = store

export default store;