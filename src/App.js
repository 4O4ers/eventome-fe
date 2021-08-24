import React, { Component } from 'react'

import Profile from './components/Profile'
import { withAuth0 } from '@auth0/auth0-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Footer from './components/Footer'
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
      currentUser: {},
      cardInfo: {},
    }
  }

  showNav = () => {
    this.setState({ showNav: !this.state.showNav });
  }
  setCurrentUser = (obj) => {
    this.setState( { currentUser : obj});
    
  }
  getCardInfo = (obj) => {
    this.setState({cardInfo: obj});
  }
  render() {

    return (

      <Router className='u-app-route' >

        <Header showNav={this.showNav} />
        {this.state.showNav ? <Nav showNav={this.showNav} /> : undefined}
        <div style={{ minHeight: '80vh'}}>
         {false ? <CreateEvent/> :undefined}
        <Switch >
          
          <Route exact path='/'>
            <Home getCardInfo={this.getCardInfo}/>
          </Route>

          <Route exact path='/profile'>
            <Profile setCurrentUser={this.setCurrentUser}/>
          </Route>

          <Route exact path='/about us'>
            <AboutUs />
          </Route>

          <Route exact path='/createEvent'>
            <CreateEvent />
          </Route>

          <Route exact path='/details'>
            <EventDetails cardInfo={this.state.cardInfo}/>
          </Route>
        
        </Switch>
        </div>
        <Footer/>
      </Router>

    )
  }
}

export default withAuth0(App)
