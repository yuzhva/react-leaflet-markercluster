import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import MarkerclusterOptionsEGOne from './example-one';

const MarkerclusterOptions = () => (
  <div className="markercluster-options">
    <p>Leaflet.markercluster support some helpful options for clustered markers
      &nbsp;customization like showCoverageOnHover, maxClusterRadius or iconCreateFunction.
    </p>
    <p>
      To send that options, just pass <strong>options=&quot;&quot;</strong>
      property to MarkerClusterGroup component:
    </p>
    <Highlight className="javascript">
      {`
import L from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Define markers list with REQUIRED 'lat' and 'lng' keys:
const markers = [
  { lat: 49.8397, lng: 24.0297 },
  { lat: 50.4501, lng: 30.5234 },
  { lat: 52.2297, lng: 21.0122 },
  { lat: 50.0647, lng: 19.9450 },
  { lat: 48.9226, lng: 24.7111 },
  { lat: 48.7164, lng: 21.2611 },
  { lat: 51.5, lng: -0.09 },
  { lat: 51.5, lng: -0.09 },
  { lat: 51.5, lng: -0.09 },
];

// Define object with Leaflet.markercluster options
const markerclusterOptions = {
  showCoverageOnHover: false,
  spiderfyDistanceMultiplier: 2,

  // Setting custom icon for clustere group
  // https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers
  // NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: \`<span>\${cluster.getChildCount()}</span>\`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true),
    });
  },
};

// Pass options="" property to <MarkerClusterGroup ... />
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MarkerClusterGroup
    markers={markers}
    options={markerclusterOptions}
    wrapperOptions={{ enableDefaultStyle: true }}
  />
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

        Full list of Leaflet.markercluster options
      </a>
    </div>

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/markercluster-options/example-one.js"
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
