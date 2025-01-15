import React from "react"
import "./hero.css"

const Hero = () => {
  
  return(
    <section id="hero" className="overlay">
      <div className="hero-text">
        <div>
          <span>Hola! Soy Samuel Carranza</span><span className="camera-icon">📷</span>
        </div>
        <h1>
          Fotógrafo 
          <br/> 
          Editor de videos
        </h1>
      </div>
      <div className="hero-media">
        <a href=""><img className="media-logo linkedin" src="/icons/linkedin.svg" alt="LinkedIn" /></a>
        <a href="https://www.instagram.com/femt_10?igsh=MWxteGdiZnd2amkzaw%3D%3D"><img  className="media-logo instagram"src="/icons/instagram.svg" alt="Instagram" /></a>
      </div>
    </section>
  )
}

export default Hero;