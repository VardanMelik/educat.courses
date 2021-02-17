import React from 'react';
import './Header.css';

import Logo from '../assets/logo.png';
import Language from '../assets/language-logo.svg';

function Header() {
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="logo" />

            <div className="language-logo">
                <img src={Language} alt=""/>
                
                <select className="language__select">
                        <option defaultValue="ru">RU</option>
                        <option value="en">En</option>
                </select>

            </div>

        </div>
    )
}

export default Header
