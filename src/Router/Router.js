import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {HomePage} from '../Pages/HomePage/HomePage'
import {AboutPage} from '../Pages/AboutPage/AboutPage'
import {TechStackPage} from '../Pages/TechStackPage/TechStackPage'
import {ProjectPage} from '../Pages/ProjectPage/ProjectPage'
import {ContactPage} from '../Pages/ContactPage/ContactPage'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/techstack" element={<TechStackPage/>} /> 
            <Route path="/projects" element={<ProjectPage/>}/>
            <Route path='/contact' element={<ContactPage/>} />
        </Routes>
    </BrowserRouter>
  )
}