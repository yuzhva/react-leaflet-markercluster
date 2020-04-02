# v2.0.0
There are critical changes that touches to the MarkerClusterGroup API:
**1.** Support of `marker` object `lat` and `lng` keys are removed.
**2.** `options` property of `MarkerClusterGroup` removed.
**3.** Console **deprecated warnings** are removed.
**4.** Better handling on events.
**5.** Demo application completely rewritten and replaced with StoryBook.

# v1.1.8
There are critical changes that touches to the MarkerClusterGroup API:

### **1.** `options` property is deprecated (will be removed at v1.2.0).
Since now you don't need to use `options` **prop** to pass [Leaflet.markercluster option](https://github.com/Leaflet/Leaflet.markercluster#all-options) into `<MarkerClusterGroup />`.

Just pass whatever option you need from [All Leaflet.markercluster Options](https://github.com/Leaflet/Leaflet.markercluster#all-options)
list to `MarkerClusterGroup` as `prop`.

For example:
```javascript
// New API
<MarkerClusterGroup showCoverageOnHover={false} />

// How it was before 1.1.8
<MarkerClusterGroup options={{ showCoverageOnHover: false }} />
```
or:
```javascript
const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'marker-cluster-custom',
    iconSize: L.point(40, 40, true),
  });
}

// New API
<MarkerClusterGroup iconCreateFunction={createClusterCustomIcon} showCoverageOnHover={false} />

// How it was before 1.1.8
<MarkerClusterGroup options={{ iconCreateFunction: clusterCustomIcon, showCoverageOnHover: false }} />
```

### **2.** Deprecated `wrapperOptions` property has been removed.
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
- Dependencies Update
- Demo-app: Update Panel props according to latest react-bootstrap specification
- **Remove** requiring of **deprecated-styles** inside **react-leaflet-markercluster.js** plugin
- **Use react context store to access markers instead of cloning markers during their render**
- Deprecation warnings about **MarkerClusterGroup** `options` property
- Update Demo-app with fresh examples

# v1.1.7
### **1.** marker object `lat` and `lng` keys are deprecated (will be removed at v1.2.0).
To set marker position, please use `position` key at marker object like:
```javascript
const markers = [
  { position: [49.8397, 24.0297] },
  { position: [52.2297, 21.0122] },
  { position: [51.5074, -0.0901] },
];
```
`position` that is [Leaflet.LatLng](http://leafletjs.com/reference.html#latlng)
`array` or `object`, that could be declared like:
```javascript
const markers = [
  { position: [49.8397, 24.0297] }, // [lat, lng]
  { position: { lat: 52.2297, lng: 21.0122 } },
  { position: { lat: 52.2297, lon: 21.0122 } },
];
```

### **2.** `wrapperOptions` is fully deprecated and will not be used anymore (will be removed at v1.1.8).

### **3.** Bug Fix
- Check if map className was already added/changed when MarkerClusterGroup is mounting
- Remove markers from map when MarkerClusterGroup received empty array in nextProps
- Updated MarkerClusterGroup API. Deprecation warnings about `wrapperOptions`
  and marker `lat` and `lng` object keys.
- React 16 peerDependency support
- Updated documentation
