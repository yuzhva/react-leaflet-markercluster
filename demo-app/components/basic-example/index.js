import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import BasicEGOne from './example-one';
import BasicEGTwo from './example-two';

const BasicExample = () => (
  <div className="basic-example">
    <p>You could set markers through component props as list of objects.</p>
    <Highlight className="javascript">
      {`
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Define markers list with REQUIRED 'lat' and 'lng' keys:
const markers = [
  { position: [49.8397, 24.0297] },
  { position: [52.2297, 21.0122] },
  { position: [51.5074, -0.0901] },
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

    <BasicEGOne />

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/basic-example/example-one.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        Link to the full sample code
      </a>
    </div>

    <p>Or you could send react-leaflet Marker as the component child.</p>
    <Highlight className="javascript">
      {`
import {Marker} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Put <MarkerClusterGroup ... /> inside react-leaflet after <TileLayer />
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

    <BasicEGTwo />

    <div className="alert alert-danger" role="alert">
      Note, that <strong>this is testing feature</strong>. <br />
      Also, if you would like to use react-leaflet Marker and send them as
      children (instead of markers=&#123;&#125; prop), <br />
      then markerOptions API would not work, so you need to use&nbsp;
      <a
        href="https://github.com/PaulLeCam/react-leaflet/blob/master/docs/Components.md#marker"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        react-leaflet Marker component API.
      </a>
    </div>

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/basic-example/example-two.js"
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
