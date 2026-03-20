import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src="/logo.webp" alt="EEC Brand Promoter" className="logo-image" />
          </Link>

          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/staff-services" className="nav-link" onClick={closeMenu}>
              Staff Services
            </Link>
            <Link to="/professional-services" className="nav-link" onClick={closeMenu}>
              Professional Services
            </Link>
            <Link to="/gallery" className="nav-link" onClick={closeMenu}>
              Gallery
            </Link>
            <Link to="/blog" className="nav-link" onClick={closeMenu}>
              Blog & News
            </Link>
            <Link to="/contact" className="nav-link nav-link-contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
