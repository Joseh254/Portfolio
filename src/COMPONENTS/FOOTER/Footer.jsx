import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h4>Contact Information</h4>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span className="hover-text">
              <span className="default-text">Email</span>
              <span className="reveal-text">josephkarimambugua@gmail.com</span>
            </span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span className="hover-text">
              <span className="default-text">Phone</span>
              <span className="reveal-text">+254 768 163 608</span>
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <ul>
            <li>
              <a
                href="https://github.com/Joseh254"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joseph-mbugua-51a1b5299/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Joseph Mbugua. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
