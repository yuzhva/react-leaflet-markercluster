import React from 'react';

import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './../../constants';

const markers = [
  { position: [49.8397, 24.0297] },
  { position: [50.4501, 30.5234] },
  { position: [52.2297, 21.0122] },
  { position: [50.0647, 19.9450] },
  { position: [48.9226, 24.7111] },
  { position: [48.7164, 21.2611] },
  { position: [51.5, -0.09] },
  { position: [51.5, -0.09] },
  { position: [51.5, -0.09] },
];

const markerclusterOptions = {
  showCoverageOnHover: false,
  spiderfyDistanceMultiplier: 2,

  // Setting custom icon for clustere group
  // https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers
  // NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax
  // eslint-disable-next-line
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true),
    });
  },
};

// E.G. (Exempli Gratia)
const MarkerclusterOptionsEGOne = () => (
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

    <MarkerClusterGroup markers={markers} options={markerclusterOptions} />
  </Map>
);

export default MarkerclusterOptionsEGOne;
