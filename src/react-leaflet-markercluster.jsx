import {PropTypes} from 'react';

import {LayerGroup} from 'react-leaflet';
import L from 'leaflet'
import 'leaflet.markercluster';

import './../../src/style.scss';

export default class MarkerClusterGroup extends LayerGroup {

  componentDidMount() {
    if (this.props.markers && this.props.markers.length) {
      this.addMarkerClusterGroupToMap(this.props.markers);
    }

    if (this.props.wrapperOptions) {
      this.props.wrapperOptions.enableDefaultStyle && (
        this.props.map._container.className += ' marker-cluster-styled'
      );

      !this.props.wrapperOptions.disableDefaultAnimation && (
        this.props.map._container.className += ' marker-cluster-animated'
      );
    }
  }

  addMarkerClusterGroupToMap(markers) {
    let markersOptions = this.props.markerOptions
      ? Object.assign({}, this.props.markerOptions)
      : {};

    var markerClusterGroup = L.markerClusterGroup(this.props.options);

    markers.forEach((marker) => {
      let currentMarkerOptions = marker.options
        ? Object.assign({}, marker.options)
        : null ;

      markerClusterGroup.addLayer(
        L.marker([marker.lat, marker.lng], currentMarkerOptions || markersOptions)
      );
    });

    this.props.map.addLayer(markerClusterGroup);
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
