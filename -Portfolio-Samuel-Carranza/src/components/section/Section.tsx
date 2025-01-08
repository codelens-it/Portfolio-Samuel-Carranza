import React from "react";
import "./section.css"; 

const Section = ({ children, customStyle, className = "" }) => {
  return (
    <section className={`section-container ${className}`} style={customStyle}>
      {children}
    </section>
  );
};

export default Section;