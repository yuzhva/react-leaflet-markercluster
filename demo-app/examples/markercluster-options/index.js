import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import MarkerclusterOptionsEGOne from './example-one';

const MarkerclusterOptions = () => (
  <div className="markercluster-options">
    <p>
      Leaflet.markercluster support some helpful options for clustered markers customization like:
      <br />
      <strong>showCoverageOnHover, maxClusterRadius or iconCreateFunction</strong>.
    </p>
    <p>
      Just pass whatever option you need from&nbsp;
      <a
        href="https://github.com/Leaflet/Leaflet.markercluster#all-options"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        All Leaflet.markercluster Options
      </a>
      &nbsp;to <strong>MarkerClusterGroup</strong> as <strong>prop</strong>.
    </p>
    <Highlight className="javascript">
      {`
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Function for creating custom icon for clustere group
// https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers
// NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax
// eslint-disable-next-line
const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: \`<span>\${cluster.getChildCount()}</span>\`,
    className: 'marker-cluster-custom',
    iconSize: L.point(40, 40, true),
  });
};

<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  {/* Pass Leaflet.markercluster option directly to MarkerClusterGroup as prop */}
  <MarkerClusterGroup
    showCoverageOnHover={false}
    spiderfyDistanceMultiplier={2}
    iconCreateFunction={createClusterCustomIcon}
  >

    <Marker position={[49.8397, 24.0297]} />
    <Marker position={[50.4501, 30.5234]} />
    <Marker position={[52.2297, 21.0122]} />
    <Marker position={[50.0647, 19.9450]} />
    <Marker position={[48.9226, 24.7111]} />
    <Marker position={[48.7164, 21.2611]} />
    <Marker position={[51.5, -0.09]} />
    <Marker position={[51.5, -0.09]} />
    <Marker position={[51.5, -0.09]} />

  </MarkerClusterGroup>

</Map>
      `}
    </Highlight>

    <p>And do not forget about styles for your class:</p>

    <Highlight className="css">
      {`
/* Customising the Clustered Markers */
.marker-cluster-custom {
  background: #9370db;
  border: 3px solid #ededed;
  border-radius: 50%;
  color: #ededed;
  height: 40px;
  line-height: 37px;
  text-align: center;
  width: 40px;
}
      `}
    </Highlight>

    <MarkerclusterOptionsEGOne />

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/Leaflet/Leaflet.markercluster#all-options"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        List of all Leaflet.markercluster options
      </a>
    </div>

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/examples/markercluster-options/example-one.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        Link to the full sample code
      </a>
    </div>
  </div>
);

export default MarkerclusterOptions;
