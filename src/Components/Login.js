import React, { useState } from 'react';
import './Login.css';
import loginImage from './Images/login.jpg'; // Import login.jpg
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
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    setShowFP(true);
  };

  const handleBack = () => {
    setShowPage2(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {!showPage2 && !showFP ? (
        <div className="container-l">
          <div className="image-container-l">
            <img src={loginImage} alt="Login" className="login-image" />
          </div>
          <div className="login-container" id="login">
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
                    className={`eye-icon-l ${showPassword ? 'show' : 'hide'}`}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </div>
              </div>
              <button type="submit" className="btn6">Login</button>
            </form>
            <div className="forgot-password">
              <a href="#home" onClick={handleForgotPassword}>
                Forgot Password?
              </a>
              <p><a href="#home" onClick={handleBack}>&#8592;</a></p>
            </div>
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
