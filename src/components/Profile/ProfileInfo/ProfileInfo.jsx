import React from 'react';
import style from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://i.ytimg.com/vi/ezRD-aiod70/maxresdefault.jpg' alt=""/>
            </div>
            <div className={style.myBlockLeft}>ava + post</div>
        </div>
    )
}

export default ProfileInfo;


