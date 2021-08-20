import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

export class CreateEvent extends Component {
    render() {
        return (
            <div>
                <h1>Craete An Event !</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter the title " />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Detials</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>

                <Form.Group className="position-relative mb-3">
                    <Form.Label>upload img </Form.Label>
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
            </div>
        )
    }
}

export default CreateEvent