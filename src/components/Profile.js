import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Container className='u-main' style={{ border: 'solid black' }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>.</h1>
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
                <Link to='/favorites'>Favorites</Link> /
                <Link to='/Created'>Created</Link> /
                <Link to='/Attending'>Attending</Link>
              </Col>
            </Row>
            <div style={{ border: 'red' }}>
              <Router className='u-app-route' >
                  <Switch >

                    <Route exact path='/favorites'>
                      <h2>hello world</h2>
                    </Route>

                    <Route exact path='/Created'>
                      <Profile />
                    </Route>

                    <Route exact path='/Attending'>
                      <Button />
                    </Route>
                  </Switch>
                {/* <Footer/> */}
              </Router>

            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
