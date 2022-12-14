import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ToggleButton from '../ToggleButton/ToggleButton';
import img from './../Assets/icon.png';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light" className='mb-4'>
            <Container>
                <Navbar.Brand className='d-flex align-middle justify-content-center'>
                    <Link className='me-1' to="/"><img style={{ height: '20px', width: '20px', marginTop: '6px' }} src={img} alt="" /></Link>
                    <Link className="text-decoration-none" to="/"><span className='text-danger fw-bold fs-1'>G</span><span className='text-white fs-1'>nosis</span></Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mt-2 fw-bold">
                        <Link className='text-decoration-none text-white ms-3' to="/home">Home</Link>
                        <Link className='text-decoration-none text-white ms-3' to="/courses">Courses</Link>
                        <Link className='text-decoration-none text-white ms-3' to="/blog">Blog</Link>
                        <Link className='text-decoration-none text-white ms-3' to="/faq">FAQ</Link>
                        <ToggleButton></ToggleButton>

                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Image className='me-2 ms-sm-4 mt-1' style={{ height: '35px', width: '35px' }}
                                            roundedCircle
                                            src={user?.photoURL}></Image>
                                        <Button className='fw-bold text-white' variant="info" onClick={handleLogOut}>Log out</Button>

                                    </>
                                    :
                                    <>
                                        <Link className='text-white text-decoration-none fw-bold' to='/login'>Login</Link>
                                    </>
                            }


                        </>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;