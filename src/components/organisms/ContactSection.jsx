import React from "react";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

function ContactSection() {
  return (
    <section className="section">
      <div className="lx-container contact-card">
        <Text variant="h2" className="section-title">
          Contáctanos
        </Text>
        <Text variant="p" className="section-subtitle">
          Agenda una prueba de manejo y descubre nuestros vehículos exclusivos.
        </Text>
        <Button className="hero-button">Agendar prueba</Button>
      </div>
    </section>
  );
}

export default ContactSection;