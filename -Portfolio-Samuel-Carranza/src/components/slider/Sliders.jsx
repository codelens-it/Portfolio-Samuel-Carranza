import React from "react";
import Slider from "./Slider";

const Sliders = () => {
  const mockImgs = [
    "public/polaroids-prueba/polaroid1.webp",
    "public/polaroids-prueba/polaroid2.webp",
    "public/polaroids-prueba/polaroid3.webp",
  ];
  return (
    <div>
      <Slider imgs={mockImgs} />
    </div>
  );
};

export default Sliders;
