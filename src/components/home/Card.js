import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./home.css";
import useApiData from '../costumHooks/useApiData';
import { RiMoneyPoundBoxFill } from 'react-icons/ri';
import { AiFillFolderAdd } from 'react-icons/ai';
const Card = () => {
    const [Service] = useApiData();
    return (
        <>
            <Container className="py-3">
                <h3>Services</h3>
                <Row className="cards">
                    {
                        Service.slice(3).map((crrElm) => {
                            const { id,title,image , institiut , taka , technology} = crrElm;
                            return (
                                <Col key={id} lg={3} className="m-2 card">
                                    <div>
                                        <figure>
                                            <img src={image} className="card_img" alt="service_img" />
                                        </figure>
                                    </div>
                                    <div>
                                        <h3><small>{title}</small></h3>
                                        <h4><small> By : {institiut}</small></h4>
                                        <h4><small>In : {technology}</small></h4>
                                        <div className="card_footer">
                                            <h4><small><RiMoneyPoundBoxFill /> {taka}</small></h4>
                                            <h4><small><AiFillFolderAdd/> add to card</small></h4>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className="text-end">
                    <NavLink to="/services"> See More</NavLink>
                </div>
            </Container>
        </>
    );
};

export default Card;