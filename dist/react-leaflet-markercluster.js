'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
      var markers = this.props.markers;

      // Flag to know if there are react-leaflet markers

      var hasReactLeafletMarkers = this.leafletMarkerReferences.length;

      if (markers && markers.length || hasReactLeafletMarkers) {
        this.addMarkerClusterGroupToMap(markers);
      }

      this.props.wrapperOptions.enableDefaultStyle && (this.context.map._container.className += ' marker-cluster-styled');

      !this.props.wrapperOptions.disableDefaultAnimation && (this.context.map._container.className += ' marker-cluster-animated');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasReactLeafletMarkers = this.leafletMarkerReferences.length;

      if (nextProps.markers && nextProps.markers.length || hasReactLeafletMarkers) {
        // Remove layer only if MarkerClusterGroup was previously rendered
        prevMarkerClusterGroup && this.layerContainer.removeLayer(prevMarkerClusterGroup);
        this.addMarkerClusterGroupToMap(nextProps.markers);
      }
    }
  }, {
    key: 'removeMarkersWithSameCoordinates',
    value: function removeMarkersWithSameCoordinates(markers) {
      // init filtered markers list with first marker from list
      var filteredMarkers = [markers[0]];

      markers.forEach(function (marker) {
        if (marker.lat && marker.lng && !JSON.stringify(filteredMarkers).includes(JSON.stringify(marker))) {
          filteredMarkers.push(marker);
        }
      });

      return filteredMarkers;
    }
  }, {
    key: 'addMarkerClusterGroupToMap',
    value: function addMarkerClusterGroupToMap(markers) {
      var _props = this.props,
          markerOptions = _props.markerOptions,
          options = _props.options,
          wrapperOptions = _props.wrapperOptions;


      var hasReactLeafletMarkers = this.leafletMarkerReferences.length;

      var markersOptions = markerOptions ? Object.assign({}, markerOptions) : {};

      var markerClusterGroup = _leaflet2.default.markerClusterGroup(options);

      var markersArr = hasReactLeafletMarkers ? this.leafletMarkerReferences : markers;

      var filteredMarkers = wrapperOptions.removeDuplicates ? this.removeMarkersWithSameCoordinates(markersArr) : markersArr;

      var leafletMarkers = [];

      filteredMarkers.forEach(function (marker) {
        var currentMarkerOptions = marker.options ? Object.assign({}, marker.options) : null;

        var leafletMarker = hasReactLeafletMarkers ? marker : _leaflet2.default.marker([marker.lat, marker.lng], currentMarkerOptions || markersOptions);

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
  }, {
    key: 'initEventListeners',
    value: function initEventListeners(markerClusterGroup) {
      var _this2 = this;

      this.props.onMarkerClick && markerClusterGroup.on('click', function (marker) {
        _this2.props.onMarkerClick(marker.layer);
      });

      this.props.onClusterClick && markerClusterGroup.on('clusterclick', function (cluster) {
        _this2.props.onClusterClick(cluster.layer);
      });

      this.props.onPopupClose && markerClusterGroup.on('popupclose', function (map) {
        _this2.props.onPopupClose(map.popup);
      });
    }
  }, {
    key: 'getLeafletElement',
    value: function getLeafletElement() {
      return this.leafletElement;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var simulateToGetRefs = [];

      // Array that contains all leaflet marker instances 
      this.leafletMarkerReferences = [];

      // Get Leaflet references from react-leaflet markers
      _react2.default.Children.map(this.props.children, function (marker) {
        return simulateToGetRefs.push(_react2.default.cloneElement(marker, {
          ref: function ref(_ref) {
            return _this3.leafletMarkerReferences.push(_ref.leafletElement);
          }
        }));
      });
      return _react2.default.createElement(
        'div',
        null,
        simulateToGetRefs
      );
    }
  }]);

  return MarkerClusterGroup;
}(_reactLeaflet.LayerGroup);

exports.default = MarkerClusterGroup;


MarkerClusterGroup.propTypes = {
  // List of markers with required lat and lng keys
  markers: _react.PropTypes.arrayOf(_react.PropTypes.object),
  // All available options for Leaflet.markercluster
  options: _react.PropTypes.object,
  // All available options for Leaflet.Marker
  markerOptions: _react.PropTypes.object,
  // Options that are supporting by react-leaflet-markercluster wrapper
  wrapperOptions: _react.PropTypes.object,
  // Events
  onMarkerClick: _react.PropTypes.func,
  onClusterClick: _react.PropTypes.func,
  onPopupClose: _react.PropTypes.func
};

MarkerClusterGroup.defaultProps = {
  wrapperOptions: {}
};