import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './../../constants';

const markers = [
  { lat: 49.8397, lng: 24.0297 },
  { lat: 49.8397, lng: 24.0297 },
  { lat: 49.8397, lng: 24.0297 },
  { lat: 52.2297, lng: 21.0122 },
  { lat: 52.2297, lng: 21.0122 },
  { lat: 51.5074, lng: -0.0901 },
];

const wrapperOptions = {
  enableDefaultStyle: true,
  disableDefaultAnimation: true,
  removeDuplicates: true,
};

// E.G. (Exempli Gratia)
const CustomOptionsEGTwo = () => (
  <Map
    className="markercluster-map"
    center={MAP_CENTER_COORDINATES}
    zoom={MAP_ZOOM}
    maxZoom={MAP_MAX_ZOOM}
  >

    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <MarkerClusterGroup markers={markers} wrapperOptions={wrapperOptions} />
  </Map>
);

export default CustomOptionsEGTwo;
