import React from 'react';
import {Accordion, Panel} from 'react-bootstrap';

import BasicExample from './../components/basic-example';
import MarkerOptions from './../components/marker-options';

const WelcomePage = () => {
  return (
    <div className="welcome-page container">
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
  {header: 'Basic example', component: <BasicExample />},
  {header: 'How to set custom options for marker?', component: <MarkerOptions />}
];

export default WelcomePage;
