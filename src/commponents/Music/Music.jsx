import React from 'react';
import withAuthRedirect from "../../HOC/withAuthRedirect";

const Music = (props) => {
    return (
        <section className="music">
            <div className="container">
                Music
            </div>
        </section>
    )
}

export default withAuthRedirect(Music);