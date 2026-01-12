import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const NestedGrid = () => {
  return (
    <div>
        <Container>
      <Row>
        <Col md={12} className="bg-light p-3">
          Main Content

          <Row className="mt-3">
            <Col md={6} className="bg-primary text-white p-3">
              Card 1
            </Col>
            <Col md={6} className="bg-success text-white p-3">
              Card 2
            </Col>
          </Row>

        </Col>
      </Row>

        <Row>
           <Col md={12} className="bg-info text-white p-3">
             Sidebar
             <Row>
                <Col md={8} className="bg-warning text-white p-3"> text </Col>
                 <Col md={4} className="bg-warning text-white p-3">text-2  </Col>
             </Row>
           </Col>
        </Row>
    </Container>
    </div>
  )
}
