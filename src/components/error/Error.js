import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from "../images/download (2).png";
import "./error.css";

const Error = () => {
    return (
        <>
            <Container className="main_container">
                <Row>
                    <Col>
                        <figure>
                            <img src={img} className="error_img" alt="404_Error_Page" />
                        </figure>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NavLink className="btn btn-primary mb-3 btn" exact to="/">Home</NavLink>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Error;