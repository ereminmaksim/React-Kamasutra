import React from 'react';
import Posts from "./Post/Posts";
import style from './MyPosts.module.css';

const MyPosts = (props) => {


// MAP ДЛЯ СООБЩЕНИЙ
    let postElements = props.postData
        .map(post => <Posts key={post.id} message={post.message} likesCount={post.likesCount}/>)

            return (
        <div className={style.myBlock}>
            <h4 className={style.title}>My post</h4>
            <div>
                <textarea placeholder="enter a message"></textarea>
            </div>
            <div>
                <button>Please Add</button>
            </div>
            <div className={style.posts}>New post</div>
            {postElements}
        </div>

    )
}


export default MyPosts;


