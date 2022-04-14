import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/styles.scss'
//import NavBar from '../navBar/NavBar'

import AboutMe from './AboutMe'
import Contacto from './Contacto'
import Services from './Services'
import WorkWithMe from './WorkWithMe'


const Home = () => {
  return (
    <div className='divHome'>       

        <div className='divHomePortada'>
            <div>
                <h2>Memorable sites</h2>
            </div>
            <h3>In a world that increasingly turns to virtuality, it is important to have an impressive virtual presence. I can help you turn your site into a site that customers will remember.</h3>
        </div>

        <div className='divButtonHome'>

            <Link to="/Pages/WorkWithMe" element={<WorkWithMe/>}>
                <button>WORK WITH ME</button>
            </Link>

            <Link to="/Pages/AboutMe" element={<AboutMe/>}>
                <button>ABOUT ME</button>
            </Link>

            <Link to="/Pages/Services" element={<Services/>}>
               <button>SERVICES</button>
            </Link>


            <Link to="/Pages/Contacto" element={<Contacto/>}>
                <button>CONTACT</button>
            </Link>
        </div>


    </div>
  )
}

export default Home