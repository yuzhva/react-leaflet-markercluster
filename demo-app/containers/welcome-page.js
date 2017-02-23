import React from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

import BasicExample from './../components/basic-example';
import MarkerOptions from './../components/marker-options';

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
    id: 'marker-options',
    header: 'How to set custom options (like icon or title) for marker?',
    component: <MarkerOptions />
  }
];

export default WelcomePage;
