import { useState } from 'react'
import Contact from './components/contact/Contact'
import AboutMe from './components/aboutMe/AboutMe'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Section from './components/section/Section'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'



function App() {

  return (
   <>
      <Navbar />
      <Hero />
      <Section id={'experience'}>
        <Experience />
      </Section>
      <Section id={'portfolio'}>
        <Portfolio/>
      </Section>
      <Section id={'about-me'}>
        <AboutMe />
      </Section>
      <Section id={'contact'}>
        <Contact />
      </Section>
      <Footer />
    </>
  )
}

export default App
