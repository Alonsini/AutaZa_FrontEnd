import React, { useState } from "react";
import "../styles/singup.css";
import { Link } from "react-router-dom";
import { addUser, findUserByEmail } from "../data/users";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    const exists = findUserByEmail(email);

    if (exists) {
      setError("Este correo ya está registrado. Inicia sesión.");
      return;
    }

    addUser({ name, email, password });
    setError("");
    alert("✔️ Registro exitoso");
  };

  return (
    <div className="addUser">
      <h3>Sign Up</h3>

      <form className="addUserForm">
        <div className="inputGroup">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="button" className="btn btn-success" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>

      <div className="login">
        <p>Ya tienes una cuenta?</p>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
