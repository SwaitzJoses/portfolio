import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <>
      <header>
        <Container>
          <Navbar bg="dark" variant="dark">
            <LinkContainer to="/">
              <Navbar.Brand>About</Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto">
              <LinkContainer to="/skills">
                <Nav.Link Link to="skills">
                  Skills
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/projects">
                <Nav.Link Link to="projects">
                 Projects
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/resume">
              <Nav.Link Link to="resume">
               Resume
              </Nav.Link>
            </LinkContainer>

           
            </Nav>
  <h6>
            <LinkContainer to="/contact">
            <Nav.Link Link to="contact">
           CONTACT
            </Nav.Link>
          </LinkContainer></h6>
          </Navbar>
        </Container>
      </header>
    </>
  );
}

export default Header;
