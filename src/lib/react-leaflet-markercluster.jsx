import {LayerGroup} from 'react-leaflet';
import L from 'leaflet'
import 'leaflet.markercluster';

export default class MarkerClusterGroup extends LayerGroup {

  componentDidMount() {
    if (this.props.markers && this.props.markers.length) {
      this.addMarkerClusterGroupToMap(this.props.markers);
    }

    if (this.props.params) {
      this.props.params.enableDefaultStyle && (
        this.props.map._container.className += ' marker-cluster-styled'
      );

      !this.props.params.disableDefaultAnimation && (
        this.props.map._container.className += ' marker-cluster-animated'
      );
    }
  }

  addMarkerClusterGroupToMap(markers) {
    var markerClusterGroup = L.markerClusterGroup();

    markers.forEach((marker) => {
      markerClusterGroup.addLayer(L.marker([marker.lat, marker.lng]));
    });

    this.props.map.addLayer(markerClusterGroup);
  }
}
