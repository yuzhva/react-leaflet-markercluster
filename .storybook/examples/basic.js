import React from 'react';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import MarkerClusterGroup from './../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './constants';

import './styles.scss';

const BasicExample = () => (
  <MapContainer
    className="markercluster-map"
    center={MAP_CENTER_COORDINATES}
    zoom={MAP_ZOOM}
    maxZoom={MAP_MAX_ZOOM}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <MarkerClusterGroup>
      <Marker position={[49.8397, 24.0297]} />
      <Marker position={[52.2297, 21.0122]} />
      <Marker position={[51.5074, -0.0901]} />
    </MarkerClusterGroup>
  </MapContainer>
);

export default BasicExample;
