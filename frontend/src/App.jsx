import React from 'react'
import Introduction from './components/Introduction'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Contact from './components/Contact'
import CodingProfile from './components/CodingProfile'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>
      <Navbar/>
      <Introduction/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Certification/>
      <CodingProfile/>
      <Contact/>
      <ToastContainer />
    </>
  )
}

export default App
