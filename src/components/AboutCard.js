import React, { Component } from 'react';
import {
} from 'react-bootstrap';
import '../App.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
export class AboutCard extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: this.props.ownData,
      favorite: false,
      rate: false,
      opacity: 0,
      showRating: false,
      hideRating: false,
      id: this.props.id,
      favorites: [],
      userFavorites: [],
      events: [],
      inProfile: false,
      cr : false,

      users: [],
      shh: true,
    };
  }
  componentDidMount() {
    this.setState( { data: this.props.ownData, id: this.props.id, inProfile: this.props.inProfile } );
    let config = {
      method: 'get',
      baseURL: 'https://eventome.herokuapp.com',
      url: '/user',
    };
    axios( config )
      .then( ( result ) => {
        this.setState( { events: result.data } );
        let shh = this.state.data.creator === this.props.auth0.user.email;
        console.log( shh );
        // let shh = result.data.filter(itm => itm.email === this.props.auth0.user.email)[0].created.includes(this.props.id);
        this.setState( {shh} );
      } )
      .catch( ( err ) => console.log( err )
      );
  }

  deleteEvent = ( e ) => {
    let config = {
      method: 'delete',
      baseURL: 'https://eventome.herokuapp.com',
      url: `/event/${this.state.id}`,
    };
    axios( config ).then( ( result ) => {
      this.setState( {
        events: result.data,
      } );
      this.props.renderAfterDelete( result.data );
      swal( 'Event has been removed successfully.' );
    } );
  }

  updateEvent = ( e ) => {
    this.props.showUpdateModal( this.state.data );
  }


  handleHeart = async ( e ) => {
    this.setState( { favorite: !this.state.favorite } );
    let email = this.props.auth0.user.email;
    await this.setState( { favorites: this.state.favorites.push( email ) } );

    let favorites = this.state.data.favorites;
    favorites.push( email );
    let config = {
      method: 'put',
      baseURL: 'https://eventome.herokuapp.com',
      url: `/event/favorites/${e.target.dataset.idd}`,
      data: { favorites: favorites }
    };
    axios( config ).then( ( result ) => {
      this.setState( {
        events: result.data,
      } );

    } )
      .then( res => {

        favorites.push( email );
        let config = {
          method: 'put',
          baseURL: 'https://eventome.herokuapp.com',
          url: `/user/favorites/${this.props.auth0.user.email}`,
          data: { favorites: [e.target.dataset.idd] }
        };
        axios( config ).then( ( result ) => {
          this.setState( {
            events: result.data,
          } );
        } ).catch( ( err ) => console.log( err ) );
      } ).catch( ( err ) => console.log( err ) );
  }
  showRating = () => {
    this.setState( { showRating: !this.state.showRating } );
  }
  getRating = async ( val ) => {
    if ( this.state.data.creator === this.props.auth0.user.email ) {
      await this.setState( { showRating: false } );
      return;
    }
    await this.setState( { rating: val } );
    await this.setState( { showRating: false } );
    let ratings = { email: this.props.auth0.user.email, rating: val };
    let config = {
      method: 'put',
      baseURL: 'https://eventome.herokuapp.com',
      url: `/event/ratings/${this.props.id}`,
      data: { ratings: ratings }
    };
    axios( config ).then( ( result ) => {

      this.setState( {
        events: result.data,
      } );
    } ).then( res => {
      this.setState( { data: this.state.events.filter( itm => itm._id === this.state.id )[0] } );
    } ).catch( ( err ) => console.log( err ) );
  }
  render() {
    return (

      <> {this.props.auth0.isAuthenticated ?
        <div className='cardDiv'>
          <div className='contentDiv'>
            <div className='a1'>
              <h2>{this.state.data.title}</h2>
            </div>
            <div className='b1'>
              <p>
                {this.state.data.description}
              </p>
            </div>
            <div className='btm'>

              <div className='d1'>
                <span><img src={`https://img.icons8.com/ios-glyphs/24/${!this.state.data.favorites.includes( this.props.auth0.user.email ) ? 'ffffff' : 'ff0000'}/like.png`} alt='' data-idd={this.state.data._id} onClick={this.handleHeart} style={{opacity: `${this.state.shh ? '0' : '1'}`}}/><pre>   </pre></span>

                <span><img src="https://img.icons8.com/material-rounded/24/ffffff/star--v1.png" alt='' onClick={!this.state.shh ? () => this.setState( { rate: !this.state.rate, showRating: !this.state.showRating } ) : undefined} /> {this.state.data.ratings.length ? ( ( this.state.data.ratings.map( itm => itm.rating ).reduce( ( tot, itm ) => tot + itm, 0 ) / this.state.data.ratings.length ).toFixed( 2 ) ) : 0} </span>

                <span><img src="https://img.icons8.com/ios-glyphs/24/ffffff/conference-call.png" alt=' ' />{this.state.data.attending.length}</span>
              </div>
              <div className='c1'>
                {!this.props.inProfile || !this.props.cr ?
                  <Link to='/details' style={{textDecoration: 'none'}}>
                    <button onClick={() => this.props.getCardInfo( this.state.data )}>view details</button>
                  </Link>
                  : undefined}
                {this.props.cr && this.props.inProfile ?
                  <button onClick={( e ) => this.deleteEvent( e )} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Delete</button>
                  : undefined}
                {this.props.cr && this.props.inProfile ?
                  <button onClick={( e ) => this.updateEvent( e )} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Update</button>
                  : undefined}
              </div>
            </div>
          </div>
          <div className='imgDiv' style={{backgroundImage: `url(${this.state.data.picture})`, backgroundDize: 'cover',
            backgroundPosition: '50% 50%'}}>

          </div>
          {this.state.showRating ? ( <div style={{ position: 'absolute', left: '430px', top: '240px', zIndex: '2' }}>
            <div style={{ width: '100px', height: '60px', background: 'red', position: 'relative', borderRadius: '10px', backgroundColor: 'white' }} className='bg-light'>
              <select id="dropdown-basic-button" title="Dropdown button" style={{ zIndex: '1', position: 'absolute', width: '90px', top: '5px', left: '4.5px', height: '50px', color: 'black', border: 'none', outline: 'none' }} className='bg-light' onChange={( e ) => this.getRating( e.target.value )}>
                <option >1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <div style={{ background: 'red', width: '58px', height: '58px', transform: 'rotate(45deg)', position: 'absolute', top: 12, left: 'calc(50% - 30px)', zIndex: '0' }} className='bg-light'>
              </div>
            </div>
          </div> ) :
            undefined}
        </div> : undefined }

      </>
    );
  }

}

export default withAuth0( AboutCard );

