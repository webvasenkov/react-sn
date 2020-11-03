import React from "react";
import style from './Login.module.css'
import styleForm from '../Common/FormControl/FormControl.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormControl/FormControl";
import {maxLength30, requiredField} from "../../utils/validators";
import err from '../../assets/img/cancel.svg';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className={style.formLogin} onSubmit={handleSubmit}>
            {createField(style.inputLogin, 'inputLogin', Input, 'text', 'Login', [requiredField, maxLength30])}
            {createField(style.inputPassword, 'inputPassword', Input, 'password', 'Password', [requiredField, maxLength30])}
            {error &&
            <span className={styleForm.spanDescError}>
                   <img src={err} alt=""/> {error}
            </span>}
            <div className={style.groupCheckbox}>
                {createField(style.checkboxRemember, 'checkboxRemember', 'input', 'checkbox', '', [], 'Remember me', 'remember')}
                {createField(style.checkboxRemember, 'checkboxlabel', 'label', '', '', [], '', '', 'remember', 'Remember me')}
            </div>
            <button className={style.btnLogin} type='submit'>Login</button>
        </form>

    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
