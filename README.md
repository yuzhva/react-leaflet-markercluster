# React leaflet markercluster

[![npm](https://img.shields.io/npm/v/react-leaflet-markercluster.svg)](https://www.npmjs.com/package/react-leaflet-markercluster)
[![Code Climate](https://codeclimate.com/github/YUzhva/react-leaflet-markercluster/badges/gpa.svg)](https://codeclimate.com/github/YUzhva/react-leaflet-markercluster)
[![npm](https://img.shields.io/npm/dm/react-leaflet-markercluster.svg)](https://www.npmjs.com/package/react-leaflet-markercluster)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)](#license)

React wrapper of [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet)

![React leaflet markercluster](./preview.png)

**Examples with the Documentation:** https://yuzhva.github.io/react-leaflet-markercluster/ <br />
**[CodeSandbox Getting Started](https://codesandbox.io/s/react-leaflet-markercluster-getting-started-9binx)**

# Description

If you are faced with an issue with markers overlapping during map zooming, or they are
overlapping because they are close to each other - you probably need to group them. <br />
That is what you can do with **react-leaflet-markercluster**.

Just grab your markers inside `<MarkerClusterGroup />` component, right after `<TileLayer />`:
```javascript
import MarkerClusterGroup from "react-leaflet-markercluster";

<MarkerClusterGroup>
  <Marker position={[49.8397, 24.0297]} />
  <Marker position={[52.2297, 21.0122]} />
  <Marker position={[51.5074, -0.0901]} />
</MarkerClusterGroup>
```

> **Note: Before getting started, please see these useful guides:**
>
> - [Leaflet Quick Start Guide](http://leafletjs.com/examples/quick-start/).
> - [react-leaflet Installation](https://react-leaflet.js.org/docs/en/installation.html).

# Table of Contents

- [Getting started](#getting-started)
- [API](#api)
- [How to run DEV env](#how-to-run-dev-env)
- [Contributing](#contributing)

# Getting started

**1.** Install package:

```bash
yarn add react-leaflet-markercluster # yarn
npm install react-leaflet-markercluster # npm
```

The `react-leaflet-markercluster` requires `leaflet.markercluster` as [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies)

(Leaflet and react-leaflet also should be installed)

```bash
yarn add leaflet.markercluster leaflet react-leaflet # yarn
npm install leaflet.markercluster leaflet react-leaflet # npm
```

**2.** Import **markercluster** and **leaflet** styles:

```javascript
@import '~leaflet/dist/leaflet.css'; // sass
@import '~react-leaflet-markercluster/dist/styles.min.css'; // sass

require('~leaflet/dist/leaflet.css'); // inside .js file
require('react-leaflet-markercluster/dist/styles.min.css'); // inside .js file
```

Or include CSS styles directly to the head of HTML file:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

<link
  rel="stylesheet"
  href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
/>
```

**3.** Write some simple `react-leaflet` Map:

```javascript
import { Map, TileLayer, Marker } from 'react-leaflet';

<Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <Marker position={[49.8397, 24.0297]} />
  <Marker position={[52.2297, 21.0122]} />
  <Marker position={[51.5074, -0.0901]} />
</Map>
```

**NOTE:** Remember to add map styles `.markercluster-map { height: 90vh; }`.

**4.** Just grab your markers inside `<MarkerClusterGroup />` component, right after `<TileLayer />`:

```javascript
import MarkerClusterGroup from "react-leaflet-markercluster";

<MarkerClusterGroup>
  <Marker position={[49.8397, 24.0297]} />
  <Marker position={[52.2297, 21.0122]} />
  <Marker position={[51.5074, -0.0901]} />
</MarkerClusterGroup>
```

[More examples with the Documentation](https://yuzhva.github.io/react-leaflet-markercluster/) <br />
[CodeSandbox Getting Started](https://codesandbox.io/s/react-leaflet-markercluster-getting-started-9binx)

# API

Just pass whatever option you need from [All Leaflet.markercluster Options](https://github.com/Leaflet/Leaflet.markercluster#all-options) to `MarkerClusterGroup` as `prop`.

For example:

```javascript
<MarkerClusterGroup showCoverageOnHover={false} />
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

<MarkerClusterGroup iconCreateFunction={createClusterCustomIcon} />
```

P.S: Examples for v1 are available at [CHANGELOG.md](./CHANGELOG.md#v118)

### Event listeners

You are able to add any listener, supported by Leaflet, with simple `on` property prefix.

# How to run DEV env

**1.** Clone the repo:

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
yarn dev # yarn
npm run dev # npm
```

**4.** After starting the server, storybook should automatically open the following address:

```
http://localhost:8080/
```

# Contributing

All sources are placed in the `./src` folder:

**1.** Fork the repo.

**2.** Edit `react-leaflet-markercluster.js` plugin or `style.scss` style files.

**3.** Commit your changes and open Pull Request.

:beer: **Thank you for contribution** :beer:

# UMD

UMD builds are available on [unpkg](https://unpkg.com/):

```html
<!-- unpkg, production code (minified) -->
<script src="https://unpkg.com/react-leaflet-markercluster/dist/index.js"></script>
<!-- unpkg, development code -->
<script src="https://unpkg.com/react-leaflet-markercluster/src/react-leaflet-markercluster.js"></script>

<!-- unpkg, production styles (minified) -->
<script src="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"></script>
<!-- unpkg, development styles -->
<script src="https://unpkg.com/react-leaflet-markercluster/src/styles.scss"></script>
```

# License

MIT License, see [LICENSE](https://github.com/YUzhva/react-leaflet-markercluster/blob/master/LICENSE) file.
