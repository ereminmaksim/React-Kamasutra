//
// let rerenderEntireTree = () => {
//     console.log(" STATE ")
// }
//
//
// let state = {
//
// //// КОНВЕРСИЯ ПОСТОВ
//     profilePage: {
//
//         postData: [
//             {id: 1, message: "Hi? how are you?", likesCount: 1},
//             {id: 2, message: "Cool!!! my brother", likesCount: 11},
//             {id: 3, message: "Two ships, two directions. Sounds like providence, doesn't it, Morpheus?"},
//             {id: 4, message: "You've never believed in The One.", likesCount: 5},
//             {id: 5, message: "I still don't.", likesCount: 17},
//             {id: 6, message: "Then why are you doing this?", likesCount: 8},
//             {id: 7, message: "I believe in him.", likesCount: 3},
//         ],
//         // ОБНОВЛЕНИЕ ТЕКСТА ПРЯМ ИЗ STATE/MY POST
//         newPostText: "by Eremin:)",
//     },
//     // КОНВЕРСИЯ ДИАЛОГОВ
//     // КОНВЕРСИЯ ИМЁН
//     dialogsPage: {
//
//         messagesDate: [
//             {id: 1, message: 'How are you'},
//             {id: 2, message: 'i, everything is fine'},
//             {id: 3, message: 'Yes, and so do I'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'I, don`t know'},
//             {id: 6, message: 'listen to me, people'}
//         ],
//
//         dialogItem: [
//             {
//                 id: 1,
//                 name: 'Санька',
//                 ava: 'https://yt3.ggpht.com/a/AATXAJy6iHAtrBdpKQARqzV1EvEJFHxAPxGug4doIycYBQ=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {id: 2, name: 'Кирилл', ava: 'https://i.pinimg.com/736x/62/e9/09/62e9099ff34f34570385f348c5f852cb.jpg'},
//             {id: 3, name: 'Сенька', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'},
//             {
//                 id: 4,
//                 name: 'Иван',
//                 ava: 'https://million-wallpapers.ru/wallpapers/2/30/432077332660143/danbo-chelovek.jpg'
//             },
//             {id: 5, name: 'Борис-Бритва', ava: 'https://a.d-cd.net/bfa53bes-960.jpg'},
//             {id: 6, name: 'Социапат-охотник', ava: 'https://vraki.net/sites/default/files/inline/images/29_21.jpg'},
//         ],
//
//     },
//     //// КОНВЕРСИЯ ДРУЗЕЙ
//     avaFriends: {
//
//         sidebar: [
//             {
//                 id: 1,
//                 name: 'Ёбаный Владлен',
//                 ava: 'https://yt3.ggpht.com/a/AATXAJy6iHAtrBdpKQARqzV1EvEJFHxAPxGug4doIycYBQ=s900-c-k-c0xffffffff-no-rj-mo'
//             },
//             {id: 2, name: 'Санька', ava: 'https://i.pinimg.com/736x/62/e9/09/62e9099ff34f34570385f348c5f852cb.jpg'},
//             {id: 3, name: 'Димыч', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'},
//             {
//                 id: 4,
//                 name: 'Кубик',
//                 ava: 'https://million-wallpapers.ru/wallpapers/2/30/432077332660143/danbo-chelovek.jpg'
//             },
//             {id: 5, name: 'Борис-Бритва', ava: 'https://a.d-cd.net/bfa53bes-960.jpg'},
//             {id: 6, name: 'Социапат-охотник', ava: 'https://vraki.net/sites/default/files/inline/images/29_21.jpg'}
//         ],
//     }
// }
//
// //ДЛЯ ПОСТОВ
// /**
//  *
//  * ДОБАВИТЬ ПОСТ
//  */
// export const addPost = (postMessage) => {
//     let newPost = {
//         id: 8,
//         message: state.profilePage.newPostText,
//         likeCount: 0
//     }
//     state.profilePage.postData.push(newPost);
//     rerenderEntireTree(state);
//
// }
//
// /**
//  * УДАЛИТЬ ПОСТ
//  */
// export const delPost = (delMessage) => {
//     let delPost = {
//         id: 0,
//         message: delMessage,
//         likeCount: 0
//     }
//     state.profilePage.postData.pop(delPost);
//     rerenderEntireTree(state);
// }
//
// /**
//  * ОБНОВЛЕНИЕ ЧЕРЕЗ BLL
//  */
// export const updatePost = (newPost) => {
//
//     state.profilePage.newPostText = newPost;
//     rerenderEntireTree(state);
//
// }
//
// /**
//  *
//  *ВАЖНЫЙ ПАТЕРН observer В ДАННОМ СЛУЧАЕ ЭТО СЛУШАТЕЛЬ/НАБЛЮДАТЕЛЬ СУТЬ КАК
//  *ONCLICK РОИСХОДИТ CALLBACK ФУНКЦИИ rerenderEntireTree (смотреть App.js)
//  */
// export let subscribe = (observer) => {
//     rerenderEntireTree = observer
// }
//
// export default state;
// ---------------------------------------------------------------------------------

                        // DISPATCH ЗДОРОВОГО ЧЕЛОВЕКА!!!
                        //             STORE           //
