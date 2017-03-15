import React from 'react';

import L from 'leaflet';
import {Map, TileLayer} from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import {MAP_MAX_ZOOM} from './../../constants';

const mapPosition = [51.0, 19.0];

// Setting tooltip according to Leaflet documentation
// http://leafletjs.com/reference-1.0.3.html#tooltip-l-tooltip
const tooltipWithOptions = L.tooltip({direction: 'bottom'})
.setContent('my tooltip text 2');

const markers = [
  {lat: 49.8397, lng: 24.0297, tooltip: 'my tooltip text 1'},
  {lat: 50.4501, lng: 30.5234},
  {lat: 52.2297, lng: 21.0122},
  {lat: 50.0647, lng: 19.9450},
  {lat: 48.9226, lng: 24.7111},
  {lat: 48.7164, lng: 21.2611},
  {lat: 51.5, lng: -0.09, tooltip: tooltipWithOptions},
];

// E.G. (Exempli Gratia)
const MarkerTooltipEGOne = () => {
  return (
    <Map
      className="markercluster-map"
      center={mapPosition}
      zoom={3}
      maxZoom={MAP_MAX_ZOOM}>

      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup
        markers={markers}
        wrapperOptions={{enableDefaultStyle: true}}
      />
    </Map>
  );
};

export default MarkerTooltipEGOne;
