import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";

const Header = (props) => {
    const exit = () => {
        props.Exit()
    }

    return (
        <header className={style.header}>
            <div className={style.inner}>
                <div className={style.logo}>
                    <NavLink className={style.logoText} to="/main">SN</NavLink>
                </div>
                <nav className={style.menu}>
                    <ul className={style.list}>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive}
                                     to="/profile">Profile</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive}
                                     to="/messages">Messages</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive}
                                     to="/users">Users</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive}
                                     to="/news">News</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive}
                                     to="/music">Music</NavLink>
                        </li>
                        <li className={style.listItem}>
                            <NavLink className={style.listLink} activeClassName={style.linkActive}
                                     to="/settings">Settings</NavLink>
                        </li>
                        <li className={style.listItem}>
                            {props.isAuth ?
                                <div className={style.listItemUser}>
                                    <div className={style.listUserWrapper}>{props.login}</div>
                                    <button className={style.listUserBtn} onClick={exit}></button>
                                </div>
                                : <NavLink className={style.listLogin} activeClassName={style.linkActive} to="/login">Log
                                    In</NavLink>}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;