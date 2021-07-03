import React from 'react';
import style from "./Users.module.css";
import Button from "@material-ui/core/Button";
import userAva from './../../assets/img/hard_ava_random.png'
import {NavLink} from "react-router-dom";
// import {usersAPI} from "../../API/api";


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
                            <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small != null ? user.photos.small : userAva} alt=""/>
                            </NavLink>
                         </div>

                         <div>
                             {user.followed
                                 ? <Button disabled={props.followingInProgress.some(id => id === user.id)}
                                           variant="contained" color="secondary"
                                           onClick={() => {
                                               //САНКА
                                               props.unFollow(user.id)
                                           }}> UNFOLLOW </Button>
                                 :
                                 <Button disabled={props.followingInProgress.some(id => id === user.id)}
                                         variant="contained" color="primary"
                                         onClick={() => {
                                             //САНКА
                                             props.follow(user.id)

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
                             <div> {'Moscow'}</div>
                             <div> {'Garden ring'}</div>
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
                                <NavLink to="#"> {page}</NavLink>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>

    );
};

export default UsersFunction;
