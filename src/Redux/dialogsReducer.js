const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


const dialogsReducer = (state, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesDate.push({id: 7, message: body})
            break;
    }
    return state
};


export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
//Смена синтаксиса ES6
// export const updateNewPostTextActionCreator = (post) => {
//     return {type: SEND-MESSAGE};
//
// }
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer