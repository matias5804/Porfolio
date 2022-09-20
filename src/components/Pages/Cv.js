import React from 'react'
import { Link } from 'react-router-dom'
import cvES from '../../assests/img/pictures/cvIngles2022.jpg'
import cvEspañol from '../../assests/img/pictures/cvEspañol2022.jpg'
import cvIngles from '../../assests/img/pictures/cvIngles2022.pdf'
import FooterCv from '../footer/FooterCv'


const Cv = () => {
  return (
    <div className='fondoCv'>
      <div className='divFondoCv'>
          <a href={cvEspañol}  className='descargarCv' download='cvES-MatiasAlonso'>Descargar CV - ES</a>
          <a href={cvIngles} className='descargarCv' download='cvEN-MatiasAlonso'>Descargar CV - EN</a>
          <Link to='/Pages/WorkWithMe' className='linkCv'>WORK WITH ME</Link>
      </div>
      <img src={cvES} alt='cv'/>
      <FooterCv/>
    </div>
  )
}

export default Cv
