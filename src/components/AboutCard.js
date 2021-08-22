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
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export class AboutCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.ownData,
      favorite: false,
      rate: false,
      opacity: 0,
    }
  }
  componentDidMount() {
    this.setState({ data: this.props.ownData });
    let opacity = this.state.opacity;
    let searchAnim = setInterval(() => {
      this.setState({ opacity });
      opacity += 0.01;
      if (opacity >= 1) {
        clearInterval(searchAnim);
      }
    }, 5);
  }
  handleHeart = async (e) => {
    this.setState({ favorite: !this.state.favorite });
    let email = String(this.props.auth0.user.email);
    //this.setState({data: { ...this.state.data, favorites: [1,2,3,4]}});
    //console.log(e.target.dataset.idd);
    let favorites = this.state.data.favorites.concat(email+'^');
    //console.log(favorites);
    await this.setState({ data: { ...this.state.data, favorites: favorites } })
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/${e.target.dataset.idd}`,
      data: this.state.data
    };
    axios(config).then((result) => {

      this.setState({
        events: result.data,
      });
      
    }).catch((err) => console.log('errrrrrrrrrrrrrrrrrrrrroooooooooooooooooooorrrrrrrrrrr'));
  }
  render() {
    return (
      <Container className='border rounded' style={{ background: 'darkgray', opacity: `${this.state.opacity}` }} >
        <Row className='border-bottom'>
          <Col align='end' >
            <img src={!this.state.favorite ? 'https://img.icons8.com/ios-glyphs/30/ff0000/like--v2.png' : "https://img.icons8.com/ios-glyphs/30/ff0000/like.png"} alt='' data-idd={this.state.data._id} onClick={this.handleHeart} />

            <img src={!this.state.rate ? "https://img.icons8.com/ios-glyphs/30/ffff00/star--v2.png" : `https://img.icons8.com/ios-glyphs/30/ffff00/star.png`} alt='' onClick={() => this.setState({ rate: !this.state.rate })} />
          </Col>
        </Row>
        <Row>
          <Col xl='2'>
            <img src='https://picsum.photos/200' alt='' />
          </Col>
          <Col>
            <Row style={{ height: '70%', paddingTop: '0.5rem' }}>
              <h3>{this.state.data.title}</h3>
              <p>{this.state.data.description}</p>


            </Row>
            <Row>
              <Col >
                <Button>View details</Button>
              </Col>
              <Col align='end' style={{ gap: '0.75rem', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', textAlign: 'center', alignItems: 'center' }}>
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/user-male--v1.png" alt='' />
                    {this.state.data.attending.length}
                  </div>

                  <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                    <img src="https://img.icons8.com/ios-glyphs/20/ffff00/star--v1.png" alt='' />
                    {this.state.data.ratings.length}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>


        </Row>
      </Container>
      
    );
  }
}

export default withAuth0(AboutCard);
