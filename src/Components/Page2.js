import React, { useState } from 'react';
import './Page2.css'; //import css page
import logo from './Logo2.png';// path of the logo or image
import SignUp from './Signup';

function Page2() {

  const [showSignup, setShowSignup] = useState(false); //dynamically rendering Signup.js based on a state or a condition
  
    const navigateToSignup = () => {
      setShowSignup(true); //Signup.js renders its content when showSignup state is set to true
    };

  return (

    <div>
       {!showSignup ? (
    
    
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h4>Connect with Mastero Konnect...</h4>
      <div className="button-container">
        <button className="btn1">Login</button>
        <br></br>
        <button className="btn" onClick={navigateToSignup}>Sign Up</button>
      </div>
    </div>

) : (
  <SignUp />
)}
</div>

  );
}

export default Page2;
