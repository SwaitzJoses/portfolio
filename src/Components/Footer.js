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

import { LinkContainer } from "react-router-bootstrap";

function Footer() {
  return (
    <div>
      <>
        <header>
          <Container>
            <Navbar bg="dark" variant="dark">
              <Nav className="mr-auto"></Nav>
              <Nav.Link href="https://github.com/SwaitzJoses" target="_blank">
                Github
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/swaitzer-joses-7475322b/"
                target="_blank"
              >
                LinkedIn
              </Nav.Link>
              <Nav.Link
                href="https://www.artstation.com/swaitzjoses"
                target="_blank"
              >
                ArtStation
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/channel/UCRlyRYjG3P3FaqCyb1PNDoQ"
                target="_blank"
              >
                Youtube
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com/swaitzer.joses/"
                target="_blank"
              >
                Facebook
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/swaitz_joses/?hl=en"
                target="_blank"
              >
                Instagram
              </Nav.Link>
            </Navbar>
          </Container>
        </header>
      </>
    </div>
  );
}

export default Footer;
