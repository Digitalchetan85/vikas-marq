import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

const Overview = () => {
  return (
    <div id="Overview" className="py-3 py-md-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="">
              <h2 className="text-center text-primary py-3">Overview</h2>
              <p>
                Assetz Marq 3.0 <span className="text-primary">The Better Life </span> boasts a park so large, we managed to fit in
                acres of greenery, play areas, walking tracks, outdoor fitness
                centers… the list goes on. Begin a new chapter of your life in
                an eco-luxurious home at Assetz Marq 3.0, off Whitefield-Hoskote
                road, Bengaluru.
              </p>
              <Row>
                <Col md={4} className="text-center">                  
              <Card style={{ width: '18rem' }} className="text-center"> 
                    <Card.Body>
                          <Card.Title>Our Green Spaces</Card.Title>
                              <Card.Text>Walk out of the park and into more greenery. Marq offers a boulevard, a diagonal, a plaza, and a clubhouse, all landscaped with lush greenery so you never miss a moment of serenity.</Card.Text>
                      </Card.Body>
              </Card>
                </Col>
                <Col md={4}>                  
              <Card style={{ width: '18rem' }} className="text-center"> 
                    <Card.Body>
                          <Card.Title>Big Ambitious need more Room to grow</Card.Title>
                              <Card.Text>We built an entire school in our township- Just a short walk away from your home stands your township's very own school. The school is especially designed to equip each student with modern classrooms and sports facilities fpr holistic development. </Card.Text>
                      </Card.Body>
              </Card>
                </Col>
                <Col md={4}>                  
              <Card style={{ width: '18rem' }} className="text-center"> 
                    <Card.Body>
                          <Card.Title>Floor Plans</Card.Title>
                              <Card.Text>Just when you thought the park was our biggest space. Enter any tower and you’ll find two cores on each floor. Every core boasts three lifts for convenient access. The apartments are designed for maximum utility of space and are Vaastu compliant.  </Card.Text>
                      </Card.Body>
              </Card>
                </Col>
                <Col md={4}>                  
              <Card style={{ width: '18rem' }} className="text-center"> 
                    <Card.Body>
                          <Card.Title>Find us at the heart of it all</Card.Title>
                              <Card.Text>Everything is close by when your home is as big as the world around you. Marq stands tall in Whitefield – one of the fastest developing areas in Bangalore.Whitefield is home to the biggest tech parks, Bangalore’s best hospitals, entertainment districts, schools and more, and Marq plays neighbour to it all. </Card.Text>
                      </Card.Body>
              </Card>
                </Col>
              </Row>
              {/* <h6>Our Green Spaces</h6>
              <p>Walk out of the park and into more greenery. Marq offers a boulevard, a diagonal, a plaza, and a clubhouse, all landscaped with lush greenery so you never miss a moment of serenity.
              </p>
              <h6>Big Ambitious need more Room to grow</h6>
              <p>We built an entire school in our township- Just a short walk away from your home stands your township's very own school. The school is especially designed to equip each student with modern classrooms and sports facilities fpr holistic development. </p>
              <h6>Floor Plans</h6>
              <p>Just when you thought the park was our biggest space. Enter any tower and you’ll find two cores on each floor. Every core boasts three lifts for convenient access. The apartments are designed for maximum utility of space and are Vaastu compliant. </p>
              <h6>Find us at the heart of it all</h6>
              <p>Everything is close by when your home is as big as the world around you. Marq stands tall in Whitefield – one of the fastest developing areas in Bangalore.Whitefield is home to the biggest tech parks, Bangalore’s best hospitals, entertainment districts, schools and more, and Marq plays neighbour to it all.</p> */}
              <h5 className="text-success">Find Marq just over 3 kms from the proposed Metro Station and 6.5 kms from ITPL.</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
