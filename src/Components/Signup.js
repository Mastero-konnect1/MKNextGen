import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file

const SignUp = () => {
  // Initialize state with default values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false, // State for terms and conditions checkbox
  });

  const [errors, setErrors] = useState({}); // State for form errors

  // Handle changes in input fields and checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validate form data
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form or handle successful validation
      console.log('Form submitted successfully', formData);
    }
  };

  return (
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
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {/* Confirm Password input field */}
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
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
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
