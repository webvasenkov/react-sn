import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let onEditChange = () => {
        setEditMode(true)
    }

    let onCloseEditChange = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={style.about}>
            <h3 className={style.aboutTitle}>My mood</h3>
            {editMode ?
                <form className={style.editDesc}>
                    <input className={style.editInput} onBlur={onCloseEditChange} autoFocus={true}
                           value={status} onChange={onStatusChange} placeholder='Edit status'/>
                </form>
                :
                <span className={style.aboutDesc} onClick={onEditChange}> {status ? status : 'No status'}</span>}
        </div>
    )
}

export default ProfileStatusWithHooks