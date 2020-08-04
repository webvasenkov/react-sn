import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="logo">
                    <span className="logo__text">SN</span>
                </div>
                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <a className="header__list-link" href="#">Profile</a>
                        </li>
                        <li className="header__list-item">
                            <a className="header__list-link" href="#">Messages</a>
                        </li>
                        <li className="header__list-item">
                            <a className="header__list-link" href="#">News</a>
                        </li>
                        <li className="header__list-item">
                            <a className="header__list-link" href="#">Music</a>
                        </li>
                        <li className="header__list-item">
                            <a className="header__list-link" href="#">Setting</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;