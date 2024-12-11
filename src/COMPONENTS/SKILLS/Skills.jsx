import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faDatabase, faCogs } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const skills = [
    { name: "Git & GitHub", icon: faGithub },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJsSquare },
    { name: "React", icon: faReact },
    { name: "Express.js", icon: faServer },
    { name: "SQL", icon: faDatabase },
    { name: "PostgreSQL", icon: faDatabase },
    { name: "Prisma ORM", icon: faCogs },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Here are some of the tools and technologies I use to build amazing applications.
      </p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
