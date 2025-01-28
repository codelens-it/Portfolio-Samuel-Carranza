import React from "react"
import { useTranslation, Trans } from 'react-i18next'
import "./hero.css"

const Hero = () => {
  const { t } = useTranslation();

  return(
    <section id="hero" className="overlay">
      <div className="hero-text">
        <div>
          <span>{t('home.greeting')}</span><span className="camera-icon">📷</span>
        </div>
        <h1>
          <Trans
          i18nKey={'home.role'}
          defaults="Fotógrafo <br/> Editor de videos"
          />
        </h1>
      </div>
      <div className="hero-media">
        <a href="https://www.linkedin.com/in/samuel-carranza-754c25/" target="_blank"><img className="media-logo linkedin" src="/icons/linkedin.svg" alt="LinkedIn" /></a>
        <a href="https://www.instagram.com/femt_10?igsh=MWxteGdiZnd2amkzaw%3D%3D" target="_blank"><img  className="media-logo instagram"src="/icons/instagram.svg" alt="Instagram" /></a>
      </div>
    </section>
  )
}

export default Hero;
