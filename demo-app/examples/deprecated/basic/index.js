import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import BasicEGOne from './example-one';

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

// Put <MarkerClusterGroup {...props} /> inside react-leaflet after <TileLayer />
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
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/examples/deprecated/basic/example-one.js"
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
