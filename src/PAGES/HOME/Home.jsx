import React from "react";
import Hero from "../../COMPONENTS/HEROSECTION/Hero";
import Projects from "../../COMPONENTS/PROJECTS/Projects";
import Skills from "../../COMPONENTS/SKILLS/Skills";
import Experience from "../../COMPONENTS/EXPERIENCE/Experience";
function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}

export default Home;
