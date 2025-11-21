import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import '../../styles/HeroNavbar.css';

function ProductCard({ product }) {
  return (
    <Card style={{ width: '100%', maxWidth: '480px', margin: 'auto', transition: 'transform 0.2s, box-shadow 0.2s' }} className="m-3 product-card">
      <Image src={product.image} alt={product.name} className="card-img-top" />
      <Card.Body className="text-center">
        <h4 className="product-card-title mb-2">{product.name}</h4>
        <div className="product-card-specs-simple mb-2">{product.year} / {product.engine}</div>
        <div className="product-card-price mb-2">CLP${product.price.toLocaleString('es-CL')}</div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;