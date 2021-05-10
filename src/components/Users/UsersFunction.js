import React from 'react';
import style from "./Users.module.css";
import Button from "@material-ui/core/Button";
import userAva from './../../assets/img/hard_ava_random.png'



const UsersFunction = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    /****************************************************************/

    return (
        <div className={style.wrapper}>
            {
                props.usersData.map((user, index) => <div key={index}>
                     <span className={style.expansion}>

                        <div className={style.dialogs_items}>

                            <img src={user.photos.small != null ? user.photos.small : userAva} alt=""/>

                         </div>

                         <div>
                             {user.followed
                                 ? <Button variant="contained" color="secondary" onClick={() => {
                                     props.undFollow(user.id)
                                 }}> UNFOLLOW </Button>
                                 :
                                 <Button variant="contained" color="primary" onClick={() => {
                                     props.follows(user.id)
                                 }}> FOLLOW </Button>
                             }

                         </div>

                     </span>

                    <span>
                         <span className={style.dialog}>
                             <div>{user.name} </div>
                             <div> {user.status}</div>
                         </span>
                         <span>
                             <div> {'user.location.country'}</div>
                             <div> {'user.location.city'}</div>
                             <hr/>
                         </span>
                     </span>
                </div>)
            }
            <div>
                <ul className={style.pagination}>
                    {
                        pages.map((page, index) => {
                            return <li
                                key={index}
                                className={props.currentPage === page
                                    ? style.selectedPage : ''}
                                onClick={() => {
                                    props.onPageChanged(page)
                                }}>
                                <a href="#"> {page}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>

    );
};

export default UsersFunction;
