import React from 'react';
import "./footer.css";
import { Container, Row , Col } from 'react-bootstrap';
import img from "../images/Untitled-1-copy.png";
import Playstore_img from "../images/ssss-300x106.png";
import pay_icon_images from "../images/paywith_mobile_versionW.png";

const Footer = () => {
    return (
        <>
            <footer className="main_footer">
                <Container className="py-2">
                    <Row>
                        <Col lg={4} className="col-6 col-md-4 m-auto">
                            <figure>
                                <img className="images" src={img} alt="icon_img" />
                            </figure>
                            <figure>
                                <img className="images" src={Playstore_img} alt="playstore_img" />
                            </figure>
                        </Col>
                        <Col lg={4} className="col-6 col-md-4 mx-auto">
                            <h5 className="text-light">Your Payment</h5>
                            <figure>
                                <img src={pay_icon_images} className="pay_icon_pic" alt="pay_icon_images" />
                            </figure>
                        </Col>
                        <Col lg={4} className="col-6 col-md-4 m-auto text-light">
                            <h4>Support</h4>
                            <ul>
                                <li>Term Conditions</li>
                                <li>Refaund</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;