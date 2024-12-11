import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './About.css'; // CSS file for styles

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
    config: { tension: 220, friction: 120 },
  });

  const slideIn = useSpring({
    transform: 'translateX(0%)',
    from: { transform: 'translateX(-100%)' },
    delay: 300,
    config: { tension: 180, friction: 60 },
  });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <animated.div style={fadeIn} className="about-header">
          <h2>About Me</h2>
          <p>
            Hi, I'm Joseph Mbugua, a passionate full-stack developer focused
            on creating innovative and impactful technology solutions.
          </p>
        </animated.div>

        <div className="about-content">
          <animated.div style={slideIn} className="about-info">
            <h3>My Journey</h3>
            <p>
              I started my career in Information Technology, and over the years,
              I have gained expertise in web development, APIs, databases, and
              mobile development. Through these experiences, I’ve had the chance to
              work on diverse projects, improving my problem-solving and team-collaboration skills.
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
          <a href="mailto:jovicglobals@example.com" className="contact-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
