import React from "react";
import { Link } from "react-router-dom";
import me from "../../assets/me.png";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "./Hero.css";
function Hero() { 
  const name=[,"j","o","s","e","p","h",".","m","b","u","g","u","a"]
  return ( 
   <div>
     <section className="hero-section">
      <div>
      <p style={{fontSize:"4rem"}}>Hi I'M</p>
      <div className="names-array">
        {name.map((letter, index) => (
          <p
            key={index}
            style={{
              animationDelay: `${index * 0.2}s`, // Delay for each letter
            }}
          >
            {letter}
          </p>
        ))}
      </div>
        <p style={{ color: "orange" }}>A Fullstack Web Developer</p>
        <p>
          I have a degree in Bachelor's of Science In Information Technology
        </p>
        <p>From Murang'a University of technology</p>
        <p style={{padding:"1rem",marginTop:".5rem",fontWeight:"500"}}> See More <span>&#8594;</span></p>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "2rem",
            fontWeight: "800",
          }}
        >
          <a
            href="tel:+254768163608"
            style={{
              padding: "1rem 4rem",
              backgroundColor: "orange",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Join Me
          </a>

          <a
            href="mailto:josephkarimambugua@gmail.com"
            style={{
              padding: "1rem 4rem",
              border: "1px solid orange",
              color: "orange",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Let's Talk
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFacebook />
          </a>
          <a
            href="https://github.com/Joseh254"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-mbugua-51a1b5299/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={me} alt="Joseph Mbugua" />
      </div>
      
    </section>
   </div>
  );
}

export default Hero;
