import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import Contacto from '../Pages/Contacto'
import Home from '../Pages/Home'
import WorkWithMe from '../Pages/WorkWithMe'
import Cv from '../Pages/Cv'
import Services from '../Pages/Services'

const FooterCv = () => {
  return (
    <div className='footerCV'>
        <div className='footerDos'>

            <ul className="ulFooter">
                <Link to="/" element={<Home/>} className=' linkMenuFooter'>
                    <li className='nav__item'>Home</li>
                </Link>

                <Link to="../Pages/WorkWithMe" element={<WorkWithMe/>} className=' linkMenuFooter'>
                    <li className='nav__item'>Work with me</li>
                </Link>

                <Link to="../Pages/Services" element={<Services/>} className=' linkMenuFooter'>
                    <li className='nav__item '>Services</li>
                </Link>

                <Link to="../Pages/Contacto" element={<Contacto/>} className=' linkMenuFooter'>
                    <li className='nav__item'>Contact  </li>
                </Link>

                <Link to="../Pages/Cv" element={<Cv/>} className=' linkMenuFooter'>
                    <li className='nav__item'>Resume</li>
                </Link>
            </ul>
            
            <div className='divGitLinkFooter'>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/matiasmalonso/' className='linkLinkedFooter'>

                 <div className='divLinked'/>   
                </a>
                <a target='_blank' rel='noreferrer' href='https://github.com/matias5804' className='linkLinkedFooter'>

                   <div className='divGitHub'></div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default FooterCv