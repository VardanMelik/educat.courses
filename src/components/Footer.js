import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../assets/logo.png';

function Footer() {
    return (
        <div className="footer">

        <div className="footer__left">
            <img className="footer__logo" src={Logo} alt="" />
        </div>

        <div className="footer__right">
            <div className="footer-menu">
                <Link to="/contacts">
                    <span>Контакты</span>
                </Link>

                <Link to="/privacy-policy">
                    <span>Политика конфиденциальности</span>
                </Link>

                <Link to="/terms">
                    <span>Условия предоставления услуг</span>
                </Link>
            </div>
        </div>
          
    </div>
                
    )
}

export default Footer
