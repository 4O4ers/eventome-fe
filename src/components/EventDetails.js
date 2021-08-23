import React, { Component } from 'react';
// import Map from './Map';
import { withAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';
import Vector from '../components/Images/Vector 3.png';
import Vector2 from '../components/Images/Vector 4.png';
import vector5 from '../components/Images/Vector 5.png';
class EventDetails extends Component {
    render() {
        return (
            <>
            <img className='vector1' src={Vector} alt='' />
        <img className='vector2' src={Vector2} alt='' />
        <img className='vector7' src={vector5} alt='' />
                <div className="con">
                    <div>
                        <div className='eventGt'>
                            <h2>Event Title</h2>
                        </div>
                        <div className='eventGi'>
                            <img src="https://img.freepik.com/free-photo/party-background-with-decorative-items_23-2147628485.jpg?size=626&ext=jpg&ga=GA1.2.901275435.1618704000" />
                            <h4>Deatails</h4>
                            <p>allalalal</p>
                        </div>
                    </div>
                    <div>
                    <Button className='attend' variant="primary">Attend</Button>{' '}
                    </div>

                    {/* <div className="rplay">
                        <h2>Comments</h2>

                        <div className="">
                            <div className="replay1">
                                <img src="http://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" />
                                <p>kjghksgekegkenke tk jeskfek kfjekfjewitj3wir</p>
                                <button>reply</button>
                            </div>

                            <div className="replay1">
                                <img src="http://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" />
                                <p>kjghksgekegkenke tk jeskfek kfjekfjewitj3wir</p>
                                <button>reply</button>
                            </div>

                        </div>

                    </div> */}

            </div>
            </>



                )
    }
}

                export default withAuth0(EventDetails)
