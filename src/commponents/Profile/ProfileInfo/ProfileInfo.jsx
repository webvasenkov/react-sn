import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import avatarDefault from "../../../assets/img/avatar-default.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileInfoExtra from "./ProfileInfoExtra";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <section className={style.info}>
            <div className={style.infoMain}>
                <div className={style.avatar}>
                    <img className={style.avatarImg}
                         src={props.profile.photos.small != null ? props.profile.photos.small : avatarDefault}
                         alt="avatar"/>
                    {props.isOwner &&
                    <div className={style.avatarImgEditor}>
                        <input type="file" name="file" id="file" className={style.avatarImgEditorBtn}
                               onChange={onAvatarSelected}/>
                        <label htmlFor="file">edit</label>
                    </div>}
                </div>
                <div className={style.name}>{props.profile.fullName}</div>
                <div
                    className={style.job}>{props.profile.lookingForAJob === true ? 'Looking for a job' : 'Not looking for a job'}</div>
                <div className={style.id}>@{props.profile.userId}</div>
                <ProfileStatusWithHooks profile={props.profile} status={props.status}
                                        updateUserStatus={props.updateUserStatus} isOwner={props.isOwner}/>
            </div>
            <ProfileInfoExtra profile={props.profile} isOwner={props.isOwner}/>
        </section>
    );
}

export default ProfileInfo;

