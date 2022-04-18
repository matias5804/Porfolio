import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import Contacto from '../Pages/Contacto'
import Home from '../Pages/Home'
import WorkWithMe from '../Pages/WorkWithMe'
import Cv from '../Pages/Cv'
import Services from '../Pages/Services'

const Footer = () => {
  return (
    <div className='footer'>
        <ul className="ulFooter">
            <Link to="/" element={<Home/>} className=' linkMenuFooter'>
                <li className='nav__item'>Home</li>
            </Link>

            <Link to="../Pages/WorkWithMe" element={<WorkWithMe/>} className=' linkMenuFooter'>
                <li className='nav__item'>Work With Me</li>
            </Link>

            <Link to="../Pages/Services" element={<Services/>} className=' linkMenuFooter'>
                <li className='nav__item '>Services</li>
            </Link>

            <Link to="../Pages/Contacto" element={<Contacto/>} className=' linkMenuFooter'>
                <li className='nav__item'>Contact  </li>
            </Link>

            <Link to="../Pages/Cv" element={<Cv/>} className=' linkMenuFooter'>
                <li className='nav__item '>Ver CV  </li>
            </Link>
        </ul>
        
        <div className='divGitLinkFooter'>
            <div className='divGitHubFooter'></div>
            <div className='divLinkedFooter'></div>
        </div>
    </div>
  )
}

export default Footer