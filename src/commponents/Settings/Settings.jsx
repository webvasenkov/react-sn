import React from 'react';
import style from './Settings.module.css';
import withAuthRedirect from "../../HOC/withAuthRedirect";

const Settings = (props) => {
    return (
        <section className="settings">
            <div className="container">
                Settings
            </div>
        </section>
    )
}

export default withAuthRedirect(Settings);
