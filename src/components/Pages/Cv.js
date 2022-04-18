import React from 'react'
import { Link } from 'react-router-dom'

import cvES from '../../assests/img/pictures/cvEspañol.jpg'
import cvEspañol from '../../assests/img/pictures/cvEspañol.jpg'
import cvIngles from '../../assests/img/pictures/cvIngles.jpg'
import Footer from '../footer/Footer'


const Cv = () => {
  return (
    <div className='fondoCv'>
        <div>
            <a href={cvEspañol}  className='descargarCv' download='cvES-MatiasAlonso'>Descargar CV - ES</a>
            <a href={cvIngles} className='descargarCv' download='cvEN-MatiasAlonso'>Descargar CV - EN</a>
            <Link to='/Pages/WorkWithMe' className='linkCv'>WORK WITH ME</Link>
        </div>
        <img src={cvES} alt='cv'/>

        <Footer/>
    </div>
  )
}

export default Cv