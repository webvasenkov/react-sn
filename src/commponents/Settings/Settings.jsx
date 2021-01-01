import React from 'react';
import style from './Settings.module.css';
import SettingsForm from "./SettingsForm";
import {Redirect} from "react-router-dom";

const Settings = (props) => {
    const handleSubmit = (data) => {
        props.saveProfile(data)
    }

    if (props.profileEditStatus === true) {
        return <Redirect to='/profile'/>
    }

    return (
        <section className="settings">
            <div className="container">
                <div className={style.settingsInner}>
                    <SettingsForm onSubmit={handleSubmit} initialValues={props.profile} profile={props.profile}/>
                </div>
            </div>
        </section>
    )
}

export default Settings;
