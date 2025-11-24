import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../styles/consignaciones.css";

const Consignaciones = () => {
  const [car, setCar] = useState({
    nombre: "",
    marca: "",
    modelo: "",
    año: "",
    precio: "",
    telefono: "",
    email: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Container className="cons-container">
      <h2 className="cons-title">Consigna tu vehículo</h2>

      <p className="cons-text">
        ¿Quieres vender tu auto sin complicarte?  
        Nosotros nos encargamos de todo: fotos, publicación, atención de
        clientes y gestión de venta.  
        Solo completa el formulario y nos pondremos en contacto contigo.
      </p>

      {!sent ? (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="cons-card">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre del propietario</Form.Label>
                        <Form.Control
                          type="text"
                          name="nombre"
                          placeholder="Ej: Juan Pérez"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control
                          type="text"
                          name="marca"
                          placeholder="Ej: Toyota"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control
                          type="text"
                          name="modelo"
                          placeholder="Ej: Yaris"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Año</Form.Label>
                        <Form.Control
                          type="number"
                          name="año"
                          placeholder="Ej: 2018"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Precio estimado</Form.Label>
                        <Form.Control
                          type="number"
                          name="precio"
                          placeholder="Ej: 8500000"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                          type="text"
                          name="telefono"
                          placeholder="Ej: +56 9 8765 4321"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email de contacto</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Ej: contacto@gmail.com"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button type="submit" className="cons-btn">
                      Enviar solicitud
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <div className="cons-success">
          <h3>✔ Solicitud enviada</h3>
          <p>
            Gracias <strong>{car.nombre}</strong>.  
            Nos pondremos en contacto contigo al número <strong>{car.telefono}</strong> o correo:  
            <strong>{car.email}</strong>.
          </p>
        </div>
      )}
    </Container>
  );
};

export default Consignaciones;
