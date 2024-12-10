import React from "react";
import { Link } from "react-router-dom";
import me from "../../assets/me.jpg";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero-section">
      <div>
        <h1 style={{display:"flex",fontSize:"5rem",fontFamily:"cursive"}}>Hi, I'm Joseph Mbugua</h1>
        <p style={{color:"orange"}}>A Fullstack Web Developer</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          blanditiis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur
        </p>

        <div style={{display:"flex",gap:"2rem",marginTop:"2rem",fontWeight:"800"}}>
          <Link to={"/"} style={{padding:"1rem 4rem",backgroundColor:"orange"}}>Join Me</Link>
          <Link to={"/"} style={{padding:"1rem 4rem",border:"1px solid orange"}}>Let's Talk</Link>
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={me} alt="Joseph Mbugua" />
      </div>
    </section>
  );
}

export default Hero;
