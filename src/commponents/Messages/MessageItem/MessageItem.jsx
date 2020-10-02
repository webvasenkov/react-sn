import React from "react";
import style from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <div className={style.item}>
            <img className={style.avatar} src={props.avatar}></img>
            <p className={style.text}>{props.message}</p>
        </div>
    )
}

export default MessageItem;