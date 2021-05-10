import React from 'react';
import style from './Posts.module.css';

const Posts = (props) => {



    console.log(props.message);
    return (
        <div className={style.item}>
            <div>
                <img src='https://yt3.ggpht.com/a/AATXAJy6iHAtrBdpKQARqzV1EvEJFHxAPxGug4doIycYBQ=s900-c-k-c0xffffffff-no-rj-mo' alt="img"/>
                {props.message}
            </div>
            <div>
                <span>Likes</span>
                {props.number}

            </div>
        </div>
    )
}


export default Posts;


