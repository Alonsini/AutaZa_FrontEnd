import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import Image from '../atoms/Image';

function ModalDetail({ show, onHide, product }) {
  if (!product) return null;
  const images = product.images || [product.image];
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <Image src={images[0]} alt={product.name} className="w-100 rounded" style={{maxHeight: 320, objectFit: 'cover'}} />
            <div className="d-flex gap-2 mt-2">
              {images.map((img, idx) => (
                <img key={idx} src={img} alt={product.name + idx} style={{height: 60, width: 90, objectFit: 'cover', borderRadius: 6, border: '1px solid #eee'}} />
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-2"><b>Precio:</b> CLP${product.price.toLocaleString('es-CL')}</div>
            <div className="mb-2"><b>Motor:</b> {product.engine}</div>
            <div className="mb-2"><b>Año:</b> {product.year}</div>
            {product.power && <div className="mb-2"><b>Potencia:</b> {product.power}</div>}
            {product.torque && <div className="mb-2"><b>Torque:</b> {product.torque}</div>}
            {product.maxSpeed && <div className="mb-2"><b>Velocidad máxima:</b> {product.maxSpeed}</div>}
            {product.acceleration && <div className="mb-2"><b>Aceleración 0-100 km/h:</b> {product.acceleration}</div>}
            {product.transmission && <div className="mb-2"><b>Transmisión:</b> {product.transmission}</div>}
            {product.km !== undefined && <div className="mb-2"><b>Kilómetros:</b> {product.km} km</div>}
            <div className="mt-4">
              <b>Descripción:</b>
              <div>{product.description}</div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ModalDetail;
