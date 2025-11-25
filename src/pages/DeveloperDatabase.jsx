import React, { useEffect, useState } from "react";
import ProductoService from "../services/ProductoService";

const DeveloperDatabase = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ProductoService.getAllProductos()
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <div className="dev-container">
      <h1>Base de Datos (Productos)</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((p) => (
              <tr key={p.idProducto}>
                <td>{p.idProducto}</td>
                <td>{p.modelo}</td>
                <td>{p.marca}</td>
                <td>${p.precio}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default DeveloperDatabase;