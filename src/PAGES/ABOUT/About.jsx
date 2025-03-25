import React from 'react'
import   './About.css'
import about from '../../assets/about.png'
function About() {
  return (
    <div className='About-page'>
      <div className="abouthero">
<img src={about} alt="" />
<div className="about-content">
<h1>Lorem ipsum dolor sit amet.</h1> 
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellendus totam quod pariatur culpa!</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
<button>more</button>
</div>
      </div>
    </div>
  )
}

export default About