import React from 'react';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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

// Setup Popup according to react-leaflet documentation
// https://react-leaflet.js.org/docs/en/examples.html
// http://leafletjs.com/reference.html#popup-option

const MarkerPopup = () => (
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
      <Marker position={[49.8397, 24.0297]} icon={redMarker}>
        <Popup>
          <div>
            <b>Hello world!</b>
            <p>I am a clustered popup.</p>
          </div>
        </Popup>
      </Marker>

      <Marker position={[50.4501, 30.5234]} />
      <Marker position={[52.2297, 21.0122]} />
      <Marker position={[50.0647, 19.945]} />
      <Marker position={[48.9226, 24.7111]} />
      <Marker position={[48.7164, 21.2611]} />

      <Marker position={[51.5, -0.09]}>
        <Popup minWidth={200} closeButton={false}>
          <div>
            <b>Hello world!</b>
            <p>I am a lonely popup.</p>
          </div>
        </Popup>
      </Marker>
    </MarkerClusterGroup>
  </MapContainer>
);

export default MarkerPopup;
