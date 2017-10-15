import React from 'react';

import BasicExample from './../../components/basic-example';
import MarkerclusterOptions from './../../components/markercluster-options';
import MarkerOptions from './../../components/marker-options';
import MarkerPopup from './../../components/marker-popup';
import MarkerTooltip from './../../components/marker-tooltip';
import EventListeners from './../../components/event-listeners';

export default [
  {
    id: 'basic-example',
    header: 'Basic example',
    component: <BasicExample />,
  }, {
    id: 'markercluster-options',
    header: 'How to set Leaflet.markercluster plugin options (custom icon for cluster)?',
    component: <MarkerclusterOptions />,
  }, {
    id: 'marker-options',
    header: 'How to set custom options (like custom icon or title) for marker?',
    component: <MarkerOptions />,
  }, {
    id: 'marker-popup',
    header: 'How to set marker popup?',
    component: <MarkerPopup />,
  }, {
    id: 'marker-tooltip',
    header: 'How to set marker tooltip?',
    component: <MarkerTooltip />,
  }, {
    id: 'event-listeners',
    header: 'Event listeners of react-leaflet-markercluster wrapper.',
    component: <EventListeners />,
  },
];
