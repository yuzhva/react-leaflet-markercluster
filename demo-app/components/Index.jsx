import React from 'react';
import ReactDOM from 'react-dom';

export default class Index extends React.Component {
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById('react-leaflet-markercluster_demo-app'));
