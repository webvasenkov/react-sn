import React from 'react';
import style from './News.module.css';
import withAuthRedirect from "../../HOC/withAuthRedirect";

const News = (props) => {
    return (
        <section className='news'>
            <div className="container">
                News
            </div>
        </section>
    )
}

export default withAuthRedirect(News);