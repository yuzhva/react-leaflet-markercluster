import React from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

import BasicExample from './../components/basic-example';
import ReactLeafletMarkers from './../components/react-leaflet-markers';
import MarkerclusterOptions from './../components/markercluster-options';
import MarkerOptions from './../components/marker-options';
import MarkerPopup from './../components/marker-popup';
import MarkerTooltip from './../components/marker-tooltip';
import EventListeners from './../components/event-listeners';
import CustomOptions from './../components/custom-options';

const WelcomePage = () => {
  return (
    <div className="welcome-page container">
      <Panel collapsible defaultExpanded header="Contents">
        <ListGroup fill>
          {getContentItems()}
        </ListGroup>
      </Panel>
      {getPanels()}
    </div>
  )
};
const getContentItems = () => {
  return panelsList.map((item, index) => {
    return (
      <ListGroupItem key={`content-item-${index}`}>
        <a href={`#${item.id}`}>{item.header}</a>
      </ListGroupItem>
    )
  })
};

const getPanels = () => {
  return panelsList.map((card, index) => {
    return (
      <Panel id={card.id} header={card.header} key={`panel-${index}`} collapsible defaultExpanded>
        {card.component}
      </Panel>
    )
  })
};

const panelsList = [
  {id: 'basic-example', header: 'Basic example', component: <BasicExample />},
  {
    id: 'react-leaflet-markers',
    header: 'How to set react-leaflet markers?',
    component: <ReactLeafletMarkers />
  },
  {
    id: 'markercluster-options',
    header: 'How to set Leaflet.markercluster plugin options (custom icon for cluster)?',
    component: <MarkerclusterOptions />
  },
  {
    id: 'marker-options',
    header: 'How to set custom options (like custom icon or title) for marker?',
    component: <MarkerOptions />
  },
  {
    id: 'marker-popup',
    header: 'How to set marker popup?',
    component: <MarkerPopup />
  },
  {
    id: 'marker-tooltip',
    header: 'How to set marker tooltip?',
    component: <MarkerTooltip />
  },
  {
    id: 'event-listeners',
    header: 'Event listeners of react-leaflet-markercluster wrapper.',
    component: <EventListeners />
  },
  {
    id: 'custom-options',
    header: 'Custom options supported by react-leaflet-markercluster wrapper.',
    component: <CustomOptions />
  }
];

export default WelcomePage;
