import React from "react";
import "./experience.css";
import { Timeline } from "./TimeLine";
import Polaroid from '../polaroid/Polaroid';
import { useTranslation } from "react-i18next";

export interface ExperienceItem {
  name: string;
  company: string;
  "start-date": string;
  "end-date": string;
  summary: string;
}


const Experience = () => {
  const { t } = useTranslation();

  // Convertir el resultado de t() al tipo esperado
  const experiences = t("experience", { returnObjects: true }) as ExperienceItem[];

  return (
    <div id="experience" className="Experience-container">
        <div className="title-container-experience">
            <h2>{t('titles.experience')}</h2>
        </div>
        <div className="timeline-container">
            <Timeline experiences={experiences} />
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