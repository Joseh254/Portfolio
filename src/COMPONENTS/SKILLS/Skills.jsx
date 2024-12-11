import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Git & GitHub", icon: "fab fa-github" }, // Version Control
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "React", icon: "fab fa-react" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "PostgreSQL", icon: "fas fa-database" }, // Reuse the database icon
    { name: "Prisma ORM", icon: "fas fa-cogs" },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={`skill-icon ${skill.icon}`} aria-hidden="true"></i>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
