import React from 'react'
import imgLtatooRespon from '../../assests/img/sliderPorfolio/lTatooRespon.png'

const LTatoo = () => {
  return (
    <div>
              <div className='divProyects'>
            <div className='divInfo'>
                <div>
                    <h1>LT</h1>
                    <h2>Tatoo Equipment</h2>
                </div>
                <p>Vidya is a project that was born with the intention of raising awareness through greater understanding about sustainability and care for the environment on a daily basis. It not only seeks to market ecological and sustainable products but also aims to inform and teach users about the different habits that can be adopted, from consumption to recycling, to encourage societies to be more respectful of the environment and more aware of what they consume.</p>
                <button>Visit the Site</button>
            </div>
            <div className='divVideo'>

                <video 
                src={""}
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