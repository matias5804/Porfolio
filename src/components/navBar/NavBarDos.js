import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Contacto from '../Pages/Contacto'
import Home from '../Pages/Home'
import WorkWithMe from '../Pages/WorkWithMe'
import './navBar.css'
import fotoPerfil from '../../assests/img/pictures/fotoPerfilCircular.png'
import Services from '../Pages/Services'
import Cv from '../Pages/Cv'



const NavBarDos = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
  return (


        <nav className='nav'>     
           
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <ul className={active}>
                <img src={fotoPerfil} alt=''/>
                <Link to="/" element={<Home/>} className='nav__link linkMenu'>
                    <li className='nav__item'>Home</li>
                </Link>
                
                <Link to="../Pages/WorkWithMe" element={<WorkWithMe/>} className='nav__link linkMenu'>
                    <li className='nav__item'>Work with me</li>
                </Link>

                <Link to="../Pages/Services" element={<Services/>} className='nav__link linkMenu'>
                    <li className='nav__item '>Services</li>
                </Link>

                <Link to="../Pages/Contacto" element={<Contacto/>} className='nav__link linkMenu'>
                    <li className='nav__item'>Contact  </li>
                </Link>

                <Link to="../Pages/Cv" element={<Cv/>} className='nav__link linkMenu'>
                    <li className='nav__item'>Resume</li>
                </Link>

                <div className='divGitLink'>
                   
                        
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/matiasmalonso/' className='linkLinked'>

                     <div className='divLinked'/>   
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/matias5804' className='linkLinked'>

                     <div className='divGitHub'></div>
                    </a>
                </div>

            </ul>

            <Link to="../Pages/Home">
                <div className='divNombre'>
                    <h1>Matias Alonso </h1>
                    <h5>Front-End Developer</h5>
                </div>
            </Link>

            {/*/boton whatsApp modo fixd , te envia directoi al chat con una pestaña nueva/*/}
            <a className='fixed-whatsapp' href="https://api.whatsapp.com/send?phone=541133554248'">
            </a>

        </nav>

  )
}

export default NavBarDos