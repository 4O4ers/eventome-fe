import React, { Component } from 'react';
// import Map from './Map';
import { withAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';
import Vector from '../components/Images/Vector 3.png';
import Vector2 from '../components/Images/Vector 4.png';
import vector5 from '../components/Images/Vector 5.png';
import axios from 'axios';
import swal from 'sweetalert';

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
                swal({
                    title: "You are in!",
                    text: "This event has been added to your list of events to be attended.",
                    icon: "success",
                  });
            })
        })
    }
    render() {
        return (
            <div>

                <img className="vector1" src={Vector} alt="" />




                <div class="container bootdey" style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
                    <div class="col-md-10">
                        <section class="panel">
                            <div class="panel-body" style={{ display: "flex", gap: "3rem", flexWrap: 'wrap' }}>
                                <div class="col-md-6">
                                    <div class="pro-img-details" style={{borderRadius: '15px', overflow: 'hidden'}}>
                                        <img
                                            src={this.props.cardInfo.picture}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <h4 class="pro-d-title">
                                        <span class="">{this.props.cardInfo.title}</span>
                                    </h4>
                                    <p>
                                        <strong></strong>
                                        {this.props.cardInfo.description}
                                        Praesent ac condimentum felis. Nulla at nisl orci, at
                                        dignissim dolor, The best product descriptions address your
                                        ideal buyer directly and personally. The best product
                                        descriptions address your ideal buyer directly and
                                        personally.
                                    </p>
                                    {/* <div class="product_meta">
                                        <span class="posted_in">
                                            {" "}
                                            <strong>Categories:</strong> {this.props.cardInfo.title}
                                        </span>
                                    </div> */}

                                    <p>
                                        <Button
                                            className="attend"
                                            variant="primary"
                                            onClick={() => this.handleAttendance()}
                                        >
                                            attend
                                        </Button>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>



        )
    }
}

export default withAuth0(EventDetails)
