import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Col, Button } from 'react-bootstrap'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { withAuth0 } from '@auth0/auth0-react';
import ProfilePic from './ProfilePic';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            showButton: false,
            showNav: false,
        }
    }
    render() {
        return (
            <Navbar variant="dark" style={{zIndex: '2',background:'#373636'}} >
                <Container className='ml-5 mr-5'>
                    <Col align='start' xl='5'>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Navbar.Brand style={{fontSize: '1.5rem'}}>Eventome</Navbar.Brand></Link>

                    </Col>
                    <div>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/chevron-down.png" alt=''
                            onClick={this.props.showNav} style={{cursor: 'pointer'}}/>
                        </div>
                    <Col xl='5' style={{  display: 'flex', gap: '10%', justifyContent: 'flex-end' }}>
                        
                        {this.props.auth0.isAuthenticated ?
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                <LogoutButton />
                                <ProfilePic/>
                            </div>
                            :
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <LoginButton />
                                <div style={{ minWidth: '35px', minHeight: '35px', display: 'inline-block' }}>
                                    .
                                </div>
                            </div>
                        }

                    </Col>

                </Container>
            </Navbar>
        )
    }
}

export default withAuth0(Header)
