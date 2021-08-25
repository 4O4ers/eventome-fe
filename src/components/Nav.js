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
      <div className ="navClass" style={{ top: `${this.state.navTop}px`, zIndex: '1'}}>
        <Link className='Link' to='/createEvent' onClick={this.props.showNav}>create</Link>
        <Link  className='Link' to='/profile' onClick={this.props.showNav}>my events</Link>
        <Link  className='Link' to='/about us' onClick={this.props.showNav}>about us</Link>
      </div>
    )
  }
}

export default Nav
