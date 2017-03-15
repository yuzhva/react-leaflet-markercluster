import React from 'react';

import L from 'leaflet';
import {Map, TileLayer} from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

const mapPosition = [51.0, 19.0];

const redMarker = L.icon({
  iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 20]
});

const markers = [
  {lat: 49.8397, lng: 24.0297, popup: getStringPopup('clustered'), options: {icon: redMarker}},
  {lat: 50.4501, lng: 30.5234},
  {lat: 52.2297, lng: 21.0122},
  {lat: 50.0647, lng: 19.9450},
  {lat: 48.9226, lng: 24.7111},
  {lat: 48.7164, lng: 21.2611},
  {lat: 51.5, lng: -0.09, popup: getLeafletPopup('lonely')},
];

// E.G. (Exempli Gratia)
const MarkerPopupEGOne = () => {
  return (
    <Map className="markercluster-map" center={mapPosition} zoom={3}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

      <MarkerClusterGroup
        markers={markers}
        wrapperOptions={{enableDefaultStyle: true}}
      />
    </Map>
  );
};

function getStringPopup(name) {
  return (`
    <div>
      <b>Hello world!</b>
      <p>I am a ${name} popup.</p>
    </div>
  `);
}

function getLeafletPopup(name) {
  return L.popup({minWidth: 200, closeButton: false})
    .setContent(`
      <div>
        <b>Hello world!</b>
        <p>I am a ${name} popup.</p>
      </div>
    `);
}

export default MarkerPopupEGOne;
