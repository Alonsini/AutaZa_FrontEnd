import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Text from "../atoms/Text";

function NewCarsSection({ products = [] }) {
  return (
    <section className="section">
      <div className="lx-container">
        <Text variant="h2" className="section-title">
          Nuevos
        </Text>
        <Text variant="p" className="section-subtitle">
          Modelos recién llegados con tecnología de última generación.
        </Text>

        <Row className="g-4">
          {products.map((p) => (
            <Col key={p.id || p._id} xs={12} md={6} lg={4}>
              <ProductCard product={{ ...p, category: "Nuevo" }} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default NewCarsSection;
