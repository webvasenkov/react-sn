import React from "react";
import style from './Post.module.css'
import AddPost from './AddPost/AddPost'
import PostForm from "./PostForm";

const Post = (props) => {
    let postElements = props.postData.map(post => <AddPost key={post.id.toString()} id={post.id} name={post.name} text={post.text}
                                                           like={post.like}/>);

    const onSubmit = (data) => {
        let {textareaPost: text} = data
        props.addPost(text)
    }

    return (
        <div className={style.post}>
            <div className={style.inner}>
                <h2 className={style.formTitle}>My Post</h2>
                <PostForm onSubmit={onSubmit}/>
            </div>

            <div className='addPost'>
                <div className={style.items}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Post);