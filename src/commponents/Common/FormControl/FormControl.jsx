import React from 'react'
import style from './FormControl.module.css'
import err from '../../../assets/img/cancel.svg'

const FormControl = ({meta: {error, touched}, children}) => {
    const hasError = error && touched
    const messageError = error
    return (
        <div className={`${hasError ? style.wrapperError : style.wrapper}`}>
            {children}
            {hasError && <span className={style.spanDescError}><img src={err} alt='error'/> {messageError}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...otherProps} = props
    return (<FormControl {...props}> <textarea {...input} {...otherProps} className={style.textarea}></textarea></FormControl>)
}

export const Input = (props) => {
    const {input, meta, ...otherProps} = props
    return <FormControl {...props}><input {...input} {...otherProps} className={style.input}></input></FormControl>
}


