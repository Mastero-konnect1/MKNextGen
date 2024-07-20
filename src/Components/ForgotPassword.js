// src/Components/ForgotPassword.js
import React, { useState } from 'react';
import './ForgotPassword.css';
import Login from './Login';

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const navigateLogin = () => {
    setShowLogin(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Handle the change password logic here
      console.log('New Password:', newPassword);
      console.log('Passwords match');
    } else {
      setPasswordMatch(false);
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <button className="back-button" onClick={navigateLogin}>
        &#8592; Back
      </button>
      {!showLogin ? (
        <div className="forgot-password-container">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>New Password:</label>
              <div className="password-input-container">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <span
                  className={`eye-icon ${showNewPassword ? 'show' : 'hide'}`}
                  onClick={toggleNewPasswordVisibility}
                >
                  {showNewPassword ? '👁️' : '👁️‍🗨️'}
                </span>
              </div>
            </div>
            <div className="form-group1">
              <label>Confirm Password:</label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span
                  className={`eye-icon ${showConfirmPassword ? 'show' : 'hide'}`}
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </span>
              </div>
              {!passwordMatch && <p className="error-text">Passwords do not match</p>}
            </div>
            <button type="submit" className='btn-change'>Change Password</button>
          </form>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default ForgotPassword;
