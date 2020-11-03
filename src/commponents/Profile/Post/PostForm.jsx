import React from 'react'
import style from "./Post.module.css";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {maxLength30, requiredField} from "../../../utils/validators";
import {Textarea} from "../../Common/FormControl/FormControl";

const PostForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
                    <Field className={style.formTextarea}
                           name='textareaPost'
                           component={Textarea}
                           placeholder="Write what you have new..."
                           validate={[requiredField, maxLength30]}
                    />
            <button className={style.formBtn} type='submit'>Send</button>
        </form>
    )
}


export default compose(reduxForm({form: 'post'}))(PostForm)

