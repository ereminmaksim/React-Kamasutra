import React from 'react';
import Posts from "./Post/Posts";
import style from './MyPosts.module.css';
//Material UI
import Button from '@material-ui/core/Button';


const MyPosts = (props) => {

// MAP ДЛЯ СООБЩЕНИЙ
    let postElements = props.postData
        .map((post, index) => <Posts key={index} message={post.message} likesCount={post.likesCount}/>)


    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ addPost ПЕРЕКИНУТА ИЗ State
    let newPost = React.createRef()
    // *********************************

    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ addPost ПЕРЕКИНУТА ИЗ State
    let onAddPost = () =>{
        props.addPost()
        // props.dispatch(addPostActionCreator())
    }

    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ dellPost ПЕРЕКИНУТА ИЗ State
    // *********************************
    let onDeletePost = () =>{
        props.deletePost()
        // props.dispatch(deletePostActionCreator())
    }

    // ДЛЯ ПРЯМОГО ИЗМЕНЕНИЯ STATE (TEXTAREA)
    let onPostChange = () => {
        let post = newPost.current.value;
        props.updateNewPostText(post)
    }

            return (
        <div className={style.myBlock}>
            <h4 className={style.title}>My post</h4>
            <div>
                <textarea onChange={ onPostChange } cols="33"
                          ref={newPost}
                          value={props.newPostText}/>
            </div>
                 <div className={style.muiButton}>
                <Button variant="contained" color="primary" onClick={ onAddPost }>Please Add</Button>
                 </div>
            <Button variant="contained" color="secondary" onClick={ onDeletePost }>Delete Add</Button>

            <div className={style.posts}>New post</div>
            {postElements}
        </div>

    )
}
export default MyPosts;


