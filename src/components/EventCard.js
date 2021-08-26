/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

export class EventCard extends Component {
  render() {
    return (
      <div className='cardDiv'>
        <div className='contentDiv'>
          <div className='a1'>
            <h2>The Event Title</h2>
          </div>
          <div className='b1'>
            <p>
              this is the descripiton of the event, this is not much, you can check in the details later if you want, but do not feel discouraged at all.


            </p>
          </div>
          <div className='btm'>

            <div className='d1'>
              <span><img src="https://img.icons8.com/material-rounded/24/ffffff/star--v1.png" alt=''/> 9.8</span>
              <span></span>
            </div>
            <div className='c1'>
              <button >view details</button>
            </div>
          </div>


        </div>
        <div className='imgDiv'>

        </div>
      </div>
    );
  }
}

export default EventCard;
