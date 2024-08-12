import React, { useState } from 'react';
import './Page1.css'; 
import logo12 from './Images/Logo2.png';
import pic1 from './Images/Pic1.png';
import Page2 from './Page2';

function Page1() {
  const [showPage2, setShowPage2] = useState(false);
  
  const navigateToPage2 = () => {
    setShowPage2(true);
  };

  return (
    <div>
      <img src={logo12} alt="Logo" className="logo-p1" />
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
