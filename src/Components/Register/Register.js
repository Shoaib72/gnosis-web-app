import React from 'react';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './../Firebase/firebase.config'
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [validated, setValidated] = useState(false);
    const auth = getAuth(app);
    const { setUser } = useContext(AuthContext)
    const formRef = useRef(null);
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        if (!/(?=.{8,})/.test(e.target.value)) {
            setError('Password must be 8 characters long!')
            return;
        }
        setError("");
        setPassword(e.target.value);
    }
    const handleReset = () => {
        formRef.current.reset();
        setValidated(false);
    };
    const handleRegistration = (e) => {

        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                setUser(user)
                setError("");
                setValidated(true);
                handleReset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <Form ref={formRef} validated={validated} className='mx-5 border p-5 bg-info mt-5 rounded'>
            <p className='text-danger fw-bold'>{error}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control onBlur={handleName} type="name" placeholder="Enter your full name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>
            <Button onClick={handleRegistration} variant="primary" type="submit">
                Submit
            </Button>

            <p className='mt-3 fw-bold text-white'>
                Do you have an account? Please <Link className='text-white' to="/login">Login</Link>
            </p>
        </Form>
    );
};

export default Register;