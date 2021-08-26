import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import AboutCard from './AboutCard';
import data from '../data.json';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Ellipse1 from './Images/Ellipse 1.png';
import Ellipse2 from './Images/Ellipse 2.png';
import home from './Images/home.png';


class Home extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      events: [],
      eventData: data,
      searchWidth: 75,
      idd: '',
      q: '',
    };
  }

  componentDidMount = () => { //get all the events in the db
    let config = {
      method: 'get',
      baseURL: 'https://eventome.herokuapp.com',
      url: '/event',
    };
    axios( config )
      .then( ( result ) => {
        this.setState( { events: result.data } );
      } )
      .catch( ( err ) => console.log( err )
      );
  };

expandSearch = () => {
  let c = this.state.searchWidth;
  let searchAnim = setInterval( () => {
    this.setState( { searchWidth: c } );
    c += 5;
    if ( c >= 300 ) {
      clearInterval( searchAnim );
    }
  }, 1 );
};
shrinkSearch = () => {
  let c = this.state.searchWidth;
  let searchAnim = setInterval( () => {
    this.setState( { searchWidth: c } );
    c -= 5;
    if ( c <= 75 ) {
      clearInterval( searchAnim );
    }
  }, 1 );
};

handleSearch = ( e ) => {
  axios.get( `https://eventome.herokuapp.com/event/search?q=${this.state.q}` )
    .then( ( result ) => {
      this.setState( { events: result.data } );
    } );
}
getCardInfo = ( obj ) => {
  console.log( obj );
}

getCardData = ( obj ) => {
  this.props.getCardData( obj );
}
render() {
  return (
    <div className='h' style={{ paddingBottom: '3rem' }}>
      {/* the search element */}
      {this.props.auth0.isAuthenticated ? <Form
        className="u-main-search"
        onMouseEnter={this.expandSearch}
        onMouseLeave={this.shrinkSearch}
      >
        <input

          type="text"
          placeholder="title, keyword, descripiton ..."
          style={{
            paddingLeft: '2rem',
            paddingRight: '2rem',
            marginTop: '50px',
            width: `${this.state.searchWidth}px`,
          }}
          onChange={( e ) => this.setState( { q: e.target.value } )}
        />
        <div style={{ borderRadius: '50%', marginTop: '50px', background: '#151414' }}>
          <img
            src="https://img.icons8.com/material-outlined/50/ffffff/search--v1.png"
            alt=""
            style={{ borderRadius: '50%' }}
            onClick={this.handleSearch}
          />
        </div>
      </Form> : undefined}
      {/* the search element */}

      {/* before logging in */}
      {this.props.auth0.isAuthenticated ? undefined :
        <>
          <div className='place' style={{ minHeight: '110vh' }}>
            <h1><span>Event</span><span>ome</span></h1>
            <p>Enjoy the easiness of searching for and keeping <br /> track of the events you are interested in<br /> with no complications.</p>
          </div>
          <div className='margin' >
            <img className='try' src={Ellipse1} alt='' />
            <img className='try1' src={Ellipse2} alt='' />
            <img className='try2' src={home} alt='' />
          </div>
        </>
      }
      {/* before logging in */}


      <div className='cardsHolder'>
        {this.state.events ? this.state.events.map( ( itm, i ) => {
          return (

            <AboutCard key={i} ownData={itm} id={itm._id} getCardInfo={this.props.getCardInfo} getCardData={this.getCardData} inProfile={false} cr={false} />


          );
        } ) : undefined}
      </div>

    </div>
  );
}


}

export default withAuth0( Home );
