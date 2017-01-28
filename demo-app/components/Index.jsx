import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MapExample from './MapExample.jsx';

export default class Index extends Component {
  render() {
    return (
      <main>
        <h3>Demo application of clustered marks with a help of react-leaflet-markercluster</h3>

        <MapExample/>
      </main>
    );
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('react-leaflet-markercluster_demo-app')
);
