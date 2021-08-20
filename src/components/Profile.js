import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "./Footer";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "3rem",
          flexDirection: "column",
        }}
      >
        <Card
          style={{
            width: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30rem",
          }}
        >
          <Card.Img
            variant="center"
            style={{ borderRadius: "50%", width: "10rem" }}
            src={user.picture}
            alt={user.name}
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Title>about</Card.Title>
            <Card.Text>something to write her...</Card.Text>
            <Button variant="primary" style={{}}>
              uppdate your profile
            </Button>
          </Card.Body>
        </Card>
        <div
          style={{
            marginTop: "3rem",
            borderStyle: "1px solid",
            width: "50rem",
          }}
        >
          <Container fluid>
            <Row>
              <Col>MY Events</Col>
            </Row>
            <Row>
              <Col>
                <Button>my events</Button>
                <Button>upp caming</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card
                  style={{
                    width: "45rem",
                  }}
                >
                  <div style={{ background: "#f2f2f2" }}>
                    <Card.Title>
                      <button
                        variant="primary"
                        style={{
                          border: "none",
                          background: "none",
                          float: "right",
                        }}
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
                      <span>Raghiting⭐ </span>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer/>
      </div>
    )
  );
};

export default Profile;
