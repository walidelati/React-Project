import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // Stato per il menu mobile

  const toggleMenu = () => {
    setIsMobile(!isMobile); // Toggle dello stato del menu
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
