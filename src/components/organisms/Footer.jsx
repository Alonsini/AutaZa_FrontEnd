import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <Container>
      <Row>
        <Col md={6}>
          <h5>Tiendaza corporation</h5>
          <p>© 2025 Todos los derechos reservados.</p>
        </Col>
        <Col md={6} className="text-md-end">
          <ul className="list-unstyled">
            <li><a href="/about" className="text-light">Acerca de</a></li>
            <li><a href="/contact" className="text-light">Contacto</a></li>
            <li><a href="/privacy" className="text-light">Política de privacidad</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;