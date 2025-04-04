import React from "react";
import Hero from "../../COMPONENTS/HEROSECTION/Hero";
import Projects from "../../COMPONENTS/PROJECTS/Projects";
import Skills from "../../COMPONENTS/SKILLS/Skills";
import Experience from "../../COMPONENTS/EXPERIENCE/Experience";
function Home() {
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  return (
    <>
            <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div> 
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}

export default Home;
