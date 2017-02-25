import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import WelcomePage from './containers/welcome-page';

import './main.scss';

export default class Index extends Component {
  render() {
    return (
      <main>
        <WelcomePage />
      </main>
    );
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('react-leaflet-markercluster_demo-app')
);
