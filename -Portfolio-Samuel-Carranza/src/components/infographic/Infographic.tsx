import React, { useState } from "react";
import "./infographic.css"; //
import CardInfographic from "./CardInfographic";
import { useTranslation } from "react-i18next";


// Componente principal
const InfographicSection = () => {
    const { t } = useTranslation()
    const BASE_IMAGE_PATH = '/images/infographic/';

    const images = [
        `${BASE_IMAGE_PATH}1.webp`,
        `${BASE_IMAGE_PATH}2.webp`,
        `${BASE_IMAGE_PATH}3.webp`,
        `${BASE_IMAGE_PATH}4.webp`,
        `${BASE_IMAGE_PATH}5.webp`,
        `${BASE_IMAGE_PATH}6.webp`,
        `${BASE_IMAGE_PATH}7.webp`,
        `${BASE_IMAGE_PATH}8.webp`
    ];


  return (
    <div className="infographic-section">
        <h3>{t('titles.inphography')}</h3>
        <h4>{t('titles.inphography-subtitle')}</h4>
        <div className="card-container">
            {images.map((image, index) => (
                <CardInfographic key={index} image={image} />
            ))}
        </div>
    </div>
  );
};

export default InfographicSection;
