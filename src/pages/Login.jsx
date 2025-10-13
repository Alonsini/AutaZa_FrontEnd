import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "../styles/login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="addUser">
      <h3>Sign In</h3>
      <form className="addUserForm">
       <div className='inputGroup'>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          placebolder="Enter your email"
        />
        <label htmlFor="name">Contraseña:</label>
        <input
          type="Password"
          id="Password"
          autoComplete="off"
          placebolder="Enter your Password"
        />
        <button type="button" class="btn btn-primary">Login</button>
       </div>
      </form>
      <div className="login">
        <p>No tienes una cuenta ? </p>
        <Link to="/SingUp" type="button" class="btn btn-success">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;