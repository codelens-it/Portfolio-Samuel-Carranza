import React from 'react'
import ContactForm from './ContactForm'
import './contact.css'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation(); // Hook para traducción


  return (
    <>
      <div id='contact' className="contact-container">
        <div className='title-container-contact'>
          <h2 className='title-contact'>{t("titles.title-contact")}</h2>
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact

