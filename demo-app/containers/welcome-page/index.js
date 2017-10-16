import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import Panels from './panels';

const getContentItems = () => (
  Panels.map((item) => (
    <ListGroupItem key={`content-item-${item.id}`}>
      <a href={`#${item.id}`}>{item.header}</a>
    </ListGroupItem>
  ))
);

const getPanels = () => (
  Panels.map((card) => (
    <Panel id={card.id} header={card.header} key={`panel-${card.id}`} collapsible defaultExpanded>
      {card.component}
    </Panel>
  ))
);

const WelcomePage = () => (
  <div className="welcome-page container">
    <Panel collapsible defaultExpanded header="Contents">
      <ListGroup fill>
        {getContentItems()}
      </ListGroup>
    </Panel>
    {getPanels()}
  </div>
);

export default WelcomePage;
