// С ЧЕГО НАЧАЛИ КОГДА ЕЩЁ НЕ ВВЕЛИ ПЕРЕМЕННЫЕ

//
// const MyPosts = () => {
//     return (
//         <div className={style.myBlock}>
//             <h4 className={style.title}>My post</h4>
//             <div>
//                 <textarea placeholder="enter a message"></textarea>
//             </div>
//             <div>
//                 <button>Please Add</button>
//             </div>
//             <div className={style.posts}>New post</div>
//             <Posts message={postData[0].message} likesCount={postData[0].likesCount}/>
//             <Posts message={postData[1].message} likesCount={postData[1].likesCount}/>
//             <Posts message={postData[2].message} likesCount={postData[2].likesCount}/>
//             <Posts message={postData[3].message} likesCount={postData[3].likesCount}/>
//             <Posts message={postData[4].message} likesCount={postData[4].likesCount}/>
//             <Posts message={postData[5].message} likesCount={postData[5].likesCount}/>
//             <Posts message={postData[6].message} likesCount={postData[6].likesCount}/>
//             {/*<Posts message="Hi? how are you?" number="20"/>*/}
//             {/*<Posts message="Cool!!! my brother" number="20"/>*/}
//         </div>
//
//     )
// }
//
//
// export default MyPosts;

// <div className={style.posts}>New post</div>
// <Posts message={postData[0].message} likesCount={postData[0].likesCount}/>
// <Posts message={postData[1].message} likesCount={postData[1].likesCount}/>
// <Posts message={postData[2].message} likesCount={postData[2].likesCount}/>
// <Posts message={postData[3].message} likesCount={postData[3].likesCount}/>
// <Posts message={postData[4].message} likesCount={postData[4].likesCount}/>
// <Posts message={postData[5].message} likesCount={postData[5].likesCount}/>
// <Posts message={postData[6].message} likesCount={postData[6].likesCount}/>
// ****************************************************************************************//
{/*<Posts message="Hi? how are you?" number="20"/>*/}
{/*<Posts message="Cool!!! my brother" number="20"/>*/}


/***************************РАЗВЕРНУТЫЙ MYPOSTS C ДО REACT-REDUX (CONNECT)*******************************************/
// import React from 'react';
// import {
//     addPostActionCreator,
//     deletePostActionCreator,
//     updateNewPostTextActionCreator
// } from "../../../Redux/profileReducer";
// import MyPosts from "./MyPosts";
// import StoreContextApi from "../../../StoreContextApi/StoreContextApi";
//
//
// const MyPostsContainer = () => {
//     // let state = props.store.getState()
//
//     // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ addPost ПЕРЕКИНУТА ИЗ State
//     // let addPost = () => {
//     //     props.store.dispatch(addPostActionCreator())
//     // }
//     //
//     // // ДЛЯ СООБЩЕНИЙ, ФУНКЦИЯ dellPost ПЕРЕКИНУТА ИЗ State
//     // let deletePost = () => {
//     //     props.store.dispatch(deletePostActionCreator())
//     // }
//     //
//     // // ДЛЯ ПРЯМОГО ИЗМЕНЕНИЯ STATE (TEXTAREA)
//     // let onPostChange = (post) => {
//     //     let action = updateNewPostTextActionCreator(post);
//     //     props.store.dispatch(action)
//     // }
//
//     return (
//         <StoreContextApi.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//                     // ************************
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//                     // ************************
//                     let deletePost = () => {
//                         store.dispatch(deletePostActionCreator())
//                     }
//                     // ************************
//                     let onPostChange = (post) => {
//                         let action = updateNewPostTextActionCreator(post);
//                         store.dispatch(action)
//                     }
//                     return <MyPosts updateNewPostText={onPostChange}
//                                     addPost={addPost}
//                                     deletePost={deletePost}
//                                     postData={state.profilePage.postData}
//                                     newPostText={state.profilePage.newPostText}/>
//                 }
//             }
//         </StoreContextApi.Consumer>
//     )
// }
// export default MyPostsContainer;