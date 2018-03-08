import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import MarkerTooltipEGOne from './example-one';

const MarkerTooltip = () => (
  <div className="marker-tooltip">
    <p>
      Base on:&nbsp;
      <a
        href="https://github.com/PaulLeCam/react-leaflet/blob/master/example/components/tooltip.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-leaflet example
      </a>
    </p>
    <p>Creation of Tooltip for Marker as easy, as a creation of Popup.</p>
    <p>
      Just pass <strong>react-leaflet Tooltip</strong> component
      &nbsp;to the <strong>Marker</strong> as a child:
    </p>

    <Highlight className="javascript">
      {`
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Setup Tooltip according to react-leaflet documentation
// https://react-leaflet.js.org/docs/en/examples.html

// Put <MarkerClusterGroup {...props} /> inside react-leaflet after <TileLayer />
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MarkerClusterGroup>

    <Marker position={[49.8397, 24.0297]}>
      <Tooltip>
        <span>my tooltip text 1</span>
      </Tooltip>
    </Marker>

    <Marker position={[50.4501, 30.5234]} />
    <Marker position={[52.2297, 21.0122]} />
    <Marker position={[50.0647, 19.9450]} />
    <Marker position={[48.9226, 24.7111]} />
    <Marker position={[48.7164, 21.2611]} />

    <Marker position={[51.5, -0.09]}>
      <Tooltip direction="bottom">
        <span>my tooltip text 1</span>
      </Tooltip>
    </Marker>
  </MarkerClusterGroup>

</Map>
      `}
    </Highlight>

    <MarkerTooltipEGOne />

    <div className="alert alert-warning" role="alert">
      <a
        href="http://leafletjs.com/reference-1.0.3.html#tooltip-option"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        List of all Leaflet Tooltip options
      </a>
    </div>

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/examples/marker-tooltip/example-one.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        Link to the full sample code
      </a>
    </div>
  </div>
);

export default MarkerTooltip;
