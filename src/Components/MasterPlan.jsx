import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

const MasterPlan = () => {

  const [key, setKey] = useState('home');

  return (
    <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <h2 className="pt-2 pb-2 text-center text-primary">Master Plan & Floor Plans</h2>
    <Container>
      <Row>
      <Col>  
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="all" title="All">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="matster-plan" title="Master Plan">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="Floor Plan" title="Floor Plan">
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
    </Col>
      </Row>
    </Container>
  </div>
      
  );
}

export default MasterPlan