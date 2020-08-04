import React from "react";
import Post from "./Post";

const Profile = () => {
    return (
        <section className="profile">
            <div className="container">
                <div className="profile__inner">
                    <div className="profile__info">
                        <div className="profile__avatar">
                            <img className="profile__avatar-img"
                                 src="https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png"
                                 alt="avatar"/>
                        </div>
                        <div className="profile__name">Jhon Bewen</div>
                        <div className="profile__status">Hi, I am a business analyst</div>
                        <div className="profile__id">@jhonbew</div>
                        <div className="profile__about">
                            <h3 className="profile__about-title">About me</h3>
                            <p className="profile__about-desc">
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