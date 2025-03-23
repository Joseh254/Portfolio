import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./About.css";

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
    config: { tension: 220, friction: 120 },
  });

  const slideIn = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(-100%)" },
    delay: 300,
    config: { tension: 180, friction: 60 },
  });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <animated.div style={fadeIn} className="about-header">
          <h2>About Me</h2>
          <p>
            Hi, I'm Joseph Mbugua, a passionate full-stack developer focused on
            creating innovative and impactful technology solutions.
          </p>
        </animated.div>

        <div className="about-content">
          <animated.div style={slideIn} className="about-info">
            <h3>My Journey</h3>
            <p>
              I pursued my academic journey with a Bachelor of Science in
              Information Technology from Murang'a University of Technology,
              where I gained foundational knowledge in computer science and IT
              systems. This education laid the groundwork for my technical
              skills and piqued my interest in software development, leading me
              to explore different programming languages and frameworks. In
              2020, I completed a Distinction in Computer Packages at Catholic
              Computer and soon after, I joined Murang'a University for my
              undergraduate studies. It was during this time that I discovered
              my passion for coding, which led me to explore Python programming
              and web development. Formal Training at Teach2give In 2024, I
              enrolled in a Software Development program at Teach2give, where I
              acquired hands-on skills in HTML, CSS, JavaScript, React, and
              Markdown for frontend development, alongside Express.js, Prisma
              ORM, PostgreSQL, and Cloudinary for backend development. This
              training not only sharpened my technical skills but also deepened
              my understanding of creating dynamic, data-driven applications
              with the PERN stack. During this time, I worked on several key
              projects and collaborated with other developers on GitHub. Some of
              my proudest achievements include developing
              JosTech-Computers-website, Products-Rest-API, and the Advice App.
              These projects allowed me to implement everything I learned and
              collaborate with peers, improving my problem-solving and team
              communication skills.
            </p>
          </animated.div>

          <animated.div style={slideIn} className="skills">
            <h3>Key Skills</h3>
            <ul>
              <li>Full Stack Development (PERN Stack)</li>
              <li>Database Management with Prisma & PostgreSQL</li>
              <li>Web & Mobile Development with React, React Native</li>
              <li>API Design & Development</li>
              <li>Docker & Cloud Technologies</li>
              <li>Mentorship & Team Collaboration</li>
            </ul>
          </animated.div>
        </div>

        <div className="cta">
          <p>Want to collaborate or chat about technology?</p>
          <a href="mailto:josephkarimambugua@gmail.com" className="contact-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
