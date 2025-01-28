import React from "react";
import "./section.css"; 

const Section = ({ children, customStyle, className = "", id }) => {
  return (
    <section 
      id={id} 
      className={`section-container ${className}`} 
      style={customStyle}
    >
      {children}
    </section>
  );
};

export default Section;