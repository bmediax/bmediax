import * as dateStyles from "./DateRef.module.scss";

import { Col, Container, Row } from "react-bootstrap";

import { Link } from "gatsby";
import React from "react";

const DateRef = ({ data, isFluid, title }) => {
  const isLink = (link, reference) => {
    if (link !== "") {
      return <Link to={link}>{reference}</Link>;
    } else {
      return <>{reference}</>;
    }
  };

  const isLocation = (location) => {
    if (location !== "") {
      return <> | {location}</>;
    } else {
      return "";
    }
  };

  const isList = (list) => {
    if (list !== undefined) {
      return (
        <ul>
          {list.map((listItem, index) => (
            <>
              {listItem.link ? (
                <li key={index}>
                  <Link to={listItem.link}>{listItem.item}</Link>
                </li>
              ) : (
                <li key={index}>{listItem.item}</li>
              )}
            </>
          ))}
        </ul>
      );
    } else {
      return "";
    }
  };

  return (
    <Container fluid={isFluid} className={dateStyles.container}>
      <Row className={dateStyles.title}>
        <h2>{title}</h2>
      </Row>
      {data.map((item, index) => (
        <Row key={index} className={dateStyles.item}>
          <Col md={3} className={dateStyles.date}>
            <h2>{item.date}</h2>
          </Col>
          <Col md={9} className={dateStyles.dateContent}>
            <h3>{item.title}</h3>
            <p>
              {isLink(item.link, item.reference)}
              {isLocation(item.location)}
            </p>
            {isList(item.list)}
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default DateRef;
