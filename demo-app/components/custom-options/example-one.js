import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './../../constants';

const markers = [
  { position: [49.8397, 24.0297] },
  { position: [49.8397, 24.0297] },
  { position: [49.8397, 24.0297] },
  { position: [52.2297, 21.0122] },
  { position: [52.2297, 21.0122] },
  { position: [51.5074, -0.0901] },
];

// E.G. (Exempli Gratia)
const CustomOptionsEGOne = () => (
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

    <MarkerClusterGroup markers={markers} />
  </Map>
);

export default CustomOptionsEGOne;
