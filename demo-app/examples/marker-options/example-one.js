import React from 'react';

import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './../../constants';

// Create marker icon according to the official leaflet documentation
const redMarker = L.icon({
  iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// E.G. (Exempli Gratia)
const MarkerOptionsEGOne = () => (
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

    <MarkerClusterGroup>
      <Marker position={[49.8397, 24.0297]} icon={redMarker} />
      <Marker position={[50.4501, 30.5234]} />
      <Marker position={[52.2297, 21.0122]} title="Warszawa title on hover" />
      <Marker position={[50.0647, 19.9450]} />
      <Marker position={[48.9226, 24.7111]} title="San Frankivsko title on hover" />
      <Marker position={[48.7164, 21.2611]} />
      <Marker position={[51.5, -0.09]} icon={redMarker} />
    </MarkerClusterGroup>
  </Map>
);

export default MarkerOptionsEGOne;
