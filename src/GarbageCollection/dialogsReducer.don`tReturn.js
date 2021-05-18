// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
// const SEND_MESSAGE = "SEND-MESSAGE";
//
//
// let initialState = {
//
//     messagesDate: [
//         {id: 1, message: 'How are you'},
//         {id: 2, message: 'i, everything is fine'},
//         {id: 3, message: 'Yes, and so do I'},
//         {id: 4, message: 'Yo'},
//         {id: 5, message: 'I, don`t know'},
//         {id: 6, message: 'listen to me, people'}
//     ],
//
//     dialogItem: [
//         {
//             id: 1,
//             name: 'Санька',
//             ava: 'https://yt3.ggpht.com/a/AATXAJy6iHAtrBdpKQARqzV1EvEJFHxAPxGug4doIycYBQ=s900-c-k-c0xffffffff-no-rj-mo'
//         },
//         {id: 2, name: 'Кирилл', ava: 'https://i.pinimg.com/736x/62/e9/09/62e9099ff34f34570385f348c5f852cb.jpg'},
//         {id: 3, name: 'Сенька', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'},
//         {
//             id: 4,
//             name: 'Иван',
//             ava: 'https://million-wallpapers.ru/wallpapers/2/30/432077332660143/danbo-chelovek.jpg'
//         },
//         {id: 5, name: 'Борис-Бритва', ava: 'https://a.d-cd.net/bfa53bes-960.jpg'},
//         {id: 6, name: 'Социапат-охотник', ava: 'https://vraki.net/sites/default/files/inline/images/29_21.jpg'},
//     ],
//
//     //РАБОТА С MESSAGE!!!
//     newMessageBody: ''
// }
//
// const dialogsReducer = (state = initialState, action) => {
//
//
//
//     // eslint-disable-next-line default-case
//     switch (action.type) {
//         case UPDATE_NEW_MESSAGE_BODY:{
//             let stateCopy = {...state}
//             stateCopy.newMessageBody = action.body
//             return stateCopy;
//         }
//         case SEND_MESSAGE: {
//             let stateCopy = {...state}
//             let body = state.newMessageBody
//             stateCopy.newMessageBody = ''
//             stateCopy.messagesDate = [...state.messagesDate]
//             stateCopy.messagesDate.push({id: 7, message: body})
//             return stateCopy;
//         }
//         default:
//             return state
//     }
// };
//
//
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
// //Смена синтаксиса ES6
// // export const updateNewPostTextActionCreator = (post) => {
// //     return {type: SEND-MESSAGE};
// //
// // }
// export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
//
// export default dialogsReducer