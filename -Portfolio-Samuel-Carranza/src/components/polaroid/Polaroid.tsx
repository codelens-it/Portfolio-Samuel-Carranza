import React from "react";
import "./polaroid.css"; 

const Polaroid = ({ image, alt, size = "small" }) => {
  return (
    <div className={`polaroid-container ${size}`}>
      <img src={image} alt={alt} className="polaroid-image"  />    </div>
  );
};

export default Polaroid;