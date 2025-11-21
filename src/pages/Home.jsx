// src/pages/Home.jsx
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/organisms/Hero";
import Cards from "../components/atoms/Cards";
import ModalDetail from "../components/organisms/ModalDetail";
import products from "../data/Products";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetail = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="main-content">
      <Hero />
      <Container className="my-5">
        <h1>Productos destacados</h1>
        <Cards products={products} onShowDetail={handleShowDetail} />
      </Container>
      <ModalDetail
        show={showModal}
        onHide={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default Home;
