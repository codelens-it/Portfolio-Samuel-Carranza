import React from "react";
import { useState } from "react";
import "./aboutMe.css";
import { Button } from "react-bootstrap";
import ItemTool from "./ItemTool";
import Polaroid from "../polaroid/Polaroid";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t, i18n } = useTranslation(); // Hook para traducción
  
  const cvSamuelCarranza  = t("about.cvFile");
  
  const tools = [
    "Audition",
    "Illustrator",
    "Lightroom",
    "Microsoft Excel",
    "Microsoft Powerpoint",
    "Microsoft Word",
    "Photoshop",
    "Premiere",
    "Reaper",
    "Wix",
    "Wordpress",
  ];

  return (
    <div id="about" className="about-me-conatiner">
      <div className="title-container">
        {/* <h2><span className='underline'>Sobre</span> Mí</h2> */}
        <h2 className="title-about-me">{t("titles.about")}</h2>
      </div>

      <div className="first-container">
        <div className="right-column">
          <Polaroid
            image="/polaroids-prueba/sobre-mi.webp"
            alt="Samuel Carranza"
            size="large"
          />
        </div>
        <div className="left-column">
          {t("about.paragraphs", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>{paragraph}</p>
            )
          )}
        </div>
      </div>

      <div className="second-container">
        <p>{t("about.cv-message")}</p>
        <a
          href={t("about.routCv")}
          download={cvSamuelCarranza}
        >
          <Button className="button-cv">{t("about.download")}</Button>
        </a>
      </div>

      <div className="third-container">
        <h3>{t("titles.tools")}</h3>
        <div className="icon-container">
          {tools.map((tool, index) => (
            <ItemTool key={index} img={tool} title={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
