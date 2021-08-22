import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import AboutCard from './AboutCard'
import data from '../data.json';
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            eventData: data,
            searchWidth: 75,
        }
    }
    componentDidMount = () => {
        let config = {
            method: "get",
            baseURL: "http://localhost:3001",
            url: "/event",
        };
        axios(config).then((result) => {
            this.setState({
                events: result.data,
            });
            console.log(this.state.events);
        }).catch((err) => console.log('errrrrrrrrrrrrrrrrrrrrroooooooooooooooooooorrrrrrrrrrr'));
    }

    expandSearch = () => {
        let c = this.state.searchWidth;
        let searchAnim = setInterval(() => {
            this.setState({ searchWidth: c });
            c += 5;
            if (c >= 300) {
                clearInterval(searchAnim);
            }
        }, 1);
    }
    shrinkSearch = () => {
        let c = this.state.searchWidth;
        let searchAnim = setInterval(() => {
            this.setState({ searchWidth: c });
            c -= 5;
            if (c <= 75) {
                clearInterval(searchAnim);
            }
        }, 1);
    }
    render() {
        return (
            <div >
                <h1>.</h1>
                <Form className="u-main-search" onMouseEnter={this.expandSearch} onMouseLeave={this.shrinkSearch}>
                    <input
                        type="text"
                        placeholder="title, keyword, descripiton ..."
                        style={{ paddingLeft: '2rem', paddingRight: '2rem', width: `${this.state.searchWidth}px` }}
                    />
                    <div className='bg-dark' style={{ borderRadius: '50%' }}>
                        <img src="https://img.icons8.com/material-outlined/50/ffffff/search--v1.png" alt='' style={{ borderRadius: '50%' }} />
                    </div>

                </Form>

                <Container className='u-main'>
                    {this.state.events.map((itm,i) => {
                        return (<AboutCard key={i} ownData={itm} />)})}
                </Container>
                {/* <div>
                    {this.props.auth0.isAuthenticated ? <AboutCard /> : undefined}
                </div> */}
                {/* {this.state.events.map((item, i) => (<Link to='fromDetail'><AboutCard data={this.state.eventData} /></Link>))} */}
            </div>
        )
    }
}

export default withAuth0(Home)
