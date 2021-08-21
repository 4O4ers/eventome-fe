import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';
export class CreateEvent extends Component {

    render() {
        return (
            <Container id='container' >
                <h1>.</h1>
                <h1>Create an event</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Event Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>

                <Form.Group className="position-relative mb-3">
                    <Form.Label>Upload banner</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="img"

                    />
                    <Form.Control.Feedback type="invalid" tooltip>

                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter the address" />
                <input type="time" id="appt" name="appt"
                    min="09:00" max="18:00" required />
                <input type="date" id="start" name="trip-start"
                    value="2018-07-22"
                    min="2021-08-25"  />
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Public"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Private"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />

                    </div>
                ))}

                <Button as="input" type="submit" value="Save" />{' '}
                <Button as="input" type="submit" value="Cancel" />{' '}
            </Container>
        )
    }
}

export default CreateEvent