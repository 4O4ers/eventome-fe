import React, { Component } from "react";
import {
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import '../App.css';

export class AboutCard extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
      rate: false,
      opacity: 0,
    }
  }
  componentDidMount() {
    let opacity = this.state.opacity;
    let searchAnim = setInterval(() => {
      this.setState({opacity});
      opacity+=0.01;
      if (opacity >= 1 ) {
        clearInterval(searchAnim);
      }
    }, 5);
  }
  render() {
    return (
      <Container className='border rounded' style={{background: 'darkgray', opacity: `${this.state.opacity}`}} >
        <Row className='border-bottom'>
          <Col align='end' >
            <img src={this.state.favorite ? 'https://img.icons8.com/ios-glyphs/30/ff0000/like--v2.png' : "https://img.icons8.com/ios-glyphs/30/ff0000/like.png"} alt='' onClick={() => this.setState({ favorite: !this.state.favorite })} />

            <img src={this.state.rate ? "https://img.icons8.com/ios-glyphs/30/ffff00/star--v2.png" : `https://img.icons8.com/ios-glyphs/30/ffff00/star.png`} alt='' onClick={() => this.setState({ rate: !this.state.rate })} />
          </Col>
        </Row>
        <Row>
          <Col xl='2'>
            <img src='https://picsum.photos/200' alt='' />
          </Col>
          <Col>
            <Row style={{ height: '70%', paddingTop: '0.5rem' }}>
              <h3>Event title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>


            </Row>
            <Row>
              <Col >
                <Button>Attend</Button>
              </Col>
              <Col align='end' style={{ gap: '0.75rem', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{display: 'flex', gap: '1rem'}}>
                  <div style={{ display: 'flex', gap: '0.25rem', textAlign: 'center', alignItems: 'center'}}>
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/user-male--v1.png" alt='' />
                    650
                  </div>

                  <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                    <img src="https://img.icons8.com/ios-glyphs/20/ffff00/star--v1.png" alt='' />
                    8.65
                  </div>
                </div>
              </Col>
            </Row>
          </Col>


        </Row>
      </Container>
      // <Container
      //   style={{
      //     display: "flex",
      //     flexDirection: " column",
      //     alignItems: "center",
      //     marginTop: "10rem",
      //     borderRadius: '15px',
      //     border: 'solid red',
      //     maxWidth: 'fit-content'
      //   }}
      // >
      //   <div style={{ width: "70%", marginBottom: "5rem" }}>
      //   </div>
      //   <div style={{ width: "70%" }}>
      //     <Container fluid>
      //       <Row>
      //         <Col>
      //           <Card
      //             style={{
      //               width: "45rem",
      //             }}
      //           >
      //             <div style={{ background: "black", padding: '0.25rem 0' }}>
      //               <Card.Title style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', padding: '0.25rem'}}>

      //                   <img src={this.state.favorite ? 'https://img.icons8.com/ios-glyphs/30/ff0000/like--v2.png' : "https://img.icons8.com/ios-glyphs/30/ff0000/like.png"} alt='' onClick={() => this.setState({favorite: !this.state.favorite})}/>
      //                   <img src= {this.state.rate ? "https://img.icons8.com/ios-glyphs/30/ffff00/star--v2.png" : `https://img.icons8.com/ios-glyphs/30/ffff00/star.png`}  alt='' onClick={() => this.setState({rate: !this.state.rate})}/>
      //               </Card.Title>
      //             </div>

      //             <div style={{ display: "flex", flexDirection: "row" }}>
      //               <Card.Img
      //                 variant="top"
      //                 src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
      //                 style={{ width: "10rem" }}
      //               />
      //               <Card.Body>
      //                 <div
      //                   style={{
      //                     display: "flex",
      //                     justifyContent: "space-between",
      //                   }}
      //                 >
      //                   <Card.Title>Card Title</Card.Title>
      //                 </div>
      //                 <Card.Text>
      //                   Some quick example text to build on the card title and
      //                   make up the bulk of the card's content.
      //                 </Card.Text>
      //                 <Button variant="primary">Join Meeting</Button>
      //                 <span>number of particebant👥 </span>
      //                 <span>Raghiting⭐  </span>
      //               </Card.Body>
      //             </div>
      //           </Card>
      //         </Col>
      //       </Row>
      //     </Container>
      //   </div>
      // </Container>
    );
  }
}

export default AboutCard;
