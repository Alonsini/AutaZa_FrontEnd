import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Products from "../../data/Products"; 
function Cards({ products, onShowDetail }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {Products.map((product) => (
          <div key={product.id} className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <Card style={{ width: '100%', maxWidth: '480px', margin: 'auto', transition: 'transform 0.2s, box-shadow 0.2s' }} className="product-card">
              <Card.Img variant="top" src={product.image} className="card-img-top" />
              <Card.Body className="text-center">
                <h4 className="product-card-title mb-2">{product.name}</h4>
                <div className="product-card-specs-simple mb-2">{product.year} / {product.engine}</div>
                <div className="product-card-price mb-2">CLP${product.price.toLocaleString('es-CL')}</div>
                <Button variant="primary" onClick={() => onShowDetail(product)}>
                  Ver detalles
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;