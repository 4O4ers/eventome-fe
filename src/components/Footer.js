import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <div style={{minHeight: '10%'}}>
                <Link to='/about us' style={{ textDecoration: 'none' , color: 'white'}}>About</Link>
            </div>
        )
    }
}

export default Footer
