const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const DELETE_POST_TEXT = "DELETE-POST-TEXT";


let initialState = {
    postData: [
        {id: 1, message: "Hi? how are you?", likesCount: 1},
        {id: 2, message: "Cool!!! my brother", likesCount: 11},
        {id: 3, message: "Two ships, two directions. Sounds like providence, doesn't it, Morpheus?"},
        {id: 4, message: "You've never believed in The One.", likesCount: 5},
        {id: 5, message: "I still don't.", likesCount: 17},
        {id: 6, message: "Then why are you doing this?", likesCount: 8},
        {id: 7, message: "I believe in him.", likesCount: 3},
    ],
    newPostText: "by Eremin:)",
}


const profileReducer = (state = initialState, action) => {


    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 0,
                message: state.newPostText,
                likeCount: 0
            }
            state.postData.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPost;
            break;
        case DELETE_POST_TEXT:
            state.delMessage = undefined; //заглушка
            let delPost = {
                id: 0,
                message: state.delMessage,
                likeCount: 0
            }
            state.postData.pop(delPost );
            break;
    }

    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})

//Смена синтаксиса ES6
// export const deletePostActionCreator = () => {
//     return {type: DELETE_POST_TEXT}
// }
export const deletePostActionCreator = () => ({type: DELETE_POST_TEXT})

//Смена синтаксиса ES6
// export const updateNewPostTextActionCreator = (post) => {
//     return {type: UPDATE_NEW_POST_TEXT, newPost: post};
//
// }
export const updateNewPostTextActionCreator = (post) => ({type: UPDATE_NEW_POST_TEXT, newPost: post});
//Смена синтаксиса ES6
// export const updateNewPostTextActionCreator = (post) => {
//     return {type: UPDATE-NEW-MESSAGE-BODY, newPost: post};
//
// }


export default profileReducer;