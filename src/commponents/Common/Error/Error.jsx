import React from 'react'
import style from './Error.module.css'

const Error = ({errorText}) => {
    return (
        <div className={style.error}>
            <div className={style.errorWrapper}>
                <span className={style.errorText}>{errorText}</span>
            </div>
        </div>
    )
}

export default Error