import React from 'react';
import style from "./Users.module.css";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

const Users = ({onPageChange, currentPage, itemsCountTotal, pageSize, onUnFollow, onFollow, followingInProgress, portionSize, users}) => {
    return (
        <section className="users">
            <div className="container">
                <div className={style.usersWrapper}>
                    <div className={style.usersInner}>
                        {users.map(user => <User user={user}
                                                 key={user.id.toString()}
                                                 followingInProgress={followingInProgress}
                                                 onUnFollow={onUnFollow}
                                                 onFollow={onFollow}
                        />)}
                    </div>
                    <Pagination onPageChange={onPageChange} currentPage={currentPage} portionSize={portionSize}
                                itemsCountTotal={itemsCountTotal} pageSize={pageSize}/>
                </div>
            </div>
        </section>
    )
}

export default Users;