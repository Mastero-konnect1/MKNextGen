import React from 'react';
import './Page2.css'; //import css page
import logo from './Logo2.png';// path of the logo or image

function Page2() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h4>Connect with Mastero Konnect...</h4>
      <div className="button-container">
        <button className="btn1">Login</button>
        <br></br>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Page2;
