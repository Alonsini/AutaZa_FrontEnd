// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/organisms/HeroSection";
import NewCarsSection from "../components/organisms/NewCarsSection";
import FeaturesSection from "../components/organisms/FeaturesSection";
import ContactSection from "../components/organisms/ContactSection";
import Footer from "../components/organisms/Footer";
import { useProducts } from "../context/ProductsContext";

function Home() {
  const { products } = useProducts();

  const newCars = products.filter((p) => p.type === "new");
  const usedCars = products.filter((p) => p.type === "used");

  return (
    <>
      <HeroSection />
      <NewCarsSection products={newCars} />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
