import React from "react";
import style from './ProfileStats.module.css';
import {NavLink} from "react-router-dom";

const ProfileStats = (props) => {
        return (
            <NavLink className={style.card} to={props.src}>
                <img className={style.cardIcon} src={props.icon} />
                <span className={style.cardName}>{props.name}</span>
                <span className={style.cardCount}>{props.count}</span>
            </NavLink>
    );
}

export default ProfileStats;