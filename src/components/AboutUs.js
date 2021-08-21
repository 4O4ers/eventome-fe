import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Form, Row, Col, Button, Container, Image } from 'react-bootstrap';
// import hamza from '../components/Images/hamza.jpg';
// import balqees from '../components/Images/balqees.jpeg';
// import ali from '../components/Images/ali.jpeg';
// import adham from '../components/Images/adham.jpeg';

export class About extends Component {
    render() {
        return (
            <div>
                <h1>.</h1>
                <h1 className="headerAboutUsClass" >MEET OUR TEAM</h1>
                <p className="HeaderParClass">We are all very different. We were born in different cities, at different times, we love different music,
                    food, movies. But we have something that unites us all.
                    It is our company. We are its heart. We are not just a team, we are a family. </p>


                <Container className="infoClass">
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://static.thenounproject.com/png/3162143-200.png" />
                            <h3>Creativity</h3>
                            <p>we have the  ability to think outside the box. We make decisions, create something new and generate a lot of ideas.</p>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/responsive-2090858-1770932.png" />
                            <h3>Resposive</h3>
                            <p>We care about providing a good and consistent experience on all types of devices , so the website is designed to respond to
                                the size of the screen  and provide an intuitive experience for every visitor.</p>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src="https://static.thenounproject.com/png/91870-200.png" />
                            <h3>Unique Styles</h3>
                            <p>Style is one of the most important things on the site, so we made an attractive style by made a simple design but unique in the same time </p>
                        </Col>
                    </Row>
                </Container>
{/* 
                <Carousel className="carouselClass">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hamza}
                            alt="Hamza Ahmad"
                        />
                        <Carousel.Caption>
                            <h3>Hamza Ahmad</h3>
                            <p>Software Development</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={balqees}
                            alt="Balqees Alfasatlah"
                        />

                        <Carousel.Caption>
                            <h3>Balqees Alfasatlah</h3>
                            <p>Software Development</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ali}
                            alt="Ali Alhjouj"
                        />

                        <Carousel.Caption>
                            <h3>Ali Alhjouj</h3>
                            <p>Software Development</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={adham}
                            alt="Adham"
                        />

                        <Carousel.Caption>
                            <h3>Adham</h3>
                            <p>Software Development</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}



                <div className="contactClass" >
                    <h3>Contact Us</h3>

                    <Row className="mb-3" >
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                    </Row>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="outline-dark">Send</Button>
                </div>










            </div>
        )
    }
}

export default About
