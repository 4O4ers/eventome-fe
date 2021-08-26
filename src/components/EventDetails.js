import React, { Component } from 'react';
// import Map from './Map';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import swal from 'sweetalert';
class EventDetails extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: this.props.cardInfo,
      max_temp: '',
      weather: {},
      wind_spd: ''
    };
  }
  componentDidMount() {
    console.log( this.props.cardInfo );
    axios.get( `http://api.weatherbit.io/v2.0/forecast/daily/?lat=${this.props.cardInfo.address.lat}&lon=${this.props.cardInfo.address.lng}&key=44ec6d8999e14b9d857c29ecf03894bc` ).then( res => {
      let currentDay = res.data.data.filter( itm => itm.datetime === this.props.cardInfo.time[1] )[0];
      let { max_temp, weather, wind_spd } = currentDay;
      this.setState( { max_temp, weather, wind_spd } );
      console.log( currentDay );
    } ).catch( err => console.log( err ) );
  }
    handleAttendance = () => {
      let config = {
        method: 'put',
        baseURL: 'https://eventome.herokuapp.com',
        url: `/event/attending/${this.props.cardInfo._id}`,
        data: { attending: this.props.auth0.user.email }
      };

      axios( config ).then( ( result ) => {
        this.setState( {
          events: result.data,
        } );

      } ).then( res => {
        let config = {
          method: 'put',
          baseURL: 'https://eventome.herokuapp.com',
          url: `/user/attending/${this.props.auth0.user.email}`,
          data: { attending: this.state.data._id }
        };

        axios( config ).then( ( result ) => {
          console.log( result.data );
          this.setState( {
            events: result.data,
          } );
          swal( {
            title: 'You are in!',
            text: 'This event has been added to your list of events to be attended.',
            icon: 'success',
          } );
        } );
      } );
    }
    render() {
      return (
        <div className='aboutDiv'>

          <div className='abt-1' style={{ background: `url(${this.props.cardInfo.picture})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

          </div>

          <div className='abt-2'>
            <h2 style={{ textTransform: 'toUpperCase' }}>{this.props.cardInfo.title}</h2>
            <p>{this.props.cardInfo.description}</p>

          </div>

          <div className='abt-3'>
            <div className='timedate'>
              <span><img src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png" alt='' />16:00</span>

              <span><img src="https://img.icons8.com/material-outlined/24/000000/calendar--v1.png" alt='' />08-31-2021</span>

            </div>
            <div className='weather'>
              <span><img src="https://img.icons8.com/material-outlined/32/ff0000/temperature--v1.png" alt='' />{this.state.max_temp}&#8451;</span>

              <span><img src="https://img.icons8.com/windows/32/d0deec/clouds.png" alt='' />{this.state.weather.description}</span>

              <span><img src="https://img.icons8.com/ios-glyphs/32/b9c4d6/wind--v1.png" alt='' />{Number( this.state.wind_spd ).toFixed( 2 )}km/h</span>
            </div>
          </div>

          <div className='abt-4' style={{ backgroundImage: `url( https://maps.locationiq.com/v3/staticmap?key=pk.4a782b6f22a6f448625817dfd828280a&center=${this.props.cardInfo.address.lat},${this.props.cardInfo.address.lng}&zoom=16)` }}>
                    .
          </div>

          <div className='atnd'>
            <button onClick={() => this.handleAttendance()}>Going</button>
          </div>

        </div>



      );
    }
}

export default withAuth0( EventDetails );
