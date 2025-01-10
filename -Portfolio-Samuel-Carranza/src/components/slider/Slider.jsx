import React from "react";
import { useState, useEffect } from "react";
import "./slider.css";
import PropTypes from "prop-types";

const Slider = ({ imgs }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const quantity = imgs?.length;

  const nextImg = () => {
    setCurrentImg(currentImg === quantity - 1 ? 0 : currentImg + 1);
  };

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? quantity - 1 : currentImg - 1);
  };

  if (!Array.isArray(imgs) || quantity === 0) return;

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 2800); // 3s

    return () => clearInterval(interval); 
  }, [currentImg, quantity]);

  return (
    <div className="slider-container">
      <button className="btn-slider" onClick={prevImg}>
        {"<-"}
      </button>
      {imgs.map((img, i) => (
        <div className={currentImg === i ? "slide active" : "slide"} key={img}>
          {i === currentImg && <img key={img} src={img} alt={"img ${i}"} />}
        </div>
      ))}
      <button className="btn-slider" onClick={nextImg}>
        {"->"}
      </button>
    </div>
  );
};

Slider.propTypes = {
  imgs: PropTypes.array.isRequired,
};

export default Slider;
