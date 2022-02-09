import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import aboutImage from "../images/slider/avalon-park-2.png"

const About = () => {
  return (
      <div id="about" className="py-3 py-md-5">
          <Container>
              <Row>
                  <Col md={6} className="align-self-center">
                      <div className="">
                          <h2 className="py-2 text-primary text-uppercase">Why Marq 3.0</h2>
                          <ul>
                              <li className="lh-lg">Find a bit of green everywhere you go</li>
                              <li className="lh-lg">No limit to leisure at the 38,000 sq. ft. clubhouse.</li>
                              <li className="lh-lg">A Sprawling 22-acres township</li>
                              <li className="lh-lg">6-acres of parks in our 22-acre township</li>
                              <li className="lh-lg">Ample space for green walkways</li>
                          </ul>
                          <Button className="btn btn-primary my-3">Download Brochure</Button>
                      </div>
                  </Col>
                  <Col md={6}>
                      <div className="">
                          <Image src={aboutImage} alt="" className="img-fluid" />
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
  );
};

export default About;
