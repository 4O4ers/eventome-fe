import React, { Component } from 'react';
export class Rating extends Component {

  render() {
    return (
      <div style={{position: 'absolute', left: '1138px', top: '0px', zIndex: '2'}}>
        <div style={{ width: '250px', height: '60px', background: 'red', position: 'relative', borderRadius: '10px' }} className='bg-dark'>
          <select id="dropdown-basic-button" title="Dropdown button" style={{ zIndex: '1', position: 'absolute', width: '240px', top: '5px', left: '4.5px', height: '50px', color: 'white', border: 'none', outline: 'none' }} className='bg-dark' onChange={( e ) => this.props.getRating( e.target.value )}>
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
      </div>
    );
  }
}

export default Rating;
