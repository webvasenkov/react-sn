import React from "react";
import style from './AddPost.module.css';

const AddPost = () => {
    return (
        <section className='addPost'>
            <div className="container">
                <div className={style.items}>
                    <div className={style.item}>
                        <div className={style.info}>
                            <div className={style.infoAvatar}><img
                                src="https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png" alt=""/>
                            </div>
                            <div className={style.infoName}>Jhon Bewen</div>
                        </div>
                        <div className={style.desc}>
                            <p className={style.descText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum cumque impedit
                                ipsa
                                laudantium mollitia nam soluta? Aliquid cum, ea fuga fugiat iure modi, odio, perferendis
                                praesentium quam repellat sit. Cum excepturi odio quasi rerum voluptas! Animi deserunt
                                earum
                                eligendi, est, fugiat illo illum itaque laboriosam minus pariatur quidem quisquam
                                repellendus voluptate. Aut doloremque eos, harum porro quaerat quibusdam quod.
                            </p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.info}>
                            <div className={style.infoAvatar}><img
                                src="https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png" alt=""/>
                            </div>
                            <div className={style.infoName}>Jhon Bewen</div>
                        </div>
                        <div className={style.desc}>
                            <p className={style.descText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum cumque impedit
                                ipsa
                                laudantium mollitia nam soluta? Aliquid cum, ea fuga fugiat iure modi, odio, perferendis
                                praesentium quam repellat sit. Cum excepturi odio quasi rerum voluptas! Animi deserunt
                                earum
                                eligendi, est, fugiat illo illum itaque laboriosam minus pariatur quidem quisquam
                                repellendus voluptate. Aut doloremque eos, harum porro quaerat quibusdam quod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddPost;