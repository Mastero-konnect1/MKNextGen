import React from 'react';
import './css/Navbar.css';
import logo from './Images/nav.png'; // Ensure you have a logo image in your project

const Navbar = () => {
  return (
    <nav className="navbar-n">
      <div className="navbar-left">
        <a href="/#" className="logo-n">
          <img src={logo} alt="Logo" className="logo-img-n" />
        </a>
      </div>
      <div className="navbar-right">
        <input type="text" className="search-bar" placeholder="Search..." />
        <a href="/chat" className="chat-link">
          Chat with Mentor
        </a>
        <a href="/connect" className="chat-link">
          Connect with Mentor
        </a>
        <a href="/profile" className="profile">
          {/* Profile section without image */}
          {/* <span className="profile-name">Username</span> */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
