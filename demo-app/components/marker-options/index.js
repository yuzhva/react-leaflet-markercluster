import React from 'react';
import Highlight from 'react-highlight';

import MarkerOptionsEGOne from './example-one';
import MarkerOptionsEGTwo from './example-two';

const BasicExample = () => {
  return (
    <div className="marker-options">
      <p>According to the official leaflet documentation, you could set some
        &nbsp;<a href="http://leafletjs.com/reference-1.0.3.html#marker" target="_blank">
          option for a marker
        </a>
        &nbsp;when you creating it.
      </p>
      <p>So, actually there is two ways how you could set option like:
        &nbsp;<mark>icon, title, alt, ... etc.</mark>
        &nbsp;for marker:
      </p>

      <h3>1) By sending leaflet options derictly to marker</h3>
      <p>Just define key <strong>options</strong> for marker object:</p>
      <Highlight className='javascript'>
            {`
  import L from 'leaflet'

  // Create marker icon according to the official leaflet documentation
  const redMarker = L.icon({
    iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  // If you would like to add some specific options for marker
  // just pass option from documentation inside object with options key:
  const markers = [
    {lat: 49.8397, lng: 24.0297, options: {icon: redMarker}},
    {lat: 50.4501, lng: 30.5234},
    {lat: 52.2297, lng: 21.0122, options: {title: 'Warszawa title on hover'}},
    {lat: 50.0647, lng: 19.9450},
    {lat: 48.9226, lng: 24.7111, options: {title: 'San Frankivsko title on hover'}},
    {lat: 48.7164, lng: 21.2611},
    {lat: 51.5, lng: -0.09, options: {icon: redMarker}},
  ];

  // Put <MarkerClusterGroup ... /> inside react-leaflet after <TileLayer />
  <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

    <MarkerClusterGroup
      markers={markers}
      wrapperOptions={{enableDefaultStyle: true}}
    />
  </Map>
            `}
      </Highlight>

      <MarkerOptionsEGOne />

      <div className="alert alert-warning" role="alert">
        <a href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/marker-options/example-one.js"
          className="alert-link"
          target="_blank">

            Link to the full sample code
          </a>
      </div>


      <h3>2) By setting MarkerClusterGroup param for all makers</h3>
      <p>Just pass <strong>markerOptions=""</strong> property to MarkerClusterGroup component:</p>
      <Highlight className='javascript'>
            {`
  import L from 'leaflet'

  // Create marker icon according to the official leaflet documentation
  const redMarker = L.icon({
    iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });
  const transparentMarker = L.icon({
    iconUrl: './demo-app/assets/icons/red-stroke-marker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  // Define markers list with REQUIRE 'lat' and 'lng' keys.
  // Some of markers have personal options
  const markers = [
    {lat: 49.8397, lng: 24.0297},
    {lat: 50.4501, lng: 30.5234},
    {lat: 52.2297, lng: 21.0122, options: {title: 'Warszawa title on hover'}},
    {lat: 50.0647, lng: 19.9450},
    {lat: 48.9226, lng: 24.7111, options: {title: 'San Frankivsko title on hover'}},
    {lat: 48.7164, lng: 21.2611},
    {lat: 51.5, lng: -0.09, options: {icon: transparentMarker}},
  ];

  // Pass markerOptions="" property to <MarkerClusterGroup ... />
  <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

    <MarkerClusterGroup
      markers={markers}
      wrapperOptions={{enableDefaultStyle: true}}
      markerOptions={{icon: redMarker, title: 'Default title'}}
    />
  </Map>
            `}
      </Highlight>

      <MarkerOptionsEGTwo />

      <div className="alert alert-warning" role="alert">
        <a href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/marker-options/example-two.js"
          className="alert-link"
          target="_blank">

            Link to the full sample code
          </a>
      </div>

      <div className="alert alert-danger" role="alert">
        Be careful by combining markerOptions and each marker options like: lat: 'x', lng: 'x', options: ...<br/>
        When you are setting options for each marker, you are overwriting markerOptions.
      </div>
    </div>
  )
};

export default BasicExample;
