import React from 'react';
import './Header.css';

import Logo from '../assets/logo.png';
import Language from '../assets/language-logo.svg';

function Header() {
    return (
    <div className="container">
        <div className="header">
            <img className="logo" src={Logo} alt="logo" />

            <div className="language-logo">
                <img src={Language} alt=""/>
                
                <select className="form-select" aria-label="Default select example">
                        <option defaultValue="ru">RU</option>
                        <option value="en">En</option>
                </select>

            </div>

        </div>
                
    </div>
    )
}

export default Header
