import React from "react"
import "./hero.css"

const Hero = () => {
  return(
    <section id="hero">
      <span>Hola! Soy Samuel Carranza</span>
      <h1>Fotógrafo \n Editor de video</h1>
      <div className="hero-media">
        <a href=""><img className="media-logo" src="/public/icons/icon-linkedin.svg" alt="LinkedIn" /></a>
        <a href=""><img  className="media-logo"src="/public/icons/icon-instagram.svg" alt="Instagram" /></a>
      </div>
    </section>
  )
}

export default Hero;