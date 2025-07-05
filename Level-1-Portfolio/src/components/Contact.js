import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="contact-container">
      <Fade direction="down" triggerOnce>
        <h2>Let's Connect!</h2>
        <p className="contact-message">
          I'm currently seeking new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll get back to you!
        </p>
      </Fade>
      <Fade direction="up" cascade damping={0.1} triggerOnce>
        {/* THIS IS THE DETAILED CONTENT THAT WAS MISSING */}
        <div className="contact-links">
          <a 
            href="mailto:krish.r2504@gmail.com" 
            className="contact-link"
          >
            <MdEmail className="contact-icon" />
            <span>krish.r2504@gmail.com</span>
          </a>
          <a 
            href="https://github.com/Krish-505" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;