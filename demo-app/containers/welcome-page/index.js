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
    <Panel id={card.id} key={`panel-${card.id}`} defaultExpanded>
      <Panel.Heading>
        <Panel.Title toggle>
          {card.header}
        </Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        {card.component}
      </Panel.Body>
    </Panel>
  ))
);

const WelcomePage = () => (
  <div className="welcome-page container">
    <Panel defaultExpanded>
      <Panel.Heading>Contents</Panel.Heading>
      <ListGroup>
        {getContentItems()}
      </ListGroup>
    </Panel>
    {getPanels()}
  </div>
);

export default WelcomePage;
