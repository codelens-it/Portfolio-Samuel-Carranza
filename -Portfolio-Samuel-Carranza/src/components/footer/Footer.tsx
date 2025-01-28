import React from "react";
import "./footer.css"; // Archivo CSS externo
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation(); // Hook para traducción
  return (
    <footer>
      <div className="foteer-container">
        <div className="footer-logo">
            <a href="#hero" className="logo-icon-container">
                <img className="logo-icon" src="/Logo-completo.svg" alt="Logo Samuel Carranza" />
            </a>      
            <span className="footer-phrase">{t('footer.slogan')}</span>
        </div>
        <div className="footer-social">
            <span>{t('footer.media-contact-message')}</span>
          <div className="container-redes">
             <a href="https://www.instagram.com/femt_10?igsh=MWxteGdiZnd2amkzaw==" target="_blank" aria-label="Twitter">
            <img className="icon-instagram" src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/samuel-carranza-754c25/" target="_blank" aria-label="LinkedIn">
            <img className="icon-linkedin" src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-nav">
            <nav>
                <div className="links">
                  <a href="#hero">{t('titles.home')}</a>
                  <a href="#about-me">{t('titles.about')}</a>
                  <a href="#experience">{t('titles.experience')}</a>
                </div>
                <div className="links">                   
                  <a href="#portfolio">{t('titles.portfolio')}</a>
                  <a href="#contact">{t('titles.navbar-contact')}</a>
                </div>
            </nav>
        </div>
      </div>
      <div className="copyright">
        <span className="copyright-content">{t('footer.copyright')}</span>
      </div>
    </footer>
  );
};

export default Footer;
