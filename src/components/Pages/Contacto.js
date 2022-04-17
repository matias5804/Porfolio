import React from 'react'
import { Link } from 'react-router-dom'

const Contacto = () => {
  return (
    <div id='fondoContacto' className='divContacto'>

      <div className='divTitleContacto'>
        <h1>LET'S TELL<br/> YOUR STORY</h1>
      </div>

      <div className='divContactFollow'>
        <div className='divContactoContacto'>

          <h1>Contact</h1>

          <div>
            <h4>matiasalonso88@gmail.com</h4>
            <h4>whatsApp +54 9 11 3355-4248</h4>
          </div>

        </div>

        <div className='divFollow'>

          <h1>Follow</h1>
          <div>
            <Link to={""}>
              <h4>LinkedIn</h4>
            
            </Link>
            <Link to={""}>
              <h4>GitHub</h4>
            
            </Link>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Contacto

