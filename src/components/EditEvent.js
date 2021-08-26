import React, { Component } from 'react';
import axios from 'axios';
import {Form, Container, Col, Row, Button} from 'react-bootstrap';
import Map from './Map';
export class EditEvent extends Component {
  constructor( props ){
    super( props );
    this.state = {
      data:'',
      id:'6122669ed371770f23b4af53',
      event: {
        title: '',
        address: { lat: 0, lng: 0 },
        picture: '',
        favorites: '',
        time: [],

        category: [],
        isPublic: true,
        comments: [],
        description: '',

      }
    };
  }
  editEvent=( e )=>{

    e.preventDefault();

    let config = {
      method: 'put',
      baseURL: 'http://localhost:3001',
      url: `/event/${this.state.id}`,
      data: this.state.event,
    };
    axios( config ).then( ( result ) => {
      this.setState( {
        events: result.data,

      } );
    } );

  }
  render() {
    return (
      <div>
        <div className="cont" >


          <div className="createEvContainer" >
            <Container id="container" >
              <h2>Next, we just need a few more details.</h2>
              <div className="formDiv">
                <div className="mapClass">
                  <Map lngLat={this.lngLat} />
                </div>
                <h1 style={{ color: 'white' }}>.</h1>
                <Row>
                  <Col>
                    <Form
                      //   onSubmit={(e) => {
                      //     this.creatEvent(e);
                      //   }}
                    >


                      <Form
                        onSubmit={( e ) => {
                          this.creatEvent( e );
                        }}
                      >

                        <Row>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >

                              <Form.Label>Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Event Title"
                                required
                                onChange={( e ) =>
                                  this.setState( {
                                    event: { ...this.state.event, title: e.target.value },
                                  } )
                                }
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Details</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={( e ) =>
                                  this.setState( {
                                    event: {
                                      ...this.state.event,
                                      description: e.target.value,
                                    },
                                  } )
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form>

                      <Row>
                        <Col>


                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter the address"
                            value={
                              'Lat: ' +
                                                        this.state.event.address.lng +
                                                        '       ' +
                                                        'Lng: ' +
                                                        this.state.event.address.lat
                            }
                          />

                        </Col><Col>
                          <Form.Group className="position-relative mb-3">
                            <Form.Label>Upload banner</Form.Label>
                            <Form.Control
                              type="file"
                              required
                              name="img"
                              accept="image/png, image/jpeg"
                              onChange={( e ) =>
                                this.setState( {
                                  event: { ...this.state.event, picture: e.target.value },
                                } )
                              }
                            />
                            <img src={this.state.picture} alt="" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <input
                        type="time"
                        id="appt"
                        name="appt"
                        min="09:00"
                        max="18:00"
                        value={this.state.event.time[0]}
                        required
                        onChange={( e ) =>
                          this.setState( {
                            event: {
                              ...this.state.event,
                              time: [e.target.value, this.state.event.time[0]],
                            },
                          } )
                        }
                        // time[1] time: [e.target.value, this.state.event.]
                      />
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value={this.state.event.time[0]}
                        min="2021-08-25"
                        onChange={( e ) =>
                          this.setState( {
                            event: {
                              ...this.state.event,
                              time: [this.state.event.time[0], e.target.value],
                            },
                          } )
                        }
                        // time: [this.state.time[0], e.target.value]
                      />

                      {['radio'].map( ( type ) => (
                        <div
                          key={`inline-${type}`}
                          className="mb-3"
                          onChange={( e ) =>
                            this.setState( {
                              event: {
                                ...this.state.event,
                                isPublic: e.target.value
                              },
                            } )
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
                      ) )}


                      {['radio'].map( ( type ) => (
                        <div
                          key={`inline-${type}`}
                          className="mb-3"
                          onChange={( e ) =>
                            this.setState( {
                              event: {
                                ...this.state.event,
                                isPublic: e.target.value
                              },
                            } )
                          }
                        >
                          <Form.Check
                            inline
                            label="Public"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            value={true}
                          />
                          <Form.Check
                            inline
                            label="Private"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            value={false}
                          />
                        </div>
                      ) )}

                      <Button as="input" type="submit" value="Save" onClick={this.creatEvent} />{' '}

                      <Button as="input" type="submit" value="Cancel" />{' '}

                    </Form>
                  </Col>

                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default EditEvent;
