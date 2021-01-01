import React from "react";
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import classNames from 'classnames'

const DialogItem = (props) => {
    return (
        <div className={classNames(style.dialogItem, {[style.active]: false})}>
            <img className={style.dialogItemAvatar} src={props.img} alt='avatar'/>
            <NavLink className={style.dialogItemName} to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;