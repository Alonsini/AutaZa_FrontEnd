// src/components/organisms/HeroSection.jsx
import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import heroImage from "../../assets/img/hero-car.jpg"; // pon tu imagen aquí

function HeroSection() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay" />
      <div className="lx-container hero-content">
        <Text variant="h1" className="hero-title">
          Vehículos de Lujo
        </Text>
        <Text variant="p" className="hero-subtitle">
          Descubre nuestra colección exclusiva de automóviles premium.
        </Text>
        <Button className="hero-button">Ver catálogo</Button>
      </div>
    </section>
  );
}

export default HeroSection;
