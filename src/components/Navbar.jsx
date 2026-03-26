import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const assetBase = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '';
  const assetUrl = (path) => `${assetBase}${path}`;

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
            <img src="https://media.discordapp.net/attachments/1274236411930869760/1485516216994103417/Brand_Promoter.jpg?ex=69c57209&is=69c42089&hm=5d0a2f7c3a5946112d1e82f41a174682645a541523e243b106eb1f77166724c9&=&format=webp&width=740&height=740" alt="EEC Brand Promoter" className="logo-image" loading="eager" />
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
