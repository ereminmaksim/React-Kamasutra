// import React from 'react';
// import style from './Users.module.css';
// import Button from "@material-ui/core/Button";
// import axios from "axios";
// import userAva from './../../assets/img/hard_ava_random.png'
//
// const Users = (props) => {
//
//     if (props.usersData.length === 0) {
//         debugger
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then
//         (response => {
//             props.setUsersAC(response.data.items)
//         })
//     }
//
//     //     props.setUsersAC([
//     //         {
//     //             id: 1,
//     //             photoURL: 'https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-10.jpg',
//     //             followed: true,
//     //             fullName: "Valentine",
//     //             status: 'Миллионы людей не заменят тебя.',
//     //             location: {city: 'Оснабрюк', country: 'Германия'}
//     //         },
//     //         {
//     //             id: 2,
//     //             photoURL: 'https://vraki.net/sites/default/files/inline/images/3_370.jpg',
//     //             followed: true,
//     //             fullName: "Marselle",
//     //             status: 'Мы так боимся.',
//     //             location: {city: 'Мангалуру', country: 'Индия'}
//     //         },
//     //         {
//     //             id: 3,
//     //             photoURL: 'https://cdnb.artstation.com/p/assets/images/images/008/802/747/large/anton-chernoskutov-5.jpg?1515414305',
//     //             followed: true,
//     //             fullName: "Ivan",
//     //             status: 'Терпеливое сердце.',
//     //             location: {city: 'Фэйрфилд', country: 'Соединенные Штаты Америки'}
//     //         },
//     //         {
//     //             id: 4,
//     //             photoURL: 'https://medialeaks.ru/wp-content/uploads/2015/02/art-krasivyie-kartinki-Putin-politika-1331294.jpeg',
//     //             followed: true,
//     //             fullName: "Anton",
//     //             status: 'Уже сегодня мы живем так.',
//     //             location: {city: 'Вилья Нуэва', country: 'Гватемала'}
//     //         },
//     //         {
//     //             id: 5,
//     //             photoURL: 'https://s2.desu-usergeneratedcontent.xyz/g/image/1504/46/1504460092425.jpg',
//     //             followed: true,
//     //             fullName: "Alexandr",
//     //             status: 'Это и есть любовь.',
//     //             location: {city: 'Корьолей', country: 'Сомали'}
//     //         },
//     //         {
//     //             id: 6,
//     //             photoURL: 'https://vraki.net/sites/default/files/mood/u.jpg',
//     //             followed: true,
//     //             fullName: "Maxim",
//     //             status: 'Счастье … Оно длится секунду.',
//     //             location: {city: 'Гейтерсберг', country: 'Соединенные Штаты Америки'}
//     //         },
//     //         {
//     //             id: 7,
//     //             photoURL: 'https://klike.net/uploads/posts/2019-03/1551511829_46.jpg',
//     //             followed: false,
//     //             fullName: "Lexx",
//     //             status: 'И крича о свободе, все мечтают нужными быть.',
//     //             location: {city: 'Хамгаон', country: 'Индия'}
//     //         },
//     //     ],)
//     // }
//
//
//     return (
//         <div className={style.wrapper}>
//             {
//                 props.usersData.map(user => <div key={user.id}>
//                     <span className={style.expansion}>
//                         <div className={style.dialogs_items}>
//                             <img src={user.photos.small != null ?user.photos.small : userAva} alt=""/>
//                         </div>
//                         <div>
//                             {user.followed
//                                 ? <Button variant="contained" color="secondary" onClick={() => {
//                                     props.undFollow(user.id)
//                                 }}> UNFOLLOW </Button>
//                                 :
//                                 <Button variant="contained" color="primary" onClick={() => {
//                                     props.follows(user.id)
//                                 }}> FOLLOW </Button>
//                             }
//                         </div>
//                     </span>
//                     <span>
//                         <span className={style.dialog}>
//                             <div>{user.name} </div>
//                             <div> {user.status}</div>
//                         </span>
//                         <span>
//                             <div> {'user.location.country'}</div>
//                             <div> {'user.location.city'}</div>
//                         </span>
//                     </span>
//                 </div>)
//             }
//         </div>
//     );
// }
//
//
// export default Users;