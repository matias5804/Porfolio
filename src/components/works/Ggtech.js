import React from 'react'
import imgGgtechRespon from '../../assests/img/sliderPorfolio/ggtechRespon.png'
import videoGgtech from '../../assests/movies/ggtechTres.mp4'

const Ggtech = () => {
  return (
    <div id='ggtech'>
      <div className='divProyects'>
        <div className='divInfo'>
          <div>
              <h1>GgTech</h1>
              <h2>Challenge</h2>
          </div>

          <p>The GGTech challenge was part of one of the first selection processes I participated in, which I thoroughly enjoyed. It is developed in JavaScript and has a responsive design for mobile, tablets and PCs with CSS. It has animations in the links, cards and in the Call To Action.<br/>The information comes from an external endpoint; cards with date, time and detailed information are displayed. It also contains a pivot table where you can search, filter and make use of paging.</p>
          
          <div className='btnsWorks'>
            <a href='https://matias5804.github.io/GGTech/' target="_blank" rel='noreferrer'>
              <button>Visit the Site</button>
            </a> 
            <a href='https://github.com/matias5804/GGTech.git' target="_blank" rel='noreferrer'>
              <button>See GitHub</button>
            </a>
          </div>
        </div>

        <div className='divVideo'>

          <video 
          src={videoGgtech}
          className='videoWorks'
          
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
          ></video>

          <img src={imgGgtechRespon} alt='Ggtech'/>

        </div>
      </div>
    </div>
  )
}

export default Ggtech