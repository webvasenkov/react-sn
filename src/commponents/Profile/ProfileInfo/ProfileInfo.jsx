import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import avatarDefault from "../../../assets/img/avatar-default.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.info}>
            <div className={style.avatar}>
                <img className={style.avatarImg}
                     src={props.profile.photos.small != null ? props.profile.photos.small : avatarDefault}
                     alt="avatar"/>
            </div>
            <div className={style.name}>{props.profile.fullName}</div>
            <div className={style.status}>{props.profile.lookingForAJob === true ? 'Looking for a job' : 'Not looking for a job\n'}</div>
            <div className={style.id}>@{props.profile.userId}</div>
            <div className={style.about}>
                <ProfileStatusWithHooks profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;

