import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div className={style.content}>
        <div>
            <img src='https://img2.fonwall.ru/o/ro/clouds-fog-forest-landscape.jpeg'/>
        </div>
        <div>ava + post</div>
        <MyPosts />
    </div>

}

export default Profile;