// let store = {
//     _state: {
//
// //// КОНВЕРСИЯ ПОСТОВ
//         profilePage: {
//
//             postData: [
//                 {id: 1, message: "Hi? how are you?", likesCount: 1},
//                 {id: 2, message: "Cool!!! my brother", likesCount: 11},
//                 {id: 3, message: "Two ships, two directions. Sounds like providence, doesn't it, Morpheus?"},
//                 {id: 4, message: "You've never believed in The One.", likesCount: 5},
//                 {id: 5, message: "I still don't.", likesCount: 17},
//                 {id: 6, message: "Then why are you doing this?", likesCount: 8},
//                 {id: 7, message: "I believe in him.", likesCount: 3},
//             ],
//             // ОБНОВЛЕНИЕ ТЕКСТА ПРЯМ ИЗ STATE/MY POST
//             newPostText: "by Eremin:)",
//         },
//         // КОНВЕРСИЯ ДИАЛОГОВ
//         // КОНВЕРСИЯ ИМЁН
//         dialogsPage: {
//
//             messagesDate: [
//                 {id: 1, message: 'How are you'},
//                 {id: 2, message: 'i, everything is fine'},
//                 {id: 3, message: 'Yes, and so do I'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'I, don`t know'},
//                 {id: 6, message: 'listen to me, people'}
//             ],
//
//             dialogItem: [
//                 {
//                     id: 1,
//                     name: 'Санька',
//                     ava: 'https://yt3.ggpht.com/a/AATXAJy6iHAtrBdpKQARqzV1EvEJFHxAPxGug4doIycYBQ=s900-c-k-c0xffffffff-no-rj-mo'
//                 },
//                 {id: 2, name: 'Кирилл', ava: 'https://i.pinimg.com/736x/62/e9/09/62e9099ff34f34570385f348c5f852cb.jpg'},
//                 {id: 3, name: 'Сенька', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'},
//                 {
//                     id: 4,
//                     name: 'Иван',
//                     ava: 'https://million-wallpapers.ru/wallpapers/2/30/432077332660143/danbo-chelovek.jpg'
//                 },
//                 {id: 5, name: 'Борис-Бритва', ava: 'https://a.d-cd.net/bfa53bes-960.jpg'},
//                 {id: 6, name: 'Социапат-охотник', ava: 'https://vraki.net/sites/default/files/inline/images/29_21.jpg'},
//             ],
//
//         },
//         //// КОНВЕРСИЯ ДРУЗЕЙ
//         avaFriends: {
//
//             sidebar: [
//                 {
//                     id: 1,
//                     name: 'Ёбаный Владлен',
//                     ava: 'https://yt3.ggpht.com/a/AATXAJy6iHAtrBdpKQARqzV1EvEJFHxAPxGug4doIycYBQ=s900-c-k-c0xffffffff-no-rj-mo'
//                 },
//                 {id: 2, name: 'Санька', ava: 'https://i.pinimg.com/736x/62/e9/09/62e9099ff34f34570385f348c5f852cb.jpg'},
//                 {id: 3, name: 'Димыч', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'},
//                 {
//                     id: 4,
//                     name: 'Кубик',
//                     ava: 'https://million-wallpapers.ru/wallpapers/2/30/432077332660143/danbo-chelovek.jpg'
//                 },
//                 {id: 5, name: 'Борис-Бритва', ava: 'https://a.d-cd.net/bfa53bes-960.jpg'},
//                 {id: 6, name: 'Социапат-охотник', ava: 'https://vraki.net/sites/default/files/inline/images/29_21.jpg'}
//             ],
//         },
//     },
//     _callSubscriber() {
//         console.log(" STATE ")
//     },
//
//     /**
//      *ВАЖНО, МЕТОД СОЗДАН ДЛЯ ТОГО ЧТО-БЫ В ДАЛЬНЕЙШЕМ ОТДАТЬ =>
//      *THIS- ЭТО САМ КОНТЕКСТ НА ГЛОБАЛЬНУЮ ПЕРЕМЕННУЮ STORE!!!
//      */
//     getState() {
//         return this._state;
//     },
//
//
//     //ДЛЯ ПОСТОВ
//
//     /**
//      * ДОБАВИТЬ ПОСТ
//      */
//     _addPost() {
//         let newPost = {
//             id: 8,
//             message: this._state.profilePage.newPostText,
//             likeCount: 0
//         }
//         this._state.profilePage.postData.push(newPost);
//         this._state.profilePage.newPostText = '';
//         this._callSubscriber(this._state);
//
//         // if (this._state.profilePage.newPostText) {
//         //     this._state.profilePage.postData.push({
//         //         message: this._state.profilePage.newPostText,
//         //         id: 0,
//         //         likeCounts: 0,
//         //     });
//         //     this._state.profilePage.newPostText = "";
//         //     this._callSubscriber(this._state);
//
//
//     },
//     /**
//      * УДАЛИТЬ ПОСТ
//      */
//     _delPost(delMessage) {
//         let delPost = {
//             id: 0,
//             message: delMessage,
//             likeCount: 0
//         }
//         this._state.profilePage.postData.pop(delPost);
//         this._callSubscriber(this._state);
//     },
//     /**
//      * ВЗАИМОДЕЙСТВИЕ С BLL
//      */
//     _updatePost(newPost) {
//
//         this._state.profilePage.newPostText = newPost;
//         this._callSubscriber(this._state);
//
//     },
//     /**
//      *
//      *ВАЖНЫЙ ПАТЕРН observer В ДАННОМ СЛУЧАЕ ЭТО СЛУШАТЕЛЬ/НАБЛЮДАТЕЛЬ СУТЬ КАК
//      *ONCLICK РОИСХОДИТ CALLBACK ФУНКЦИИ rerenderEntireTree (смотреть App.js)
//      */
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     /**
//      *  МЕТОД СОЗДАН ДЛЯ ТОГО ЧТО-БЫ ОБЕГЧИТЬ РАБОТУ САМОМУ  STORE, РАЗГРУЗИТЬ
//      *  (МЕНЯТЬ ЧТО-ТО ВО ВНЕШНЕМ МИРЕ)
//      */
//     // action-всегда объект + сегда пишем type=""(текст для обращения к...)
//     dispatch(action) {
//         if (action.type === 'ADD-POST') {
//             // let newPost = {
//             //     id: 8,
//             //     message: this._state.profilePage.newPostText,
//             //     likeCount: 0
//             // }
//             // this._state.profilePage.postData.push(newPost);
//             // this._callSubscriber(this._state);
//             this._addPost()
//
//         } else if (action.type === 'UPDATE-NE-POST-TEXT') {
//             // this._state.profilePage.newPostText = action.newPost;
//             // this._callSubscriber(this._state);
//             this._updatePost(action.newPost)
//         }else if (action.type === 'DELETE-POST-TEXT') {
//             // let delPost = {
//             //     id: 0,
//             //     message: this._state.profilePage.delMessage,
//             //     likeCount: 0
//             // }
//             // this._state.profilePage.postData.pop(delPost);
//             // this._callSubscriber(this._state);
//             this._delPost()
//         }
//     }
// }
// export default store;
// window.store = store
//


