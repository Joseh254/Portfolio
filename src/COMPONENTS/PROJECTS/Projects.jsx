import React from "react";
import "./Projects.css";
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.png';
import project7 from '../../assets/project7.png';

function Projects() {
  const projects = [
    {
      title: "Jos-tech computers ",
      description:
        "A fully-featured e-commerce platform with user authentication, product management, and payment integration.",
      techStack: "React, Node.js, Express, Postgresql",
      image: project2,
      link: "https://jos-tech-computers-website-uxdd.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek and responsive portfolio showcasing my projects, skills, and achievements.",
      techStack: "React, CSS, JavaScript",
      image: project1, 
      link: "https://joseph-mbugua-portfolio.vercel.app/",
    },
    {
      title: "dev sof landing page",
      description:
        "A landing page for devsof that showcase their services and products to customers.",
      techStack: "React, Css & Javascript",
      image: project7, 
      link: "https://mog-rex-task2-ovii.vercel.app/",
    },
    {
        title: "random joke generator",
        description:
          "A react application that integrates an API to provide a joke every time a button is clicked.",
        techStack: "React, Css & Javascript",
        image: project6, 
        link: "https://random-joke-generator-alpha.vercel.app/",
      },
      {
        title: "github finder app",
        description:
          "A React application that uses GitHub API to perform GitHub activities.",
        techStack: "React, Css, Javascript",
        image: project4, 
        link: "https://github-finder-app-one-omega.vercel.app/",
      },
      {
        title: "mut tech-club website",
        description:
          "Mut website that shows details about the tech club.",
        techStack: "React, Css & Javascript",
        image: project3, 
        link: "https://murang-a-university-tech-club-website.vercel.app/",
      },
      {
        title: "zaph-tours website",
        description:
          "A travel tour website that shows various places to visit.",
        techStack: "React, Css & Javascript",
        image: project5, 
        link: "https://zaph-tours-website.vercel.app/",
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
