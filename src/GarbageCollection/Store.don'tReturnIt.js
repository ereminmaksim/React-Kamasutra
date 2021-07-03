// // REDUCER
// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import avaFriendsReducer from "./sidebarReducer";
//
//
// // ************************************************************************************ //
//
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
//
//             //РАБОТА С MESSAGE!!!
//             newMessageBody: ''
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
//
// // ************************************************************************************ //
//
//     /**
//      *
//      *ВАЖНЫЙ ПАТЕРН observer В ДАННОМ СЛУЧАЕ ЭТО СЛУШАТЕЛЬ/НАБЛЮДАТЕЛЬ СУТЬ КАК
//      *ONCLICK ПРОИСХОДИТ CALLBACK ФУНКЦИИ rerenderEntireTree (смотреть App.js)
//      */
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     /**
//      *  МЕТОД СОЗДАН ДЛЯ ТОГО ЧТО-БЫ ОБЕГЧИТЬ РАБОТУ САМОМУ  STORE, РАЗГРУЗИТЬ
//      *  (МЕНЯТЬ ЧТО-ТО ВО ВНЕШНЕМ МИРЕ)
//      */
//     // action-всегда объект + всегда пишем type=""(текст для обращения к...)
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.avaFriends = avaFriendsReducer(this._state.avaFriends, action);
//
//         this._callSubscriber(this._state);
//     }
// }
// // ************************************************************************************ //
//
// // actionCreator
// /**
//  *(ДЛЯ РАЗГРУЗКИ DISPATCH), разгружет и берет на себя ответственность!!!(MY POST)
//  */
// //Смена синтаксиса ES6
// // export const addPostActionCreator = () => {
// //     return {type: ADD_POST}
// // }
//
// export default store;
// window.store = store