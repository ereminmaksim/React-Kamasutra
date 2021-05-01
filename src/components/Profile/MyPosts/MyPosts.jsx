import React from 'react';
import Posts from "./Post/Posts";
import style from './MyPosts.module.css';
import {addPostActionCreator, deletePostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
//Material UI
import Button from '@material-ui/core/Button';



const MyPosts = (props) => {

    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ addPost ПЕРЕКИНУТА ИЗ State
    let newPost = React.createRef();
    // *********************************

    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ addPost ПЕРЕКИНУТА ИЗ State
    let addPost = () =>{
        props.dispatch(addPostActionCreator())
    }

    // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ dellPost ПЕРЕКИНУТА ИЗ State
    // *********************************
    let deletePost = () =>{
        // let post = newPost.current.value;
        // props.delPost(post)
        // alert(post)
        props.dispatch(deletePostActionCreator())
    }

    // ДЛЯ ПРЯМОГО ИЗМЕНЕНИЯ STATE (TEXTAREA)
    let onPostChange = () => {
        let post = newPost.current.value;
        let action = updateNewPostTextActionCreator(post);
        props.dispatch(action)
    }




// MAP ДЛЯ СООБЩЕНИЙ
    let postElements = props.postData
        .map(post => <Posts key={post.id} message={post.message} likesCount={post.likesCount}/>)

            return (
        <div className={style.myBlock}>
            <h4 className={style.title}>My post</h4>
            <div>
                <textarea onChange={onPostChange} cols="33"
                          ref={newPost}
                          value={props.newPostText}/>
            </div>
                 <div className={style.muiButton}>
                <Button variant="contained" color="primary" onClick={ addPost }>Please Add</Button>
                 </div>
            <Button variant="contained" color="secondary" onClick={ deletePost }>Delete Add</Button>

            <div className={style.posts}>New post</div>
            {postElements}
        </div>

    )
}


export default MyPosts;


