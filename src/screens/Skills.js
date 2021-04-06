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

function Skills() {
  return (
    <Container>
   
      <h3 className="name">Skills</h3>
      <Row>
        <Col md={6}>
          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>MongoDB</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          
          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Express</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

         
          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>React</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          
          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Node js</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h6>
              <li>Redux</li>
            </h6>
          </Col>
          <Col xs lg="2"></Col>
        </Row>


        <Row className="justify-content-md-left">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h6>
              <li>Mongoose</li>
            </h6>
          </Col>
          <Col xs lg="2"></Col>
        </Row>


         

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>React Bootstrap</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

         

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Javascript</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

         
          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>CSS</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>HTML</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          

          
        </Col>
        <Col md={6}>
          <Image className="img2" src="MERN-logo.png" /><br /> <br />
          <h6>MERN Stack Developer ;) </h6>
          
          
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
