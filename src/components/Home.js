import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import AboutCard from "./AboutCard";
import data from "../data.json";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Ellipse1 from './Images/Ellipse 1.png'
import Ellipse2 from './Images/Ellipse 2.png'
import home from './Images/home.png'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //this.state.events
      events: [],
      eventData: data,
      searchWidth: 75,
      idd: "",
      q: '',
    };
  }
  componentDidMount = () => {
    let config = {
      method: "get",
      baseURL: "http://localhost:3001",
      url: "/event",
    };
    axios(config)
      .then((result) => {
        //console.log(result.data)\
        this.setState({ events: result.data });

      })
      .catch((err) =>

        console.log(err)
      );
  };

  expandSearch = () => {
    let c = this.state.searchWidth;
    let searchAnim = setInterval(() => {
      this.setState({ searchWidth: c });
      c += 5;
      if (c >= 300) {
        clearInterval(searchAnim);
      }
    }, 1);
  };
  shrinkSearch = () => {
    let c = this.state.searchWidth;
    let searchAnim = setInterval(() => {
      this.setState({ searchWidth: c });
      c -= 5;
      if (c <= 75) {
        clearInterval(searchAnim);
      }
    }, 1);
  };

  handleSearch = (e) => {
    let config = {
      method: "get",
      baseURL: "http://localhost:3001",
      url: `/event/search/${this.state.q}`,
    };
    axios.get(`http://localhost:3001/event/search?q=${this.state.q}`)
      .then((result) => {
        console.log(result.data);
        this.setState({ events: result.data });

      })
  }
  render() {
    return (
      <div className='h'>
        <Form 
          className="u-main-search"
          onMouseEnter={this.expandSearch}
          onMouseLeave={this.shrinkSearch}
        >
          <input
          
            type="text"
            placeholder="title, keyword, descripiton ..."
            style={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              marginTop:'20px',
              width: `${this.state.searchWidth}px`,
            }}
            onChange={(e) => this.setState({ q: e.target.value })}
          />
          <div className="bg-dark" style={{ borderRadius: "50%" ,marginTop:'20px',}}>
            <img
              src="https://img.icons8.com/material-outlined/50/ffffff/search--v1.png"
              alt=""
              style={{ borderRadius: "50%" }}
              onClick={this.handleSearch}
            />
          </div>
        </Form>
        {this.props.auth0.isAuthenticated ? undefined:
        <>
        <div className='place'>
        <h1><span>Event</span><span>ome</span></h1>
        <p>This website aims to offer people a place<br/> to check for events near them and any other<br/> relevant information about that event.</p>
        </div>
          <div className='margin' >
          <img className='try' src={Ellipse1} alt=''/>
          <img className='try1'src={Ellipse2} alt=''/>
          <img className='try2'src={home} alt=''/>
        </div>
        </>
        }
        

       
            <div className='cardsHolder'>
         {this.state.events ? this.state.events.map((itm, i) => {
             return (<AboutCard key={i} ownData={itm} id={itm._id} getCardInfo={this.props.getCardInfo} inProfile={false}cr={false}/>);
          }) : undefined} 
          </div>
        {/* <div>
                    {this.props.auth0.isAuthenticated ? <AboutCard /> : undefined}
                </div> */}

        {/* {this.state.events.map((item, i) => (<Link to='fromDetail'><AboutCard data={this.state.eventData} /></Link>))} */}
      </div>
    );
  }


}

export default withAuth0(Home);
