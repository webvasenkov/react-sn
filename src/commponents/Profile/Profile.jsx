import React from "react";
import Post from './Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStats from './ProfileStats/ProfileStats';
import style from './Profile.module.css';


const Profile = (props) => {
    let statsElements = props.profileState.statsData.map(stats => <ProfileStats src={stats.src} icon={stats.icon}
                                                                                name={stats.name} count={stats.count}/>)

    return (
        <section className="profile">
            <div className="container">
                <div className={style.inner}>
                    <ProfileInfo/>
                    <div className={style.cards}>
                        {statsElements}
                    </div>
                </div>
                <Post postData={props.profileState.postData} addPost={props.addPost}/>
            </div>
        </section>
    );
}

export default Profile;