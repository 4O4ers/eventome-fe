import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import AboutCard from './AboutCard'
import data from '../data.json';
import { withAuth0 } from '@auth0/auth0-react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            eventData: data,
            searchWidth: 75,
        }
    }
expandSearch = () => {
    let c = this.state.searchWidth;
    let searchAnim = setInterval(() => {
      this.setState({searchWidth: c});
      c+=4;
      if (c >= 300 ) {
        clearInterval(searchAnim);
      }
    }, 1);
}
    render() {
        return (
            <div >
                <h1>.</h1>
                <Form className="u-main-search" onMouseEnter={this.expandSearch}>
                    <input 
                        type="text"
                        placeholder="title, keyword, descripiton ..."
                        style={{paddingLeft: '2rem', paddingRight: '2rem', width:`${this.state.searchWidth}px`}}
                    />
                    <div className='bg-dark' style={{borderRadius: '50%'}}>
                    <img src="https://img.icons8.com/material-outlined/50/ffffff/search--v1.png" alt='' style={{borderRadius: '50%'}}/>
                    </div>
                    
                </Form>
                
                <Container className='u-main'>
                    {[1,2,3,4,5,6,7,8,9].map(itm => <AboutCard/>)}
                </Container>
                {/* <div>
                    {this.props.auth0.isAuthenticated ? <AboutCard /> : undefined}
                </div> */}
                {this.state.events.map((item, i) => (<Link to='fromDetail'><AboutCard data={this.state.eventData} /></Link>))}
            </div>
        )
    }
}

export default withAuth0(Home)
