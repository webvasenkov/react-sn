import React from "react";
import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.post}>
                <div className={style.inner}>
                    <h2 className={style.formTitle}>My Post</h2>
                    <form className={style.form} action="">
                        <textarea className={style.formTextarea} placeholder="Write what you have new..."></textarea>
                        <button className={style.formBtn}>Send</button>
                    </form>
            </div>
        </div>
    );
}

export default Post;