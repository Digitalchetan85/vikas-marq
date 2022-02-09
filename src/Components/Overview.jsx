import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Overview = () => {
  return (
    <div id="Overview" className="py-3 py-md-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="">
              <h2 className="text-center text-primary py-3">Overview</h2>
              <p className="p-2">
                Assetz Marq 2.0 boasts a park so large, we managed to fit in
                acres of greenery, play areas, walking tracks, outdoor fitness
                centers… the list goes on. Begin a new chapter of your life in
                an eco-luxurious home at Assetz Marq 2.0, off Whitefield-Hoskote
                road, Bengaluru.
              </p>

              <p className="p-2">
                Be a part of a wholesome community that includes 25+ world class
                amenities amidst natural calm and beauty. 3 and 4 BHK spacious
                Flats/Apartments near Bengaluru's IT corridor. Over 75% Carpet
                area efficiency. Marq 2.0 offers excellent connectivity to the
                nearest Metro so you can step out of the township and back just
                as fast.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="">
              <h2 className="text-primary text-center py-2">
                Project Configuratin
              </h2>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>BHK</th>
                    <th>Area (Sq.ft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      3 BHK <br /> (3B + 2T)
                    </td>
                    <td>1196</td>
                    <td>
                      <Button>Enquery Now</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3 BHK <br /> (3B + 2T)
                    </td>
                    <td>1196</td>
                    <td>
                      <Button>Enquery Now</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3 BHK <br /> (3B + 2T)
                    </td>
                    <td>1196</td>
                    <td>
                      <Button>Enquery Now</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
