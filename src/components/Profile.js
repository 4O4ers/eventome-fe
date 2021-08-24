import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Col, Row, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profiled from "./Profiled.css";
import Vector from "../components/Images/Vector 3.png";
import Vector2 from "../components/Images/Vector 4.png";
import vector5 from "../components/Images/Vector 5.png";
import AboutCard from "./AboutCard";
import Map from './Map';
export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      showFavoret: false,
      data: [],
      currentUser: {},
      fr: true,
      cr: false,
      at: false,
      eventsData: [],

      favorites: [],
      created: [],
      attending: [],
      inProfile: false,
      receivedForUpdate: { time: [], address: {}, isPublic: true },
      eventAfterUpdate: {},

      address: { lat: 0, lng: 0 },
      title: '',
      description: '',
      time: ['', ''],
      isPublic: true,
    };
  }
  componentDidMount() {
    //console.log('in profile')
    this.setState({ inProfile: true })
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
    config = {
      method: "get",
      baseURL: `http://localhost:3001`,
      url: `/event`,
    };
    axios(config).then(res => {

      let favorites = res.data.filter(itm => itm.favorites.includes(this.props.auth0.user.email));
      let created = res.data.filter(itm => itm.creator === this.props.auth0.user.email);
      let attending = res.data.filter(itm => itm.attending.includes(this.props.auth0.user.email));
      this.setState({ favorites, created, attending });
      //console.log(this.state.eventAfterUpdate);
    })
  }

  getFavoret = () => {
    let config = {
      method: "get",
      baseURL: `http:localhost:3001`,
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
        this.state.events.map(ele => console.log(ele.title))

      })
      .catch((err) =>
        console.log(err)
      );

  };
  renderAfterDelete = (data) => {
    this.setState({ data });
    this.setState({ created: this.state.data.filter(itm => itm.creator === this.props.auth0.user.email) });
  }
  renderAfterUpdate = (data) => {
    this.setState({data});
  }

  showUpdateModal = (obj) => {
    console.log(obj);
    this.setState({ shUpdate: true, receivedForUpdate: obj });

  }
  lngLat = ({ lng, lat }) => {
    this.setState({ address: { lat: lat, lng: lng } })
  }
  titleUpdate = (e) => {
    this.setState({ title: e.target.value });
  }
  descUpdate = (e) => {
    this.setState({ description: e.target.value });
  }
  sendUpdate = async () => {
    //console.log(this.state.eventAfterUpdate);
    let time = this.state.time;
    let address = this.state.address;
    let description = this.state.description;
    let title = this.state.title;
    let isPublic = this.state.isPublic;
    await this.setState({ eventAfterUpdate: { ...this.state.eventAfterUpdate, time, address, description, title, isPublic } });
    //await console.log(this.state.eventAfterUpdate);

    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/${this.state.receivedForUpdate._id}`,
      data: { ...this.state.eventAfterUpdate }
    };
    axios(config).then((result) => {
      console.log(result)
      let created = result.data.filter(itm => itm.creator === this.props.auth0.user.email);
      //console.log(created);
      this.setState({
        data: {...result.data,created}
      });
      //console.log(this.state.created)
      
    }).then(res => {
     this.props.updateAfterUpdate(this.state.created);
     this.setState({data: this.props.data})
    }).catch(err => console.log(err));
  }
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

            <div style={{ textAlign: 'center', fontSize: '2rem' }}>
              MY Events
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem', gap: '1rem' }}>
              <p style={{ cursor: 'pointer', color: `${this.state.fa ? 'blue' : 'initial'}` }} onClick={() => this.setState({ fa: true, cr: false, at: false })}>Favorites</p>
              <p style={{ cursor: 'pointer', color: `${this.state.cr ? 'blue' : 'initial'}` }} onClick={() => this.setState({ fa: false, cr: true, at: false })}>Created</p>
              <p style={{ cursor: 'pointer', color: `${this.state.at ? 'blue' : 'initial'}` }} onClick={() => this.setState({ fa: false, cr: false, at: true })}>Attending</p>
            </div>
            <Container style={{ minHeight: '200px', display: 'flex', flexWrap: 'wrap', marginBottom: '5rem' }}>
              {this.state.fa ?
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7.5rem' }}>
                  {this.state.favorites.map((itm, i) => {
                    return (<AboutCard key={i} ownData={itm} id={itm._id} getCardInfo={this.props.getCardInfo} inProfile={true} cr={false} />);
                  })}
                </div> : undefined}

              {this.state.cr ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7.5rem' }}>
                {this.state.created.map((itm, i) => {
                  return (<AboutCard key={i} ownData={itm} id={itm._id} getCardInfo={this.props.getCardInfo} inProfile={true} cr={true} renderAfterDelete={this.renderAfterDelete} renderAfterUpdate={this.renderAfterUpdate} showUpdateModal={this.showUpdateModal} />);
                })}
              </div> : undefined}

              {this.state.at ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7.5rem' }}>
                {this.state.attending.map((itm, i) => {
                  return (<AboutCard key={i} ownData={itm} id={itm._id} getCardInfo={this.props.getCardInfo} inProfile={true} cr={false} />);
                })}
              </div> : undefined}
            </Container>
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

        <Modal show={this.state.shUpdate} onHide={() => this.setState({ shUpdate: false })} centered>
          <Modal.Header closeButton>
            <Modal.Title>Update Event Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" defaultValue={this.state.receivedForUpdate.title} onChange={this.titleUpdate} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Describtion</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={this.state.receivedForUpdate.description} onChange={this.descUpdate} />
              </Form.Group>

              <Map lngLat={this.lngLat} />


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" defaultValue={
                  "Lat: " +
                  this.state.receivedForUpdate.address.lng +
                  "       " +
                  "Lng: " +
                  this.state.receivedForUpdate.address.lat}
                  onChange={this.addressUpdate}
                  value={
                    "Lat: " +
                    this.state.address.lat +
                    "       " +
                    "Lng: " +
                    this.state.address.lng
                  } />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Time</Form.Label>
                <input
                  type="time"
                  id="appt"
                  name="appt"
                  min="09:00"
                  max="18:00"
                  defaultValue={this.state.receivedForUpdate.time[0] || '00:00'}
                  required
                  onChange={(e) =>
                    this.setState({
                      time: [e.target.value, this.state.time[0]],
                    })
                  }
                />
                {/* <Form.Control type="text" value={this.state.receivedForUpdate.time} onChange={this.statusUpdate} /> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <input
                  type="date"
                  id="start"
                  name="trip-start"

                  defaultValue={this.state.receivedForUpdate.time[1] || '2021-09-01'}
                  onChange={(e) =>
                    this.setState({
                      time: [this.state.time[0], e.target.value],
                    })
                  }

                />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Public / Private</Form.Label>
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className="mb-3"
                    onChange={(e) =>
                      this.setState({
                        isPublic: e.target.value
                      })
                    }
                  >
                    <Form.Check className="check"
                      inline
                      label="Public"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      value={true}
                    />
                    <Form.Check className="check"
                      inline
                      label="Private"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      value={false}
                    />
                  </div>
                ))}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={() => this.setState({ shUpdate: false })}>
              Close
            </Button>
            <Button variant="primary" onClick={this.sendUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withAuth0(Profile);
