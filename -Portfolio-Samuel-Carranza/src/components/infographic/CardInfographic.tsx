import React from "react";
import "./infographic.css"; 


const CardInfographic = ({ image }) => {
    return (
        <div className="card">
            <img src={image} alt="Infografía" />
        </div>
    );
};

export default CardInfographic;