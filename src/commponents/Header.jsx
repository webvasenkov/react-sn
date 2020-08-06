import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.inner}>
                <div className={style.logo}>
                    <span className={style.logoText}>SN</span>
                </div>
                <nav className={style.menu}>
                    <ul className={style.list}>
                        <li className={style.listItem}>
                            <a className={style.listLink} href="#">Profile</a>
                        </li>
                        <li className={style.listItem}>
                            <a className={style.listLink} href="#">Messages</a>
                        </li>
                        <li className={style.listItem}>
                            <a className={style.listLink} href="#">News</a>
                        </li>
                        <li className={style.listItem}>
                            <a className={style.listLink} href="#">Music</a>
                        </li>
                        <li className={style.listItem}>
                            <a className={style.listLink} href="#">Setting</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;