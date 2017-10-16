# v1.2.0
There are critical changes that touches to the MarkerClusterGroup API:

### **1.** marker object `lat` and `lng` keys are deprecated (will be removed at v1.2.0).
To set marker position, please use `position` key at marker object like:
```javascript
const markers = [
  { position: [49.8397, 24.0297] },
  { position: [52.2297, 21.0122] },
  { position: [51.5074, -0.0901] },
];
```
`position` that is [Leaflet.LatLng](http://leafletjs.com/reference-1.2.0.html#latlng)
`array` or `object`, that could be declared like:
```javascript
const markers = [
  { position: [49.8397, 24.0297] }, // [lat, lng]
  { position: { lat: 52.2297, lng: 21.0122 } },
  { position: { lat: 52.2297, lon: 21.0122 } },
];
```

### **2.** `wrapperOptions` is fully deprecated and will not use anymore (will be removed at v1.2.0).
How to replace `wrapperOptions` old `enableDefaultStyle | disableDefaultAnimation | removeDuplicates` features:
- `enableDefaultStyle:` to enable `leaflet.markercluster` default style for cluster,
just import Markercluster styles:
```javascript
@import '~react-leaflet-markercluster/dist/styles.min.css'; // sass
@import url('~react-leaflet-markercluster/dist/styles.min.css'); // css

require('react-leaflet-markercluster/dist/styles.min.css'); // inside .js file
```
or include CSS styles directly to the head of HTML file:
```html
<link rel="stylesheet" href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css" />
```
- `disableDefaultAnimation:` to disable markers animation, set [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster/#enabled-by-default-boolean-options)
`animate` option to `false`:
```javascript
<MarkerClusterGroup markers={markers} options={{ animate: false }} />
```
- `removeDuplicates:` you could use our previous solution for markers filtering
(before sending them to MarkerClusterGroup) as follows:
```javascript
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

// ...
render() {
  const filteredMarkers = removeMarkersWithSameCoordinates(this.props.markers);
  return (
    // ...
    <MarkerClusterGroup markers={filteredMarkers} />
    // ...
  )
}
// ...
```

### **3.** Bug Fix
- Check if map className was already added/changed when MarkerClusterGroup is mounting
- Remove markers from map when MarkerClusterGroup received empty array in nextProps
- Updated MarkerClusterGroup API. Deprecation warnings about `wrapperOptions`
  and marker `lat` and `lng` object keys.
- React 16 peerDependency support
- Updated documentation
