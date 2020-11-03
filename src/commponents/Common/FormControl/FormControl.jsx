import React from 'react'
import style from './FormControl.module.css'
import err from '../../../assets/img/cancel.svg'
import {Field} from "redux-form";

const FormControl = ({meta: {error, touched}, children}) => {
    const hasError = error && touched
    const messageError = error
    return (
        <div className={`${hasError ? style.wrapperError : style.wrapper}`}>
            {children}
            {hasError && <span className={style.spanDescError}><img src={err}/> {messageError}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...otherProps} = props
    return <FormControl {...props}><textarea {...input} {...otherProps}></textarea></FormControl>
}


export const Input = (props) => {
    const {input, meta, ...otherProps} = props
    return <FormControl {...props}><input {...input} {...otherProps}></input></FormControl>
}

export const createField = (style, name, component, type, placeholder, validate, value = '', id = '', For = '', text) => {
    return (
        <Field className={style} name={name} component={component} type={type} placeholder={placeholder}
               validate={validate} id={id} value={value} for={For}>
            {text}
        </Field>
    )
}


