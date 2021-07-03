import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Status from "../Status/Status";



const ProfileInfo = (props) => {

   if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.content}>
            <div>
                <img className={style.photo} src='https://i.ytimg.com/vi/ezRD-aiod70/maxresdefault.jpg' alt=""/>
            </div>
            <div className={style.myBlockLeft}>
                <img  className={style.ava} src='https://sun9-34.userapi.com/impg/kFazaPKdi8VVyZC-CO9s9ps_RFWW8xGYUaGLgg/3JJ7QVzwXE8.jpg?size=730x1080&quality=95&sign=648ca7a1ea8bfae5c77b38c2d5612cd0&type=album' alt='#'/>
                <div/> {props.profile.facebook}
                <div />{props.profile.contacts.vk}
                <div />{props.profile.contacts.twitter}
                <div />{props.profile.contacts.github}
                <div />{props.profile.lookingForAJobDescription}
                <div />{props.profile.fullName}
                </div>
            <Status  status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}


export default ProfileInfo;


