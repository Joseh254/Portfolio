import React from "react";
import "./Projects.css";
import project1 from '../../assets/project1.png'
function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully-featured e-commerce platform with user authentication, product management, and payment integration.",
      techStack: "React, Node.js, Express, MongoDB",
      image: project1,
      link: "https://your-ecommerce-link.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek and responsive portfolio showcasing my projects, skills, and achievements.",
      techStack: "React, CSS, JavaScript",
      image: project1, 
      link: "https://your-portfolio-link.com",
    },
    {
      title: "Task Manager App",
      description:
        "A task management app to track daily activities and increase productivity.",
      techStack: "React Native, Firebase",
      image: project1, 
      link: "https://your-task-manager-link.com",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
