import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/Products.js';
import Image from '../components/atoms/Image.jsx';
import Button from '../components/atoms/Button.jsx';
import '../styles/CarDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  // Si tienes más imágenes, ponlas en product.images, si no, usa solo product.image ouyea
  const images = product?.images || [product?.image];

  if (!product) {
    return (
      <Container className="my-5">
        <h1>Producto no encontrado</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button variant="primary" onClick={() => navigate(`/products`)}>
        Volver
      </Button>
      <Row className="product-detail-row mt-4 align-items-start">
        <Col md={7} className="product-detail-gallery">
          <div className="product-detail-main-img mb-3">
            <Image src={images[0]} alt={product.name} className="w-100 rounded" style={{maxHeight: 420, objectFit: 'cover'}} />
          </div>
          <div className="product-detail-thumbs d-flex gap-3">
            {images.map((img, idx) => (
              <img key={idx} src={img} alt={product.name + idx} className="rounded" style={{height: 80, width: 120, objectFit: 'cover', cursor: 'pointer', border: '1px solid #eee'}} />
            ))}
          </div>
        </Col>
        <Col md={5} className="product-detail-info">
          <h2 className="mb-2" style={{fontWeight: 600}}>{product.name}</h2>
          <div className="product-detail-price mb-3">CLP${product.price.toLocaleString('es-CL')}</div>
          <hr />
          <div className="product-detail-specs mb-4">
            <div><b>Motor:</b> {product.engine}</div>
            <div><b>Año:</b> {product.year}</div>
            {product.power && <div><b>Potencia:</b> {product.power}</div>}
            {product.torque && <div><b>Torque:</b> {product.torque}</div>}
            {product.maxSpeed && <div><b>Velocidad máxima:</b> {product.maxSpeed}</div>}
            {product.acceleration && <div><b>Aceleración 0-100 km/h:</b> {product.acceleration}</div>}
            {product.transmission && <div><b>Transmisión:</b> {product.transmission}</div>}
            {product.km !== undefined && <div><b>Kilómetros:</b> {product.km} km</div>}
          </div>
          <Button variant="dark" style={{width: '100%', fontWeight: 600, fontSize: '1.1rem'}}>
            Contacta un asesor
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
//esto es un easter egg :b
export default ProductDetail;
