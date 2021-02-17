import React from 'react';
import './Banner.css';
import EduCatLogo from '../assets/educat.png'; 

function Banner() {
    return (
        <div className="banner">

            <div className="banner__title">

                <div>
                    <span className="title">
                        Fullstack<br/> 
                        веб-разработчик
                    </span>
                </div>

                <div className="banner__menu">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>TYpescript</p>
                    <p>React JS</p>
                    <p>Node JS</p>
                    <p>Express JS</p>
                    <p>MongoDB</p>
                    <p>Mongoose JS</p>
                </div>

                
                <button className="start__lesson">
                    Начать онлайн курс бесплатно
                </button>
                

                
            </div>

            <div className="banner__educat">
                <img src={EduCatLogo} alt="" />
            </div>

            
        </div>
    )
}

export default Banner
