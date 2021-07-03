// import React from 'react';
import {
    addPostActionCreator,
    deletePostActionCreator,
    // updateNewPostTextActionCreator
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
        addPost: (login) => {
            dispatch(addPostActionCreator(login))
        },

        deletePost: () => {
            dispatch(deletePostActionCreator())
        },

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;


