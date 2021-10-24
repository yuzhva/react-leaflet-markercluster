import { createPathComponent } from '@react-leaflet/core';
import L from 'leaflet';

require('leaflet.markercluster');

const MarkerClusterGroup = createPathComponent(
  ({ children: _c, ...props }, ctx) => {
    const clusterProps = {};
    const clusterEvents = {};

    // Splitting props and events to different objects
    Object.entries(props).forEach(([propName, prop]) =>
      propName.startsWith('on')
        ? (clusterEvents[propName] = prop)
        : (clusterProps[propName] = prop)
    );

    // Creating markerClusterGroup Leaflet element
    const markerClusterGroup = new L.markerClusterGroup(clusterProps);

    // Initializing event listeners
    Object.entries(clusterEvents).forEach(([eventAsProp, callback]) => {
      const clusterEvent = `cluster${eventAsProp.substring(2).toLowerCase()}`;
      markerClusterGroup.on(clusterEvent, callback);
    });

    return {
      instance: markerClusterGroup,
      context: { ...ctx, layerContainer: markerClusterGroup },
    };
  },
  (instance, props, prevProps) => {
    const keys = Object.keys(props);
    let updated = false;
    keys.forEach((key) => {
      if (key !== 'children' && props[key] !== prevProps[key]) {
        // eslint-disable-next-line no-param-reassign
        instance.options[key] = props[key];
        updated = true;
      }
    });
    if (updated) {
      instance.refreshClusters();
    }
  },
);

export default MarkerClusterGroup;
