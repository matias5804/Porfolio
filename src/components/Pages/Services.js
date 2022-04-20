import React from 'react'
import skills from'../../assests/img/icons/iconSkillClaro.png'

const Services = () => {
  return (
    <div id='fondoServicios' className='divServicios'>

      <div className='divFondoServicios'></div>

      <div className='divTitleServicios'>
        <h1>What I can do<br/> for you</h1>

        <div className='divInfoServicios'>
          <div className='divConWeb'>
            <div className='divConcept'>   
              <h2>Concept Development</h2>
              <h3>Developing ideas aligned with your strategy and needs.</h3>
            </div>

            <div className='divWeb'>
              <h2>Website Design</h2>
              <h3>Make them see! Development of websites for businesses and clients from different industries.</h3>
            </div> 
          </div>         
        </div>

        <div className='divLanguages'>
          <img src={skills} alt='skills'/>
        </div>
      </div>
    </div>
  )
}

export default Services