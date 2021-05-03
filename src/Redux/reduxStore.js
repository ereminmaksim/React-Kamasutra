import {combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import avaFriendsReducer from "./sidebarReducer";

let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    avaFriends: avaFriendsReducer

})

let store = createStore(reducersPack);

export default store;