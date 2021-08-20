import React, { Component } from "react";
import {
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export class AboutCard extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: " column",
          alignItems: "center",
          marginTop: "10rem",
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
                  <div style={{background:"#f2f2f2"}}>
                    <Card.Title >
                      <button
                        variant="primary"
                        style={{ border: "none", background: "none",float:"right" }}
                      >
                        favorite💙
                      </button>
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
      </div>
    );
  }
}

export default AboutCard;
