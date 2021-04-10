let store = {
    _state:{

//// КОНВЕРСИЯ ПОСТОВ
        profilePage: {

            postData: [
                {id: 1, message: "Hi? how are you?", likesCount: 1},
                {id: 2, message: "Cool!!! my brother", likesCount: 11},
                {id: 3, message: "Two ships, two directions. Sounds like providence, doesn't it, Morpheus?"},
                {id: 4, message: "You've never believed in The One.", likesCount: 5},
                {id: 5, message: "I still don't.", likesCount: 17},
                {id: 6, message: "Then why are you doing this?", likesCount: 8},
                {id: 7, message: "I believe in him.", likesCount: 3},
            ],
            // ОБНОВЛЕНИЕ ТЕКСТА ПРЯМ ИЗ STATE/MY POST
            newPostText: "by Eremin:)",
        },
        // КОНВЕРСИЯ ДИАЛОГОВ
        // КОНВЕРСИЯ ИМЁН
        dialogsPage: {

            messagesDate: [
                {id: 1, message: 'How are you'},
                {id: 2, message: 'i, everything is fine'},
                {id: 3, message: 'Yes, and so do I'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'I, don`t know'},
                {id: 6, message: 'listen to me, people'}
            ],

            dialogItem: [
                {
                    id: 1,
                    name: 'Санька',
                    ava: 'https://yt3.ggpht.com/a/AATXAJy6iHAtrBdpKQARqzV1EvEJFHxAPxGug4doIycYBQ=s900-c-k-c0xffffffff-no-rj-mo'
                },
                {id: 2, name: 'Кирилл', ava: 'https://i.pinimg.com/736x/62/e9/09/62e9099ff34f34570385f348c5f852cb.jpg'},
                {id: 3, name: 'Сенька', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'},
                {
                    id: 4,
                    name: 'Иван',
                    ava: 'https://million-wallpapers.ru/wallpapers/2/30/432077332660143/danbo-chelovek.jpg'
                },
                {id: 5, name: 'Борис-Бритва', ava: 'https://a.d-cd.net/bfa53bes-960.jpg'},
                {id: 6, name: 'Социапат-охотник', ava: 'https://vraki.net/sites/default/files/inline/images/29_21.jpg'},
            ],

        },
        //// КОНВЕРСИЯ ДРУЗЕЙ
        avaFriends: {

            sidebar: [
                {
                    id: 1,
                    name: 'Ёбаный Владлен',
                    ava: 'https://yt3.ggpht.com/a/AATXAJy6iHAtrBdpKQARqzV1EvEJFHxAPxGug4doIycYBQ=s900-c-k-c0xffffffff-no-rj-mo'
                },
                {id: 2, name: 'Санька', ava: 'https://i.pinimg.com/736x/62/e9/09/62e9099ff34f34570385f348c5f852cb.jpg'},
                {id: 3, name: 'Димыч', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'},
                {
                    id: 4,
                    name: 'Кубик',
                    ava: 'https://million-wallpapers.ru/wallpapers/2/30/432077332660143/danbo-chelovek.jpg'
                },
                {id: 5, name: 'Борис-Бритва', ava: 'https://a.d-cd.net/bfa53bes-960.jpg'},
                {id: 6, name: 'Социапат-охотник', ava: 'https://vraki.net/sites/default/files/inline/images/29_21.jpg'}
            ],
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log(" STATE ")
    },

    //ДЛЯ ПОСТОВ--

    /**
     *
     * ДОБАВИТЬ ПОСТ
     */
    addPost() {
        let newPost = {
            id: 8,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.postData.push(newPost);
        this._callSubscriber(this._state);

    },
    /**
     * УДАЛИТЬ ПОСТ
     */
    delPost(delMessage) {
        let delPost = {
            id: 0,
            message: delMessage,
            likeCount: 0
        }
        this._state.profilePage.postData.pop(delPost);
        this._callSubscriber(this._state);
    },
    /**
     * ВЗАИМОДЕЙСТВИЕ С BLL
     */
    updatePost(newPost) {

        this._state.profilePage.newPostText = newPost;
        this._callSubscriber(this._state);

    },
    /**
     *
     *ВАЖНЫЙ ПАТЕРН observer В ДАННОМ СЛУЧАЕ ЭТО СЛУШАТЕЛЬ/НАБЛЮДАТЕЛЬ СУТЬ КАК
     *ONCLICK РОИСХОДИТ CALLBACK ФУНКЦИИ rerenderEntireTree (смотреть App.js)
     */
    subscribe(observer){
        this._callSubscriber = observer;
    },

}
export default store;
window.store = store