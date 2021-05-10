import {combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import avaFriendsReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    avaFriends: avaFriendsReducer,
    usersPage: usersReducer

})

let store = createStore(reducersPack);

//ДЛЯ ОТОБРАЖЕНИЯ ГЛОБАЛЬНО-МОЖНО ОТСЛЕДИТЬ (CONSOLE)
window.store = store

export default store;