import React, { useState } from "react";
import "./Experience.css";
function Experience() {
  const experiences = [
    {
      title: "Attachment",
      organization: "Chriswats It Solutions",
      description:
        "I attended an internship program at chiswats where i helped the team in Computer repair,networking, maintenace and troubleshooting.I was able to Collaborate with the team for effective performance and completed our tasks within the time limit.",
    },
    {
      title: "Internship",
      organization: "Teach2give",
      description:
        "I was priviledged to attend a bootcamp at Teach2give where I was able to learn software development specificaly for web applications.I was equited with skills such as HTML,CSS,Javascript,MArkdown,React js,Express js,Postgresql,Git&Github,Docker and cloud computing ",
    },
    {
      title: "Work STudy",
      organization: "Murang'a University",
      description:
        "I was given a chance to work at murang'a university as i study where I helped IT department staffs in various tasks such as maintaining of computers,ensuring security in staff's computer systems and Installation of network devices",
    },
    {
      title: "Clerk",
      organization: "IEBC",
      description:
        "I was lucky to get a chance in IEBC where i carried out election process by verifying registered voters as their first step of voting",
    },
  ];
  return (
    <>
      <section className="experience-section">
        <h1 className="experience-heading">Experience</h1>
        <div key={experiences.title} className="experience-container">
          {experiences.map((experience, index) => (
            <div className="experience-card" key={index}>
              <h1>
                Title: <strong>{experience.title}</strong>
              </h1>
              <h3>Orgarnization:{experience.organization}</h3>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;
