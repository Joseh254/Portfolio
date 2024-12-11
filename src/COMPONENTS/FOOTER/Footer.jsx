import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // React icons
import './Footer.css'; // CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p><FaEnvelope /> <a href="mailto:josephkarimambugua@gmail.com">josephkarimambugua@gmail.com</a></p>
          <p><FaPhoneAlt /> <a href="tel:+254768163608">+254 768 163 608</a></p>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <h4>Connect with Me</h4>
          <ul>
            <li><a href="https://github.com/Joseh254" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/joseph-mbugua-51a1b5299/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Joseph Mbugua. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
