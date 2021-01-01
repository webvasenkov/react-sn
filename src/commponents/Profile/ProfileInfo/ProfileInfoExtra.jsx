import React from 'react'
import style from "./ProfileInfoExtra.module.css";
import ProfileLinks from "./ProfileLinks";
import edit from '../../../assets/img/edit.svg'
import {NavLink} from "react-router-dom";


const ProfileInfoExtra = ({profile, isOwner}) => {
    return (
        <div className={style.infoExtra}>
            {isOwner && <NavLink to='/settings' className={style.infoEdit}><img className={style.infoEditIco} src={edit} alt="edit"/></NavLink>}
            <div className={style.infoAbout}>
                <h3 className={style.infoTitle}>About me</h3>
                {profile.aboutMe ?
                    <p className={style.infoText}>{profile.aboutMe}</p> :
                    <span className={style.infoNot}>Information not specified</span>}
            </div>

            <div className={style.infoContacts}>
                <h3 className={style.infoTitle}>Contacts</h3>
                {Object.keys(profile.contacts).every(i => profile.contacts[i] === null) ?
                    <span className={style.infoNot}>Information not specified</span>
                    :
                    <ul className={style.infoContactsList}>
                        {Object.keys(profile.contacts).map(key =>
                            <ProfileLinks key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                        )}
                    </ul>}
            </div>

            {profile.lookingForAJob === true &&
            <div className={style.infoJob}>
                <h3 className={style.infoTitle}>Looking for a job</h3>
                <p className={style.infoText}>{profile.lookingForAJobDescription}</p>
            </div>}
        </div>
    )
}

export default ProfileInfoExtra