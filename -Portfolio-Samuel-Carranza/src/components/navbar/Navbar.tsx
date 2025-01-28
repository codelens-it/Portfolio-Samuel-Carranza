import React, { useState } from 'react';
import './navbar.css'; 
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Hook para traducción
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
  
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute('href');
      if (href) {
        e.preventDefault();
        setMenuOpen(false);
        document.body.classList.remove('open');
        
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const handleLanguageToggle = () => {
      const newLang = i18n.language === 'es' ? 'en' : 'es';
      i18n.changeLanguage(newLang); // Cambia el idioma
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
        <a href="#hero" className="navbar-logo" onClick={handleLinkClick}>
          <img src="/Logo-completo.svg" alt="Logo Samuel Carranza" />
        </a>
        <nav>
            <a href="#hero" onClick={handleLinkClick}>{t('titles.home')}</a>
            <a href="#about-me" onClick={handleLinkClick}>{t('titles.about')}</a>
            <a href="#experience" onClick={handleLinkClick}>{t('titles.experience')}</a>
            <a href="#portfolio" onClick={handleLinkClick}>{t('titles.portfolio')}</a>
            <a href="#contact" onClick={handleLinkClick}>{t('titles.navbar-contact')}</a>
            <div className="navbar-language" onClick={handleLanguageToggle}>
              <picture className='icon-language-container'>
                <img className='icon-language'  src="/icons/icon-language.svg" alt="icono de mundo" />
              </picture>
              <button className="language">{i18n.language.toUpperCase()}</button>
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;