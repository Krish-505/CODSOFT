import React from 'react';
import './Projects.css';

// --- ANIMATION & ICONS ---
import { Fade } from "react-awesome-reveal";

// --- PROJECT IMAGES ---
// Make sure these paths are correct for your project
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';


// --- THIS IS THE MISSING PIECE ---
// The projectsData array needs to be inside this file.
const projectsData = [
  {
    image: project1Image,
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio built with React to showcase my skills and projects. This very site!',
    tags: ['React', 'HTML5', 'CSS3', 'Responsive Design'],
    liveLink: '#',
    sourceLink: 'https://github.com/your-username/my-portfolio',
  },
  {
    image: project2Image,
    title: 'Python Data Analyzer',
    description: 'A command-line tool written in Python that processes CSV files to generate insightful reports.',
    tags: ['Python', 'Pandas', 'CLI'],
    sourceLink: 'https://github.com/your-username/python-analyzer',
  },
  {
    image: project3Image,
    title: 'Simple Java Application',
    description: 'A desktop application built with Java for managing tasks or notes, demonstrating OOP principles.',
    tags: ['Java', 'Swing', 'OOP'],
    sourceLink: 'https://github.com/your-username/java-app',
  },
];


const Projects = () => {
  return (
    <div className="projects-container">
      <Fade direction="down" triggerOnce>
        <h2>My Projects</h2>
      </Fade>
      <div className="projects-grid">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          {/* Now this line can find projectsData successfully */}
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-button">
                      Live Demo
                    </a>
                  )}
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="link-button secondary">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Projects;