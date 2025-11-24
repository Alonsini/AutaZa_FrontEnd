import React from "react";
import "../styles/developer.css";

const Developer = () => {
  return (
    <div className="dev-container">
      <h1>Panel de Desarrollador</h1>
      <p>Bienvenido al panel exclusivo de desarrolladores de Autaza.</p>

      <div className="dev-grid">
        <div className="dev-card">
          <h2>Usuarios Registrados</h2>
        </div>

        <div className="dev-card">
          <h2>Logs del Sistema</h2>
        </div>

        <div className="dev-card">
          <h2>Base de Datos</h2>
        </div>
      </div>
    </div>
  );
};

export default Developer;