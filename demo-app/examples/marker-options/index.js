import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import MarkerOptionsEGOne from './example-one';

const MarkerOptions = () => (
  <div className="marker-options">
    <p>
      Base on:&nbsp;
      <a
        href="https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/simple.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-leaflet example
      </a>
    </p>
    <p>
      For setting Marker options, please use&nbsp;
      <a
        href="https://react-leaflet.js.org/docs/en/components.html#marker"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-leaflet Marker API
      </a>
    </p>
    <Highlight className="javascript">
      {`
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Create marker icon according to the official leaflet documentation
const redMarker = L.icon({
  iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


// Put <MarkerClusterGroup {...props} /> inside react-leaflet after <TileLayer />
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MarkerClusterGroup>
    <Marker position={[49.8397, 24.0297]} icon={redMarker} />
    <Marker position={[50.4501, 30.5234]} />
    <Marker position={[52.2297, 21.0122]} title="Warszawa title on hover" />
    <Marker position={[50.0647, 19.9450]} />
    <Marker position={[48.9226, 24.7111]} title="San Frankivsko title on hover" />
    <Marker position={[48.7164, 21.2611]} />
    <Marker position={[51.5, -0.09]} icon={redMarker} />
  </MarkerClusterGroup>
</Map>
      `}
    </Highlight>

    <MarkerOptionsEGOne />

    <div className="alert alert-warning" role="alert">
      <a
        href="http://leafletjs.com/reference-1.3.0.html#marker-option"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        List of all Leaflet Marker options
      </a>
    </div>

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/examples/marker-options/example-two.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        Link to the full sample code
      </a>
    </div>
  </div>
);

export default MarkerOptions;
