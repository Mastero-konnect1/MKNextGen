import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file
import Page2 from './Page2';
import Login from './Login';

const Signup = () => {
  // Initialize state with default values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  
  // State for warning message
  const [warning, setWarning] = useState('');


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = 'Username is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is not valid';
    if (!formData.password) tempErrors.password = 'Password is required';
    if (formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    if (!formData.termsAccepted) tempErrors.termsAccepted = 'You must accept the terms and conditions';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully', formData);
    }
  };

  const handleBack = () => {
    setShowPage2(true);
  };

  const handleLoginRedirect = () => {
    setShowLogin('/login'); // Navigate to the Login page
  };

  const handlePasswordFocus = () => {
    if (formData.password.length < 6) {
      setWarning('Password must be at least 6 characters long.');
    } else {
      setWarning('');
    }
  };

  const handleConfirmPasswordFocus = () => {
    if (!formData.password) {
      setWarning('Please enter a password before confirming.');
    } else if (formData.password.length < 6) {
      setWarning('Password must be at least 6 characters long.');
    } else {
      setWarning('');
    }
  };

  return (
    <div>
      <button className="back-button" onClick={handleBack}>
        &#8592; Back
      </button>

      {!showPage2 && !showLogin ? (
        <div className="sign-up-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Username input field */}
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            {/* Email input field */}
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            {/* Password input field */}
            <div className="password-input-container">
              <label>Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={handlePasswordFocus}
              />
              <span
                className={`eye-icon ${showPassword ? 'show' : 'hide'}`}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
              {errors.password && <p className="error">{errors.password}</p>}
              {warning && <p className="warning">{warning}</p>}
            </div>
            {/* Confirm Password input field */}
            <div className="password-input-container">
              <label>Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={handleConfirmPasswordFocus}
              />
              <span
                className={`eye-icon ${showConfirmPassword ? 'show' : 'hide'}`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </span>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            {/* Terms and Conditions checkbox */}
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label>I accept the terms and conditions</label>
              {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}
            </div>
            {/* Submit button */}
            <button type="submit">Sign Up</button>
            {/* Login statement */}
            <div className="login-redirect">
              <p>Already have an account? <a href="/#" onClick={handleLoginRedirect}>Login here</a></p>
            </div>
          </form>
        </div>
      ) : showPage2 ? (
        <Page2 />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Signup;
