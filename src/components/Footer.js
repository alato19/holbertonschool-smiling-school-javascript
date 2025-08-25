import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#343a40", color: "#fff", padding: "20px 0" }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h5>Kontakti</h5>
            <p>Email: example@example.com</p>
            <p>Telefoni: +1234567890</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Ndihma</h5>
            <p>Si të na kontaktoni</p>
            <p>Përmbledhje të shërbimeve</p>
          </Col>
          <Col md={4} className="text-end">
            <h5>Social Media</h5>
            <a href="#/" className="text-white me-3">
              Facebook
            </a>
            <a href="#/" className="text-white me-3">
              Twitter
            </a>
            <a href="#/" className="text-white me-3">
              Instagram
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2025 Të gjitha të drejtat e rezervuara.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
