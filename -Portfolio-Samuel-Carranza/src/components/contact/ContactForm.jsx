import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import "./contact.css";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const { t, i18n } = useTranslation(); // Hook para traducción

  const Modal1Text1 = t("modal1.text1") 
  const Modal1Text2 = t("modal1.text2") 
  const Modal2Text1 = t("modal2.text1") 
  const Modal2Text2 = t("modal2.text2") 


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [msjApi, setMsjApi] = useState({
    title: "",
    text: "",
  });

  const closeModal = () => setModalIsOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    emailMismatch: false,
    message: false,
    shortMessage: false,
  });

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,33}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => {
      let newErrors = { ...prevErrors };

      if (name === "name") {
        newErrors.name = !nameRegex.test(value);
      } else if (name === "email") {
        newErrors.email = !emailRegex.test(value);
      } else if (name === "message") {
        newErrors.message = value.trim().length < 10;
      }

      return newErrors;
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;
    let formIsValid = true;

    if (!name.trim() || !nameRegex.test(name)) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
      nameRef.current.focus();
      formIsValid = false;
    }

    if (!email.trim() || !emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
      if (formIsValid) emailRef.current.focus();
      formIsValid = false;
    }

    if (!message.trim() || message.length < 10) {
      setErrors((prevErrors) => ({ ...prevErrors, message: true }));
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }

    if (message.length < 10) {
      setErrors((prevErrors) => ({ ...prevErrors, shortMessage: true }));
      if (formIsValid) messageRef.current.focus();
      formIsValid = false;
    }

    if (formIsValid) {
      //Enviar Mail a SAMUEL
      sendEmail(event);
      console.log(formData);

      // Reinicia los campos
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  //! Envio al mail de Samuel.
  const [result, setResult] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    const { name, email } = formData;
    setResult("Sending....");
    const formDatas = new FormData(event.target);

    //!!! Aca va el codigo que se saca de la pagina: https://web3forms.com/#start
    //!! Se pone el mail y llegua a un correo con el codigo = access_key... y ya esta.
    formDatas.append("access_key", "ac53b12c-4486-4966-8cbe-e04c171a0f51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDatas,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      //!Modal de exito
      setModalIsOpen(true);
      setMsjApi({
        title: t("modal1.title"),
        text: `${name}${Modal1Text1}${email}${Modal1Text2}`,
      });
    } else {
      //!modal de error
      setModalIsOpen(true);
      setMsjApi({
        title: t("modal2.title"),
        text: `${name}${Modal2Text1}${email}${Modal2Text2}`,
      });
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="container-form-section">
        <Form className="form-container" onSubmit={handlerSubmit}>
          <Form.Group className="form-group">
            <Form.Label>{t("contact-form.full-name")}</Form.Label>
            <div className="input-with-icon fullName">
              <Form.Control
                ref={nameRef}
                name="name"
                type="text"
                placeholder={t("contact-form.name-placeholder")}
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
            </div>
            {errors.name && (
              <div className="alert alert-warning">
                {t("contact-form.errorName")}
              </div>
            )}
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>{t("contact-form.email")}</Form.Label>
            <div className="input-with-icon email">
              <Form.Control
                ref={emailRef}
                name="email"
                type="email"
                placeholder={t("contact-form.email-placeholder")}
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
            </div>
            {errors.email && (
              <div className="alert alert-warning">
                {t("contact-form.errorEmail")}
              </div>
            )}
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>{t("contact-form.message")}</Form.Label>
            <Form.Control
              ref={messageRef}
              name="message"
              as="textarea"
              placeholder={t("contact-form.message-placeholder")}
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "input-error" : ""}
              maxLength={200}
            />
            {errors.message && (
              <div className="alert alert-warning">
                {t("contact-form.errorMsj")}
              </div>
            )}
          </Form.Group>
          <Button type="submit" variant="primary" className="contact-button">
            Enviar
          </Button>
          {modalIsOpen && (
            <Modal
              text={msjApi.text}
              title={msjApi.title}
              onClose={modalIsOpen}
              onCloseModal={closeModal}
            />
          )}
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
