import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';

export class CreateEvent extends Component {
    constructor() {
        super();
        this.state={
            top: -90,
            opacity: 0,
        }
    }
    componentDidMount() {
        let c = -90;
        let o = .2;
        let createAnim = setInterval(() => {
            this.setState({top: c, opacity: o});
            c+=2;
            o+=0.018
            if (c >= 5 && o >= 1 ) {
              clearInterval(createAnim);
            }
          }, 5);
    }
    render() {
        return (
            <Container id='container' style={{maxWidth: `${this.state.maxWidth}%`, margin: 'auto',marginTop: `${this.state.top}%`,marginBottom: '0', border: 'solid black ', borderRadius: '15px', padding: '2%', opacity: `${this.state.opacity}`, minHeight: '90%'}}>
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