import React from 'react';
import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            <div>My post</div>
            <div>
            <div className={style.posts}>New post</div>
                <div className={style.item}>Post 1</div>

                <div>Post 2</div>
            </div>
        </div>
    )
}

export default MyPosts;


