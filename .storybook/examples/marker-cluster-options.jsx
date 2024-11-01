import React from 'react';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import MarkerClusterGroup from './../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './constants';

import './styles.scss';

// Function for creating custom icon for cluster group
// https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers
// NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax
// eslint-disable-next-line
const createClusterCustomIcon = function(cluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'marker-cluster-custom',
    iconSize: L.point(40, 40, true),
  });
};

const MarkerClusterOptions = () => (
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

    {/* Pass Leaflet.markercluster option directly to MarkerClusterGroup as prop */}
    <MarkerClusterGroup
      showCoverageOnHover={false}
      spiderfyDistanceMultiplier={2}
      iconCreateFunction={createClusterCustomIcon}
    >
      <Marker position={[49.8397, 24.0297]} />
      <Marker position={[50.4501, 30.5234]} />
      <Marker position={[52.2297, 21.0122]} />
      <Marker position={[50.0647, 19.945]} />
      <Marker position={[48.9226, 24.7111]} />
      <Marker position={[48.7164, 21.2611]} />
      <Marker position={[51.5, -0.09]} />
      <Marker position={[51.5, -0.09]} />
      <Marker position={[51.5, -0.09]} />
    </MarkerClusterGroup>
  </MapContainer>
);

export default MarkerClusterOptions;
