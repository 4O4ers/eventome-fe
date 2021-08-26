import React, { Component } from 'react';
import {
  Button,
} from 'react-bootstrap';
import '../App.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    };
  }
  componentDidMount() {
    this.setState( { data: this.props.ownData, id: this.props.id, inProfile: this.props.inProfile } );
  }

  deleteEvent = ( e ) => {
    let config = {
      method: 'delete',
      baseURL: 'http://localhost:3001',
      url: `/event/${this.state.id}`,
    };
    axios( config ).then( ( result ) => {
      this.setState( {
        events: result.data,
      } );
      this.props.renderAfterDelete( result.data );
    } );
  }

  updateEvent = ( e ) => { //////////////////////////////////////////////////////////////////////////////////////////////
    //console.log(this.state.data);

    //this.props.id
    // let config = {
    //   method: "get",
    //   baseURL: `http://localhost:3001`,
    //   url: `/event/one/${this.props.id}`,
    // };
    // axios(config).then((result) => {
    //   //console.log(result)
    //   this.setState({
    //     events: result.data,
    //   });

    // })
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
      baseURL: 'http://localhost:3001',
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
          baseURL: 'http://localhost:3001',
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

    await this.setState( { rating: val } );
    await this.setState( { showRating: false } );
    let ratings = { email: this.props.auth0.user.email, rating: val };
    let config = {
      method: 'put',
      baseURL: 'http://localhost:3001',
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
        <div style={{ borderRadius: '20px', marginTop: '50px' }}>

          <div class="ccc" style={{ background: `url(${this.state.data.picture})` , backgroundSize: '100%'}}>
            <span className='sss'>
              <img src={!this.state.favorite ? 'https://img.icons8.com/ios-glyphs/30/ff0000/like--v2.png' : 'https://img.icons8.com/ios-glyphs/30/ff0000/like.png'} alt='' data-idd={this.state.data._id} onClick={this.handleHeart} style={{ marginRight: '0.5rem' }} />

              <img src={!this.state.rate ? 'https://img.icons8.com/ios-glyphs/30/ffff00/star--v2.png' : 'https://img.icons8.com/ios-glyphs/30/ffff00/star.png'} alt='' onClick={() => { this.setState( { rate: !this.state.rate } ); this.setState( { showRating: !this.state.showRating } ); }} />
            </span>

            <div class="ccc_info">
              <span><img src="https://img.icons8.com/ios-glyphs/20/ffffff/user-male--v1.png" alt='' />
                {this.state.data.attending.length}</span>
              <span><img src="https://img.icons8.com/ios-glyphs/20/ffffff/star--v1.png" alt='' />
                {( this.state.data.ratings.map( itm => itm.rating ).reduce( ( tot, itm ) => tot + itm, 0 ) / this.state.data.ratings.length ).toFixed( 2 ) || '0'}</span>
            </div>
            <div class="ccc_profile" style={{ display: 'felx', flexDirection: 'column' }} >
              <div class="ccc_profile__text" style={{ width: '320px' }}>
                <h2>{this.state.data.title}</h2>
                <p>{this.state.data.description}</p>
              </div>
              <div style={{ display: 'flex', gap: '3rem', width: '320px', justifyContent: 'center' }}>
                {!this.props.inProfile || !this.props.cr ? <Link to='/details'>
                  <Button onClick={() => this.props.getCardInfo( this.state.data )}>Details</Button>
                </Link> : undefined}

                {this.props.cr && this.props.inProfile ? <Button onClick={( e ) => this.deleteEvent( e )}>Delete</Button> : undefined}
                {this.props.cr && this.props.inProfile ? <Button onClick={( e ) => this.updateEvent( e )} >Update</Button> : undefined}
              </div>

            </div>


            {this.state.showRating ? ( <div style={{ position: 'absolute', left: '-55px', top: '-80px', zIndex: '2' }}>
              <div style={{ width: '250px', height: '60px', background: 'red', position: 'relative', borderRadius: '10px' }} className='bg-dark'>
                <select id="dropdown-basic-button" title="Dropdown button" style={{ zIndex: '1', position: 'absolute', width: '240px', top: '5px', left: '4.5px', height: '50px', color: 'white', border: 'none', outline: 'none' }} className='bg-dark' onChange={( e ) => this.getRating( e.target.value )}>
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
                <div style={{ background: 'red', width: '58px', height: '58px', transform: 'rotate(45deg)', position: 'absolute', top: 12, left: 'calc(50% - 30px)', zIndex: '0' }} className='bg-dark'>
                </div>
              </div>
            </div> ) :
              undefined}
          </div>
        </div> : undefined }

      </>
    );
  }

}

export default withAuth0( AboutCard );

