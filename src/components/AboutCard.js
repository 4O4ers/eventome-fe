import React, { Component } from "react";
import {
  Button,
} from "react-bootstrap";
import '../App.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from "react-router-dom";
export class AboutCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.ownData,
      favorite: false,
      rate: false,
      opacity: 0,
      showRating: false,
      hideRating: false,
      id: '',
      favorites: [],
      userFavorites: [],
    }
  }
  componentDidMount() {
    this.setState({ data: this.props.ownData, id: this.props.id });

  }

  handleHeart = async (e) => {
    this.setState({ favorite: !this.state.favorite });
    let email = this.props.auth0.user.email;
    await this.setState({ favorites: this.state.favorites.push(email) });

    let favorites = this.state.data.favorites;
    favorites.push(email);
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/favorites/${e.target.dataset.idd}`,
      data: { favorites: favorites }
    };
    axios(config).then((result) => {
      //console.log(result)
      this.setState({
        events: result.data,
      });

    })
      .then(res => {

        favorites.push(email);
        let config = {
          method: "put",
          baseURL: `http://localhost:3001`,
          url: `/user/favorites/${this.props.auth0.user.email}`,
          data: { favorites: [e.target.dataset.idd] }
        };
        axios(config).then((result) => {
          console.log(result)
          this.setState({
            events: result.data,
          });

        }).catch((err) => console.log(err));
      }).catch((err) => console.log(err));
  }
  showRating = () => {
    this.setState({ showRating: !this.state.showRating });
  }
  getRating = async (val) => {

    await this.setState({ rating: val });
    await this.setState({ showRating: false });
    let ratings = { email: this.props.auth0.user.email, rating: val };
    console.log(ratings)
    await this.setState({ data: { ...this.state.data, ratings } })
    let config = {
      method: "put",
      baseURL: `http://localhost:3001`,
      url: `/event/ratings/${this.props.id}`,
      data: { ratings: ratings }
    };
    axios(config).then((result) => {

      this.setState({
        events: result.data,
      });
      console.log(result.data);
    }).catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <div style={{ borderRadius: '20px', overflow: 'hidden'}}>

          <div class="ccc" style={{ background: 'url(https://picsum.photos/400/600)' }}>
            <span className='sss'>
              <img src={!this.state.favorite ? 'https://img.icons8.com/ios-glyphs/30/ff0000/like--v2.png' : "https://img.icons8.com/ios-glyphs/30/ff0000/like.png"} alt='' data-idd={this.state.data._id} onClick={this.handleHeart} style={{marginRight: '0.5rem'}} />

              <img src={!this.state.rate ? "https://img.icons8.com/ios-glyphs/30/ffff00/star--v2.png" : `https://img.icons8.com/ios-glyphs/30/ffff00/star.png`} alt='' onClick={() => { this.setState({ rate: !this.state.rate }); this.setState({ showRating: !this.state.showRating }) }} />
            </span>
            <div class="ccc_info">
              <span><img src="https://img.icons8.com/ios-glyphs/20/ffffff/user-male--v1.png" alt='' />
                {this.state.data.attending.length}</span>
              <span><img src="https://img.icons8.com/ios-glyphs/20/ffffff/star--v1.png" alt='' />
                {this.state.data.ratings.map(itm => itm.rating).reduce((tot, itm) => tot + itm, 0) / this.state.data.ratings.length || "0"}</span>
            </div>
            <div class="ccc_profile">
              <div class="ccc_profile__text">
                <h2>{this.state.data.title}</h2>
                <p>{this.state.data.description}</p>
              </div>
            </div>
            <Link to='/details'>
              <Button style={{ position: 'absolute', bottom: '0px', left: '220px', float: 'right' }} onClick={() => this.props.getCardInfo(this.state.data)}>Details</Button>
            </Link>

            {this.state.showRating ? (<div style={{ position: 'absolute', left: '-75px', top: '-80px', zIndex: '2' }}>
              <div style={{ width: '250px', height: '60px', background: 'red', position: 'relative', borderRadius: '10px' }} className='bg-dark'>
                <select id="dropdown-basic-button" title="Dropdown button" style={{ zIndex: '1', position: 'absolute', width: '240px', top: '5px', left: '4.5px', height: '50px', color: 'white', border: 'none', outline: 'none' }} className='bg-dark' onChange={(e) => this.getRating(e.target.value)}>
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
            </div>) :
              undefined}
          </div>
        </div>
      </>
    );
  }

}

export default withAuth0(AboutCard);

