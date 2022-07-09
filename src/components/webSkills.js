import * as listStyles from "./ListRef.module.scss";

import { Col, Container, Row } from "react-bootstrap";

import React from "react";

const WebSkills = () => {
  return (
    <Container fluid className={listStyles.container}>
      <Row className={listStyles.title}>
        <h2>Web / Computer Skills</h2>
      </Row>
      <Row>
        <Col xs={6} sm={6} md={3}>
          <p>HTML 5/CSS 3</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>SASS</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>Javascript ES6</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>ReactJS</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={6} md={3}>
          <p>Redux</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>Axios</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>GatsbyJS</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>NextJS</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={6} md={3}>
          <p>JSON</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>Bash</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>RESTFUL</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>GraphQL</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={6} md={3}>
          <p>Shopify</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>Wordpress</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>Design Systems</p>
        </Col>
        <Col xs={6} sm={6} md={3}>
          <p>Responsive Design</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WebSkills;
