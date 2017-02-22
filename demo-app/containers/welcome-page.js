import React from 'react';
import {Accordion, Panel} from 'react-bootstrap';

import BasicExample from './welcome-page/basic-example';

const WelcomePage = () => {
  return (
    <div className="container">
      <Accordion defaultActiveKey={0}>
        {getAccordionPanels()}
      </Accordion>
    </div>
  )
};

const getAccordionPanels = () => {
  return panelsList.map((card, index) => {
    return (
      <Panel header={card.header} eventKey={index} key={`panel-${index}`}>
        {card.component}
      </Panel>
    )
  })
};

const panelsList = [
  {header: 'Basic example', component: <BasicExample />}
];

export default WelcomePage;
