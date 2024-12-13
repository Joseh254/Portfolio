import React from "react";
import "./Certification.css";
import { FaPython } from "react-icons/fa6";
import { LuRadioTower } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa6";
import { ImWindows } from "react-icons/im";
function Certification() {
  const certifications = [
    { 
      icon: <FaPython/>,
      title: "Python Essentials",
      organization: "Cisco Networking Academy",
      date: "March 2023",
      description: "Learned core Python concepts, including data structures and algorithms.",
    },
    {
      icon:<LuRadioTower/>,
      title: "Operating Systems Basics",
      organization: "Cisco Networking Academy",
      date: "January 2023",
      description: "Explored OS fundamentals, multitasking, and system management.",
    },
    {
      icon:<FaDatabase/>,
      title: "Introduction to IoT",
      organization: "Cisco Networking Academy",
      date: "November 2022",
      description: "Gained insights into IoT concepts and practical applications.",
    },
    {
      icon:<ImWindows/>,
      title: "Data Science Certification",
      organization: "Cisco Networking Academy",
      date: "April 2023",
      description: "Covered data visualization, basic machine learning, and data analytics.",
    },
  ];

  return (
    <div className="certification-section">
      <h1 className="certification-heading">Certifications</h1>
      <div className="certification-wrapper">
        {certifications.map((certification, index) => (
          <div key={index} className="certification-card">
            <h1>{certification.icon}</h1>
            <h2>{certification.title}</h2>
            <h4>{certification.organization}</h4>
            <p>{certification.description}</p>
            <span className="certification-date">{certification.date}</span>
          </div>
        ))}
     </div>
    </div>
  );
}

export default Certification;
