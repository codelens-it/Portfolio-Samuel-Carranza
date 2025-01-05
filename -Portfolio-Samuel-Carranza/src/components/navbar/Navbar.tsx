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
      if (!menuOpen) {
          document.body.classList.add('open');
      } else {
          document.body.classList.remove('open');
      }
  };
  
    const closeMenuOnClick = () => {
      setMenuOpen(false);
    };

  return (
    <header className={menuOpen ? 'open' : ''}>     
        <button
          className="navbar-burger"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="menu">
        </button>
      <div className={`menu ${menuOpen ? 'visible' : ''}`}>
        <a href="#inicio" className="navbar-logo">
          <img src="/Logo-completo.svg" alt="Logo Samuel Carranza" />
        </a>
        <nav>
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Sobre Mí</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contacto">Contacto</a>
            <div className="navbar-language" onClick={handleLanguageToggle}>
              <picture className='icon-language-container'>
                <img className='icon-language'  src="/icons/icon-language.svg" alt="icono de mundo" />
              </picture>
              <span className='language'>{language}</span>
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;