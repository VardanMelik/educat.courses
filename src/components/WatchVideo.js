import React from 'react';
import './WatchVideo.css';
import WatchVideoImg from '../assets/watch-video.svg';
import PlayButton from '../assets/play-button.svg';


function WatchVideo() {
    return (
        <div className="watch__video">

        
                <img className="play__button" src={PlayButton} alt="" />
                {/*<p className="watch__title">Смотреть видео</p>
                <p className="watch__description">
                    В этом видео основатель онлайн-школы EDUCAT Александр Мазуркевич расскажет о курсе, 
                    о том какие перспективы ждут выпускников курса Full Stack, 
                    и опыте, который получит студент во время курса.
                </p>*/}
    
            
            
        </div>
    )
}

export default WatchVideo
