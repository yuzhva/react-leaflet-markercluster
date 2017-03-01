import React from 'react';
import Highlight from 'react-highlight';

import BasicEGOne from './example-one';

const BasicExample = () => {
  return (
    <div className="basic-example">
      <Highlight className='javascript'>
        {`
  import MarkerClusterGroup from 'react-leaflet-markercluster';

  // Define markers list with REQUIRED 'lat' and 'lng' keys:
  const markers = [
    {lat: 49.8397, lng: 24.0297},
    {lat: 52.2297, lng: 21.0122},
    {lat: 51.5074, lng: -0.0901}
  ];

  // Put <MarkerClusterGroup ... /> inside react-leaflet after <TileLayer />
  <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4}>
    <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

    <MarkerClusterGroup
      markers={markers}
      wrapperOptions={{enableDefaultStyle: true}}
    />
  </Map>
        `}
      </Highlight>

      <BasicEGOne />

      <div className="alert alert-warning" role="alert">
        <a href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/basic-example/example-one.js"
          className="alert-link"
          target="_blank">

            Link to the full sample code
          </a>
      </div>
    </div>
  )
};

export default BasicExample;
