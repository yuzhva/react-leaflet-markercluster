import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { LayerGroup } from 'react-leaflet';
import L from 'leaflet';

require('leaflet.markercluster');

// TEMP: remove from v1.2.0 because of deprecated wrapperOptions prop
require('./deprecated-styles.scss');

// TEMP: remove deprecation warning at v1.2.0
function havingDeprecatedProps(markers) {
  return markers.findIndex((marker) => marker.lat || marker.lng) !== -1;
}

// NOTE: Helpers
function isArraysEqual(firstArray, secondArray) {
  return (JSON.stringify(firstArray) === JSON.stringify(secondArray));
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
    // Override auto created leafletElement with L.markerClusterGroup element
    this.leafletElement = L.markerClusterGroup(options);

    // TEMP: remove from v1.2.0 because of deprecated wrapperOptions prop
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
      this.layerContainer.removeLayer(this.leafletElement);
      // Remove layers with markers from markerClusterGroup
      this.leafletElement.clearLayers();

      if (nextProps.markers.length) this.addLayersWithMarkersFromProps(nextProps.markers);
    }
  }

  initMapClasses() {
    const { wrapperOptions } = this.props;
    if (wrapperOptions) {
      console.warn('[react-leaflet-markercluster] Warning: "wrapperOptions" property is deprecated'
        + ' and will be removed in v1.2.0. Please see: https://goo.gl/s7a6Cj');

      const mapClassName = this.context.map._container.className;
      const isStyledClassAppliyed = mapClassName.indexOf('marker-cluster-styled') !== -1;
      const isAnimatedClassAppliyed = mapClassName.indexOf('marker-cluster-animated') !== -1;

      if (wrapperOptions.enableDefaultStyle && !isStyledClassAppliyed) {
        this.context.map._container.className += ' marker-cluster-styled';
      }

      if (!wrapperOptions.disableDefaultAnimation && !isAnimatedClassAppliyed) {
        this.context.map._container.className += ' marker-cluster-animated';
      }
    }
  }

  addLayersWithMarkersFromProps(markers) {
    const { markerOptions, wrapperOptions, children } = this.props;

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
    // Add clustered markers to the leaflet map
    if (!children) this.layerContainer.addLayer(this.leafletElement);
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

  addLayersWithReactLeafletMarkers() {
    const leafletMarkers = [];

    // Map through all react-leaflet Markers and clone them with ref prop
    // ref prop required to get leafletElement of Marker
    return Children.map(this.props.children, (reactLeafletMarker, index) => (
      cloneElement(reactLeafletMarker, {
        ref: (marker) => {
          if (marker) {
            leafletMarkers.push(marker.leafletElement);

            if (
              (index === (this.props.children.length - 1)) ||
              // addClusteredMarkersToMap when there is only one marker
              !Array.isArray(this.props.children)
            ) {
              // Add markers leafletElements to the markerClusterGroup
              this.leafletElement.addLayers(leafletMarkers);
              // Add clustered markers to the leaflet map
              this.layerContainer.addLayer(this.leafletElement);
            }
          }
        },
        key: `react-leaflet-marker-${JSON.stringify(reactLeafletMarker.props.position)}-${index}`,
      })
    ));
  }

  getLeafletElement() {
    return this.leafletElement;
  }

  render() {
    return this.props.children
      ? (
        <section className="marker-cluster-group">
          {this.addLayersWithReactLeafletMarkers()}
        </section>
      )
      : null;
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
