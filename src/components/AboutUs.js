import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Container, Image } from 'react-bootstrap';
import adham from '../components/Images/adham.jpeg';

export class About extends Component {
  render() {
    return (
      <div style={{marginTop: '3.25rem'}}>
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

        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img class="img-fluid" src='https://ca.slack-edge.com/TNGRRLUMA-U0222A9LEBH-fbab9887da8f-512' alt='' />
                </div>
                <div class="team-content">
                  <h3 class="name">Hamza Ahmad</h3>
                  <h4 class="title">Web Developer</h4>
                </div>
                <ul class="social">
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true">.</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img class="img-fluid" src='https://ca.slack-edge.com/TNGRRLUMA-U022E185A5B-1f75b5157695-512' alt=''/>
                </div>
                <div class="team-content">
                  <h3 class="name">balqess Alfasatlah</h3>
                  <h4 class="title">Web Developer</h4>
                </div>
                <ul class="social">
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true">.</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img class="img-fluid" src={adham} alt=''/>
                </div>
                <div class="team-content">
                  <h3 class="name">Adham Mhaydat</h3>
                  <h4 class="title">Web Developer</h4>
                </div>
                <ul class="social">
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true">.</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img class="img-fluid" src='https://ca.slack-edge.com/TNGRRLUMA-U022H3JCZ7U-218a5a88076d-512' alt=''/>
                </div>
                <div class="team-content">
                  <h3 class="name">Ali Alhjouj</h3>
                  <h4 class="title">Web Developer</h4>
                </div>
                <ul class="social">
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true">.</a></li>
                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true">.</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contactClass" >
          <h3>Contact Us</h3>

          <Row className="mb-3" >
            <div className='input'>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className='btn-send'>
            <button className='btn btn-primary m-0 p-0 ' style={{width: '150px', height: '50px'}}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
