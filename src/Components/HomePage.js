import React from 'react';
import './HomePage.css';
import exampleImage from './Images/home.jpg'; // Ensure you have an image in your project
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar showLogo={false} />
      <div className="container">
        <div className="homepage">
          <div className="intro">
            <h2>Welcome to Our Platform!</h2>
            <p>
              We’re committed to offering top-notch support to help you reach your goals.
              Connect with experts, explore innovative solutions. Join us today and start achieving your full potential!
            </p>
          </div>
          <div className="image">
            <img src={exampleImage} alt="Platform Overview" className="home-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
