import React from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import PostContainer from "./Post/PostContainer";


const Profile = (props) => {
    return (
        <section className="profile">
            <div className="container">
                <div className={style.inner}>
                    <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <PostContainer/>
            </div>
        </section>
    );
}

export default Profile;