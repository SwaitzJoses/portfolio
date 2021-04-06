import React from "react";
// import "./App.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <br />
            <br />

            <h5 className="dis"> I' am</h5>
            <h1 className="name">Swaitzer Joses</h1>
            <h2>Full Stack developer</h2>
            <br />
            <h5 className="dis">3D Artist</h5>
            <br />
            <h5 className="dis">Educator</h5>
          </Col>
          <Col md={6}>
            <Image
              className="img1"
              src="46315026_1890479584321483_2557435823976873984_n.jpg"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
