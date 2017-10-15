import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import CustomOptionsEGOne from './example-one';
import CustomOptionsEGTwo from './example-two';

const CustomOptions = () => (
  <div className="custom-options">
    <p>You can set them by passing <strong>wrapperOptions=&quot;&quot;</strong>
      &nbsp;property to MarkerClusterGroup component.
    </p>

    <p>There is only three options for now:</p>
    <ul className="list-group">
      <li className="list-group-item">
        <strong>enableDefaultStyle</strong> | default: false
      </li>
      <li className="list-group-item">
        <strong>disableDefaultAnimation</strong> | default: false
      </li>
      <li className="list-group-item">
        <strong>removeDuplicates</strong> | default: false
      </li>
    </ul>

    <p>Lets create some basic example:</p>
    <Highlight className="javascript">
      {`
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Define markers list with REQUIRED 'lat' and 'lng' keys:
const markers = [
  { lat: 49.8397, lng: 24.0297 },
  { lat: 49.8397, lng: 24.0297 },
  { lat: 49.8397, lng: 24.0297 },
  { lat: 52.2297, lng: 21.0122 },
  { lat: 52.2297, lng: 21.0122 },
  { lat: 51.5074, lng: -0.0901 },
];

// Put <MarkerClusterGroup ... /> inside react-leaflet after <TileLayer />
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MarkerClusterGroup markers={markers} />
</Map>
      `}
    </Highlight>

    <CustomOptionsEGOne />

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/custom-options/example-one.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        Link to the full sample code
      </a>
    </div>

    <p>Lets use some of the react-leaflet-markercluster wrapper option by sending
      &nbsp;<strong>wrapperOptions=&quot;&quot;</strong> property to MarkerClusterGroup component:
    </p>

    <Highlight className="javascript">
      {`
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Define markers list with REQUIRED 'lat' and 'lng' keys:
const markers = [
  { lat: 49.8397, lng: 24.0297 },
  { lat: 49.8397, lng: 24.0297 },
  { lat: 49.8397, lng: 24.0297 },
  { lat: 52.2297, lng: 21.0122 },
  { lat: 52.2297, lng: 21.0122 },
  { lat: 51.5074, lng: -0.0901 },
];

// Define JS object with some of wrapper options:
const wrapperOptions = {
  enableDefaultStyle: true,
  disableDefaultAnimation: true,
  removeDuplicates: true
};

// Put <MarkerClusterGroup ... /> inside react-leaflet after <TileLayer />
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MarkerClusterGroup markers={markers} wrapperOptions={wrapperOptions} />
</Map>
      `}
    </Highlight>

    <CustomOptionsEGTwo />

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/custom-options/example-two.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        Link to the full sample code
      </a>
    </div>
  </div>
);

export default CustomOptions;
