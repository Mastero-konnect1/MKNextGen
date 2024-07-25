import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file
import signupImage from './signup.jpg'; // Import signup.jpg
import Page2 from './Page2';
import Login from './Login';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [warning, setWarning] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validatePassword = () => {
    const specialCharRegex = /[!@#$^&]/;
    if (!formData.password) {
      setWarning('Password is required');
      return false;
    } else if (formData.password.length < 6 || !specialCharRegex.test(formData.password)) {
      setWarning('Password must be at least 6 characters and should contain one of these: !, @, #, $, ^, &');
      return false;
    }
    setWarning('');
    return true;
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = 'Username is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is not valid';
    if (!validatePassword()) return false;
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }
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
    setShowLogin(true);
  };

  return (
    <div>
      <button className="back-button" onClick={handleBack}>
        &#8592; Back
      </button>

      {!showPage2 && !showLogin ? (
        <div className="container-s">
          <div className="image-container-s">
            <img src={signupImage} alt="Signup" className="signup-image" />
          </div>
          <div className="sign-up-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
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
              <div className="password-input-container">
                <label>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={validatePassword}
                />
                <span
                  className={`eye-icon-s ${showPassword ? 'show' : 'hide'}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </span>
                {warning && <p className="warning">{warning}</p>}
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="password-input-container">
                <label>Confirm Password</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  className={`eye-icon-s ${showConfirmPassword ? 'show' : 'hide'}`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </span>
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>
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
              <button type="submit">Sign Up</button>
              <div className="login-redirect">
                <p>Already have an account? <a href="#home" onClick={handleLoginRedirect}>Login here</a></p>
              </div>
            </form>
          </div>
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
