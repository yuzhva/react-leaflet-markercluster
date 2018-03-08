import React from 'react';
import Highlight from 'react-highlight'; // eslint-disable-line import/no-extraneous-dependencies

import EventListenersEGOne from './example-one';

const EventListeners = () => (
  <div className="event-listeners">

    <p>There is only three events available for now:</p>
    <ul className="list-group">
      <li className="list-group-item">
        <strong>onMarkerClick</strong> | returns: <strong>marker</strong> object
        |&nbsp;
        <a
          href="http://leafletjs.com/reference-1.0.3.html#marker-method"
          className="alert-link"
          target="_blank"
          rel="noopener noreferrer"
        >

          Available marker Leaflet methods
        </a>
      </li>
      <li className="list-group-item">
        <strong>onClusterClick</strong> | returns: <strong>cluster</strong> object
        |&nbsp;
        <a
          href="https://github.com/Leaflet/Leaflet.markercluster#clusters-methods"
          className="alert-link"
          target="_blank"
          rel="noopener noreferrer"
        >

          Available cluster Leaflet.markercluster methods
        </a>
      </li>
      <li className="list-group-item">
        <strong>onPopupClose</strong> | returns: <strong>popup</strong> object
        |&nbsp;
        <a
          href="http://leafletjs.com/reference-1.0.3.html#popup-method"
          className="alert-link"
          target="_blank"
          rel="noopener noreferrer"
        >

          Available popup Leaflet methods
        </a>
      </li>
    </ul>

    <Highlight className="javascript">
      {`
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Define markers list with REQUIRED 'lat' and 'lng' keys:
const markers = [
  { position: [49.8397, 24.0297] },
  { position: [52.2297, 21.0122] },
  { position: [51.5074, -0.0901], popup: 'Hello world' },
];

// Put <MarkerClusterGroup {...props} /> inside react-leaflet after <TileLayer />
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

    <MarkerClusterGroup
      markers={markers}
      onMarkerClick={(marker) => console.log(marker, marker.getLatLng())}
      onClusterClick={(cluster) => console.log(cluster, cluster.getAllChildMarkers())}
      onPopupClose={(popup) => console.log(popup, popup.getContent())}
    />
</Map>
      `}
    </Highlight>

    <p><mark>Please open console to see objects that was returned by events.</mark></p>
    <EventListenersEGOne />

    <div className="alert alert-warning" role="alert">
      <a
        href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/examples/event-listeners/example-one.js"
        className="alert-link"
        target="_blank"
        rel="noopener noreferrer"
      >

        Link to the full sample code
      </a>
    </div>
  </div>
);

export default EventListeners;
