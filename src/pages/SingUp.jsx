import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "../styles/singup.css";
import { Link } from 'react-router-dom';

const SingUp = () => {
  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form className="addUserForm">
       <div className='inputGroup'>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          placebolder="Enter your name"
        />
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
        <button type="button" class="btn btn-success">Sign Up</button>
       </div>
      </form>
      <div className="login">
        <p>Ya tienes una cuenta ? </p>
        <Link to="/login" type="button" class="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default SingUp;