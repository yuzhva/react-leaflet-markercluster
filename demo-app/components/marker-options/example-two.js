import React from 'react';

import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './../../constants';

const redMarker = L.icon({
  iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const transparentMarker = L.icon({
  iconUrl: './demo-app/assets/icons/red-stroke-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markers = [
  { position: [49.8397, 24.0297] },
  { position: [50.4501, 30.5234] },
  { position: [52.2297, 21.0122], options: { title: 'Warszawa title on hover' } },
  { position: [50.0647, 19.9450] },
  { position: [48.9226, 24.7111], options: { title: 'San Frankivsko title on hover' } },
  { position: [48.7164, 21.2611] },
  { position: [51.5, -0.09], options: { icon: transparentMarker } },
];

// E.G. (Exempli Gratia)
const MarkerOptionsEGTwo = () => (
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

    <MarkerClusterGroup
      markers={markers}
      wrapperOptions={{ enableDefaultStyle: true }}
      markerOptions={{ icon: redMarker, title: 'Default title' }}
    />
  </Map>
);

export default MarkerOptionsEGTwo;
