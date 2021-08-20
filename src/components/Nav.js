import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navTop: 0,
    }
  }
  componentDidMount() {
    let c = 0;
    let navAnim = setInterval(() => {
      this.setState({navTop: c});
      c++;
      if (c >= 50 ) {
        clearInterval(navAnim);
      }
    }, 5);
  }
  render() {
    return (
      <div style={{width: '100%', height: '50px', background: 'gray', position: 'absolute', top: `${this.state.navTop}px`, display: `flex`, alignItems: 'center', justifyContent: 'center', gap: '2rem', zIndex: '0'}}>
        <Link className='Link' to='/createEvent' onClick={this.props.showNav}>Create</Link>
        <Link  className='Link' to='/profile' onClick={this.props.showNav}>My Events</Link>
        <Link  className='Link' to='/about us' onClick={this.props.showNav}>About</Link>
      </div>
    )
  }
}

export default Nav
