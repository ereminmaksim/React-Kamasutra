import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

//Взята из библиотеки (react-router-dom)компонента для перехода в нашем случае LOGIN
import {Redirect} from "react-router";


const Profile = (props) => {


    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            < MyPostsContainer/>
        < /div>
    )
}

export default Profile;


