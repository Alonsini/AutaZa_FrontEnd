import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { findUserByEmail } from "../data/users";
import { useAuth } from "../context/AuthContext";  

const Login = () => {
  const { login } = useAuth();     
  const navigate = useNavigate();  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = findUserByEmail(email);

    if (!user) {
      setError("Este correo no está registrado");
      return;
    }

    if (user.password !== password) {
      setError("Contraseña incorrecta");
      return;
    }

    setError("");

    login(user);               
    navigate("/");             
  };

  return (
    <div className="addUser">
      <h3>Sign In</h3>

      <form className="addUserForm">
        <div className="inputGroup">
          <label>Email:</label>
          <input
            type="email"
            autoComplete="off"
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

          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>

      <div className="login">
        <p>No tienes una cuenta?</p>
        <Link to="/signup" className="btn btn-success">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;