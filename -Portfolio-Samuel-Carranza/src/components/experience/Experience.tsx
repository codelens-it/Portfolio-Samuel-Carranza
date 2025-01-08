import React from "react";
import "./experience.css";
import { Timeline } from "./TimeLine";
import Polaroid from '../polaroid/Polaroid';

const data = {
    "experience": [
    {
      "name": "Investigación -FONDO UCA 'La situación de la población adulta mayor salvadoreña a inicios de la década del envejecimiento saludable'",
      "company": "UCA - Universidad Centroamericana José Simeón Cañas",
      "start-date": "Enero 2022",
      "end-date": "Octubre 2023",
      "summary": "Búsqueda y recolección de datos. Redacción de documentos técnicos/científicos. Desarrollo metodológico y construcción de herramientas de recolección de información. Investigación de campo/ recolección de datos. Construcción de artículo científico"
    },
    {
      "name": "Instructoría y coordinación de prácticas profesionales de estudiantes de comunicaciones",
      "company": "UCA - Universidad Centroamericana José Simeón Cañas",
      "start-date": "Agosto 2023",
      "end-date": "Diciembre 2023",
      "summary": "Instructoría de contenido teórico y práctico en desarrollo de procesos de diagnóstico y comunicación interna. Seguimiento y evaluación de estudiantes desempeñando prácticas profesionales. Acompañamiento y correción de campañas y estrategias propuestas por estudiantes."
    },
    {
      "name": "Video Editor",
      "company": "Thrive media",
      "start-date": "Junio 2024",
      "end-date": "Octubre 2024",
      "summary": "Traducción de contenido. Edición de video. Investigación de palabras clave para miniaturas. Edición de sonido."
    },
    {
      "name": "Copywriter",
      "company": "Publisoft",
      "start-date": "Julio 2024",
      "end-date": "Actualidad",
      "summary": "Investigación de palabras clave. Creación de contenido SEO. Gestión de Google Search Console. Gestión de Ahrefs. Optimización web UX/UI. Diseño e implementación de estrategias de crecimiento."
    }
  ]
}

const Experience = ({ experiences }) => {
  return (
    <div className="Experience-container">
        <div className="title-container-experience">
            <h2>Experiencia</h2>
        </div>
        <div className="timeline-container">
            <Timeline experiences={data.experience} />
        </div>
        <div className="polaroid-container-experience">
            <Polaroid image="/polaroids-prueba/sobre-mi.webp" alt="Samuel Carranza" size="small" />
            <Polaroid image="/polaroids-prueba/sobre-mi.webp" alt="Samuel Carranza" size="small" />
            <Polaroid image="/polaroids-prueba/sobre-mi.webp" alt="Samuel Carranza" size="small" />
        </div>
    </div>
  );
};

export default Experience;