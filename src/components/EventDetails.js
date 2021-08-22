import React, { Component } from 'react';
import Map from './Map';


export class EventDetails extends Component {
    render() {
        return (
            <>
            <div className ="deaialsContainer">
                <div>
                <h2>Event Title</h2>
                <img src ="https://img.freepik.com/free-photo/party-background-with-decorative-items_23-2147628485.jpg?size=626&ext=jpg&ga=GA1.2.901275435.1618704000"/>
                <h4>Deatails</h4>
                <p>jnvkwjdvnkbnkjfvkfvnfkjvnfkjvn dkjfvn dkvdkjv dkjvnk
                    vdsv sdkjv dskjvnskdvnkdsv
                    mvksdvmdksvnkdn
                    mvksdvmdskvsdklnvsldkvndk
                    v dmsv dkvm dklvmkdvmklmvkmvkmvkvmkvmkdvnvn
                </p>


                <div className>
                <span>Orgnazation details</span>

                <div className ="userInfo">
                <img src ="http://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"/>
                <h4>john mklwdfm</h4>
                </div>
                <p className ="par">nkwengwekgnwekgm,m kefnewk mfnewk</p>
                </div>

                </div>




                <div className ="rightDetails">
                <h3>Map</h3>
                <Map lngLat={this.lngLat}/>
                <h3>Address details</h3>
                <p>rkgmr mrgrk k4gml5g</p>

                </div>






                
            </div>






            <div className="comments">
                <h2>Comments</h2>

                <div className="containComments">
                <div className="userComment">
                    <img src ="http://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"/>
                    <p>kjghksgekegkenke tk jeskfek kfjekfjewitj3wir</p>
                    <button>reply</button>
                </div>
                

               
              
                <div className="userComment">
                    <img src ="http://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"/>
                    <p>kjghksgekegkenke tk jeskfek kfjekfjewitj3wir</p>
                    <button>reply</button>
                </div>
                
                </div>
                
            </div>

           
</>



        )
    }
}

export default EventDetails
