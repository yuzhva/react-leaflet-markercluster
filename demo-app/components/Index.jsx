import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MapExample from './MapExample.jsx';

export default class Index extends Component {
  render() {
    return (
      <main>
        <h1>Hello world</h1>

        <MapExample/>
      </main>
    );
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('react-leaflet-markercluster_demo-app')
);
