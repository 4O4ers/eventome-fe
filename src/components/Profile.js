import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profiled from './Profiled.css'
export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      showFavoret: false,
      data: [],
    };
  }
  componentDidMount() { this.getFavoret() }
  getFavoret = () => {

    let config = {
      method: "get",
      baseURL: `http://localhost:3001`,
      url: `/event`,
      data: this.state.data,
    };
    axios(config)
      .then((result) => {
        let newArr = result.data.map(({ _id, favorites }) => {

          return ({ _id, favorites })
        }).map(({ _id }) => _id).join('^')
        console.log(newArr);
        this.setState({
          events: result.data,
        });
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
        {this.props.auth0.isAuthenticated ?
          <>
            <div class="container">
              <div class="member member-box">
                <img class="img-member img" src={this.props.auth0.user.picture}
                  alt={this.props.auth0.user.name} />

                <h2 class="name-member name">{this.props.auth0.user.name}<i class="fa fa-check" aria-hidden="true"></i></h2>
                <h4 class="expertise-member expertise">{this.props.auth0.user.nickname}</h4>

                <blockquote>{this.props.auth0.user.email}</blockquote>
              </div>
            </div>


           
                <div>
                  <p className='col'>MY Events</p>
                </div>
                  <div className='link'>
                    <Link to="/favorites">Favorites</Link> 
                    <Link to="/Created">Created</Link> 
                    <Link to="/Attending">Attending</Link>
                  </div>
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
            

          </> : undefined}
      </div>
    );
  }
}

export default withAuth0(Profile);
