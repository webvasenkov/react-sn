import React, {useState} from 'react'
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../Common/FormControl/FormControl";
import {maxLength30, requiredField} from "../../utils/validators";
import style from './SettingsForm.module.css'
import {compose} from "redux";
import styleForm from "../Common/FormControl/FormControl.module.css";
import err from "../../assets/img/cancel.svg";


const SettingsForm = (props) => {
    const [editJob, setEditJob] = useState(true)
    const handleLookingForAJob = (e) => e.target.checked ? setEditJob(true) : setEditJob(false)
    if (props.profile.lookingForAJob && !editJob) {
        props.profile.lookingForAJobDescription = ''
    }

    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div className={style.itemForm}>
                <label className={style.label} htmlFor="fullName">Full name</label>
                <Field name='fullName'
                       component={Input}
                       type='text'
                       placeholder='Your name'/>
            </div>
            <div className={style.itemForm}>
                <div className={style.itemJob}>
                    <label className={style.label} htmlFor="lookingForAJob">Looking for a job</label>
                    <Field name='lookingForAJob'
                           component='input'
                           type='checkbox'
                           onChange={handleLookingForAJob}
                    />
                </div>
                {editJob &&
                <Field name='lookingForAJobDescription'
                       component={Textarea}
                       type='text'
                       placeholder='Write description...'
                       validate={[requiredField, maxLength30]}/>}
            </div>
            <div className={style.itemForm}>
                <label className={style.label} htmlFor="aboutMe">About me</label>
                <Field name='aboutMe'
                       component={Textarea}
                       type='text'
                       placeholder='Write to yourself...'
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div className={style.itemForm}>
                <label className={style.label} htmlFor="aboutMe">Contacts</label>
                {Object.keys(props.profile.contacts).map(key => {
                    return (
                        <Field key={key}
                               name={'contacts.' + key}
                               component={Input}
                               type='text'
                               placeholder={key}/>
                    )
                })}
            </div>

            {props.error &&
            <span className={styleForm.spanDescError}>
                   <img src={err} alt=""/> {props.error}
            </span>}

            <button type='submit' className={style.btnSave}>Save</button>
        </form>
    )
}

export default compose(reduxForm({form: 'settings'}))(SettingsForm)
