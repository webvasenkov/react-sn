import React from "react";
import Post from './Post';
import style from './Profile.module.css';


const Profile = () => {
    return (
        <section className="profile">
            <div className="container">
                <div className={style.inner}>
                    <div className={style.info}>
                        <div className={style.avatar}>
                            <img className={style.avatarImg}
                                 src="https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png"
                                 alt="avatar"/>
                        </div>
                        <div className={style.name}>Jhon Bewen</div>
                        <div className={style.status}>Hi, I am a business analyst</div>
                        <div className={style.id}>@jhonbew</div>
                        <div className={style.about}>
                            <h3 className={style.aboutTitle}>About me</h3>
                            <p className={style.aboutDesc}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eaque, in laudantium
                                pariatur possimus quidem veniam veritatis? Aperiam cum, cumque maxime molestias possimus
                                quidem reiciendis. Consectetur hic quidem quisquam sed!
                            </p>
                        </div>
                    </div>
                    <Post/>
                </div>
            </div>
        </section>
    );
}

export default Profile;