import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="app">
  <div className="login-container">
    <h1 className="logo">CORELIA</h1>
    <h2 className="subtitle">SUPPORT</h2>
    <form className="login-form">
      <input type="email" placeholder="Email address" className="input-field" />
      <div className="password-wrapper">
        <input 
          type={showPassword ? 'text' : 'password'} 
          placeholder="Password" 
          className="input-field" 
        />
        <span className="eye-icon" onClick={togglePassword}>
          {showPassword ? '🙈' : '👁️'}
        </span>
      </div>
      <button type="submit" className="login-button">Log in</button>
    </form>
    <p className="register-link">
      Don't have an account? <a href="#">Register</a>
    </p>
  </div>
</div>
  );
};

export default Login;