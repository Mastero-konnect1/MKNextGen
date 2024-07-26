import React, { useState } from 'react';
import './ForgotPassword.css';
import forgotImage from './Images/forgot.jpg'; // Import forgot.jpg
import Login from './Login';

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const navigateLogin = () => {
    setShowLogin(true);
  };

  const validatePassword = (password) => {
    const specialCharRegex = /[!@#$%&]/;
    return specialCharRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      if (validatePassword(newPassword)) {
        console.log('New Password:', newPassword);
        console.log('Passwords match and are valid');
      } else {
        setPasswordValid(false);
      }
    } else {
      setPasswordMatch(false);
    }
  };

  const handleNewPasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    setPasswordValid(validatePassword(password));
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      {!showLogin ? (
        <div className="container-f">
          <div className="image-container-f">
            <img src={forgotImage} alt="Forgot Password" className="forgot-image-f" />
          </div>
          <div className="forgot-password-container-f">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>New Password:</label>
                <div className="password-input-container">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    required
                  />
                  <span
                    className={`eye-icon-f ${showNewPassword ? 'show' : 'hide'}`}
                    onClick={toggleNewPasswordVisibility}
                  >
                    {showNewPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </div>
                {!passwordValid && <p className="error-text">Password must include at least one of the following characters: !, @, #, $, %, &</p>}
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span
                    className={`eye-icon-f ${showConfirmPassword ? 'show' : 'hide'}`}
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </div>
                {!passwordMatch && <p className="error-text">Passwords do not match</p>}
              </div>
              <button type="submit" className="btn-change-f">Change Password</button>
            </form>
            <div className='back-btn-f'> 
              <p><a href="#home" onClick={navigateLogin}>&#8592;</a></p>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default ForgotPassword;
