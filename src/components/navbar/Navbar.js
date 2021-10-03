import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from "../images/logoSOS-copy.png";
import "./navbar.css";

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <NavLink className="text-decoration-none text-light" to="/">
                      <img className="icon_image" src={img} alt="icon_image" />  
                    </NavLink>
                    <Nav className="ms-auto">
                    <NavLink className="text-light text-decoration-none" to="/">Home</NavLink>
                    <NavLink className="text-light text-decoration-none mx-3" to="/about">About</NavLink>
                    <NavLink className="text-light text-decoration-none" to="/services">Services</NavLink>
                    <NavLink className="text-light text-decoration-none ms-3" to="/blog">Blog</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;