import React from 'react';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import MarkerClusterGroup from './../../src/react-leaflet-markercluster';

import redFilledMarker from './icons/red-filled-marker.svg';
import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './constants';

import './styles.scss';

// Create marker icon according to the official leaflet documentation
const redMarker = L.icon({
  iconUrl: redFilledMarker,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const MarkerOptions = () => (
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
      <Marker position={[49.8397, 24.0297]} icon={redMarker} />
      <Marker position={[50.4501, 30.5234]} />
      <Marker position={[52.2297, 21.0122]} title="Warszawa title on hover" />
      <Marker position={[50.0647, 19.945]} />
      <Marker
        position={[48.9226, 24.7111]}
        title="San Frankivsko title on hover"
      />
      <Marker position={[48.7164, 21.2611]} />
      <Marker
        position={[51.5, -0.09]}
        icon={redMarker}
        title="London title on hover"
      />
    </MarkerClusterGroup>
  </MapContainer>
);

export default MarkerOptions;
