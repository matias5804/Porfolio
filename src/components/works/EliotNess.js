import React from 'react'
import imgEliotRespon from '../../assests/img/sliderPorfolio/eliotRespon.png'
import videoEliot from '../../assests/movies/eliot.mp4'

const EliotNess = () => {
  return (
    <div id='eliot'>
      <div className='divProyects divEliot'>
        <div className='divInfo divInfoEliot'>
          <div>
            <h1>Eliot Ness</h1>
            <h2>Beer Factory</h2>
          </div>

          <p>The Eliot Ness brewery project was born with the intention of providing the brewery with a virtual store in order to continue growing within the industry and be able to control all sales and stock from the website itself. The project was developed in React Js, it has a responsive design with styles and animations in CSS (SaaS), and external libraries are consumed for some of the sections.<br/>The virtual store has its functional shopping cart, ending with its corresponding order form which is sent directly via email.</p>

          <div className='btnsWorks'>
            <a href='https://matias5804.github.io/EliotNess/' target="_blank" rel='noreferrer'>
              <button>Visit the Site</button>
            </a>

            <a href='https://github.com/matias5804/EliotNess.git' target="_blank" rel='noreferrer'>
              <button>See GitHub</button>
            </a>
          </div>
        </div>

        <div className='divVideo'>
          <video 
          src={videoEliot}
          className='videoWorks'
          
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
          ></video>

          <img src={imgEliotRespon} alt='eliot Ness'/>
        </div>
      </div>
    </div>
  )
}

export default EliotNess