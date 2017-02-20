'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('leaflet.markercluster');

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prevMarkerClusterGroup = void 0;

var MarkerClusterGroup = function (_LayerGroup) {
  _inherits(MarkerClusterGroup, _LayerGroup);

  function MarkerClusterGroup() {
    _classCallCheck(this, MarkerClusterGroup);

    return _possibleConstructorReturn(this, (MarkerClusterGroup.__proto__ || Object.getPrototypeOf(MarkerClusterGroup)).apply(this, arguments));
  }

  _createClass(MarkerClusterGroup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.markers && this.props.markers.length) {
        this.addMarkerClusterGroupToMap(this.props.markers);
      }

      this.props.wrapperOptions.enableDefaultStyle && (this.props.map._container.className += ' marker-cluster-styled');

      !this.props.wrapperOptions.disableDefaultAnimation && (this.props.map._container.className += ' marker-cluster-animated');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('nextProps', nextProps);
      if (nextProps.markers && nextProps.markers.length) {
        this.props.map.removeLayer(prevMarkerClusterGroup);
        this.addMarkerClusterGroupToMap(nextProps.markers);
      }
    }
  }, {
    key: 'removeMarkersWithSameCoordinates',
    value: function removeMarkersWithSameCoordinates(markers) {
      // init filtered markers list with first marker from list
      var filteredMarkers = [markers[0]];

      markers.forEach(function (marker) {
        if (!JSON.stringify(filteredMarkers).includes(JSON.stringify(marker))) {
          filteredMarkers.push(marker);
        }
      });

      return filteredMarkers;
    }
  }, {
    key: 'addMarkerClusterGroupToMap',
    value: function addMarkerClusterGroupToMap(markers) {
      var markersOptions = this.props.markerOptions ? Object.assign({}, this.props.markerOptions) : {};

      var markerClusterGroup = _leaflet2.default.markerClusterGroup(this.props.options);

      var filteredMarkers = this.props.wrapperOptions.removeDuplicates ? this.removeMarkersWithSameCoordinates(markers) : markers;

      filteredMarkers.forEach(function (marker) {
        var currentMarkerOptions = marker.options ? Object.assign({}, marker.options) : null;

        var leafletMarker = _leaflet2.default.marker([marker.lat, marker.lng], currentMarkerOptions || markersOptions);

        marker.popup && leafletMarker.bindPopup(marker.popup);

        markerClusterGroup.addLayer(leafletMarker);
      });

      prevMarkerClusterGroup = markerClusterGroup;
      this.props.map.addLayer(markerClusterGroup);
    }
  }]);

  return MarkerClusterGroup;
}(_reactLeaflet.LayerGroup);

exports.default = MarkerClusterGroup;


MarkerClusterGroup.propTypes = {
  // List of markers with required lat and lng keys
  markers: _react.PropTypes.array,
  // Leaflet.markercluster native options
  options: _react.PropTypes.object,
  // Options that are supporting by react-leaflet-markercluster wrapper
  wrapperOptions: _react.PropTypes.object,
  // Used to display clickable/draggable icons on the map
  markerOptions: _react.PropTypes.object
};

MarkerClusterGroup.defaultProps = {
  wrapperOptions: {}
};
