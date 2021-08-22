import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Map from './Map';
export class CreateEvent extends Component {
constructor() {
    super();
    this.state = {
        title: '',
        address: {lat: 0, lng: 0},
        picture: '',
        favorites: [],
        time: [],
        ratings: [],
        attending: [],
        category: [],
        isPublic: true,
        comments: [],
        description: '',
    }
}

lngLat = async ({lng, lat}) => {
    await this.setState({address: {lat, lng}});
    console.log(this.state);
 
}
    render() {
        return (
            <Container id='container' >
                <Map lngLat={this.lngLat}/>
                <h1 style={{ color: 'white' }}>.</h1>
                <h1>Create an event</h1>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Event Title"   required onChange={(e) => this.setState({title: e.target.value})}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                <Form.Label>Details</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => this.setState({description: e.target.value})}/>
                            </Form.Group>
                        </Form>


                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter the address" value={'Lat: ' + this.state.address.lng + '       ' + 'Lng: ' + this.state.address.lat}/>
                    </Col>
                </Row>

                <Row>
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Upload banner</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="img"
                            accept="image/png, image/jpeg"
                                onChange={(e) => this.setState({ picture: e.target.value})}
                        />
                        <img src={this.state.picture} alt='' />

                    </Form.Group>
                    <input type="time" id="appt" name="appt"
                        min="09:00" max="18:00" value={this.state.time[0]} required onChange={(e) => this.setState({time: [e.target.value,this.state.time[1] ]})}/>
                    <input type="date" id="start" name="trip-start"
                        value={this.state.time[1]}
                        min="2021-08-25"  onChange={(e) => this.setState({time: [this.state.time[0], e.target.value]})}/>

                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" onChange={(e) => this.setState({isPublic: e.target.value})}>
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
                    ))}
                </Row>
                <Button as="input" type="submit" value="Save" />{' '}
                <Button as="input" type="submit" value="Cancel" />{' '}
            </Container>
        )
    }
}

export default CreateEvent