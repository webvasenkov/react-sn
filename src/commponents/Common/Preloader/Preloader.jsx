import React from "react";
import preloader from "../../../assets/img/preloader.svg";
import style from './Preloader.module.css'


const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img alt="" src={preloader}/>
        </div>
    )
}

export default Preloader