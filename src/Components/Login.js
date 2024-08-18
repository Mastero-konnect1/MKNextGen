import React, { useState } from 'react';
import './css/Login.css';
import loginImage from './Images/login.jpg'; // Import login.jpg
import Page2 from './Page2';
import ForgotPassword from './ForgotPassword';
import HomePage from './HomePage'; // Import HomePage

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showFP, setShowFP] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false); // Add state for HomePage
  const [emailWarning, setEmailWarning] = useState(''); // Add state for email warning message
  const [passwordWarning, setPasswordWarning] = useState(''); // Add state for password warning message

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    if (email === 'masterokonnect@gmail.com') {
      setEmailWarning(''); // Clear email warning if email is correct
      if (password === 'Master@11') {
        setShowHomePage(true); // Set state to show HomePage
        setPasswordWarning(''); // Clear password warning if password is correct
      } else {
        setPasswordWarning('Incorrect password'); // Set warning message for incorrect password
      }
    } else {
      setEmailWarning('Incorrect email'); // Set warning message for incorrect email
      setPasswordWarning(''); // Clear password warning if email is incorrect
    }
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
      {!showPage2 && !showFP && !showHomePage ? ( // Add showHomePage to condition
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
                {emailWarning && <p className="warning">{emailWarning}</p>} {/* Display email warning */}
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
                {passwordWarning && <p className="warning">{passwordWarning}</p>} {/* Display password warning */}
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
      ) : showFP ? (
        <ForgotPassword />
      ) : (
        <HomePage /> // Show HomePage component
      )}
    </div>
  );
};

export default Login;


