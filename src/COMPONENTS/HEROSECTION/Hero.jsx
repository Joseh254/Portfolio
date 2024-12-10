import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../assets/me.jpg';
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import './Hero.css' 
function Hero() {
  return (
    <section className='hero-section' >
      <div>
        <h1>Hi, I'm Joseph Mbugua</h1>
        <p >A Fullstack Web Developer</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, blanditiis.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
        </p>

        <div >
          <Link
            to={"/"}
         >
            Join Me
          </Link>
          <Link
            to={"/"}

          >
            Let's Talk
          </Link>
        </div>

        <div>
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
          <a
            href="https://www.linkedin.com"
            target="_blank"

          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className='hero-image'>
        <img
          src={me}
          alt="Joseph Mbugua"

        />
      </div>
    </section>
  );
}

export default Hero;
