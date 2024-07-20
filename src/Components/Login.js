// src/Components/Login.js
import React, { useState } from 'react';
import './Login.css';
import Page2 from './Page2';
import ForgotPassword from './ForgotPassword';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showFP, setShowFP] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Handle the forgot password logic here
    setShowFP(true);
  };

  const handleBack = () => {
    setShowPage2(true); //Page2.js renders its content when showPage2 state is set to true
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <button className="back-button" onClick={handleBack}>
        &#8592; Back
      </button>

      {!showPage2 && !showFP? (
        <div className="login-container" id='login'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <div className="password-input-container1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className={`eye-icon1 ${showPassword ? 'show' : 'hide'}`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </span>
              </div>
            </div>
            <button type="submit" className='btn6'>Login</button>
          </form>
          <div className="forgot-password">
            <a href="#home" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
          </div>
        </div>
      ) : showPage2 ? (
        <Page2 />
      ) : (
        <ForgotPassword />
      )}
    </div>
  );
};

export default Login;
