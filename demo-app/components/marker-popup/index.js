import React from 'react';
import Highlight from 'react-highlight';

import MarkerPopupEGOne from './example-one';

const MarkerPopup = () => {
  return (
    <div className="marker-popup">
      <p>Set marker popup as easy, as set marker options.</p>
      <p>Just define key <strong>popup</strong> for marker object:</p>

      <Highlight className='javascript'>
            {`
  import MarkerClusterGroup from 'react-leaflet-markercluster';

  // If you would like to add popup for marker
  // just pass popup key to marker object:
  const markers = [
    {lat: 49.8397, lng: 24.0297, popup: getStringPopup('clustered'), options: {icon: redMarker}},
    {lat: 50.4501, lng: 30.5234},
    {lat: 52.2297, lng: 21.0122},
    {lat: 50.0647, lng: 19.9450},
    {lat: 48.9226, lng: 24.7111},
    {lat: 48.7164, lng: 21.2611},
    {lat: 51.5, lng: -0.09, popup: getLeafletPopup('lonely')},
  ];

  // Template for getting popup html MarkerClusterGroup
  // IMPORTANT: that function returns string, not JSX
  function getStringPopup(name) {
    return (\`
      <div>
        <b>Hello world!</b>
        <p>I am a \${name} popup.</p>
      </div>
    \`);
  }

  // that function returns Leaflet.Popup
  function getLeafletPopup(name) {
    return L.popup({minWidth: 200, closeButton: false})
      .setContent(\`
        <div>
          <b>Hello world!</b>
          <p>I am a \${name} popup.</p>
        </div>
      \`);
  }

  // Put <MarkerClusterGroup ... /> inside react-leaflet after <TileLayer />
  <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
    <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

      <MarkerClusterGroup
        markers={markers}
        wrapperOptions={{enableDefaultStyle: true}}
      />
  </Map>
            `}
      </Highlight>

      <MarkerPopupEGOne />

      <div className="alert alert-warning" role="alert">
        <a href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/marker-popup/example-one.js"
          className="alert-link"
          target="_blank">

            Link to the full sample code
          </a>
      </div>

      <div className="alert alert-danger" role="alert">
        <a href="http://leafletjs.com/examples/quick-start/"
          className="alert-link"
          target="_blank">

            You should pass that string to the popup key, that contains HTML tags.
          </a>
      </div>
    </div>
  )
};

export default MarkerPopup;
