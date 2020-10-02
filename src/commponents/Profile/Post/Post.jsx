import React from "react";
import style from './Post.module.css'
import AddPost from './AddPost/AddPost'

const Post = (props) => {


    let postElements = props.postData.map(post => <AddPost id={post.id} name={post.name} text={post.text}
                                                           like={post.like}/>);
    let newPost = React.createRef();
    let addPost = () => {
        debugger;
        let text = newPost.current.value;
        props.addPost(text);
    }

    return (
        <div className={style.post}>
            <div className={style.inner}>
                <h2 className={style.formTitle}>My Post</h2>
                <form className={style.form} action="">
                    <textarea className={style.formTextarea} placeholder="Write what you have new..."
                              ref={newPost}></textarea>
                    <button className={style.formBtn} onClick={addPost} type='button'>Send</button>
                </form>
            </div>

            <div className='addPost'>
                <div className={style.items}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default Post;