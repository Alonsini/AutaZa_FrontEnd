import React, { useState } from "react";
import UsuarioService from "../services/UsuarioService";
import ProductoService from "../services/ProductoService";
import VentaService from "../services/VentaService";
import ImagenService from "../services/ImagenService";
import "../styles/Developer.css";

const Developer = () => {
  const [section, setSection] = useState(null);
  const [data, setData] = useState([]);

  const loadUsuarios = async () => {
    try {
      const res = await UsuarioService.getAllUsuarios();
      setData(res.data);
      setSection("usuarios");
    } catch (err) {
      console.error("Error cargando usuarios:", err);
    }
  };

  const loadDatabase = async () => {
    try {
      const productos = await ProductoService.getAllProductos();
      const ventas = await VentaService.getAllVenta();
      const imagenes = await ImagenService.getAllImagens();

      setData({
        productos: productos.data,
        ventas: ventas.data,
        imagenes: imagenes.data,
      });

      setSection("database");
    } catch (err) {
      console.error("Error cargando datos:", err);
    }
  };

  return (
    <div className="dev-container">
      <h1>Panel de Desarrollador</h1>
      <p>Bienvenido al panel exclusivo de desarrolladores de Autaza.</p>

      {/* Tarjetas */}
      <div className="dev-grid">
        <div className="dev-card" onClick={loadUsuarios}>
          <h2>Usuarios Registrados</h2>
        </div>

        <div className="dev-card" onClick={loadDatabase}>
          <h2>Base de Datos</h2>
        </div>
      </div>

      {/* Contenido dinámico */}
      <div className="dev-content">
        
        {/* USUARIOS REGISTRADOS */}
        {section === "usuarios" && (
          <>
            <h2>Usuarios Registrados</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                </tr>
              </thead>

              <tbody>
                {data.map((u) => (
                  <tr key={u.idUsuario}>
                    <td>{u.idUsuario}</td>
                    <td>{u.nombre}</td>
                    <td>{u.email}</td>
                    <td>{u.rol || "Usuario"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* BASE DE DATOS */}
        {section === "database" && (
          <>
            <h2>Base de Datos</h2>

            {/* PRODUCTOS */}
            <h3>Productos</h3>
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
                {data.productos?.map((p) => (
                  <tr key={p.idProducto}>
                    <td>{p.idProducto}</td>
                    <td>{p.modelo}</td>
                    <td>{p.marca}</td>
                    <td>${p.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* VENTAS */}
            <h3>Ventas</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fecha</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.ventas?.map((v) => (
                  <tr key={v.idVenta}>
                    <td>{v.idVenta}</td>
                    <td>{v.fecha}</td>
                    <td>${v.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* IMÁGENES */}
            <h3>Imágenes</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre Archivo</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {data.imagenes?.map((i) => (
                  <tr key={i.idImagen}>
                    <td>{i.idImagen}</td>
                    <td>{i.nombre}</td>
                    <td>{i.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

      </div>
    </div>
  );
};

export default Developer;