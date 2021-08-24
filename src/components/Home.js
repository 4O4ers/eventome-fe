import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import AboutCard from "./AboutCard";
import data from "../data.json";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Card } from "react-bootstrap";
import adham from "./Images/adham.jpeg"
import img2 from "./Images/adham.jpeg"
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //this.state.events
      events: [],
      eventData: data,
      searchWidth: 75,
      idd: "",
      q: '',
    };
  }
  componentDidMount = () => {
    let config = {
      method: "get",
      baseURL: "http://localhost:3001",
      url: "/event",
    };
    axios(config)
      .then((result) => {
        //console.log(result.data)\
        this.setState({ events: result.data });

      })
      .catch((err) =>

        console.log(err)
      );
  };

  expandSearch = () => {
    let c = this.state.searchWidth;
    let searchAnim = setInterval(() => {
      this.setState({ searchWidth: c });
      c += 5;
      if (c >= 300) {
        clearInterval(searchAnim);
      }
    }, 1);
  };
  shrinkSearch = () => {
    let c = this.state.searchWidth;
    let searchAnim = setInterval(() => {
      this.setState({ searchWidth: c });
      c -= 5;
      if (c <= 75) {
        clearInterval(searchAnim);
      }
    }, 1);
  };

  handleSearch = (e) => {
    let config = {
      method: "get",
      baseURL: "http://localhost:3001",
      url: `/event/search/${this.state.q}`,
    };
    axios.get(`http://localhost:3001/event/search?q=${this.state.q}`)
      .then((result) => {
        console.log(result.data);
        this.setState({ events: result.data });

      })
  }
  render() {
    return (
      <div>
        <h1>.</h1>
        <Form
          className="u-main-search"
          onMouseEnter={this.expandSearch}
          onMouseLeave={this.shrinkSearch}
        >
          <input
            type="text"
            placeholder="title, keyword, descripiton ..."
            style={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              width: `${this.state.searchWidth}px`,
            }}
            onChange={(e) => this.setState({ q: e.target.value })}
          />
          <div className="bg-dark" style={{ borderRadius: "50%" }}>
            <img
              src="https://img.icons8.com/material-outlined/50/ffffff/search--v1.png"
              alt=""
              style={{ borderRadius: "50%" }}
              onClick={this.handleSearch}
            />
          </div>
        </Form>

        <Container className="u-main">
          {/* //!this.props.auth0.isAuthenticated */}
                    {false ? <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
            <Card style={{ width: "18rem", height: "20rem" }}>
              <Card.Body>
                <Card.Img variant="top" src='data:image/jpeg;base64,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' />
                <Card.Title>ASACELEVAT</Card.Title>
                <Card.Text>
                  <p>On this #InternationalYouthSkillsDay, we celebrate over 165 alumni of the Code Fellows Academy-accredited short, intensive software development course to improve skills.</p>
                </Card.Text>

              </Card.Body>
            </Card>
            {/* //////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////\\\\\\\\\\\\\\\\\\\\ */}
            <Card style={{ width: "18rem", height: "20rem" }}>
              <Card.Body>
                <Card.Img variant="top" src="https://www.cost.eu/uploads/2021/06/Logo-AttoChem_v8.jpg" />
                <Card.Title>AttoChem</Card.Title>
                <Card.Text>
                  <p>We are pleased to announce an upcoming series of webinars by the COST Action AttoChem which aims to share research
                    activities and support interaction between the different groups in the network.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* //////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////\\\\\\\\\\\\\\\\\\\\ */}
            <Card style={{ width: "18rem", height: "20rem" }}>
              <Card.Body>
                <Card.Img variant="top" src="https://aes2.org/wp-content/uploads/slider/cache/60b113fa4e396e4c13d3a4a72e569f3f/APEI-Placeholder.png" />
                <Card.Title>AES Events</Card.Title>

                <Card.Text>
                  <p> focus on a specific field of audio engineering.</p>

                </Card.Text>

              </Card.Body>
            </Card>
          </div> : undefined}

            <div className='cardsHolder'>
         {this.state.events ? this.state.events.map((itm, i) => {
             return (<AboutCard key={i} ownData={itm} id={itm._id} getCardInfo={this.props.getCardInfo} />);
          }) : undefined} 
          </div>
        </Container>
        {/* <div>
                    {this.props.auth0.isAuthenticated ? <AboutCard /> : undefined}
                </div> */}

        {/* {this.state.events.map((item, i) => (<Link to='fromDetail'><AboutCard data={this.state.eventData} /></Link>))} */}
      </div>
    );
  }


}

export default withAuth0(Home);
