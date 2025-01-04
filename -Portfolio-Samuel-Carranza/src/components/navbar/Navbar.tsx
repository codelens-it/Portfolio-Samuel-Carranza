import React, { useState } from 'react';
import './navbar.css'; 

const Navbar = () => {
  const [language, setLanguage] = useState('ES');

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === 'ES' ? 'EN' : 'ES'));
  };

    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenuOnClick = () => {
      setMenuOpen(false);
    };

  return (
    <header className={menuOpen ? 'open' : ''}>
      <a href="#inicio" className="navbar-logo">
        <img src="/Logo-completo.svg" alt="Logo Samuel Carranza" />
      </a>
      <button
        className="navbar-burger"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="menu">
      </button>
      <div className={`menu ${menuOpen ? 'visible' : ''}`}>
        <nav className="navbar">
            <ul className="navbar-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-mi">Sobre Mí</a></li>
              <li><a href="#experiencia">Experiencia</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
      </div>
      <div className="navbar-language" onClick={handleLanguageToggle}>
              {language}
      </div>
    </header>
  );
};

export default Navbar;