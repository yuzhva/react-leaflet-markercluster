import React, {Component} from 'react';

import L from 'leaflet'
import {Map, TileLayer} from 'react-leaflet';

import MarkerClusterGroup from 'react-leaflet-markercluster';

const mapPosition = [49.8397, 24.0297];

const redMarker = L.icon({
  iconUrl: './../assets/icons/red-filled-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 20]
});

const transparentMarker = L.icon({
  iconUrl: './../assets/icons/red-stroke-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 20]
});

const markers = [
  {lat: 49.8397, lng: 24.0297, options: {icon: transparentMarker}},
  {lat: 50.4501, lng: 30.5234},
  {lat: 52.2297, lng: 21.0122},
  {lat: 50.0647, lng: 19.9450},
  {lat: 48.9226, lng: 24.7111},
  {lat: 48.7164, lng: 21.2611},
  {lat: 51.5, lng: -0.09, popup: "<b>Hello world!</b><br>I am a lonely marker."}
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
          wrapperOptions={{enableDefaultStyle: true}}
          markerOptions={{icon: redMarker}}
        />
      </Map>
    );
  }
}
