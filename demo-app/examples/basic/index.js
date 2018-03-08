import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import BasicEGOne from './example-one';

const BasicExample = () => (
  <div className="basic-example">
    <p>
      Just grab your markers inside <strong>MarkerClusterGroup</strong> component
      (right after <strong>TileLayer</strong>)
    </p>
    <Highlight className="javascript">
      {`
import {Marker} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Put <MarkerClusterGroup {...props} /> inside react-leaflet after <TileLayer />
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MarkerClusterGroup>
    <Marker position={[49.8397, 24.0297]} />
    <Marker position={[52.2297, 21.0122]} />
    <Marker position={[51.5074, -0.0901]} />
  </MarkerClusterGroup>

</Map>
      `}
    </Highlight>

    <BasicEGOne />

    <div className="alert alert-danger" role="alert">
      If you would like to pass some props to the Marker, please use&nbsp;
      <a
        href="https://react-leaflet.js.org/docs/en/components.html#marker"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        react-leaflet Marker component API.
      </a>
    </div>

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/examples/basic/example-one.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        Link to the full sample code
      </a>
    </div>
  </div>
);

export default BasicExample;
