import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/logo.webp" alt="Company Logo" className="footer-logo" />
            <h3>About Us</h3>
            <p>
              Professional staff providing and media services across India. 
              We connect licensed companies with skilled manpower and quality services.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/staff-services">Staff Services</Link></li>
              <li><Link to="/professional-services">Professional Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog & News</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>Skilled Manpower</li>
              <li>Office Staff</li>
              <li>Mobile App Development</li>
              <li>Video Production</li>
              <li>Modeling & Fashion</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>
                <FaMapMarkerAlt />
                <span>
                  Building No. 561/A, Shiv Mandir Main Road<br />
                  Near Metro Station Gate No. 1/5<br />
                  Chirag Delhi, South Delhi - 110017
                </span>
              </p>
              <p>
                <FaPhone />
                <span>+91 XXX XXX XXXX</span>
              </p>
              <p>
                <FaEnvelope />
                <span>promoter@businesseasy24.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EEC Brand Promoter. All rights reserved.</p>
          <p>Services available only for licensed companies and organizations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
