const toolsMock = [
  {
    img: "public/icons/adobe-icon.svg",
    title: "Adobe",
  },
  {
    img: "public/icons/adobe-icon.svg",
    title: "Adobo"
  },
  {
    img: "public/icons/adobe-icon.svg",
    title: "Adobe3"
  },
  {
    img: "public/icons/adobe-icon.svg",
    title: "Adobe4"
  }
]

import React from 'react'

import './aboutMe.css'
import { Button } from 'react-bootstrap';
import ItemTool from './ItemTool';
import Polaroid from '../polaroid/Polaroid';

const AboutMe = () => {


  const handleDownload = () => {
    const link = document.createElement('a');
    const cvEng = "public/cvs/Samuel-Carranza-CV-Eng.pdf";
    const cvEs = "public/cvs/Samuel-Carranza-CV-ESp.pdf";
    link.href = cvEng; // Ruta del archivo en la carpeta public
    link.download = 'Samuel-Carranza_Curriculum.pdf'; // Nombre con el que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className='about-me-conatiner'>

      <h2><span className='underline'>Sobre</span> Mí</h2>

      <div className='first-container'>
        <div className='right-column'>
          <Polaroid image="/polaroids-prueba/sobre-mi.webp" alt="Samuel Carranza" size="large" />
        </div>
        <div className='left-column'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus sed massa nec auctor. Nullam enim eros, maximus lobortis dolor a, tempus rutrum nisl. Praesent augue diam, molestie quis malesuada eget, efficitur id quam. Nullam porta metus augue, vel scelerisque felis eleifend at. Mauris non mattis odio. Ut tincidunt velit eget bibendum euismod. Sed pellentesque pulvinar nisi at blandit. Donec vel lacus ut magna pretium pulvinar. Nam pulvinar libero quis magna hendrerit tincidunt. Maecenas eu pharetra lectus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus sed massa nec auctor. Nullam enim eros, maximus lobortis dolor a, tempus rutrum nisl. Praesent augue diam, molestie quis malesuada eget, efficitur id quam. Nullam porta metus augue, vel scelerisque felis eleifend at. Mauris non mattis odio. Ut tincidunt velit eget bibendum euismod. Sed pellentesque pulvinar nisi at blandit. Donec vel lacus ut magna pretium pulvinar. Nam pulvinar libero quis magna hendrerit tincidunt. Maecenas eu pharetra lectus.</p>
        </div>
      </div>

      <div className='second-container'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus sed massa nec auctor. </p>
        <Button className="button-cv" onClick={handleDownload}>Descargar CV</Button>
      </div>

      <div className='third-container'>
        <h3>Herramientas</h3>
        <div className='icon-container'>
          {toolsMock.map((tool, index) => (
            <ItemTool
              key={index}
              img={tool.img}
              title={tool.title}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default AboutMe
