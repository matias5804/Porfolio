import React from 'react'
import './works.css'
import videoWeRemote from '../../assests/movies/weRemo.mp4'
import ImgVidyaRespon from '../../assests/img/sliderPorfolio/vidyaRespon.png'
import imgWeRemoteRespon from '../../assests/img/sliderPorfolio/weRemoteResponsive.png'


const WeRemote = () => {
    return (
        <div id='weRemote'>
            <div className='divProyects divWeRemote'>
                <div className='divInfo'>
                <div>
                    <h1>We-Remote</h1>
                    <h2>the mind is wonderful</h2>
                </div>
                
                <p>The WeRemote challenge was a project that I had to work on for the selection process of a position as a Front-End Developer.
                The site was created and developed in React js, it also has styles and animations with CSS (sass and bem).
                It also included a hero, news grid, testimonial boxes, FAQs in accordion mode, contact form, and modal window..</p>

                <div className='btnsWorks'>
                    <a href='https://matias5804.github.io/WeRemote/' target="_blank" rel='noreferrer'><button>Visit the Site</button></a> 
                    <a href='https://github.com/matias5804/WeRemote' target="_blank" rel='noreferrer'><button>See GitHub</button></a> 
                </div>
                </div>

                <div className='divVideo'>
                <video                 
                src={videoWeRemote}
                className='videoWorks'
                
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
                ></video>

                <img src={imgWeRemoteRespon} alt='vidya'/>
                </div>
            </div>
        </div>
    )
}

export default WeRemote