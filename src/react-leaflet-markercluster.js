import { createPathComponent } from "@react-leaflet/core";
import L from "leaflet";
import "leaflet.markercluster";

L.MarkerClusterGroup.include({
  _flushLayerBuffer() {
    this.addLayers(this._layerBuffer);
    this._layerBuffer = [];
  },

  addLayer(layer) {
    if (this._layerBuffer.length === 0) {
      setTimeout(this._flushLayerBuffer.bind(this), 50);
    }
    this._layerBuffer.push(layer);
  },
});

L.MarkerClusterGroup.addInitHook(function () {
  this._layerBuffer = [];
});

// eslint-disable-next-line no-unused-vars
function createMarkerCluster({ children: _c, ...props }, context) {
  const clusterProps = {};
  const clusterEvents = {};

  // Splitting props and events to different objects
  Object.entries(props).forEach(([propName, prop]) =>
    propName.startsWith("on")
      ? (clusterEvents[propName] = prop)
      : (clusterProps[propName] = prop),
  );
  const instance = new L.MarkerClusterGroup(clusterProps);

  // Initializing event listeners
  Object.entries(clusterEvents).forEach(([eventAsProp, callback]) => {
    const clusterEvent = `cluster${eventAsProp.substring(2).toLowerCase()}`;
    instance.on(clusterEvent, callback);
  });
  return {
    instance,
    context: {
      ...context,
      layerContainer: instance,
    },
  };
}

const MarkerCluster = createPathComponent(createMarkerCluster);

export default MarkerCluster;
