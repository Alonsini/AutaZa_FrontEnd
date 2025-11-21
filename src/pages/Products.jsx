import React from 'react';
import { Container, Row } from 'react-bootstrap';
import products from '../data/Products';
import ProductCard from '../components/organisms/ProductCard';
import Button from '../components/atoms/Button';

function Products() {
  return (
    <Container className="my-5">
      <h1>Autos</h1>
      <Row>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
      <BackButton />
    </Container>
  );
}

export function BackButton() {
  return (
    <div className="backbutton-container">
      <Button back>Volver</Button>
    </div>
  );
}

export default Products;