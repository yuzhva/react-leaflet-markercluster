# React leaflet markercluster
[![npm](https://img.shields.io/npm/v/react-leaflet-markercluster.svg)](
  https://www.npmjs.com/package/react-leaflet-markercluster)
[![Code Climate](https://codeclimate.com/github/YUzhva/react-leaflet-markercluster/badges/gpa.svg)](
  https://codeclimate.com/github/YUzhva/react-leaflet-markercluster)
[![npm](https://img.shields.io/npm/dm/react-leaflet-markercluster.svg)](
  https://www.npmjs.com/package/react-leaflet-markercluster)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)](#license)

React wrapper of [Leaflet.markercluster](
https://github.com/Leaflet/Leaflet.markercluster)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet)

**DEMO with examples:** https://yuzhva.github.io/react-leaflet-markercluster/

# Description

If you are faced with an issue with markers overlapping during map zooming, or they are
overlapping because they are close to each other - you probably need to group them.
That is what you can do with **react-leaflet-markercluster**.

> **Note: Before getting started, please see these useful guides:**
> - [Leaflet Quick Start Guide](
http://leafletjs.com/examples/quick-start/).
> - [react-leaflet Getting started](
https://github.com/PaulLeCam/react-leaflet/blob/master/docs/Getting%20started.md).


# Table of Contents
* [Getting started](#getting-started)
* [API](#api)
* [How to run demo app](#how-to-run-demo-app)
* [Contributing](#contributing)

# Getting started

**1.** Install package:
```bash
yarn add react-leaflet-markercluster # yarn
npm install react-leaflet-markercluster # npm
```
The `react-leaflet-markercluster` requires `leaflet.markercluster` as [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies)

(React, PropTypes, Leaflet, react-leaflet also should be installed)
```bash
yarn add leaflet.markercluster # yarn
npm install leaflet.markercluster # npm
```

**2.** Import Markercluster styles:
```javascript
@import '~react-leaflet-markercluster/dist/styles.min.css'; // sass
@import url('~react-leaflet-markercluster/dist/styles.min.css'); // css

require('react-leaflet-markercluster/dist/styles.min.css'); // inside .js file
```
or include CSS styles directly to the head of HTML file:
```html
<link rel="stylesheet" href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css" />
```

**3.** Import package to your component:
```javascript
import MarkerClusterGroup from 'react-leaflet-markercluster';
```

**4.** Declare some markers in next format:
```javascript
const markers = [
  { position: [49.8397, 24.0297] },
  { position: [52.2297, 21.0122] },
  { position: [51.5074, -0.0901] },
];
```

**5.** Put `<MarkerClusterGroup ... />` inside react-leaflet, right after `<TileLayer />`:
```javascript
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MarkerClusterGroup markers={markers} />
</Map>
```

[**Check demo**](https://yuzhva.github.io/react-leaflet-markercluster/) for more examples.

**P.S:** support of react-leaflet Marker available as a testing feature.  
Just grab your markers inside MarkerClusterGroup like:
```javascript
<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <MarkerClusterGroup>
    <Marker position={[49.8397, 24.0297]} />
    <Marker position={[52.2297, 21.0122]} />
    <Marker position={[51.5074, -0.0901]} />
  </MarkerClusterGroup>
</Map>
```

# API
* `markers: array of objects` (required)

  keys for marker object, that will be placed in markers array:
    - `position: array | object` [Leaflet.LatLng](http://leafletjs.com/reference-1.2.0.html#latlng) (required)
    - `options: object` All available [options for Leaflet.Marker](
      http://leafletjs.com/reference-1.0.3.html#marker-option).
      + NOTE: Personal marker.options overwriting defined markerOptions for all markers.
    - `popup: Leaflet.Popup | string | HTMLElement`
    - `tooltip: Leaflet.Tooltip | string | HTMLElement`

+ `options: object` All available [options for Leaflet.markercluster](
  https://github.com/Leaflet/Leaflet.markercluster#options)
+ `markerOptions: object` All available [options for Leaflet.Marker](
  http://leafletjs.com/reference-1.0.3.html#marker-option)
+ `onMarkerClick: function`
+ `onClusterClick: function`
+ `onPopupClose: function`

**Refs.** Accessing markerClusterGroup Leaflet element:
```javascript
<MarkerClusterGroup
  markers={markers}
  ref={(markerClusterGroup) => {
    this.markerClusterGroup = markerClusterGroup.leafletElement;
  }}
/>
```

# How to run demo app
**1.** Clone our repo:
```bash
git clone https://github.com/YUzhva/react-leaflet-markercluster.git
```

**2.** Install all dependencies:
```bash
yarn install --no-lockfile # yarn
npm install # npm
```

**3.** Start the server:
```bash
npm run start
```

**4.** After starting the server, webpack should automatically open the following address:
```
http://localhost:8080/
```

# Contributing
All sources are placed in the `./src` folder:

**1.** Edit `react-leaflet-markercluster.js` plugin or `style.scss` style files.

**2.** Compile source code with next command:
```bash
npm run build:source
```
> Don't contribute directly to `./dist` folder.
Distributions should be updated after running build:source command.

**3.** In newly updated `./dist` folder, please:
* change `styles.scss` to `styles.css` in `*.js` file
* change `styles.scss` to `styles.min.css` in `*.min.js` file

**4.** Commit your changes and open Pull Request.

**5.** :beer: **Thank you for contribution** :beer:


# UMD
UMD builds are available on [unpkg](https://unpkg.com/):

```html
<!-- unpkg, production (minified) -->
<script src="https://unpkg.com/react-leaflet-markercluster/dist/react-leaflet-markercluster.min.js"></script>
<!-- unpkg, production -->
<script src="https://unpkg.com/react-leaflet-markercluster/dist/react-leaflet-markercluster.js"></script>
<!-- unpkg, development -->
<script src="https://unpkg.com/react-leaflet-markercluster/src/react-leaflet-markercluster.js"></script>
```

# License
MIT License, see [LICENSE](
  https://github.com/YUzhva/react-leaflet-markercluster/blob/master/LICENSE) file.
