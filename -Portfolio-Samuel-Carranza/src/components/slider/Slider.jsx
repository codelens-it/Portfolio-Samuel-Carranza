import { useState, useEffect } from "react";
import "./slider.css";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';

const Slider = ({ imgs }) => {
  const { t } = useTranslation();
  const [currentImg, setCurrentImg] = useState(0);
  const quantity = imgs?.length;

  // Lógica para cambiar la imagen
  const nextImg = () => {
    setCurrentImg((prev) => (prev === quantity - 1 ? 0 : prev + 1));
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? quantity - 1 : prev - 1));
  };

  // Asegurarse de que no haya un intervalo si no hay imágenes
  useEffect(() => {
    if (quantity === 0) return; // No iniciar el intervalo si no hay imágenes

    const interval = setInterval(nextImg, 2800); // Cambiar cada 2.8 segundos
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [quantity]); // Dependencia en quantity para reiniciar el intervalo si cambia

  if (!Array.isArray(imgs) || quantity === 0) return null; // No renderizar si no hay imágenes

  return (
    <div className="photography-container">
      <h3>{t("titles.featured")}</h3>

      <div className="slider-container">

        <button className="btn-slider btn-left" onClick={prevImg}>
          <img src="/icons/arrow-left-icon.svg" alt="Previous" />
        </button>

        <div className="slider-wrapper">
          {imgs.map((img, i) => {
            const src = `/public/polaroids-prueba/${img}.webp`;
            return (
              <div
                className={`slide ${currentImg === i ? "active" : ""}`}
                key={img}
                style={{
                  transform: `translateX(-${currentImg * 100}%)`, // Desplaza el contenedor para mostrar solo la imagen activa
                }}
              >
                <img src={src} alt={`Imagen ${i + 1}`} />
              </div>
            );
          })}
        </div>

        <button className="btn-slider btn-right" onClick={nextImg}>
          <img src="/icons/arrow-right-icon.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  imgs: PropTypes.array.isRequired,
};

export default Slider;
