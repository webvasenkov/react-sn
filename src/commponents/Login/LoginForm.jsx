import React from "react";
import style from './Login.module.css'
import styleForm from '../Common/FormControl/FormControl.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControl/FormControl";
import {maxLength30, requiredField} from "../../utils/validators";
import err from '../../assets/img/cancel.svg';
import {compose} from "redux";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={style.formLogin} onSubmit={handleSubmit}>
            <Field name='inputLogin'
                   component={Input}
                   type='text'
                   placeholder='Login'
                   validate={[requiredField, maxLength30]}/>
            <Field name='inputPassword'
                   component={Input}
                   type='password'
                   placeholder='Password'
                   validate={[requiredField, maxLength30]}/>
            {captchaUrl &&
            <div className={style.captcha}>
                <img className={style.captchaImg} src={captchaUrl} alt="captcha"/>
                <Field name='inputCaptcha'
                       component={Input}
                       type='text'
                       placeholder='Write captcha'
                       validate={[requiredField, maxLength30]}/>
            </div>}

            {error &&
            <span className={styleForm.spanDescError}>
                   <img src={err} alt=""/> {error}
            </span>}

            <div className={style.groupCheckbox}>
                <Field name='checkboxRemember'
                       component='input'
                       type='checkbox'/>
                <label htmlFor='checkboxRemember'>Remember me</label>
            </div>
            <button className={style.btnLogin}>Login</button>
        </form>

    )
}

export default compose(reduxForm({form: 'login'}))(LoginForm)
