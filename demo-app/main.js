import React from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies

import WelcomePage from './containers/welcome-page';

const Index = () => (
  <main>
    <WelcomePage />
  </main>
);

ReactDOM.render(
  <Index />,
  document.getElementById('react-leaflet-markercluster_demo-app'),
);
