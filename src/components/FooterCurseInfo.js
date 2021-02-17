import React from 'react';
import './FooterCurseInfo.css';

function FooterCurseInfo() {
    return (
        <div className="footer__curse__info">

            <div className="footer__curse__card">
                    <p className="title">Желающим быстро войти в сферу разработки</p>
                    <p className="description">
                    Каждый этап курса Fullstack developer — это специальность. Уже через месяц занятий вы можете начинать разрабатывать интерфейсы на HTML5 и CSS, а через полгода стать полноценным Frontend разработчиком.
                    </p>
                </div>   

                <div className="curse__card">
                    <p className="title">Начинающим разработчикам</p>
                    <p className="description">
                    Уже были попытки обучения в сфере web разработки, но не хватило мотивации? У нас скучно не будет. Вы начнете делать свой реальный проект с первого дня обучения.
                    </p>
                </div>   

                <div className="curse__card">
                    <p className="title">IT специалистам</p>
                    <p className="description">
                    Возможно вы уже наши коллеги, но из другой сферы разработки. Этот курс позволит вам изучить современные фреймворки и методы разработки клиент-серверных веб приложений.
                    </p>
                </div>    
            
        </div>
    )
}

export default FooterCurseInfo
