import React, { Component } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtemFhaG1hZCIsImEiOiJja3Ntd2ptMjgwd3gzMzJwbncxd29yN243In0.yqnzkeIXjrvG5RANNU-slQ';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    lng: 35.99,
    lat: 31.98,
    zoom: 9
    };
    this.mapContainer = React.createRef();
    }
    componentDidMount() {
      const { lng, lat, zoom } = this.state;
      const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
      });
      map.on('move', () => {
        this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
        });
        this.props.lngLat(this.state);
        });
        
      }
  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    )
  }
}

export default Map
