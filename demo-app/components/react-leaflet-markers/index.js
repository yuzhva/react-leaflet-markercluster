import React from 'react';
import Highlight from 'react-highlight';

import ReactLeafletMarkersEGOne from './example-one';

const ReactLeafletMarkers = () => {
  return (
    <div className="react-leaflet-markers">
      <Highlight className='javascript'>
        {`
  import MarkerClusterGroup from 'react-leaflet-markercluster';

  // Define markers list:
  const markers = [
    {lat: 49.8397, lng: 24.0297},
    {lat: 52.2297, lng: 21.0122},
    {lat: 51.5074, lng: -0.0901}
  ];

  // You can define an icon example too:
  const redMarker = L.icon({
    iconUrl: './demo-app/assets/icons/red-filled-marker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  // Even you can insert a popup... (see below)

  // Put <MarkerClusterGroup ... /> inside react-leaflet after <TileLayer />
  <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
    <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <MarkerClusterGroup
      wrapperOptions={{enableDefaultStyle: true}}
    >
      {markers.map(marker =>
        <Marker position={[marker.lat, marker.lng]} icon={redMarker} key={marker.id}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      )}
    </ MarkerClusterGroup>
  </Map>
        `}
      </Highlight>

      <ReactLeafletMarkersEGOne />

      <div className="alert alert-warning" role="alert">
        <a href="https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/react-leaflet-markers/example-one.js"
          className="alert-link"
          target="_blank">

            Link to the full sample code
          </a>
      </div>
    </div>
  )
};

export default ReactLeafletMarkers;
