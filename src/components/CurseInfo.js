import React from 'react';
import './CurseInfo.css';

function CurseInfo() {
    return (
        <div className="curse__info">

            <div className="curse__card">
                <p className="title">Разработчик полного цикла</p>
                <p className="description">
                Full stack-разработчик владеет как фронтенд (все то, что видит пользователь на экране, 
                например внешний вид сайта или веб-приложения), так и бэкенд (хранение и обработка данных, например 
                ваши лайки и комментарии в инстаграм).
                </p>
            </div>   

            <div className="curse__card">
                <p className="title">Frontend + Backend</p>
                <p className="description">
                    Full stack — это разработчик полного цикла, который может создать из прототипа полноценный продукт(сайт, интернет-магазин, онлайн-школа).
                </p>
            </div>   

            <div className="curse__card">
                <p className="title">Для новичков и специалистов</p>
                <p className="description">
                Наш курс Full stack — разработчик, подходит как новичкам, 
                с нулевым знанием в этой области, так и специалистам, 
                которые хотят прокачать свои знания и обладать конкурентным преимуществом на бирже труда.
                </p>
            </div>    


        </div>
    )
}

export default CurseInfo
