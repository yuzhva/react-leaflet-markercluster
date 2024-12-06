import React from "react";
import { Polygon } from "leaflet";
import { createPathComponent } from "@react-leaflet/core";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "../../src/react-leaflet-markercluster";
import { MAP_ZOOM, MAP_MAX_ZOOM, MAP_CENTER_COORDINATES } from "./constants";
import "./styles.scss";

function randomCoords() {
  return [160 * Math.random() - 80, 360 * Math.random() - 180];
}

const ClusterableRegion = createPathComponent(function createClusterableRegion(
  { latlngs, color = "blue", fillOpacity = 0.3, ...props },
  ctx,
) {
  // Define a clusterable region with a getLatLng method for clustering compatibility
  // Credits to https://github.com/Leaflet/Leaflet.markercluster/issues/612#issuecomment-242929562
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
  const region = new ClusterableRegion(latlngs, {
    color,
    fillOpacity,
    ...props,
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
      {Array.from({ length: 42069 }, (_, i) => {
        const centerCoords = randomCoords();
        return (
          <ClusterableRegion
            key={i}
            latlngs={[
              centerCoords,
              [
                centerCoords[0] - Math.random(),
                centerCoords[1] - Math.random(),
              ],
              [
                centerCoords[0] - Math.random(),
                centerCoords[1] + Math.random(),
              ],
              [
                centerCoords[0] + Math.random(),
                centerCoords[1] + Math.random(),
              ],
            ]}
            eventHandlers={{
              click: () => {
                console.log(`Region ${i} clicked`);
              },
              mouseover: (event) => {
                event.target.openPopup();
              },
              mouseout: (event) => {
                const target = event.target;
                if (
                  target._popup &&
                  target._popup._container.contains(
                    //@ts-expect-error - toElement not recognized by TS
                    event.originalEvent.toElement,
                  )
                ) {
                  return;
                }
                target.closePopup();
              },
            }}
          >
            <Popup>Region {i}</Popup>
          </ClusterableRegion>
        );
      })}
    </MarkerClusterGroup>
  </MapContainer>
);

export default RegionExample;
