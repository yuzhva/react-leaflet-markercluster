import {PropTypes} from 'react';

import {LayerGroup} from 'react-leaflet';
import L from 'leaflet'
import 'leaflet.markercluster';

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
    var markerClusterGroup = L.markerClusterGroup(this.props.options);

    markers.forEach((marker) => {
      markerClusterGroup.addLayer(L.marker([marker.lat, marker.lng]));
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
  wrapperOptions: PropTypes.object
}
