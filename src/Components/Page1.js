import React, { useState } from 'react'; // Uses useState hook to manage showPage2 state
import './Page1.css'; // Import CSS page
import logo from './Logo2.png'; // Path of the logo or image
import pic1 from './Pic1.png'; // Import Pic1.png
import Page2 from './Page2';

function Page1() {
  const [showPage2, setShowPage2] = useState(false); // Dynamically rendering Page2.js based on a state or a condition
  
  const navigateToPage2 = () => {
    setShowPage2(true); // Page2.js renders its content when showPage2 state is set to true
  };

  return (
    <div>
      <img src={logo} alt="Logo" className="logo-p1" />
      {!showPage2 ? (
        <div className="container-p1">
          <div className="image-container-p1">
            <img src={pic1} alt="Pic1" className="pic1" />
          </div>
          <div className="content">
            <h1>Who are you..?</h1>
            <div className="button-container">
              <button className="btn" onClick={navigateToPage2}>I'm a mentor</button>
              <br></br>
              <button className="btn" onClick={navigateToPage2}>I'm a mentee</button>
            </div>
          </div>
        </div>
      ) : (
        <Page2 />
      )}
    </div>
  );
}

export default Page1;
