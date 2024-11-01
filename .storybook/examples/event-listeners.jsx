import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import MarkerClusterGroup from './../../src/react-leaflet-markercluster';

import { logAction } from './helpers';
import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from './constants';

import './styles.scss';

const EventListeners = () => (
  <MapContainer
    className="markercluster-map"
    center={MAP_CENTER_COORDINATES}
    zoom={MAP_ZOOM}
    maxZoom={MAP_MAX_ZOOM}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <MarkerClusterGroup
      onClusterClick={cluster =>
        logAction('cluster-click', cluster, cluster.layer.getAllChildMarkers())
      }
    >
      <Marker
        position={[49.8397, 24.0297]}
        onClick={marker =>
          logAction('marker-click', marker, marker.target.getLatLng())
        }
      />
      <Marker
        position={[52.2297, 21.0122]}
        onClick={marker =>
          logAction('marker-click', marker, marker.target.getLatLng())
        }
      />

      <Marker position={[51.5074, -0.0901]}>
        <Popup
          minWidth={200}
          closeButton={false}
          onClose={popup => logAction('popup-close', popup)}
        >
          <div>
            <b>Hello world!</b>
            <p>I am a lonely popup.</p>
          </div>
        </Popup>
      </Marker>
    </MarkerClusterGroup>
  </MapContainer>
);

export default EventListeners;
