import React from 'react';
import { LANGUAGES } from '../../constants/index';
import './navbar.css'


const BtnLanguage = () => {
    const { i18n } = useTranslation();
  
    const handleLanguageChange = (code) => {
      i18n.changeLanguage(code); // Cambia el idioma
      const newPath = code === 'en' ? '/en' : '/';
      window.history.pushState(null, '', newPath); // Actualiza la URL
    };
  
    const currentLang = i18n.language;
  
    return (
      <div className="navbar-language">
        <picture className='icon-language-container'>
                <img className='icon-language'  src="/icons/icon-language.svg" alt="icono de mundo" />
        </picture>
        {LANGUAGES.map(({ label, code }) => (
          <button
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`language ${currentLang === code ? 'active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    );
  };
  
  export default BtnLanguage;

function useTranslation(): { i18n: any; } {
    throw new Error('Function not implemented.');
}
