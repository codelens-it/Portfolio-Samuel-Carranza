import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState, useRef } from 'react';
import "./aboutMe.css";


const ContactForm = () => {

    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const emailConfirmRef = useRef(null);
    const messageRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        emailConfirm: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        fullName: false,
        email: false,
        emailConfirm: false,
        emailMismatch: false,
        message: false,
        shortMessage: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === 'message') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                message: value.trim().length < 10,
                shortMessage: value.trim().length < 10, // Muestra msj en tiempo real
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: false, emailMismatch: false }));
        }
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        const { fullName, email, emailConfirm, message } = formData;

        let formIsValid = true;

        if (!fullName.trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, name: true }));
            fullNameRef.current.focus();
            formIsValid = false;
        }

        if (!email.trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, email: true }));
            if (formIsValid) emailRef.current.focus();
            formIsValid = false;
        }

        if (!emailConfirm.trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, emailConfirm: true }));
            if (formIsValid) emailConfirmRef.current.focus();
            formIsValid = false;
        }

        if (email !== emailConfirm) {
            setErrors((prevErrors) => ({ ...prevErrors, emailMismatch: true }));
            if (formIsValid) emailConfirmRef.current.focus();
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
            alert("Formulario enviado correctamente");
            console.log(formData);

            // Reinicia los campos
            setFormData({
                fullName: "",
                email: "",
                emailConfirm: "",
                message: "",
            });
        }
    };


    return (
        <>
            <Form className="" onSubmit={handlerSubmit}>
                <Form.Group className="form-group">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control
                        ref={fullNameRef}
                        name="fullName"
                        type="text"
                        placeholder="Ingresa tu nombre y apellido"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? "input-error" : ""}
                    />
                    {errors.fullName && <div className="alert alert-warning">El campo es obligatorio.</div>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        ref={emailRef}
                        name="email"
                        type="email"
                        placeholder="Ingresa tu email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && <div className="alert alert-warning">El email es obligatorio.</div>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Confirmación del Email</Form.Label>
                    <Form.Control
                        ref={emailConfirmRef}
                        name="emailConfirm"
                        type="email"
                        placeholder="Confirma tu email"
                        value={formData.emailConfirm}
                        onChange={handleChange}
                        className={errors.emailConfirm ? "input-error" : ""}
                    />
                    {errors.emailConfirm && <div className="alert alert-warning">La confirmación de email es obligatoria.</div>}
                    {errors.emailMismatch && <div className="alert alert-warning">Los emails no coinciden.</div>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        ref={messageRef}
                        name="message"
                        as="textarea"
                        placeholder="Escriba tu mensaje aquí"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "input-error" : ""}
                        maxLength={200}
                    />
                    {errors.message && <div className="alert alert-warning">El mensaje debe tener al menos 10 caracteres.</div>}

                </Form.Group>

                <Button type="submit" variant="primary" className='contact-button' >
                    Enviar
                </Button>
            </Form>

        </>
    )
}

export default ContactForm
