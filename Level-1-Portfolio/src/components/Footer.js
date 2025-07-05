import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:your.email@example.com">
          <MdEmail />
        </a>
      </div>
      <p className="footer-text">
        {/* THIS IS THE DETAILED CONTENT THAT WAS MISSING */}
        © {new Date().getFullYear()} Krish R. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;