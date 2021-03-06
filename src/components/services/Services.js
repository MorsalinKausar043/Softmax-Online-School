import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./services.css";
import useApiData from '../costumHooks/useApiData';
import { RiMoneyPoundBoxFill } from 'react-icons/ri';
import { AiFillFolderAdd } from 'react-icons/ai';

const Services = () => {
    const [Service] = useApiData();
    return (
        <>
            <Container className="py-3">
                <h3 className="card_title">Services</h3>
                <Row className="cards">
                    {
                        Service.map((crrElm) => {
                            const { id,title,image , institiut , taka , technology} = crrElm;
                            return (
                                <Col key={id} lg={3} className="m-2 card">
                                    <div>
                                        <figure title="Service Provide image">
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
            </Container>
        </>
    );
};

export default Services;