import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './../../constants';

const markers = [
  { position: [49.8397, 24.0297] },
  { position: [52.2297, 21.0122] },
  { position: [51.5074, -0.0901], popup: 'Hello world' },
];

// E.G. (Exempli Gratia)
const EventListenersEGOne = () => (
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

    {/* eslint-disable no-console */}
    <MarkerClusterGroup
      markers={markers}
      wrapperOptions={{ enableDefaultStyle: true }}
      onMarkerClick={(marker) => console.log(marker, marker.getLatLng())}
      onClusterClick={(cluster) => console.log(cluster, cluster.getAllChildMarkers())}
      onPopupClose={(popup) => console.log(popup, popup.getContent())}
    />
    {/* eslint-enable no-console */}
  </Map>
);

export default EventListenersEGOne;
