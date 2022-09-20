import React from 'react'
import ImgVidyaRespon from '../../assests/img/sliderPorfolio/vidyaRespon.png'
import './works.css'
import videoVidya from '../../assests/movies/vidya.mp4'

const Vidya = () => {
  return (
    <div id='vidya'>
      <div className='divProyects'>
        <div className='divInfo'>
          <div>
            <h1>Vidya</h1>
            <h2>Sustainable products</h2>
          </div>
          
          <p>Vidya is a project that was born with the intention of raising awareness through greater understanding about sustainability and care for the environment on a daily basis. It not only seeks to market ecological and sustainable products but also aims to inform and teach users about the different habits that can be adopted, from consumption to recycling, to encourage societies to be more respectful of the environment and more aware of what they consume.</p>

          <div className='btnsWorks'>
            <a href='https://matias5804.github.io/VidyaPatong/' target="_blank" rel='noreferrer'><button>Visit the Site</button></a> 
            <a href='https://github.com/matias5804/VidyaPatong.git' target="_blank" rel='noreferrer'><button>See GitHub</button></a> 
          </div>
        </div>

        <div className='divVideo'>
          <video 
          src={videoVidya}
          className='videoWorks'
          
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
          ></video>

          <img src={ImgVidyaRespon} alt='vidya'/>
        </div>
      </div>
    </div>
  )
}

export default Vidya