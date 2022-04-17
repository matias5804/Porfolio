import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBarDos from './components/navBar/NavBarDos'

import Contacto from './components/Pages/Contacto'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import WorkWithMe from './components/Pages/WorkWithMe'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <NavBarDos/>

        <Routes> 
            <Route path="/" element={<Home greeting={'HOME'} />} />
            <Route path="/Pages/Contacto" element={<Contacto/>}/>
            <Route path="/Pages/Services" element={<Services/>}/>
            <Route path="/Pages/WorkWithMe" element={<WorkWithMe/>}/>
            <Route path="*" element={<Navigate to="/" />} />

        </Routes> 
  
        </BrowserRouter>
    </div>
  )
}

export default App