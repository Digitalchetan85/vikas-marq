import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'

const Pricing = () => {
  return (
    <div>
        <Container>
            <Row>
                
          <Col md={12}>
            <div className="">
              <h2 className="text-primary text-center py-2">
                Pricing
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
                    <td>1372</td>
                    <td>
                      <Button>Enquire Now</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3 BHK <br /> (3B + 3T)
                    </td>
                    <td>1630</td>
                    <td>
                      <Button>Enquire Now</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3 BHK <br /> (3B + 3T)
                    </td>
                    <td>1937</td>
                    <td>
                      <Button>Enquire Now</Button>
                    </td>
                  </tr>
                  <tr>
                    <td> 
                      4 BHK <br /> (3B-3T + Studio)
                    </td>
                    <td>2253</td>
                    <td>
                      <Button>Enquire Now</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Pricing