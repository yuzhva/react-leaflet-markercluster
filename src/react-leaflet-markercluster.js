import React, { PropTypes } from 'react'

import { LayerGroup } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet.markercluster';

import './style.scss';

let prevMarkerClusterGroup;

export default class MarkerClusterGroup extends LayerGroup {

  componentDidMount() {
    const { markers } = this.props;

    // Flag to know if there are react-leaflet markers
    const hasReactLeafletMarkers = this.leafletMarkerReferences.length;

    if (markers && markers.length || hasReactLeafletMarkers) {
      this.addMarkerClusterGroupToMap(markers);
    }

    this.props.wrapperOptions.enableDefaultStyle && (
      this.context.map._container.className += ' marker-cluster-styled'
    );

    !this.props.wrapperOptions.disableDefaultAnimation && (
      this.context.map._container.className += ' marker-cluster-animated'
    );
  }

  componentWillReceiveProps(nextProps) {
    const hasReactLeafletMarkers = this.leafletMarkerReferences.length;

    if (nextProps.markers && nextProps.markers.length || hasReactLeafletMarkers) {
      // Remove layer only if MarkerClusterGroup was previously rendered
      prevMarkerClusterGroup && this.layerContainer.removeLayer(
        prevMarkerClusterGroup
      );
      this.addMarkerClusterGroupToMap(nextProps.markers);
    }
  }

  removeMarkersWithSameCoordinates(markers) {
    // init filtered markers list with first marker from list
    let filteredMarkers = [markers[0]];

    markers.forEach((marker) => {
      if (marker.lat && marker.lng && !JSON.stringify(filteredMarkers).includes(JSON.stringify(marker))) {
        filteredMarkers.push(marker);
      }
    });

    return filteredMarkers;
  }

  addMarkerClusterGroupToMap(markers) {
    const {
      markerOptions,
      options,
      wrapperOptions
    } = this.props;

    const hasReactLeafletMarkers = this.leafletMarkerReferences.length;

    let markersOptions = 
      markerOptions ?
      Object.assign({}, markerOptions) :
      {};

    let markerClusterGroup = L.markerClusterGroup(options);

    let markersArr = 
      hasReactLeafletMarkers ?
      this.leafletMarkerReferences :
      markers;

    let filteredMarkers =
      wrapperOptions.removeDuplicates ?
      this.removeMarkersWithSameCoordinates(markersArr) :
      markersArr;

    let leafletMarkers = [];

    filteredMarkers.forEach((marker) => {
      let currentMarkerOptions = marker.options ?
        Object.assign({}, marker.options) :
        null;

      let leafletMarker = 
        hasReactLeafletMarkers ? 
        marker :
        L.marker(
          [marker.lat, marker.lng],
          currentMarkerOptions || markersOptions
        );

      marker.popup && leafletMarker.bindPopup(marker.popup);
      marker.tooltip && leafletMarker.bindTooltip(marker.tooltip);

      leafletMarkers.push(leafletMarker);
    });

    markerClusterGroup.addLayers(leafletMarkers);
    this.layerContainer.addLayer(markerClusterGroup);

    prevMarkerClusterGroup = markerClusterGroup;

    // Init listeners for layerContainer even when component receiving new props
    // because we have removed the previous layer from layerContainer
    this.initEventListeners(markerClusterGroup);

    // Override auto created leafletElement with L.markerClusterGroup element
    this.leafletElement = markerClusterGroup;
  }

  initEventListeners(markerClusterGroup) {
    this.props.onMarkerClick && (
      markerClusterGroup.on('click', (marker) => {
        this.props.onMarkerClick(marker.layer);
      })
    );

    this.props.onClusterClick && (
      markerClusterGroup.on('clusterclick', (cluster) => {
        this.props.onClusterClick(cluster.layer);
      })
    );

    this.props.onPopupClose && (
      markerClusterGroup.on('popupclose', (map) => {
        this.props.onPopupClose(map.popup);
      })
    );
  }

  getLeafletElement() {
    return this.leafletElement;
  }

  render() {
    const simulateToGetRefs = [];

    // Array that contains all leaflet marker instances 
    this.leafletMarkerReferences = [];

    // Get Leaflet references from react-leaflet markers
    React.Children.map(this.props.children, (marker) =>
      simulateToGetRefs.push(
        React.cloneElement(marker, {
          ref: ref => this.leafletMarkerReferences.push(ref.leafletElement)
        }))
    )
    return (
      <div> 
        { simulateToGetRefs }
      </div>
    )
  }
}

MarkerClusterGroup.propTypes = {
  // List of markers with required lat and lng keys
  markers: PropTypes.arrayOf(PropTypes.object),
  // All available options for Leaflet.markercluster
  options: PropTypes.object,
  // All available options for Leaflet.Marker
  markerOptions: PropTypes.object,
  // Options that are supporting by react-leaflet-markercluster wrapper
  wrapperOptions: PropTypes.object,
  // Events
  onMarkerClick: PropTypes.func,
  onClusterClick: PropTypes.func,
  onPopupClose: PropTypes.func
}

MarkerClusterGroup.defaultProps = {
  wrapperOptions: {}
};