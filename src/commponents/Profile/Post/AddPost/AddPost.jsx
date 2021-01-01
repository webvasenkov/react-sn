import React from "react";
import style from './AddPost.module.css';

const AddPost = (props) => {
    return (
        <div className={style.item}>
            <div className={style.info}>
                <div className={style.infoAvatar}><img
                    src="https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png" alt="info-avatar"/>
                </div>
                <div className={style.infoName}>{props.name}</div>
            </div>
            <div className={style.desc}>
                <p className={style.descText}>
                    {props.text}
                </p>
            </div>
            <div className={style.like}>
                <img className={style.likeImg}
                     src='data:image/svg+xml;charset=utf-8,<svg%20viewBox%3D"0%200%2024%2024"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"><path%20d%3D"m0%200h24v24h-24z"%20fill%3D"none"%2F><path%20d%3D"m17%202.9a6.43%206.43%200%200%201%206.4%206.43c0%203.57-1.43%205.36-7.45%2010l-2.78%202.16a1.9%201.9%200%200%201%20-2.33%200l-2.79-2.12c-6.05-4.68-7.45-6.47-7.45-10.04a6.43%206.43%200%200%201%206.4-6.43%205.7%205.7%200%200%201%205%203.1%205.7%205.7%200%200%201%205-3.1z"%20fill%3D"%23dedede"%2F><%2Fsvg>' alt='like'></img>
                <div className={style.likeCount}>
                    {props.like}
                </div>
            </div>
        </div>
    );
}

export default AddPost;