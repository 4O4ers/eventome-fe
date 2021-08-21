import React, { Component } from 'react'

import Profile from './components/Profile'
import { withAuth0 } from '@auth0/auth0-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs'
import './App.css'
import Home2 from './components/Home2';
import { Button } from 'react-bootstrap';
import CreateEvent from './components/CreateEvent';
import 'dotenv';
import Nav from './components/Nav';
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showButton:false,
       showNav: false,
    }
  }

  showNav = () => {
    this.setState({showNav: !this.state.showNav});
  }
  render() {
    return (
      <div className='u-app'>
        <Router className='u-app-route'>
        <Header  showNav={this.showNav}/>
        {this.state.showNav ? <Nav showNav={this.showNav}/> : undefined}
          <Switch style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/profile'>
              <Profile />
            </Route>

            <Route exact path='/about us'>
              <AboutUs />
            </Route>

            <Route exact path='/home 2'>
              <Home2 />
            </Route>

            <Route exact path='/createEvent'>
              <CreateEvent />
            </Route>
          </Switch>
        
        </Router>
        <Footer/>
      </div>
    )
  }
}

export default withAuth0(App)
