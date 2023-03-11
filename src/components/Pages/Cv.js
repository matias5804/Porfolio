import React from 'react'
import { Link } from 'react-router-dom'
import cvES from '../../assests/img/pictures/cv2023large.jpg'
import cvEspañol from '../../assests/img/pictures/CV2023español.pdf'
import cvIngles from '../../assests/img/pictures/CV2023english.pdf'
import FooterCv from '../footer/FooterCv'


const Cv = () => {
  return (
    <div className='fondoCv'>
      <div className='divFondoCv'>
          <a href={cvEspañol}  className='descargarCv' download='cvES-MatiasAlonso'>Donwload CV - ES</a>
          <a href={cvIngles} className='descargarCv' download='cvEN-MatiasAlonso'>Donwload CV - EN</a>
          <Link to='/Pages/WorkWithMe' className='linkCv'>WORK WITH ME</Link>
      </div>
      <img src={cvES} alt='cv'/>
      <FooterCv/>
    </div>
  )
}

export default Cv
