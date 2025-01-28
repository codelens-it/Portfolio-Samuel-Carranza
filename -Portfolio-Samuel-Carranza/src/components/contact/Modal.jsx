import React from "react";
import "./contact.css";
import { useState } from "react";
import PropTypes from "prop-types";


const Modal = ({text, title, onClose, onCloseModal}) => {

  return (
    <div className={onClose?("modal is-open"):("modal")} >
      <div className="modal-conteiner">
        <picture className="logo-container-modal">
          <img className="logo-modal" src="/logo-completo-gris.svg" alt="logo Samuel Carranza" />
        </picture>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="modal-cloes" onClick={onCloseModal}>Cerrar</button>
      </div>
    </div>
  );
};

Modal.propTypes={
text: PropTypes.string,
title: PropTypes.string,
onClose: PropTypes.bool,
onCloseModal: PropTypes.func.isRequired
}

export default Modal;
