import React from 'react'
import style from './Main.module.css'

const Main = (props) => {
    return (
        <div className={style.main}>
            <div className='container'>
                <h1 className={style.mainText}>Welcome.</h1>
                <h3 className={style.mainDesc}>This is my first application built with the <span className={style.mainSpan}>React</span> library</h3>
            </div>
        </div>
    )
}

export default Main