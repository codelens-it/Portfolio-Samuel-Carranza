import React from "react";
import "./Footer.css"; // Archivo CSS externo

const Footer = () => {
  return (
    <footer>
      <div className="foteer-container">
        <div className="footer-logo">
            <a href="#" className="logo-icon-container">
                <img className="logo-icon" src="/Logo-completo.svg" alt="Logo Samuel Carranza" />
            </a>      
            <span className="footer-phrase">Pasión por cada detalle, perfección en cada frame.</span>
        </div>
        <div className="footer-social">
            <span>Contáctame por redes</span>
          <div>
             <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <img src="/icons/icon-instagram.svg" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <img src="/icons/linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-nav">
            <nav>
                <div className="links">
                    <a href="#inicio">Inicio</a>
                    <a href="#sobre-mi">Sobre Mí</a>
                    <a href="#experiencia">Experiencia</a>
                </div>
                <div className="links">                   
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </nav>
        </div>
      </div>
      <div className="copyright">
        <span className="copyright-content">©2025 Desarrollado por CodeLens</span>
      </div>
    </footer>
  );
};

export default Footer;