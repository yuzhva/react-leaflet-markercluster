import PropTypes from 'prop-types';

import { LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import deepEqual from 'deep-equal';

require('leaflet.markercluster');

// TEMP: remove deprecation warning at v1.2.0
function havingDeprecatedProps(markers) {
  return markers.findIndex((marker) => marker.lat || marker.lng) !== -1;
}

// NOTE: Helpers
function isArraysEqual(firstArray, secondArray) {
  return firstArray.length === secondArray.length && deepEqual(firstArray, secondArray);
}

function removeMarkersWithSameCoordinates(markers) {
  // init filtered markers list with first marker from list
  const filteredMarkers = [markers[0]];

  markers.forEach((marker) => {
    if (!JSON.stringify(filteredMarkers).includes(JSON.stringify(marker))) {
      filteredMarkers.push(marker);
    }
  });

  return filteredMarkers;
}

export default class MarkerClusterGroup extends LayerGroup {
  componentWillMount() {
    const { markers, options } = this.props;

    // TEMP: remove deprecation warning at v1.2.0
    if (options) {
      console.warn('[react-leaflet-markercluster] Warning: "options" property is deprecated'
        + ' and will be removed in v1.2.0. Please see: https://goo.gl/pq3oM7');
    }

    // Override auto created leafletElement with L.markerClusterGroup element
    this.leafletElement = L.markerClusterGroup(options || this.props);

    // TEMP: remove from v1.1.9 because of deprecated wrapperOptions prop
    this.initMapClasses();

    // if (markers.length) this.addLayersWithMarkersFromProps(markers);
    // TEMP: remove deprecation warning at v1.2.0
    if (markers.length) {
      this.addLayersWithMarkersFromProps(markers);

      if (havingDeprecatedProps(markers)) {
        console.warn('[react-leaflet-markercluster] Warning: marker "lat: xx", "lng: xx" properties are deprecated'
          + ' and will be removed in v1.2.0. Please use "position: [lat, lng]" instead https://goo.gl/s7a6Cj');
      }
    }

    // Init listeners for markerClusterGroup leafletElement only once
    this.initEventListeners(this.leafletElement);
  }

  componentWillReceiveProps(nextProps) {
    if (!isArraysEqual(this.props.markers, nextProps.markers)) {
      // Remove layer from map with previously rendered clustered markers
      // this.layerContainer.removeLayer(this.leafletElement);
      // Remove layers with markers from markerClusterGroup
      this.leafletElement.clearLayers();

      if (nextProps.markers.length) this.addLayersWithMarkersFromProps(nextProps.markers);
    }
  }

  initMapClasses() {
    const { wrapperOptions } = this.props;
    if (wrapperOptions) {
      console.warn('[react-leaflet-markercluster] Warning: "wrapperOptions" property is deprecated'
        + ' and has been removed in v1.1.8. Please see: https://goo.gl/pq3oM7');
    }
  }

  addLayersWithMarkersFromProps(markers) {
    const { markerOptions, wrapperOptions } = this.props;

    const markersOptions = markerOptions
      ? Object.assign({}, markerOptions)
      : {};

    // TEMP: remove from v1.2.0 because of deprecated wrapperOptions prop
    const filteredMarkers = wrapperOptions && wrapperOptions.removeDuplicates
      ? removeMarkersWithSameCoordinates(markers)
      : markers;

    const leafletMarkers = [];

    filteredMarkers.forEach((marker) => {
      const currentMarkerOptions = marker.options
        ? Object.assign({}, marker.options)
        : null;

      const leafletMarker = L.marker(
        marker.position || [marker.lat, marker.lng],
        currentMarkerOptions || markersOptions,
      );

      if (marker.popup) leafletMarker.bindPopup(marker.popup);
      if (marker.tooltip) leafletMarker.bindTooltip(marker.tooltip);

      leafletMarkers.push(leafletMarker);
    });

    // Add markers leafletElements to the markerClusterGroup
    this.leafletElement.addLayers(leafletMarkers);
  }

  initEventListeners(markerClusterGroup) {
    if (this.props.onMarkerClick) {
      markerClusterGroup.on('click', (marker) => {
        this.props.onMarkerClick(marker.layer);
      });
    }

    if (this.props.onClusterClick) {
      markerClusterGroup.on('clusterclick', (cluster) => {
        this.props.onClusterClick(cluster.layer);
      });
    }

    if (this.props.onPopupClose) {
      markerClusterGroup.on('popupclose', (map) => {
        this.props.onPopupClose(map.popup);
      });
    }
  }

  getLeafletElement() {
    return this.leafletElement;
  }

  // react-leaflet custom-component methods
  // https://react-leaflet.js.org/docs/en/custom-components.html
  getChildContext() {
    return {
      layerContainer: this.leafletElement,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  createLeafletElement(props) {
    // eslint-disable-next-line new-cap
    return new L.markerClusterGroup(props.options || props);
  }
}

// TODO: better describe prop objects as shapes
MarkerClusterGroup.propTypes = {
  // List of markers with required lat and lng keys
  markers: PropTypes.arrayOf(PropTypes.object),
  // List of react-leaflet markers
  children: PropTypes.node,
  // All available options for Leaflet.markercluster
  options: PropTypes.object,
  // All available options for Leaflet.Marker
  markerOptions: PropTypes.object,
  // Options that are supporting by react-leaflet-markercluster wrapper
  wrapperOptions: PropTypes.object,
  // Events
  onMarkerClick: PropTypes.func,
  onClusterClick: PropTypes.func,
  onPopupClose: PropTypes.func,
};

MarkerClusterGroup.defaultProps = {
  markers: [],
};
