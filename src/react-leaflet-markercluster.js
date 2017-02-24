import {PropTypes} from 'react';

import {LayerGroup} from 'react-leaflet';
import L from 'leaflet'
import 'leaflet.markercluster';

import './style.scss';

let prevMarkerClusterGroup;

export default class MarkerClusterGroup extends LayerGroup {

  componentDidMount() {
    if (this.props.markers && this.props.markers.length) {
      this.addMarkerClusterGroupToMap(this.props.markers);
    }

    this.props.wrapperOptions.enableDefaultStyle && (
      this.context.map._container.className += ' marker-cluster-styled'
    );

    !this.props.wrapperOptions.disableDefaultAnimation && (
      this.context.map._container.className += ' marker-cluster-animated'
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.markers && nextProps.markers.length) {
      if (prevMarkerClusterGroup) {
        this.layerContainer.removeLayer(prevMarkerClusterGroup);
      }
      this.addMarkerClusterGroupToMap(nextProps.markers);
    }
  }

  addMarkerClusterGroupToMap(markers) {
    let markersOptions = this.props.markerOptions
      ? Object.assign({}, this.props.markerOptions)
      : {};

    var markerClusterGroup = L.markerClusterGroup(this.props.options);

    var markerLayers = [];

    markers.forEach((marker) => {
      let currentMarkerOptions = marker.options
        ? Object.assign({}, marker.options)
        : null ;

      let leafletMarker = L.marker([marker.lat, marker.lng], currentMarkerOptions || markersOptions);

      marker.popup && leafletMarker.bindPopup(marker.popup);

      marker.additionalData && (leafletMarker.additionalData = marker.additionalData);

      markerLayers.push(leafletMarker);
    });

    markerClusterGroup.addLayers(markerLayers);

    prevMarkerClusterGroup = markerClusterGroup;
    this.layerContainer.addLayer(markerClusterGroup);
  }
}

MarkerClusterGroup.propTypes = {
  // List of markers with required lat and lng keys
  markers: PropTypes.array,
  // Leaflet.markercluster native options
  options: PropTypes.object,
  // Options that are supporting by react-leaflet-markercluster wrapper
  wrapperOptions: PropTypes.object,
  // Used to display clickable/draggable icons on the map
  markerOptions: PropTypes.object
}

MarkerClusterGroup.defaultProps = {
  wrapperOptions: {}
};
