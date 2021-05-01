import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import store from "../../Redux/Store";


const Profile = (props) => {


    return (
        <div className={style.content}>
            <ProfileInfo/>

            <MyPosts
                postData={props.profilePage.postData}
                newPostText={ props.profilePage.newPostText }
                dispatch={props.dispatch}
                />
        </div>
    )
}

export default Profile;


