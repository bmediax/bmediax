import * as listStyles from "./ListRef.module.scss";

import { Col, Container, Row } from "react-bootstrap";

import React from "react";

const ListRef = () => {
  return (
    <Container fluid className={listStyles.container}>
      <Row className={listStyles.title}>
        <h2>Software Skills</h2>
      </Row>
      <Row>
        <Col xs={6} sm={4} md={3}>
          <p>Photoshop CC 2022</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Illustrator CC 2022</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>After Effects CC 2022</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>InDesign CC 2022</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={4} md={3}>
          <p>Premier Pro CC 2022</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Lightroom 2022</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Gatsby Cloud</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Heroku</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={4} md={3}>
          <p>Hubspot</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Slack</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Figma</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Notion</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={4} md={3}>
          <p>Jira</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Git/Github</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Cyberduck</p>
        </Col>
        <Col xs={6} sm={4} md={3}>
          <p>Filezilla</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ListRef;
