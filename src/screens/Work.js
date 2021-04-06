import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  CardDeck,
  Figure,
  Media,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

function Work() {
  return (
    <div>
      <Container>
        <h3 className="name">Work Experience</h3>
        <Row>
          <Col md={6}>
            <Row className="justify-content-md-left">
              <Col xs lg="2"></Col>
              <Col md="auto">
                <h5>Lecturer</h5>
                <h6>
                  <li>Annai Teresa College of Engineering, Vilupuram</li>
                  <li>Sri Mahalakshmi Polytechnic College, Cuddalore</li>
                </h6>
              </Col>
              <Col xs lg="2"></Col>
            </Row>

            <br />
            <br />

            <Row className="justify-content-md-left">
              <Col xs lg="2"></Col>
              <Col md="auto">
                <h5>Freelance 3D Artist</h5>{" "}
                <h6>
                  <li>Modeling</li>
                  <li>Animating</li>
                  <li>Sculpting</li>
                  <li>Texturing</li>
                  <li>Rigging</li>
                  <li>World Building</li>
                  <li>Character Modeling</li>
                </h6>
                <br />
                <h6>
                  <u>
                    <a
                      href="https://www.artstation.com/swaitzjoses"
                      target="_blank"
                    >
                      3D portfolio (ArtStation)
                    </a>
                  </u>
                </h6>
                <br />
                <h5>
                  <u><Button href="Swaitzer's Resume (3).pdf"
                      target="_blank">
                    
                   
                      <h4>My Resume</h4>
                    </Button>
                  </u>
                </h5>
              </Col>
              <Col xs lg="2"></Col>
            </Row>
          </Col>
          <Col md={6}>
            <Image
              className="img4"
              src="150d7455-4f90-42d3-abac-26173635c914.jpg"
              fluid
            />
            <br />
            <br />
            <h6> With my students (Sri Mahalakshmi Polytechnic College, Cuddalore)</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;
