# React leaflet markercluster
[![npm](https://img.shields.io/npm/v/react-leaflet-markercluster.svg)](
https://www.npmjs.com/package/react-leaflet-markercluster)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)]
(https://github.com/YUzhva/react-leaflet-markercluster)

React wrapper of the official [Leaflet.markercluster](
https://github.com/Leaflet/Leaflet.markercluster)
for [react-laeflet](https://github.com/PaulLeCam/react-leaflet)

**DEMO with examples:** https://yuzhva.github.io/react-leaflet-markercluster/

# Description

If you faced with an issue that markers are overlapping during map zooming, or they are
overlapping because they are close to each other - probably you need to group them.
That what you can do with **react-leaflet-markercluster**.

> **Note: At first, please get touched with:**
> - [Leaflet Quick Start Guide](
http://leafletjs.com/examples/quick-start/).
> - and [react-leaflet Getting started](
https://github.com/PaulLeCam/react-leaflet/blob/master/docs/Getting%20started.md).


# Table of Contents
* [Getting started](#getting-started)
* [How to run demo app](#how-to-run-demo-app)
* [Contributing](#contributing)

# Getting started

**1.** Install package from npm:
```bash
  npm install react-leaflet-markercluster --save
```
or you could also use yarn:
```bash
  yarn add react-leaflet-markercluster
```

**2.** Import package to your component:
```javascript
  import MarkerClusterGroup from 'react-leaflet-markercluster';
```

**3.** Declare some markers in next format:
```javascript
  const markers = [
    {lat: 49.8397, lng: 24.0297},
    {lat: 52.2297, lng: 21.0122},
    {lat: 51.5074, lng: -0.0901}
  ];
```

**4.** Put `<MarkerClusterGroup ... />` inside react-leaflet, right after `<TileLayer />`:
```javascript
  <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>

    <MarkerClusterGroup
      markers={markers}
      wrapperOptions={{enableDefaultStyle: true}}
    />
  </Map>
```
> NOTE: use **wrapperOptions={{enableDefaultStyle: true}}** property
to enable default Leaflet.markercluster style for clustered markers group.

[**Check demo**](https://yuzhva.github.io/react-leaflet-markercluster/) for more examples
and all plugin options.

# How to run demo app
**1.** Clone our repo:
```bash
  git clone https://github.com/YUzhva/react-leaflet-markercluster.git
```

**2.** Install all dependencies with yarn:
```bash
  yarn install --no-lockfile
```
or you could use npm:
```bash
  npm install
```

**3.** Start the server:
```bash
  npm run start
```

**4.** After starting the server webpack should automatically open next address:
```
  http://localhost:8080/
```

# Contributing
All sources are placed in the `./src` folder. There is `.scss` style and `.js` plugin.

**1.** Edit `react-leaflet-markercluster.js` or `style.scss` files.

**2.** Compile source code with next command:
```bash
  npm run build:source
```
> Don't contribute directly to `./dist` folder.
Distributions should be updated after running build:source command.

**3.** Please, change `styles.scss` to `styles.css`
in all `.js` files that are located in `./dist` folder.

**4.** Commit your changes and open Pull Request.

**5.** :beer: **Thank you for contribution** :beer:

# License
MIT License, see [LICENSE](
  https://github.com/YUzhva/react-leaflet-markercluster/blob/master/LICENSE) file.
