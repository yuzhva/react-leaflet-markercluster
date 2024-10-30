import React from 'react';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';

import MarkerClusterGroup from './../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './constants';

import './styles.scss';

// Setup Tooltip according to react-leaflet documentation
// https://react-leaflet.js.org/docs/en/examples.html
// http://leafletjs.com/reference.html#tooltip-option

const MarkerTooltip = () => (
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
      <Marker position={[49.8397, 24.0297]}>
        <Tooltip>
          <span>my tooltip text 1</span>
        </Tooltip>
      </Marker>

      <Marker position={[50.4501, 30.5234]} />
      <Marker position={[52.2297, 21.0122]} />
      <Marker position={[50.0647, 19.945]} />
      <Marker position={[48.9226, 24.7111]} />
      <Marker position={[48.7164, 21.2611]} />

      <Marker position={[51.5, -0.09]}>
        <Tooltip direction="bottom">
          <span>my tooltip text 1</span>
        </Tooltip>
      </Marker>
    </MarkerClusterGroup>
  </MapContainer>
);

export default MarkerTooltip;
