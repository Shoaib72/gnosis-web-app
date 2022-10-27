
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);
    const auth = getAuth(app);
    const { setUser, setLoading } = useContext(AuthContext)
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleReset = () => {
        formRef.current.reset();
        setValidated(false);
    };
    const handlePassword = (e) => {
        if (!/(?=.{8,})/.test(e.target.value)) {
            setError('Password must be 8 characters long!')
            return;
        }
        setError("");
        setPassword(e.target.value);
    }
    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);

                setValidated(true);
                handleReset();
                setError("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            })

    }

    return (
        <Form ref={formRef} validated={validated} className='mx-5 border p-5 bg-info mt-5 rounded'>
            <p className='text-danger fw-bold'>{error}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>
            <div className='d-flex flex-column gap-3'>
                <Button onClick={handleLogIn} className='mx-auto' variant="primary" type="submit">
                    Log In
                </Button>
                <div className='mt-3'>
                    <Button className="ms-3 mb-1" variant="primary" type="submit">
                        Log In With Github
                    </Button>
                    <Button className="ms-3" variant="primary" type="submit">
                        Log In With Google
                    </Button>
                </div>
            </div>
            <p className='mt-3 fw-bold text-white'>
                Dont have an account? Please <Link className='text-white' to="/register">Register</Link>
            </p>
        </Form>
    );
};

export default Login;