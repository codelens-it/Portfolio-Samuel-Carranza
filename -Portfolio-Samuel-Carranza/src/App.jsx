import { useState } from 'react'
import Contact from './components/contact/Contact'
import AboutMe from './components/aboutMe/AboutMe'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
//import './App.css'


function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}

export default App
