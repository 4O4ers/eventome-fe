import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


export class About extends Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign : "left", width : "20rem" , marginTop : "20px"  , padding : "20px" }} >Our Work</h1>
                <p style={{ width : "20rem"}}>We created this site" Eventome " that provides services in everything related to events , </p>
                <h2 style={{ textAlign : "center"}}>Meet Our Team</h2>

                <Carousel style={{width :"30%" , margin :"auto"}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.iconscout.com/icon/free/png-512/user-1648810-1401302.png"
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
                            src="https://cdn.iconscout.com/icon/free/png-512/user-1648810-1401302.png"
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
                            src="https://cdn.iconscout.com/icon/free/png-512/user-1648810-1401302.png"
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
                            src="https://cdn.iconscout.com/icon/free/png-512/user-1648810-1401302.png"
                            alt="Adham"
                        />

                        <Carousel.Caption>
                            <h3>Adham</h3>
                            <p>Software Development</p>
                        </Carousel.Caption>
                    </Carousel.Item> 
                </Carousel>
            </div>
        )
    }
}

export default About
