import React from 'react'
import imgLtatooRespon from '../../assests/img/sliderPorfolio/lTatooRespon.png'
import videoLt from '../../assests/movies/lT.mp4'

const LTatoo = () => {
  return (
    <div id='tatoo'>
      <div className='divProyects'>
        <div className='divInfo'>
          <div>
            <h1>LT</h1>
            <h2>Tatoo Equipment</h2>
          </div>

          <p>The LT Equipment virtual store is created with the idea of expanding the business and increasing the audience. It is developed in React Js and designed for Mobile, Tablet and PC, with animations in CSS (SaaS).<br/>The site has sections for products, customers and contact.</p>

          <div className='btnsWorks'>
            <a href='https://matias5804.github.io/luchotattoo/' target="_blank" rel='noreferrer'>
              <button>Visit the Site</button>
            </a> 
            
            <a href='https://github.com/matias5804/luchotattoo.git' target="_blank" rel='noreferrer'>
              <button>See GitHub</button>
            </a>
          </div>
        </div>
        
        <div className='divVideo'>
          <video 
          src={videoLt}
          className='videoWorks'
          
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
          ></video>

          <img src={imgLtatooRespon} alt='tatoo'/>
        </div>
      </div>
    </div>
  )
}

export default LTatoo