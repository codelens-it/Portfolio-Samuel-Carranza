import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState, useRef } from 'react';
import "./contact.css";


const ContactForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const emailConfirmRef = useRef(null);
    const messageRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        emailConfirm: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: false,
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

        const { name, email, emailConfirm, message } = formData;

        let formIsValid = true;

        if (!name.trim()) {
            setErrors((prevErrors) => ({ ...prevErrors, name: true }));
            nameRef.current.focus();
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
            sendEmail(event);
            alert("Formulario enviado correctamente");
            console.log(formData);

            // Reinicia los campos
            setFormData({
                name: "",
                email: "",
                emailConfirm: "",
                message: "",
            });
        }
    };


    //! Envio al mail de Samuel.
    const [result, setResult] = useState("");

    const sendEmail = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        //!!! Aca va el codigo que se saca de la pagina: https://web3forms.com/#start 
        //!! Se pone el mail y llegua a un correo con el codigo... y ya esta.
        formData.append("access_key", "ac53b12c-4486-4966-8cbe-e04c171a0f51"); 

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <>
            <div className="">
                <Form className="" onSubmit={handlerSubmit}>
                    <Form.Group className="form-group">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <div className='input-with-icon fullName'>
                            <Form.Control
                                ref={nameRef}
                                name="name"
                                type="text"
                                placeholder="Ingresa tu nombre y apellido"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? "input-error" : ""}
                            />
                        </div>
                        {errors.name && <div className="alert alert-warning">El campo es obligatorio.</div>}
                    </Form.Group>

                    <Form.Group className="form-group">
                        <Form.Label>Email</Form.Label>
                        <div className='input-with-icon email'>
                            <Form.Control
                                ref={emailRef}
                                name="email"
                                type="email"
                                placeholder="Ingresa tu email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? "input-error" : ""}
                            />
                        </div>
                        {errors.email && <div className="alert alert-warning">El email es obligatorio.</div>}
                    </Form.Group>

                    <Form.Group className="form-group">
                        <Form.Label>Confirmación del Email</Form.Label>
                        <div className='input-with-icon email'>
                            <Form.Control
                                ref={emailConfirmRef}
                                name="emailConfirm"
                                type="email"
                                placeholder="Confirma tu email"
                                value={formData.emailConfirm}
                                onChange={handleChange}
                                className={errors.emailConfirm ? "input-error" : ""}
                            />
                        </div>
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
            </div>
        </>
    )
}

export default ContactForm
