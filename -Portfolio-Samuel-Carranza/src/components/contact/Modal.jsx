import React from "react";
import "./contact.css";
import { useState } from "react";
import PropTypes from "prop-types";


const Modal = ({text, title, onClose, onCloseModal}) => {
//   const [isOpen, setIsOpen] = useState(true);
//   // const openModal = () => setIsOpen(false);
//   const closeModal = () => setIsOpen(false);
// // "modal is-open"
  return (
    <div className={onClose?("modal is-open"):("modal")} >
      <div className="modal-conteiner">
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
