import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormControl } from 'react-bootstrap'
import AboutCard from './AboutCard'
import data from '../data.json';
import { withAuth0 } from '@auth0/auth0-react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            eventData: data,
        }
    }

    render() {
        return (
            <div >
                <h1>Header</h1>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                
                <div>
                    {
                        this.props.auth0.isAuthenticated ? <AboutCard /> : undefined
                    }
                    </div>
                {
                    this.state.events.map((item, i) => {
                        <Link to='fromDetail'>
                            <AboutCard data={this.state.eventData} />
                        </Link>
                    })
                }
            </div>
        )
    }
}

export default withAuth0(Home)
