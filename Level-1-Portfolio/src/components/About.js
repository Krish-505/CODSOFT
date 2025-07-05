import React from 'react';
import './About.css';
import profilePic from '../assets/profile-pic.jpg'; 
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about-container">
      {/* The Fade component wraps the entire content */}
      <Fade direction="up" triggerOnce>
        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Krish R" />
          </div>
          <div className="about-text">
            {/* THIS IS THE DETAILED CONTENT THAT WAS MISSING */}
            <h2>About Me</h2>
            <p>
              Hello! I'm a tech enthusiast driven to understand how great software is made. My passion spans the full spectrum of development, from building dynamic web applications with modern front-end technologies to engineering solutions with versatile languages like <strong>Java</strong> and <strong>Python</strong>.
            </p>
            <p>
              Beyond just building, I'm fascinated by what makes software robust and secure. This curiosity has sparked a growing interest in the principles of <strong>ethical hacking</strong> and cybersecurity, as I believe that understanding how to protect a system is just as important as knowing how to build it.
            </p>
            <h3>My Developing Skillset</h3>
            <ul className="skills-list">
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>HTML5 & CSS3</li>
              <li>Node.js</li>
              <li>Git & GitHub</li>
              <li>Cybersecurity Principles</li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;