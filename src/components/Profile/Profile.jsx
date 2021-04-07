import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {updatePost} from "../../Redux/State";


const Profile = (props) => {


    return (
        <div className={style.content}>
            <ProfileInfo/>

            <MyPosts
                postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                delPost={props.delPost}
                updatePost={props.updatePost }/>
        </div>
    )
}

export default Profile;


