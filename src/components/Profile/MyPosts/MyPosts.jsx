import React from 'react';
import Posts from "./Post/Posts";
import style from './MyPosts.module.css';

const MyPosts = (props) => {


    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ addPost ПЕРЕКИНУТА ИЗ State
    let newPost = React.createRef();
    // *********************************
    let addPost = () =>{
       let post = newPost.current.value;
        props.addPost(post)
        props.updatePost('')
        // alert(post)
    }

    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ dellPost ПЕРЕКИНУТА ИЗ State
    // *********************************
    let deletePost = () =>{
        let post = newPost.current.value;
        props.delPost(post)
        // alert(post)
    }

    // ДЛЯ ПРЯМОГО ИЗМЕНЕНИЯ STATE (TEXTAREA)
    let onPostChange = () => {
        let post = newPost.current.value;
        props.updatePost(post)
    }


// MAP ДЛЯ СООБЩЕНИЙ
    let postElements = props.postData
        .map(post => <Posts key={post.id} message={post.message} likesCount={post.likesCount}/>)

            return (
        <div className={style.myBlock}>
            <h4 className={style.title}>My post</h4>
            <div>
                <textarea onChange={onPostChange} cols="32"
                          ref={newPost}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Please Add</button>
                <button onClick={ deletePost }>Delete Add</button>
            </div>
            <div className={style.posts}>New post</div>
            {postElements}
        </div>

    )
}


export default MyPosts;


