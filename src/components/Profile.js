import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profiled from "./Profiled.css";
import Vector from "../components/Images/Vector 3.png";
import Vector2 from "../components/Images/Vector 4.png";
import vector5 from "../components/Images/Vector 5.png";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      showFavoret: false,
      data: [],
      currentUser: {},
    };
  }
  componentDidMount() {
    let config = {
      method: "get",
      baseURL: `http://localhost:3001`,
      url: `/user`,
    };
    axios(config).then(res => {
      if ((res.data.filter(itm => itm.email === this.props.auth0.user.email)).length !== 0 && res.data.filter(itm => itm.email === this.props.auth0.user.email)[0] !== this.state.currentUser) {
        this.setState({ currentUser: res.data.filter(itm => itm.email === this.props.auth0.user.email)[0] });

      } else {
        let { name, email, picture } = this.props.auth0.user;
        let config = {
          method: "post",
          baseURL: `http://localhost:3001`,
          url: `/user`,
          data: { name, email, picture },
        };
        axios(config).then(res => {
          this.setState({ currentUser: res.data.filter(itm => itm.email === this.props.auth0.user.email)[0] });

        })
      }
      this.props.setCurrentUser(this.state.currentUser);
    })
    //console.log(this.state.currentUser);
  }

  getFavoret = () => {
    let config = {
      method: "get",
      baseURL: `http://localhost:3001`,
      url: `/event`,
      data: this.state.data,
    };
    axios(config)
      .then((result) => {
        let newArr = result.data
          .map(({ _id, favorites }) => {
            return { _id, favorites };
          })
          .map(({ _id }) => _id)
          .join("^");

        this.setState({
          events: result.data,
          showFavoret: true,
        });
        this.state.events.map(ele =>  console.log(ele.title) )

      })
      .catch((err) =>
        console.log("errrrrrrrrrrrrrrrrrrrrroooooooooooooooooooorrrrrrrrrrr")
      );

    // let config2 = {
    //   method: "put",
    //   baseURL: `http://localhost:3001`,
    //   url: `/user/${this.props.auth0.user.email}`,
    //   data: ''
    // };
    // axios(config2).then((result) => {
    //   console.log(result)

    // }).catch((err) => console.log('errrrrrrrrrrrrrrrrrrrrroooooooooooooooooooorrrrrrrrrrr'));
  };
  render() {
    return (
      <div>
        <div>
          <img className="vector1" src={Vector} alt="" />
          <img className="vector2" src={Vector2} alt="" />
          <img className="vector7" src={vector5} alt="" />
        </div>
        {this.props.auth0.isAuthenticated ? (
          <>
            <div class="container">
              <div class="member member-box">
                <img
                  class="img-member img"
                  src={this.props.auth0.user.picture}
                  alt={this.props.auth0.user.name}
                />

                <h2 class="name-member name">
                  {this.props.auth0.user.name}
                  <i class="fa fa-check" aria-hidden="true"></i>
                </h2>
                <h4 class="expertise-member expertise">
                  {this.props.auth0.user.nickname}
                </h4>

                <blockquote>{this.props.auth0.user.email}</blockquote>
              </div>
            </div>

            <div>
              <p className="col">MY Events</p>
            </div>
            <div className="link">
              <Button
                onClick={() => {
                  this.getFavoret();
                }}
              >
                Favorites
              </Button>
              <Button>Created</Button>
              <Button>Attending</Button>
            </div>
            <div>
              {this.state.showFavoret && <>{this.state.events.map(ele => {
                return (<Card>
                  <Card.Body>
                    <Card.Img alt="no image yet" />
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>)
              })}</>



              }
            </div>
          </>
        ) : undefined}
      </div>
    );
  }
}

export default withAuth0(Profile);
