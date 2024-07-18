import React, { useState } from 'react'; //Uses useState hook to manage showPage2 state
import './Page1.css'; //import css page
import logo from './Logo2.png';// path of the logo or image
import Page2 from './Page2';

function Page1() {
  // const Page1 = () => {
    const [showPage2, setShowPage2] = useState(false); //dynamically rendering Page2.js based on a state or a condition
  
    const navigateToPage2 = () => {
      setShowPage2(true); //Page2.js renders its content when showPage2 state is set to true
    };

  return (

    <div>
    {!showPage2 ? (

    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h4>Who are you..?</h4>
      <div className="button-container">
        <button className="btn" onClick={navigateToPage2}>I'm a mentor</button>
        <br></br>
        <button className="btn" onClick={navigateToPage2}>I'm a mentee</button>
      </div>
    </div>

  ) : (
    <Page2 />
  )}
  </div>
  );
}

export default Page1;
