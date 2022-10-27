
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";



const Login = () => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);
    const navigate = useNavigate();
    const auth = getAuth(app);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
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
    };
    const handleGoogleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);


            });
    };
    const handleLogIn = () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);

                setValidated(true);
                handleReset();
                setError("");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            })

    };
    const handleGithubLogin = () => {
        setLoading(true)
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError("");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
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
                    <Button onClick={handleGithubLogin} className="ms-3 mb-1" variant="primary" type="submit">
                        Log In With Github
                    </Button>
                    <Button onClick={handleGoogleLogin} className="ms-3" variant="primary" type="submit">
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