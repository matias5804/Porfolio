import React from 'react'
import '../../scss/styles.scss'
import Carousel from '../carousel/Carousel'
import "../carousel/carousel.css";
import iconSkill from '../../assests/img/icons/iconSkill.png'
import Vidya from '../works/Vidya';
import EliotNess from '../works/EliotNess';
import LTatoo from '../works/LTatoo';
import Movies from '../works/Movies';
import Pokemon from '../works/Pokemon';
import Ggtech from '../works/Ggtech';

const WorkWithMe = () => {
  return (
    <div>
      <div className='divWorkWithMe'>
          <div className='divImgWork'>

            <img src={iconSkill} alt='iconSkill'/>

          </div>
          <div className='work'>
              <h1>It's all about the message.</h1>
              <p>  In my experience, I have learned that understanding the message of our clients and helping them make that message go as far and clear as possible is the key to their success (and ours). I want to use my skills to help my clients find and get their message accross.
                </p>
              <div className='divCarousel'>
                <Carousel/>
              </div>

          </div>
      </div>
      <div>
        <Vidya/>
        <EliotNess/>
        <LTatoo/>
        <Movies/>
        <Ggtech/>
        <Pokemon/>
      </div>
    </div>
  )
}

export default WorkWithMe