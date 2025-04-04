import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import profession from "../../assets/goals.png";
import mission from "../../assets/mission.png";
import vission from "../../assets/vision.png";
import mike from '../../assets/mikeRoss.jpg';
import victory from '../../assets/victory.jpg';
import john from '../../assets/johndoe.jpg';
function About() {
  window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
  const educationArray = [
    {
      schoologo: about,
      School: "murang'a university",
      Period: "Sep 2020 - April 2024",
      Course: "Information Technology",
    },
    {
      schoologo: about,
      School: "Teach2Give",
      Period: "May 2024 - August 2024",
      Course: "Software development",
    },
    {
      schoologo: about,
      School: "Ngumo Boy's ",
      Period: "Jan 2016 - Dec 2019",
      Course: "KCPE ",
    },
  ];

  return (
    <div className="About-page">
        <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div> 
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
          <button id="more">
            <a href="#proffesion">More</a>
          </button>
        </div>
      </div>
      <div className="proffesion" id="proffesion">
        <img src={profession} alt="profession" />
        <div className="profession-description" id="profession-description">
          <h1 style={{ textTransform: "capitalize" }}>profile statement </h1>
          <p className="description">
            I pursued my academic journey with a Bachelor of Science in
            Information Technology from Murang'a University of Technology, where
            I gained foundational knowledge in computer science and IT systems.
            This education laid the groundwork for my technical skills and
            piqued my interest in software development, leading me to explore
            different programming languages and frameworks. <br /> <br />
            In 2020, I completed a Distinction in Computer Packages at Catholic
            Computer and soon after, I joined Murang'a University for my
            undergraduate studies. It was during this time that I discovered my
            passion for coding, which led me to explore Python programming and
            web development.
            <br /> <br /> Formal Training at Teach2give In 2024, I enrolled in a
            Software Development program at Teach2give, where I acquired
            hands-on skills in HTML, CSS, JavaScript, React, and Markdown for
            frontend development, alongside Express.js, Prisma ORM, PostgreSQL,
            and Cloudinary for backend development. <br /> <br />
            This training not only sharpened my technical skills but also
            deepened my understanding of creating dynamic, data-driven
            applications with the PERN stack. During this time, I worked on
            several key projects and collaborated with other developers on
            GitHub. Some of my proudest achievements include developing
            JosTech-Computers-website, Products-Rest-API, and the Advice App.
            These projects allowed me to implement everything I learned and
            collaborate with peers, improving my problem-solving and team
            communication skills.{" "}
          </p>
        </div>
      </div>
      <section className="education-background-wrapper">
        <h1>Education Background</h1>
        <div className="educations-wrapper">
          {educationArray &&
            educationArray.map((educationItem, index) => (
              <div key={index} className="education-container">
                <div className="logoo">
                  <img
                    src={educationItem.schoologo}
                    alt={educationItem.schoologo}
                  />
                </div>
                <h1>{educationItem.School}</h1>
                <p>
                  <stong className="strong">Course: </stong>
                  {educationItem.Course}
                </p>
                <p>
                  <stong className="strong">Period: </stong>
                  {educationItem.Period}
                </p>
              </div>
            ))}
        </div>
      </section>


      <div className="colllaborators-wrapper">
        <h1>Collaborators</h1>

        <div className="collaborators-container">
          <div className="collaborators">
           <img src={victory} alt="Victory njeri" />
           <p className="collaborator-name">victory njeri</p>
           <p className="collaborator-role">Full Stack developer</p>
           <p className="collaborator-description">Some text that describes me lorem ipsum ipsum lorem.</p>
           <a href="http://" className="collaborator-email"><i>njerivictory52@gmail.com</i></a>
           <div className="collaborator-contact-button">
           <button >Contact</button>
           </div>
          </div>

          <div className="collaborators">
          <img src={mike} alt="Mike Ross" />
          
           <p className="collaborator-name">Mike Ross</p>
           <p className="collaborator-role"> Backend developer</p>
           <p className="collaborator-description">Some text that describes me lorem ipsum ipsum lorem.</p>
           <a href="http://" className="collaborator-email"><i>mikeross@gmail.com</i></a>
           <div className="collaborator-contact-button">
           <button>Contact</button>
           </div>
          </div>

          <div className="collaborators">
          <img src={john} alt="phyllis wambui" />
          <p className="collaborator-name">phyllis wambui</p>
           <p className="collaborator-role">Designer</p>
           <p className="collaborator-description">Some text that describes me lorem ipsum ipsum lorem.</p>
           <a href="http://" className="collaborator-email"><i>phylliswambui32@gmail.com</i></a>
           <div className="collaborator-contact-button">
           <button>Contact</button>
           </div>
           
          </div>

        </div>
      </div>

      <div className="goals-section">
        <div className="mission-wrapper">
          <h1>Mission</h1>
          <div className="mission">
            <img src={mission} alt="mission" />
            <div className="mission-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
              tempora. Iste ipsa ratione in qui nulla delectus aspernatur, quam
              molestias doloribus dolorem enim quaerat commodi nam deleniti eos.
              Culpa, sunt.
            </div>
          </div>
        </div>

        <div className="vission-wrapper">
          <h1>Vission</h1>
          <div className="vission">
            <img src={vission} alt="vission" />
            <div className="vission-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
              tempora. Iste ipsa ratione in qui nulla delectus aspernatur, quam
              molestias doloribus dolorem enim quaerat commodi nam deleniti eos.
              Culpa, sunt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// ?#?10*181*9
export default About;
