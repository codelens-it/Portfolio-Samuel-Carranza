import { useState } from 'react'
import Contact from './components/contact/Contact'
import AboutMe from './components/aboutMe/AboutMe'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Section from './components/section/Section'
import Portfolio from './components/portfolio/Portfolio'
//import './App.css'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Section>
        <Portfolio/>
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
