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
  Form,
} from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2pha5yp",
        "template_kh6nxrl",
        e.target,
        "user_f7UNy5a8yMdot5MlyBrJm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Container>
      <Row>
        <Col md={5}>
          <Form onSubmit={sendEmail}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label name="name">Name</Form.Label>
              <Form.Control placeholder="Name" name="name" type="text" required />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label name="email">Email Address</Form.Label>
              <Form.Control placeholder="Email" name="email" type="email" required/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label name="subject">Subject</Form.Label>
              <Form.Control placeholder="Subject" name="subject" type="text"  required />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label name="message">Message</Form.Label>
              <Form.Control
                placeholder="Message"
                name="message"
                as="textarea"
                rows={10} required
              />
            </Form.Group>

            <Button type="submit"> Send </Button>
          </Form>
        </Col>
        <Col md={7}>
        <br />
        <Image
          className="img5"
          src="The_Creation_Michelangelo.jpg"
          fluid rounded
        />
        
       
      </Col>
      </Row>
    </Container>
  );
}

export default Contact;
