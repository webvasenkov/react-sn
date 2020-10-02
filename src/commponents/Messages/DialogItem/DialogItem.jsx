import React from "react";
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialogItem + ' ' + style.active}>
            <img className={style.dialogItemAvatar} src={props.img}/>
            <NavLink className={style.dialogItemName} to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;