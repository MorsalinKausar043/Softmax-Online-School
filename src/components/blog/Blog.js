import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./blog.css";

const Blog = () => {

    const [getApi, setGetApi] = useState([])

    useEffect(() => {
        fetch("./blog-api.json").
            then(res => res.json()).
            then(data => setGetApi(data))
    }, []);

    return (
        <>
            <Container className="py-5">
                <Row className="cards my-3">
                    <h2 className="blog_title">Blog</h2>
                    {
                        getApi.map((crrElm) => {
                            let { id, title, body, img } = crrElm;
                            return (
                                <Col key={id} lg={7} className="shadow p-2 my-2 rounded">
                                    <div>
                                      <figure>
                                           <img src={img} className="img-fluid" alt="blog_image" />
                                      </figure>
                                 </div>
                                 <div>
                                    <h3>{title}</h3>
                                    <p>{ body}</p>
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

export default Blog;