import React from "react";
import jaguar from "../../assets/img/jaguar.webp";
import "../../styles/HeroNavbar.css";

function Hero() {
  return (
    <div className="hero-container">
      <img
        src={jaguar}
        alt="Hero"
        className="hero-image"
      />
      <div className="hero-content">
      </div>
    </div>
  );
}

export default Hero;