//*****************************С Т А Р Ы Й  D I S P A T C H***************************************************//
// dispatch(action) {
//     if (action.type === 'ADD-POST') {
//         let newPost = {
//             id: 0,
//             message: this._state.profilePage.newPostText,
//             likeCount: 0
//         }
//         this._state.profilePage.postData.push(newPost);
//         this._state.profilePage.newPostText = '';
//         this._callSubscriber(this._state);
//         // СДЕЛАТЬ ПРИВАТНЫЙ МЕТОД addPost()
//         // this._addPost() DISPATCH ЗДОРОВОГО ЧЕЛОВЕКА!!!
//
//     } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//         this._state.profilePage.newPostText = action.newPost;
//         this._callSubscriber(this._state);
//         // СДЕЛАТЬ ПРИВАТНЫЙ МЕТОД updatePost()
//         // this._updatePost(action.newPost) DISPATCH ЗДОРОВОГО ЧЕЛОВЕКА!!!
//     } else if (action.type === 'DELETE-POST-TEXT') {
//         let delPost = {
//             id: 0,
//             message: this._state.profilePage.delMessage,
//             likeCount: 0
//         }
//         this._state.profilePage.postData.pop(delPost);
//         this._callSubscriber(this._state);
//         // СДЕЛАТЬ ПРИВАТНЫЙ МЕТОД delPost()
//         // this._delPost() DISPATCH ЗДОРОВОГО ЧЕЛОВЕКА!!!
//     } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
//         this._state.dialogsPage.newMessageBody = action.body
//         this._callSubscriber(this._state);
//     } else if (action.type === 'SEND-MESSAGE') {
//         let body = this._state.dialogsPage.newMessageBody
//         this._state.dialogsPage.newMessageBody = ''
//         this._state.dialogsPage.messagesDate.push({id: 7, message: body})
//         this._callSubscriber(this._state);
//     }
// },
// }
//*****************************ACTION TYPE / ACTION CREATOR***************************************************//
// /**
//  * ACTION TYPE
//  */
// //СТЕНА
// const ADD_POST = "ADD-POST";
// const DELETE_POST_TEXT = "DELETE-POST-TEXT";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// //ДИАЛОГИ
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
// const SEND_MESSAGE = "SEND-MESSAGE";
// actionCreator
/**
 *(ДЛЯ РАЗГРУЗКИ DISPATCH), разгружет и берет на себя ответственность!!!(MY POST)
 */
//Смена синтаксиса ES6
// export const addPostActionCreator = () => {
//     return {type: ADD_POST}
// }
// export const addPostActionCreator = () => ({type: ADD_POST})
//
// //Смена синтаксиса ES6
// // export const deletePostActionCreator = () => {
// //     return {type: DELETE_POST_TEXT}
// // }
// export const deletePostActionCreator = () => ({type: DELETE_POST_TEXT})
//
// //Смена синтаксиса ES6
// // export const updateNewPostTextActionCreator = (post) => {
// //     return {type: UPDATE_NEW_POST_TEXT, newPost: post};
// //
// // }
// export const updateNewPostTextActionCreator = (post) => ({type: UPDATE_NEW_POST_TEXT, newPost: post});
// //Смена синтаксиса ES6
// // export const updateNewPostTextActionCreator = (post) => {
// //     return {type: UPDATE-NEW-MESSAGE-BODY, newPost: post};
// //
// // }
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
// //Смена синтаксиса ES6
// // export const updateNewPostTextActionCreator = (post) => {
// //     return {type: SEND-MESSAGE};
// //
// // }
// export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})