import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css'; // Importa tu archivo CSS donde se define el estilo del login
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de validación de credenciales aquí
        // Simplemente establecemos loggedIn como true para este ejemplo
        setLoggedIn(true);

        // Guardar usuario en localStorage
        localStorage.setItem('user', JSON.stringify({ email, password }));
    };

    // Si el usuario está autenticado, redirigirlo a la página de inicio
    if (loggedIn) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Iniciar Sesión</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico:</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su correo electrónico" value={email} onChange={handleEmailChange} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={handlePasswordChange} required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Iniciar Sesión
                    </Button>
                </Form>

                <div className="additional-options">
                    <p><a href="#">Crear cuenta</a></p>
                    <p><a href="#">Olvidé mi contraseña</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
