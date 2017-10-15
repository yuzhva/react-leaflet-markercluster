import React from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies

import WelcomePage from './containers/welcome-page';

const MAIN = (
  <main>
    <WelcomePage />
  </main>
);

ReactDOM.render(
  MAIN,
  document.getElementById('react-leaflet-markercluster--demo-app'),
);
