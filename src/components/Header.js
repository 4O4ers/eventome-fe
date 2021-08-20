import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { withAuth0 } from '@auth0/auth0-react'
class Header extends Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/about us'>about us</Link>
                            
                                {
                                    this.props.auth0.isAuthenticated ? <Link to='/profile'>profile</Link> : undefined
                                }
                                {
                                    this.props.auth0.isAuthenticated ? <LogoutButton/>  : <LoginButton/>
                                }
                            
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default withAuth0(Header)
