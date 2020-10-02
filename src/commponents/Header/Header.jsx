import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.inner}>
                <div className={style.logo}>
                    <NavLink className={style.logoText} to="/profile">SN</NavLink>
                </div>
                <nav className={style.menu}>
                    <ul className={style.list}>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive} to="/profile">Profile</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive} to="/messages">Messages</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive} to="/friends">Friends</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive} to="/news">News</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive} to="/music">Music</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive} to="/settings">Settings</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;