import React from "react";
import { Polygon } from "leaflet";
import { createPathComponent } from "@react-leaflet/core";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "../../src/react-leaflet-markercluster";
import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from "./constants";
import "./styles.scss";

// Extend L.Polygon to include a clustering-compatible getLatLng method
// Credits to https://github.com/Leaflet/Leaflet.markercluster/issues/612#issuecomment-242929562
const ClusterableRegion = createPathComponent(function createClusterableRegion(
  { coordinates, color = "blue", fillOpacity = 0.3, onClick },
  ctx,
) {
  // Define a clusterable region with a getLatLng method for clustering compatibility
  const ClusterableRegion = Polygon.extend({
    initialize: function (latlngs, options) {
      Polygon.prototype.initialize.call(this, latlngs, options);
      this._latlng = this.getBounds().getCenter();
    },
    getLatLng: function () {
      return this._latlng;
    },
    setLatLng: function () {}, // Dummy method to satisfy marker clustering requirements
  });

  // Instantiate the ClusterablePolygon with provided positions and options
  const region = new ClusterableRegion(coordinates, {
    color,
    fillOpacity,
    onclick: onClick,
  });

  return {
    instance: region,
    context: {
      ...ctx,
      overlayContainer: region,
    },
  };
});

const RegionExample = () => (
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

    <MarkerClusterGroup animate={true}>
      <ClusterableRegion
        coordinates={[
          [52.9, 16.4],
          [52.8, 16.2],
          [53.0, 16.0],
        ]}
      />
      <ClusterableRegion
        coordinates={[
          [48.5, 15.0],
          [48.8, 15.3],
          [48.6, 15.5],
        ]}
      />
      <ClusterableRegion
        coordinates={[
          [49.5, 22.0],
          [49.8, 22.3],
          [49.3, 22.2],
        ]}
      />
      <ClusterableRegion
        coordinates={[
          [52.5, 25.0],
          [52.5, 25.4],
          [52.3, 25.2],
        ]}
      />
      <ClusterableRegion
        coordinates={[
          [51.5, -0.09],
          [51.3, -0.1],
          [51.4, -0.2],
        ]}
      />
    </MarkerClusterGroup>
  </MapContainer>
);

export default RegionExample;
