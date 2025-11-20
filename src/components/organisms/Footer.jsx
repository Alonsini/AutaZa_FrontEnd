// src/components/organisms/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="lx-container footer-grid">
        <div>
          <div className="footer-logo">LX</div>
          <p className="footer-text">
            Redefiniendo el futuro de la movilidad con vehículos premium de
            última generación.
          </p>
        </div>
        <div>
          <h4 className="footer-heading">Modelos</h4>
          <p className="footer-link">Sedanes</p>
          <p className="footer-link">SUVs</p>
          <p className="footer-link">Deportivos</p>
          <p className="footer-link">Eléctricos</p>
        </div>
        <div>
          <h4 className="footer-heading">Empresa</h4>
          <p className="footer-link">Sobre Nosotros</p>
          <p className="footer-link">Sustentabilidad</p>
          <p className="footer-link">Carreras</p>
          <p className="footer-link">Prensa</p>
        </div>
        <div>
          <h4 className="footer-heading">Contacto</h4>
          <p className="footer-link">+56 9 1234 5678</p>
          <p className="footer-link">info@luxuryautos.cl</p>
          <p className="footer-link">Av. Autos 123, Santiago</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
