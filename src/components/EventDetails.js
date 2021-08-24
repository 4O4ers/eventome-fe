import React, { Component } from 'react';
// import Map from './Map';
import { withAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';
import Vector from '../components/Images/Vector 3.png';
import Vector2 from '../components/Images/Vector 4.png';
import vector5 from '../components/Images/Vector 5.png';
import axios from 'axios';
class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.cardInfo,
        }
    }

handleAttendance = () => {
    let config = {
        method: "put",
        baseURL: `http://localhost:3001`,
        url: `/event/attending/${this.props.cardInfo._id}`,
        data: { attending: this.props.auth0.user.email }
      };

      axios(config).then((result) => {
        this.setState({
          events: result.data,
        });
  
      }).then(res => {
        let config = {
            method: "put",
            baseURL: `http://localhost:3001`,
            url: `/user/attending/${this.props.auth0.user.email}`,
            data: { attending: this.state.data._id }
          };
    
          axios(config).then((result) => {
            console.log(result.data);
            this.setState({
              events: result.data,
            });
           
          })
      })
  }
    render() {
        return (
            <>
            <img className='vector1' src={Vector} alt='' />
        <img className='vector2' src={Vector2} alt='' />
        <img className='vector7' src={vector5} alt='' />
                <div className="con">
                    <div>
                        <div className='eventGt'>
                            <h2>{this.props.cardInfo.title}</h2>
                        </div>
                        <div className='eventGi'>
                            <img src="https://img.freepik.com/free-photo/party-background-with-decorative-items_23-2147628485.jpg?size=626&ext=jpg&ga=GA1.2.901275435.1618704000" alt='' />
                            <h4>Description</h4>
                            <p>{this.props.cardInfo.description}</p>
                        </div>
                    </div>
                    <div>
                    <Button className='attend' variant="primary" onClick={() => this.handleAttendance()}>Attend</Button>{' '}
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
