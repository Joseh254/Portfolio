import React from "react";
import "./About.css";
import about from "../../assets/about.png";
function About() {
  const educationArray =[
    {
      schoologo:about,
      School:"murang'a university",
      Period:"Sep 2020 - April 2024",
      Course:"Information Technology"
    },
    {
      schoologo:about,
      School:"Teach2Give",
      Period:"May 2024 - August 2024",
      Course:"Software development"
    },
    {
      schoologo:about,
      School:"Ngumo Boy's ",
      Period:"Jan 2016 - Dec 2019",
      Course:"KCPE "
    }
  ]
  return (
    <div className="About-page">
      <div className="abouthero">
        <img src={about} alt="" />
        <div className="about-content">
          <h1>Hi, I'm Joseph Mbugua</h1>
          <p>
            I am a passionate ambitious and self-driven full stack web developer
            with a strong background in
          </p>
          <p>
            web-development, restful API,Machine Learning ,python programming,
          </p>
          <p>Database Management,Containerization,UI/Ux and version Controll</p>
          <button>more</button>
        </div>
      </div>
      
<section  className="education-background-wrapper">
<h1>Education Background</h1>
<div className="educations-wrapper">
        
        {educationArray && educationArray.map((educationItem,index)=><div key={index} className="education-container" >
          <div className="logoo"><img src={educationItem.schoologo} alt={educationItem.schoologo} /></div>
          <h1>{educationItem.School}</h1>
          <p><stong className="strong">Course: </stong>{educationItem.Course}</p>
          <p><stong className="strong">Period: </stong>{educationItem.Period}</p>
          
        </div>)}
      </div>
</section>


    </div>
  );
}

export default About;
