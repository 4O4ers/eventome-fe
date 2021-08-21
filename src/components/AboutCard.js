import React, { Component } from "react";
import {
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import '../App.css';

export class AboutCard extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
      rate: false,
    }
  }
  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: " column",
          alignItems: "center",
          marginTop: "10rem",
          borderRadius: '15px',
          border: 'solid red',
          maxWidth: 'fit-content'
        }}
      >
        <div style={{ width: "70%", marginBottom: "5rem" }}>
        </div>
        <div style={{ width: "70%" }}>
          <Container fluid>
            <Row>
              <Col>
                <Card
                  style={{
                    width: "45rem",
                  }}
                >
                  <div style={{ background: "black", padding: '0.25rem 0' }}>
                    <Card.Title style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', padding: '0.25rem'}}>
  
                        <img src={this.state.favorite ? 'https://img.icons8.com/ios-glyphs/30/ff0000/like--v2.png' : "https://img.icons8.com/ios-glyphs/30/ff0000/like.png"} alt='' onClick={() => this.setState({favorite: !this.state.favorite})}/>
                        <img src= {this.state.rate ? "https://img.icons8.com/ios-glyphs/30/ffff00/star--v2.png" : `https://img.icons8.com/ios-glyphs/30/ffff00/star.png`}  alt='' onClick={() => this.setState({rate: !this.state.rate})}/>
                    </Card.Title>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Card.Img
                      variant="top"
                      src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
                      style={{ width: "10rem" }}
                    />
                    <Card.Body>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Card.Title>Card Title</Card.Title>
                      </div>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Join Meeting</Button>
                      <span>number of particebant👥 </span>
                      <span>Raghiting⭐  </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    );
  }
}

export default AboutCard;
