import React, { useState } from 'react';
import './Page2.css'; // Import CSS page
// import logo from './Logo2.png'; // Path of the logo or image
import connect from './connect.jpg'; // Import connect.png
import SignUp from './Signup';
import Login from './Login'; // Import the Login component
import Page1 from './Page1';

function Page2() {
  const [showSignup, setShowSignup] = useState(false); // Dynamically rendering Signup.js based on a state or a condition
  const [showLogin, setShowLogin] = useState(false); // State for rendering Login.js
  const [showPage1, setShowPage1] = useState(false);

  const navigateToSignup = () => {
    setShowSignup(true); // Signup.js renders its content when showSignup state is set to true
    setShowLogin(false); // Ensure Login.js is not shown
  };

  const navigateToLogin = () => {
    setShowLogin(true); // Login.js renders its content when showLogin state is set to true
    setShowSignup(false); // Ensure Signup.js is not shown
  };

  const handleBack = () => {
    setShowPage1(true);
  };

  return (
    <div>
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          &#8592; Back
        </button>
        {/* <img src={logo} alt="Logo" className="logo" /> */}
      </div>
      {!showSignup && !showLogin && !showPage1 ? (
        <div className="container-p2">
          <div className="image-container-p2">
            <img src={connect} alt="Connect" className="connect" />
          </div>
          <div className="content">
            <h2>Connect with Mastero Konnect...</h2>
            <div className="button-container">
              <button className="btn1" onClick={navigateToLogin}>Login</button>
              <br />
              <button className="btn2" onClick={navigateToSignup}>Sign Up</button>
            </div>
          </div>
        </div>
      ) : showSignup ? (
        <SignUp />
      ) : showLogin ? (
        <Login />
      ) : (
        <Page1 />
      )}
    </div>
  );
}

export default Page2;
