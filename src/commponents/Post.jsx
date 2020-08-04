import React from "react";

const Post = () => {
    return (
        <div className="post">
                <div className="post__inner">
                    <h2 className="post__form-title">My Post</h2>
                    <form className="post__form" action="">
                        <textarea className="post__form-textarea" placeholder="Write what you have new..."></textarea>
                        <button className="post__form-btn">Send</button>
                    </form>
            </div>
        </div>
    );
}

export default Post;