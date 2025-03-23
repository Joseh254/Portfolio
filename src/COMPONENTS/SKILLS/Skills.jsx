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
import {
  faServer,
  faDatabase,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const skills = [
    { name: "Git & GitHub", icon: faGithub, description: "Collaboration" },
    { name: "HTML", icon: faHtml5, description: "Web elements" },
    { name: "CSS", icon: faCss3Alt, description: "For styling" },
    { name: "JavaScript", icon: faJsSquare, description: "dynamic" },
    { name: "React", icon: faReact, description: "UI development" },
    { name: "Express.js", icon: faServer, description: "For Backend" },
    { name: "SQL", icon: faDatabase, description: "For Database" },
    { name: "PostgreSQL", icon: faDatabase, description: "For database" },
    { name: "Prisma ORM", icon: faCogs, description: "For sql" },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Here are some of the tools and technologies I use to build amazing
        applications.
      </p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <p className="skill-description">{skill.description}</p>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
