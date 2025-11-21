import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';

function NotFound() {
  return (
    <Container className="my-5 text-center">
      <Text variant="h1">404 - Página no encontrada</Text>
      <Text variant="p">La página que buscas no existe.</Text>
      <Button variant="primary" onClick={() => window.location.href = '/'}>
        Volver al inicio
      </Button>
    </Container>
  );
}

export default NotFound;
