[![npm](https://img.shields.io/npm/v/react-leaflet-markercluster.svg)](https://www.npmjs.com/package/react-leaflet-markercluster)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)](https://github.com/YUzhva/react-leaflet-markercluster)

React wrapper of the official [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
for [react-laeflet](https://github.com/PaulLeCam/react-leaflet)

----------


Description
-------------

If you faced with an issue that markers are overlapping during map zooming, or they are
overlapping because they are close to each other - probably you need to cauterize them.
That what you can do with **react-leaflet-markercluster** and **react-leaflet**.


**DEMO:** https://yuzhva.github.io/react-leaflet-markercluster/

> **Note:**

> - At first, please get touched with [Leaflet Quick Start Guide](http://leafletjs.com/examples/quick-start/).
> - and how to use leaflet in react with [react-leaflet Getting started](https://github.com/PaulLeCam/react-leaflet/blob/master/docs/Getting%20started.md).



----------


How to use
-------------------

**1.** Install package from npm:
```javascript
    npm install react-leaflet-markercluster --save
```

**2.** Import package to your component:
```javascript
    import MarkerClusterGroup from 'react-leaflet-markercluster';
```

**3.** Declare some markers in next format:
```javascript
    const markers = [
      {lat: 49.8397, lng: 24.0297},
      {lat: 50.4501, lng: 30.5234},
      {lat: 52.2297, lng: 21.0122},
      {lat: 50.0647, lng: 19.9450},
      {lat: 48.9226, lng: 24.7111},
      {lat: 48.7164, lng: 21.2611},
      {lat: 51.5, lng: -0.09, popup: "<b>Hello world!</b><br>I am a lonely marker."}
    ]
```

**4.** Use MarkerClusterGroup inside ract-leaflet Map component:
```javascript
    <Map center={[49.8397, 24.0297]} zoom={3}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

      <MarkerClusterGroup
        markers={markers}
        wrapperOptions={{enableDefaultStyle: true}}
    </Map>
```

If you would like customize the clustered markers with the default options from: https://github.com/Leaflet/Leaflet.markercluster#all-options

**Please use options property like:**
```javascript
  <MarkerClusterGroup options={{showCoverageOnHover: false}}/>
```

P.S: Please feel free to browse files in demo-app folder - there is example of package usage.

**Link for the code from "How to use" section:** https://github.com/YUzhva/react-leaflet-markercluster/blob/master/demo-app/components/MapExample.jsx
