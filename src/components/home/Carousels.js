import React from 'react';
import { Carousel } from "react-bootstrap";
import "./home.css";
import img from "./caro-images/download (1).jfif";
import img2 from "./caro-images/download (2).jfif";
import img3 from "./caro-images/download.jfif";

const Carousels = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src={img2}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src={img}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src={img3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carousels;