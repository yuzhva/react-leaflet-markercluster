import React from 'react';

import BasicExample from './../../examples/basic';
import MarkerclusterOptions from './../../examples/markercluster-options';
import MarkerOptions from './../../examples/marker-options';
import MarkerPopup from './../../examples/marker-popup';
import MarkerTooltip from './../../examples/marker-tooltip';
import EventListeners from './../../examples/event-listeners';

// Deprecated
import DeprecaedBasicExample from './../../examples/deprecated/basic';
import DeprecatedMarkerOptions from './../../examples/deprecated/marker-options';
import DeprecatedMarkerPopup from './../../examples/deprecated/marker-popup';
import DeprecatedMarkerTooltip from './../../examples/deprecated/marker-tooltip';

export default [
  {
    id: 'basic-example',
    header: 'Basic example',
    component: <BasicExample />,
  }, {
    id: 'markercluster-options',
    header: 'How to set Leaflet.markercluster plugin options (example: custom icon for cluster)?',
    component: <MarkerclusterOptions />,
  }, {
    id: 'marker-options',
    header: 'How to set custom options for marker? (example: custom icon and title)',
    component: <MarkerOptions />,
  }, {
    id: 'marker-popup',
    header: 'How to create Marker with Popup?',
    component: <MarkerPopup />,
  }, {
    id: 'marker-tooltip',
    header: 'How to create Marker with Tooltip?',
    component: <MarkerTooltip />,
  }, {
    id: 'event-listeners',
    header: 'Event listeners of react-leaflet-markercluster wrapper.',
    component: <EventListeners />,
  }, {
    id: 'deprecated-basic-example',
    header: '[Deprecated: markers as JSON] Basic example',
    component: <DeprecaedBasicExample />,
  }, {
    id: 'deprecated-marker-options',
    header: '[Deprecated: markers as JSON] How to set custom options for marker? (example: custom icon and title)',
    component: <DeprecatedMarkerOptions />,
  }, {
    id: 'deprecated-marker-popup',
    header: '[Deprecated: markers as JSON] How to set marker popup?',
    component: <DeprecatedMarkerPopup />,
  }, {
    id: 'deprecated-marker-tooltip',
    header: '[Deprecated: markers as JSON] How to set marker tooltip?',
    component: <DeprecatedMarkerTooltip />,
  },
];
