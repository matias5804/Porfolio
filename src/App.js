import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './components/Pages/AboutMe'
import Contacto from './components/Pages/Contacto'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import WorkWithMe from './components/Pages/WorkWithMe'

const App = () => {
  return (
    <div>
        <BrowserRouter>

        <Routes> 
            <Route path="/" element={<Home greeting={'HOME'} />} />
            <Route path="/Pages/Contacto" element={<Contacto/>}/>
            <Route path="/Pages/Services" element={<Services/>}/>
            <Route path="/Pages/AboutMe" element={<AboutMe/>}/>
            <Route path="/Pages/WorkWithMe" element={<WorkWithMe/>}/>

        </Routes> 
  
        </BrowserRouter>
    </div>
  )
}

export default App