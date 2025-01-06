import React from "react";
import "./polaroid.css"; // Archivo CSS para los estilos

const Polaroid = ({ image, alt, size = "small", customStyle }) => {
  return (
    <div className={`polaroid-container ${size}`} style={customStyle}>
      <img src={image} alt={alt} className="polaroid-image" />    </div>
  );
};

export default Polaroid;