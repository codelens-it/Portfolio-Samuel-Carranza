import { useState } from 'react'
import Contact from './components/contact/Contact'
import AboutMe from './components/aboutMe/AboutMe'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Section from './components/section/Section'
import Experience from './components/experience/Experience'
//import './App.css'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Section>
        <Experience />
      </Section>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <Contact />
      </Section>
      
      <Footer />
    </>
  )
}

export default App
