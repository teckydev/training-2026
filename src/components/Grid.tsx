import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

export const Grid = () => {
  return (
  <div>
    <Container fluid>
      <Row>
       <Row>
  <Col xs={12} md={6} lg={4}>
    <div className="p-3 border">Card 1</div>
  </Col>

  <Col xs={12} md={6} lg={4}>
    <div className="p-3 border">Card 2</div>
  </Col>

  <Col xs={12} md={6} lg={4}>
    <div className="p-3 border">Card 3</div>
  </Col>
</Row>

      </Row>

    </Container>
    <Container>
  <Row>
    <Col md={12} className="bg-dark text-white p-3">
      Header
    </Col>
  </Row>

  <Row>
    <Col md={4} className="bg-light p-3">
      Menu
    </Col>

    <Col md={8} className="bg-secondary text-white p-3">
      Content
    </Col>
  </Row>
</Container>
<Container>
  <Row>
    <Col md={9}>
      <Row>
        <Col md={6}>
          <div className="border p-2">Card A</div>
        </Col>
        <Col md={6}>
          <div className="border p-2">Card B</div>
        </Col>
      </Row>
    </Col>

    <Col md={3}>
      Sidebar
    </Col>
  </Row>
</Container>

  </div>
  )
}

