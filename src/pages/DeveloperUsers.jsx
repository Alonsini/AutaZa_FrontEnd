import React, { useEffect, useState } from "react";
import UsuarioService from "../services/UsuarioService";

const DeveloperUsers = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    UsuarioService.getAllUsuarios()
      .then((res) => setUsuarios(res.data))
      .catch((err) => console.error("Error cargando usuarios:", err));
  }, []);

  return (
    <div className="dev-container">
      <h1>Usuarios Registrados</h1>

      <div className="table-container">
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
            {usuarios.map((u) => (
              <tr key={u.idUsuario}>
                <td>{u.idUsuario}</td>
                <td>{u.nombre}</td>
                <td>{u.email}</td>
                <td>{u.rol || "Usuario"}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default DeveloperUsers;