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
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showButton: false,
      showNav: false,
      currentUser: {},
      cardInfo: {},
      data: [],

      xeventsData: [],
      xusersData: [],
    }
  }
  componentDidMount() {

  }
 
  xaddUsers = ({email, name, picture }) => {
    let config = {
      method: "post",
      baseURL: "http://localhost:3001",
      url: "/event",
      data: { email, name, picture },
    };
    axios(config)
      .then((result) => {
        this.setState({ xusersData: result.data });
      })
      .catch(err => console.log(err));
  }///////////////////////////////////////////////////////////////////////////

  xgetAllUsers = () => {
    let config = {
      method: "get",
      baseURL: "http://localhost:3001",
      url: "/user",
    };
    axios(config)
      .then((result) => {
        this.setState({ xusersData: result.data });
        return result.data;
      })
      .then(result => {
        if (!(result.filter(itm => itm.email === this.props.auth0.user.email).length === 0)) {
          this.xaddUsers(this.props.auth0.user);
        } else {
          console.log('user already exists')
        }
      })
      .catch(err => console.log(err));
  }///////////////////////////////////////////////////////////////////////////


  xgetAllCardsData = () => {
    let config = {
      method: "get",
      baseURL: "http://localhost:3001",
      url: "/event",
    };
    axios(config)
      .then((result) => {
        this.setState({ xeventsData: result.data });
      })
      .catch(err => console.log(err));
  }//////////////////////////////////////////////////////////////////////////
  xcreateNewEvent = (data) => {
    let config = {
      method: "post",
      baseURL: "http://localhost:3001",
      url: "/event",
      data: { data, creator: this.props.auth0.user.email },
    };
    axios(config)
      .then((result) => {
        this.setState({ xeventsData: result.data });
      })
      .catch(err => console.log(err));
  }//////////////////////////////////////////////////////////////////////////
  xupdateEvent = (id, data) => {
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/${id}`,
      data: { data }
    };
    axios(config)
      .then((result) => {
        this.setState({ xeventsData: result.data });
      })
      .catch(err => console.log(err));
  }//////////////////////////////////////////////////////////////////////////
  xupdateFavoritesEvent = (id, favorites) => {
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/favorites/${id}`,
      data: { favorites }
    }
    axios(config)
      .then((result) => {
        this.setState({ xeventsData: result.data });
      })
      .catch(err => console.log(err));
  }//////////////////////////////////////////////////////////////////////////
  xupdateAttendingEvents = (id, attending) => {
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/attending/${id}`,
      data: { attending }
    };
    axios(config)
      .then((result) => {
        this.setState({ xeventsData: result.data });
      })
      .catch(err => console.log(err));
  }///////////////////////////////////////////////////////////////////////////
  xupdateRatingsEvents = (id, ratings) => {
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/ratings/${id}`,
      data: { ratings }
    };
    axios(config)
      .then((result) => {
        this.setState({ xeventsData: result.data });
      })
      .catch(err => console.log(err));
  }///////////////////////////////////////////////////////////////////////////
  xupdateCategoriesEvents = (id, categories) => {
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/category/${id}`,
      data: { categories }
    };
    axios(config)
      .then((result) => {
        this.setState({ xeventsData: result.data });
      })
      .catch(err => console.log(err));
  }///////////////////////////////////////////////////////////////////////////
  xupdateCommentsEvents = (id, comments) => {
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/comments/${id}`,
      data: { comments }
    };
    axios(config)
      .then((result) => {
        this.setState({ xeventsData: result.data });
      })
      .catch(err => console.log(err));
  }///////////////////////////////////////////////////////////////////////////







  updateAfterUpdate = (data) => {
    this.setState({ data: data });
  }
  showNav = () => {
    this.setState({ showNav: !this.state.showNav });
  }
  setCurrentUser = (obj) => {
    this.setState({ currentUser: obj });

  }
  getCardInfo = (obj) => {
    this.setState({ cardInfo: obj });
  }
  getCardData = (obj) => {
  }
  render() {

    return (

      <Router className='u-app-route' >

        <Header showNav={this.showNav}/>
        {this.state.showNav ? <Nav showNav={this.showNav} /> : undefined
        }
        < div style={{ minHeight: '100vh' }}>
          {false ? <CreateEvent /> : undefined}
          <Switch >

            <Route exact path='/'>
              <Home getCardInfo={this.getCardInfo} getCardData={this.getCardData} />
            </Route>

            <Route exact path='/profile'>
              <Profile data={this.state.data} updateAfterUpdate={this.updateAfterUpdate} setCurrentUser={this.setCurrentUser} />
            </Route>

            <Route exact path='/about us'>
              <AboutUs />
            </Route>

            <Route exact path='/createEvent'>
              <CreateEvent />
            </Route>

            <Route exact path='/details'>
              <EventDetails cardInfo={this.state.cardInfo} />
            </Route>

          </Switch>
        </div >
        <Footer />
      </Router >

    )
  }
}

export default withAuth0(App)
