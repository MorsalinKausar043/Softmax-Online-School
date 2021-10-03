import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import Carousel from './Carousels';
import Card from "./Card";

const Home = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="my-2">
                        <Carousel/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;