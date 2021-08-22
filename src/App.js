import React, { Component } from 'react'

import Profile from './components/Profile'
import { withAuth0 } from '@auth0/auth0-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
//import Footer from './components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs'
import './App.css'
import CreateEvent from './components/CreateEvent';
import 'dotenv';
import Nav from './components/Nav';
import EventDetails from './components/EventDetails';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showButton: false,
      showNav: false,
    }
  }

  showNav = () => {
    this.setState({ showNav: !this.state.showNav });
  }
  render() {

    return (

      <Router className='u-app-route' >

        <Header showNav={this.showNav} />
        {this.state.showNav ? <Nav showNav={this.showNav} /> : undefined}
        <div style={{ minHeight: '80vh'}}>
        <Switch >
          
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/profile'>
            <Profile />
          </Route>

          <Route exact path='/about us'>
            <AboutUs />
          </Route>

          <Route exact path='/createEvent'>
            <CreateEvent />
          </Route>

          <Route exact path='/EventDetails'>
            <EventDetails />
          </Route>
          
        </Switch>
        </div>
        {/* <Footer/> */}
      </Router>

    )
  }
}

export default withAuth0(App)
