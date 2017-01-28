import React, {Component} from 'react';
import {Map, TileLayer} from 'react-leaflet';

import MarkerClusterGroup from 'react-leaflet-markercluster';

const mapPosition = [49.8397, 24.0297];
const markers = [
  {lat: 49.8397, lng: 24.0297},
  {lat: 50.4501, lng: 30.5234},
  {lat: 52.2297, lng: 21.0122},
  {lat: 50.0647, lng: 19.9450},
  {lat: 48.9226, lng: 24.7111},
  {lat: 48.7164, lng: 21.2611},
  {lat: 51.5, lng: -0.09},
]

export default class MapExample extends Component {
  render() {
    return (
      <Map className="markercluster-map" center={mapPosition} zoom={3}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

        <MarkerClusterGroup
          markers={markers}
          params={{enableDefaultStyle: true}}/>
      </Map>
    );
  }
}
