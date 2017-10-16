'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('leaflet.markercluster');

// TEMP: remove from v1.2.0 because of deprecated wrapperOptions prop
require('./deprecated-styles.css');

// TEMP: remove deprecation warning at v1.2.0
function havingDeprecatedProps(markers) {
  return markers.findIndex(function (marker) {
    return marker.lat || marker.lng;
  }) !== -1;
}

// NOTE: Helpers
function isArraysEqual(firstArray, secondArray) {
  return JSON.stringify(firstArray) === JSON.stringify(secondArray);
}

function removeMarkersWithSameCoordinates(markers) {
  // init filtered markers list with first marker from list
  var filteredMarkers = [markers[0]];

  markers.forEach(function (marker) {
    if (!JSON.stringify(filteredMarkers).includes(JSON.stringify(marker))) {
      filteredMarkers.push(marker);
    }
  });

  return filteredMarkers;
}

var MarkerClusterGroup = function (_LayerGroup) {
  _inherits(MarkerClusterGroup, _LayerGroup);

  function MarkerClusterGroup() {
    _classCallCheck(this, MarkerClusterGroup);

    return _possibleConstructorReturn(this, (MarkerClusterGroup.__proto__ || Object.getPrototypeOf(MarkerClusterGroup)).apply(this, arguments));
  }

  _createClass(MarkerClusterGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          markers = _props.markers,
          options = _props.options;
      // Override auto created leafletElement with L.markerClusterGroup element

      this.leafletElement = _leaflet2.default.markerClusterGroup(options);

      // TEMP: remove from v1.2.0 because of deprecated wrapperOptions prop
      this.initMapClasses();

      // if (markers.length) this.addLayersWithMarkersFromProps(markers);
      // TEMP: remove deprecation warning at v1.2.0
      if (markers.length) {
        this.addLayersWithMarkersFromProps(markers);

        if (havingDeprecatedProps(markers)) {
          console.warn('[react-leaflet-markercluster] Warning: marker "lat: xx", "lng: xx" properties are deprecated' + ' and will be removed in v1.2.0. Please use "position: [lat, lng]" instead https://goo.gl/s7a6Cj');
        }
      }

      // Init listeners for markerClusterGroup leafletElement only once
      this.initEventListeners(this.leafletElement);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!isArraysEqual(this.props.markers, nextProps.markers)) {
        // Remove layer from map with previously rendered clustered markers
        this.layerContainer.removeLayer(this.leafletElement);
        // Remove layers with markers from markerClusterGroup
        this.leafletElement.clearLayers();

        if (nextProps.markers.length) this.addLayersWithMarkersFromProps(nextProps.markers);
      }
    }
  }, {
    key: 'initMapClasses',
    value: function initMapClasses() {
      var wrapperOptions = this.props.wrapperOptions;

      if (wrapperOptions) {
        console.warn('[react-leaflet-markercluster] Warning: "wrapperOptions" property is deprecated' + ' and will be removed in v1.2.0. Please see: https://goo.gl/s7a6Cj');

        var mapClassName = this.context.map._container.className;
        var isStyledClassAppliyed = mapClassName.indexOf('marker-cluster-styled') !== -1;
        var isAnimatedClassAppliyed = mapClassName.indexOf('marker-cluster-animated') !== -1;

        if (wrapperOptions.enableDefaultStyle && !isStyledClassAppliyed) {
          this.context.map._container.className += ' marker-cluster-styled';
        }

        if (!wrapperOptions.disableDefaultAnimation && !isAnimatedClassAppliyed) {
          this.context.map._container.className += ' marker-cluster-animated';
        }
      }
    }
  }, {
    key: 'addLayersWithMarkersFromProps',
    value: function addLayersWithMarkersFromProps(markers) {
      var _props2 = this.props,
          markerOptions = _props2.markerOptions,
          wrapperOptions = _props2.wrapperOptions,
          children = _props2.children;


      var markersOptions = markerOptions ? Object.assign({}, markerOptions) : {};

      // TEMP: remove from v1.2.0 because of deprecated wrapperOptions prop
      var filteredMarkers = wrapperOptions && wrapperOptions.removeDuplicates ? removeMarkersWithSameCoordinates(markers) : markers;

      var leafletMarkers = [];

      filteredMarkers.forEach(function (marker) {
        var currentMarkerOptions = marker.options ? Object.assign({}, marker.options) : null;

        var leafletMarker = _leaflet2.default.marker(marker.position || [marker.lat, marker.lng], currentMarkerOptions || markersOptions);

        if (marker.popup) leafletMarker.bindPopup(marker.popup);
        if (marker.tooltip) leafletMarker.bindTooltip(marker.tooltip);

        leafletMarkers.push(leafletMarker);
      });

      // Add markers leafletElements to the markerClusterGroup
      this.leafletElement.addLayers(leafletMarkers);
      // Add clustered markers to the leaflet map
      if (!children) this.layerContainer.addLayer(this.leafletElement);
    }
  }, {
    key: 'initEventListeners',
    value: function initEventListeners(markerClusterGroup) {
      var _this2 = this;

      if (this.props.onMarkerClick) {
        markerClusterGroup.on('click', function (marker) {
          _this2.props.onMarkerClick(marker.layer);
        });
      }

      if (this.props.onClusterClick) {
        markerClusterGroup.on('clusterclick', function (cluster) {
          _this2.props.onClusterClick(cluster.layer);
        });
      }

      if (this.props.onPopupClose) {
        markerClusterGroup.on('popupclose', function (map) {
          _this2.props.onPopupClose(map.popup);
        });
      }
    }
  }, {
    key: 'addLayersWithReactLeafletMarkers',
    value: function addLayersWithReactLeafletMarkers() {
      var _this3 = this;

      var leafletMarkers = [];

      // Map through all react-leaflet Markers and clone them with ref prop
      // ref prop required to get leafletElement of Marker
      return _react.Children.map(this.props.children, function (reactLeafletMarker, index) {
        return (0, _react.cloneElement)(reactLeafletMarker, {
          ref: function ref(marker) {
            if (marker) {
              leafletMarkers.push(marker.leafletElement);

              if (index === _this3.props.children.length - 1 ||
              // addClusteredMarkersToMap when there is only one marker
              !Array.isArray(_this3.props.children)) {
                // Add markers leafletElements to the markerClusterGroup
                _this3.leafletElement.addLayers(leafletMarkers);
                // Add clustered markers to the leaflet map
                _this3.layerContainer.addLayer(_this3.leafletElement);
              }
            }
          },
          key: 'react-leaflet-marker-' + JSON.stringify(reactLeafletMarker.props.position) + '-' + index
        });
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
      return this.props.children ? _react2.default.createElement(
        'section',
        { className: 'marker-cluster-group' },
        this.addLayersWithReactLeafletMarkers()
      ) : null;
    }
  }]);

  return MarkerClusterGroup;
}(_reactLeaflet.LayerGroup);

// TODO: better describe prop objects as shapes


exports.default = MarkerClusterGroup;
MarkerClusterGroup.propTypes = {
  // List of markers with required lat and lng keys
  markers: _propTypes2.default.arrayOf(_propTypes2.default.object),
  // List of react-leaflet markers
  children: _propTypes2.default.node,
  // All available options for Leaflet.markercluster
  options: _propTypes2.default.object,
  // All available options for Leaflet.Marker
  markerOptions: _propTypes2.default.object,
  // Options that are supporting by react-leaflet-markercluster wrapper
  wrapperOptions: _propTypes2.default.object,
  // Events
  onMarkerClick: _propTypes2.default.func,
  onClusterClick: _propTypes2.default.func,
  onPopupClose: _propTypes2.default.func
};

MarkerClusterGroup.defaultProps = {
  markers: []
};
