import React from 'react'
import ContactForm from './ContactForm'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className='title-container'>
          <h2 className='title-contact'>Contactame</h2>
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact

