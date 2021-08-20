import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button,Form,FormControl } from 'react-bootstrap'
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
        }
    }

    render() {
        return (
            <>
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
                {
                    this.state.events.map((item, i) => {
                        <Link to='fromDetail'>
                            <h1>
                                from detail
                            </h1>
                        </Link>
                    })
                }
            </>
        )
    }
}

export default Home
