import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h2 className='title-contact'><span className="underline">Contac</span>tame</h2>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact

