// import React from 'react';
import {
    addPostActionCreator,
    deletePostActionCreator,
    updateNewPostTextActionCreator
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
// ************************
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        deletePost: () => {
            dispatch(deletePostActionCreator())
        },

        updateNewPostText: (post) => {
            let action = updateNewPostTextActionCreator(post);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;


