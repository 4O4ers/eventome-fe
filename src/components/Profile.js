import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      showFavoret: false,
      data: [],
    };
  }
  componentDidMount(){this.getFavoret()}
  getFavoret = () => {
    
    let config = {
      method: "get",
      baseURL: `http://localhost:3001`,
      url: `/event`,
      data: this.state.data,
    };
    axios(config)
      .then((result) => {
        let newArr = result.data.map(({ _id, favorites }) =>{

          return ({_id, favorites})
        }).map(({_id})=>_id).join('^')
        console.log(newArr);
        this.setState({
          events: result.data,
        });
      })
      .catch((err) =>
        console.log("errrrrrrrrrrrrrrrrrrrrroooooooooooooooooooorrrrrrrrrrr")
      );
      let config2 = {
        method: "put",
        baseURL: `http://localhost:3001`,
        url: `/user/${this.props.auth0.user.email}`,
        data: newArr
      };
      axios(config2).then((result) => {
        console.log(result)       
        
      }).catch((err) => console.log('errrrrrrrrrrrrrrrrrrrrroooooooooooooooooooorrrrrrrrrrr'));
  };
  render() {
    return (
      <div>
        {this.props.isAut}
        <Container className="u-main" style={{ border: "solid black" }}>
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
                src={this.props.auth0.user.picture}
                alt={this.props.auth0.user.name}
              />
              <Card.Body>
                <Card.Title>{this.props.auth0.user.name}</Card.Title>
                <Card.Text>{this.props.auth0.user.email}</Card.Text>
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
                    <Link to="/favorites">Favorites</Link> /
                    <Link to="/Created">Created</Link> /
                    <Link to="/Attending">Attending</Link>
                  </Col>
                </Row>
                <div style={{ border: "red" }}>
                  <Router className="u-app-route">
                    <Switch>
                      <Route exact path="/favorites">
                        <h2>hello world</h2>
                      </Route>

                      <Route exact path="/Created">
                        <Profile />
                      </Route>

                      <Route exact path="/Attending">
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
      </div>
    );
  }
}

export default withAuth0(Profile);
