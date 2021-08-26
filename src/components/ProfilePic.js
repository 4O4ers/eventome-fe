import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

export class ProfilePic extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 0,
      maxWidth: 0,
    };
  }
  componentDidMount() {
    let c = 0;
    let k = 0;
    let picAnim = setInterval( () => {
      this.setState( {opacity: c} );
      this.setState( {maxWidth: k} );
      c += 0.01;
      k += 0.3;
      if ( c >= 1 ) {
        clearInterval( picAnim );
      }
    }, 5 );
  }
  render() {
    return (
      <Link to='/profile'>
        <img src={this.props.auth0.user.picture} alt='' style={{ borderRadius: '50%', maxWidth: `${this.state.maxWidth}px`, opacity: `${this.state.opacity}` }} />
      </Link>
    );
  }
}

export default withAuth0( ProfilePic );
