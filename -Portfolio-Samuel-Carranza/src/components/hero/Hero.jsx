import React from "react"
import "./hero.css"

const Hero = () => {
  return(
    <section id="hero" className="overlay">
      <div className="hero-text">
        <span>Hola! Soy Samuel Carranza</span>
        <h1>
          Fotógrafo 
          <br/> 
          Editor de videos
        </h1>
      </div>
      <div className="hero-media">
        <a href=""><img className="media-logo linkedin" src="/icons/linkedin.svg" alt="LinkedIn" /></a>
        <a href=""><img  className="media-logo instagram"src="/icons/instagram.svg" alt="Instagram" /></a>
      </div>
    </section>
  )
}

export default Hero;