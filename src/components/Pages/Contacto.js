import {  WhatsAppOutlined,MailOutlined ,LinkedinOutlined ,GithubOutlined } from '@ant-design/icons';
import React from 'react'

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
            <h3><MailOutlined className='iconContact' />  matiasalonso88@gmail.com</h3>
            <h3><WhatsAppOutlined className='iconContact'/>  +54 9 11 3355-4248</h3>
          </div>
        </div>

        <div className='divFollow'>
          <h1>Follow</h1>
          <div className='divRedesContacto'>
            <a target='_blank' rel='noreferrer' href='https://github.com/matias5804'>
              <GithubOutlined className='iconContact' style={{color:'white'}} />
              <h3>GitHub</h3>
            </a>
            
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/matiasmalonso/'>
              <LinkedinOutlined className='iconContact' style={{color:'white'}} />
              <h3>LinkedIn</h3>
            </a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto

