import React, {useState} from 'react'
import '../../scss/styles.scss'
import menuOpen from '../../assests/img/icons/iconMenuOpenH.png'
const NavBar = () => {

    const [active, setActive] = useState("nav__menu")

    const navToggle = () =>{
        active === "nav__menu"
            ? setActive(" nav__menu nav__active")
            : setActive ("nav__menu");
    }

  return (
    <div>
        
        <div className='icono-menu'>
            <img src={menuOpen} alt='' onClick={navToggle} id='icono-menu'/>
        </div>

        <div className='cont-menu active' id='menu'>
            <ul className={active}>
                <li>Home</li>
                <li>Work With Me</li>
                <li>About Me</li>
                <li>Contact</li>
            </ul>
        </div>
        <div></div>
        <div></div>

    </div>
  )
}

export default NavBar