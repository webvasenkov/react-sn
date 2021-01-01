import React from "react";
import style from './Messages.module.css';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";

const MessagesForm = (props) => {
    return (
        <form className={style.messageForm} onSubmit={props.handleSubmit}>
                            <Field className={style.messageSend}
                                   name='textareaMessage'
                                   component='textarea'
                                   value={props.newMessageText}>
                            </Field>
            <button className={style.messageBtn}  type='submit'></button>
        </form>
    )
}

export default compose(reduxForm({form: 'messages'}))(MessagesForm)