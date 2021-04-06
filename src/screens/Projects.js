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

function Projects() {
  return (
    <Container>
      <h3 className="name">E-Comm Website (MERN)</h3>
      <Row>
        <Col md={6}>
          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Full featured shopping cart</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Product reviews and ratings</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Top products carousel</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Product pagination</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Product search feature</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>User profile with orders</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Admin product management</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Admin user management</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Admin Order details page</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Mark orders as delivered option</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>Checkout process (shipping, payment method, etc)</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <h6>
                <li>PayPal / credit card integration</li>
              </h6>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Col>
        <Col md={6}>
        
          <a href="https://swaitzerproshop.herokuapp.com/" target="_blank">
            <Image
              className="img3"
              src="screenshot-nimbus-capture-2021.03.28-14_38_22.png"
              fluid
            />
          </a>
          <br />
          <br />
          <h6>Admin ID : admin@example.com</h6>
        <h6>Admin Password : 12345</h6>
          <h6>
            {" "}
            <a href="https://swaitzerproshop.herokuapp.com/" target="_blank">
              Deployment URL : https://swaitzerproshop.herokuapp.com/
            </a>
          </h6>
          <h6>
            {" "}
            <a
              href="https://github.com/SwaitzJoses/proshop.git"
              target="_blank"
            >
              Code in Github
            </a>
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
