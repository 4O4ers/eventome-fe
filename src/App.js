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
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showButton:false
    }
  }

    
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

            <Route exact path='/createEvent'>
              <CreateEvent />
            </Route>

            <Footer />
          </Switch>
        {
           this.props.auth0.isAuthenticated && ! this.state.showButton ? <Link to='/createEvent'>
           <Button onClick={()=>this.setState({
             showButton:true
           })}>Create event</Button>
         </Link> : undefined
        }
        </Router>
      </div>
    )
  }
}

export default withAuth0(App)
