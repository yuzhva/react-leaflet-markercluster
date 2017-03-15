import React from 'react';

import L from 'leaflet';
import {Map, TileLayer} from 'react-leaflet';

import MarkerClusterGroup from './../../../src/react-leaflet-markercluster';

import {MAP_MAX_ZOOM} from './../../constants';

const mapPosition = [51.0, 19.0];

const markers = [
  {lat: 49.8397, lng: 24.0297},
  {lat: 50.4501, lng: 30.5234},
  {lat: 52.2297, lng: 21.0122},
  {lat: 50.0647, lng: 19.9450},
  {lat: 48.9226, lng: 24.7111},
  {lat: 48.7164, lng: 21.2611},
  {lat: 51.5, lng: -0.09},
  {lat: 51.5, lng: -0.09},
  {lat: 51.5, lng: -0.09},
];

const markerclusterOptions = {
  showCoverageOnHover: false,
  spiderfyDistanceMultiplier: 2,

  // Setting custom icon for clustere group
  // https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers
  iconCreateFunction: (cluster) => {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true)
    });
  },
};

// E.G. (Exempli Gratia)
const MarkerclusterOptionsEGOne = () => {
  return (
    <Map
      className="markercluster-map"
      center={mapPosition}
      zoom={4}
      maxZoom={MAP_MAX_ZOOM}>

      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup
        markers={markers}
        options={markerclusterOptions}
        wrapperOptions={{enableDefaultStyle: true}}
      />
    </Map>
  );
}

export default MarkerclusterOptionsEGOne;
