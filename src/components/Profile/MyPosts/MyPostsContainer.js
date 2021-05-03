import React from 'react';
import {
    addPostActionCreator,
    deletePostActionCreator,
    updateNewPostTextActionCreator
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContextApi from "../../../StoreContextApi/StoreContextApi";


const MyPostsContainer = () => {
    // let state = props.store.getState()

    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ addPost ПЕРЕКИНУТА ИЗ State
    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // }
    //
    // // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ dellPost ПЕРЕКИНУТА ИЗ State
    // let deletePost = () => {
    //     props.store.dispatch(deletePostActionCreator())
    // }
    //
    // // ДЛЯ ПРЯМОГО ИЗМЕНЕНИЯ STATE (TEXTAREA)
    // let onPostChange = (post) => {
    //     let action = updateNewPostTextActionCreator(post);
    //     props.store.dispatch(action)
    // }

    return (
        <StoreContextApi.Consumer>
            {
            (store) => {
                let state = store.getState()
                // ************************
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                // ************************
                let deletePost = () => {
                    store.dispatch(deletePostActionCreator())
                }
                // ************************
                let onPostChange = (post) => {
                    let action = updateNewPostTextActionCreator(post);
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                deletePost={deletePost}
                                postData={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContextApi.Consumer>
    )
}
export default MyPostsContainer;


