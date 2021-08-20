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
import Home2 from './components/Home2';
class App extends Component {  
  render() {
    return (
      <div>
        <Router>
        <Header />
          <Switch>
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

            <Footer />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default withAuth0(App)
