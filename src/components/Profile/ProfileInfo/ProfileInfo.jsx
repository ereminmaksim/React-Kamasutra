import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {

   if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.content}>
            <div>
                <img src='https://i.ytimg.com/vi/ezRD-aiod70/maxresdefault.jpg' alt=""/>
            </div>
            <div className={style.myBlockLeft}>
                <img src={props.profile.photos.large} alt='#'/>
                <div/> {props.profile.facebook}
                <div />{props.profile.contacts.vk}
                <div />{props.profile.contacts.twitter}
                <div />{props.profile.contacts.github}
                <div />{props.profile.lookingForAJobDescription}
                <div />{props.profile.fullName}
                </div>
        </div>
    )
}

export default ProfileInfo;


