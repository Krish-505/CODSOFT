import React from 'react';
import './Home.css';

// NEW: Import the components we need
import ParticleBackground from './ParticleBackground';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      {/* NEW: Add the particle background */}
      <ParticleBackground />

      {/* The z-index on home-content ensures it sits ON TOP of the particles */}
      <div className="home-content">
        {/* NEW: Replace the static h1 with the typing animation */}
        <TypeAnimation
          sequence={[
            'Hi, I\'m Krishna Vardhan R',
            2000,
            'I am a Developer.',
            2000,
            'I am a Tech Enthusiast.',
            2000,
          ]}
          wrapper="h1"
          speed={50}
          className="home-title"
          repeat={Infinity}
        />

        <p className="home-subtitle">
          A passionate builder and learner, exploring the frontiers of software
          and web development.
        </p>

        {/* NEW: Add an icon to the button */}
        <a href="#projects" className="cta-button">
          Explore My Projects
          <FaArrowRight className="cta-icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;