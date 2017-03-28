import React from 'react';

import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import {MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES} from './../../constants';

const markers = [
  {lat: 49.8397, lng: 24.0297},
  {lat: 52.2297, lng: 21.0122},
  {lat: 51.5074, lng: -0.0901}
];

const redMarker = L.icon({
  iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 20]
});

// E.G. (Exempli Gratia)
const ReactLeafletMarkersEGOne = () => {
  return (
    <Map
      className="markercluster-map"
      center={MAP_CENTER_COORDINATES}
      zoom={MAP_ZOOM}
      maxZoom={MAP_MAX_ZOOM}>

      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup
        wrapperOptions={{enableDefaultStyle: true}}
      >
        {markers.map((marker, index) =>
          <Marker key={index} position={[marker.lat, marker.lng]} icon={redMarker}>
            <Popup>
              <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
          </Marker>
        )}
      </ MarkerClusterGroup>
    </Map>
  );
}

export default ReactLeafletMarkersEGOne;
