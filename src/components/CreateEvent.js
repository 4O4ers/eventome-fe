import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Map from "./Map";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import SweetAlert from 'react-bootstrap-sweetalert';
export class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                title: "",
                address: { lat: 0, lng: 0 },
                picture: "",
                favorites: [],
                time: [],
                ratings: [],
                attending: [],
                category: [],
                isPublic: true,
                comments: [],
                description: "",
                creator: "",
                showConfirm: false,
            },

            events: [],
        };
    }

    lngLat = async ({ lng, lat }) => {
        await this.setState({
            event: { ...this.state.event, address: { lat, lng } },
        });
    };
    creatEvent = (e) => {
        e.preventDefault();

        let config = {
            method: "post",
            baseURL: "http://localhost:3001",
            url: "/event",
            data: { ...this.state.event, creator: this.props.auth0.user.email },
        };
        axios(config).then((result) => {
            console.log(result.data, '-*******************************');
            let eventData = this.state;
            this.setState({
                events: eventData,
            });
        }).then(res => {

        });
    };
    render() {
        return (

            <div className='ali'>
                <h2>Next, we just need a few more details</h2>
                <div className="formDiv">
                    <h1 style={{ color: "white" }}>.</h1>


                    <Form
                        onSubmit={(e) => {
                            this.creatEvent(e);
                        }}
                    >


                        <h3 className="formTitle">Fill out the form below</h3>
                        <div className='title'>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >

                                <Form.Label>Title</Form.Label>
                                <Form.Control className='titleI'
                                    type="text"
                                    placeholder="Event Title"
                                    required
                                    onChange={(e) =>
                                        this.setState({
                                            event: { ...this.state.event, title: e.target.value },
                                        })
                                    }
                                />
                            </Form.Group>


                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Details</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={(e) =>
                                        this.setState({
                                            event: {
                                                ...this.state.event,
                                                description: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </Form.Group>
                        </div>


                    </Form>


                    <div>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the address"
                            value={
                                "Lat: " +
                                this.state.event.address.lng +
                                "       " +
                                "Lng: " +
                                this.state.event.address.lat
                            }
                        />
                    </div>

                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Upload banner</Form.Label>
                        <Form.Control
                            type='text'
                            required
                            name="img"
                            accept="image/png, image/jpeg"
                            onChange={(e) =>
                                this.setState({
                                    event: { ...this.state.event, picture: e.target.value },
                                })
                            }
                        />
                        {/* <img src={this.state.picture} alt="" /> */}
                    </Form.Group>


                    <Form.Group className="position-relative mb-3 d-flex flex-column">
                        <Form.Label className='text-center'>Time</Form.Label>
                        <input
                            type="time"
                            id="appt"
                            name="appt"
                            min="09:00"
                            max="18:00"
                            value={this.state.event.time[0]}
                            required
                            onChange={(e) => {
                                this.setState({
                                    event: {
                                        ...this.state.event,
                                        time: [e.target.value, this.state.event.time[0]],
                                    },
                                });
                                console.log(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="position-relative mb-3 d-flex flex-column">
                        <Form.Label className='text-center'>Date</Form.Label>
                        <input
                            type="date"
                            id="start"
                            name="trip-start" false


                            onChange={(e) =>
                                this.setState({
                                    event: {
                                        ...this.state.event,
                                        time: [this.state.event.time[0], e.target.value],
                                    },
                                })
                            }

                        />
                    </Form.Group>


                    <Form.Group>
                        {["radio"].map((type) => (
                            <div
                                key={`inline-${type}`}
                                className="mb-3"
                                onChange={(e) =>
                                    this.setState({
                                        event: {
                                            ...this.state.event,
                                            isPublic: e.target.value
                                        },
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
                    <h6>Pick the location</h6>
                    <Map lngLat={this.lngLat} />
                    <div className='buttonD'>

                        {/* <SweetAlert
                            success
                            title="Woot!"
                            onConfirm={this.hideAlert}
                            dependencies={this.state.showConfirm}
                            onClick={() => this.setState({showConfirm: false})}
                        >

                            I did it!
                        </SweetAlert> */}

                        <Button className="btn" as="input" value="Save" onClick={(e) => { this.creatEvent(e); this.setState({ showConfirm: true }) }} />
                        <Link to='/'><Button as="input" value="Cancel" /></Link>{" "}
                    </div>
                </div>



            </div>
        );
    }
}

export default withAuth0(CreateEvent);
