import React from 'react'
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avatarDefault from "../../assets/img/avatar-default.jpg";

const User = ({user, followingInProgress, onUnFollow, onFollow}) => {
    return (
        <div className={style.user}>
            <NavLink className={style.userInfo} to={`profile/${user.id}`}>
                <img className={style.avatar}
                     src={user.photos.small || avatarDefault}/>
                <div className={style.fullName}>
                    <span className={style.firstName}>{user.name}</span>
                    {/*<span className={style.lastName}>{'user.lastName'}</span>*/}
                </div>
            </NavLink>
            {user.followed ?
                <button disabled={followingInProgress.some(id => id === user.id)}
                        className={style.unFollowedBtn}
                        onClick={() => onUnFollow(user.id)}>unfollow</button> :
                <button disabled={followingInProgress.some(id => id === user.id)}
                        className={style.followedBtn}
                        onClick={() => onFollow(user.id)}>follow</button>}
        </div>
    )
}

export default User