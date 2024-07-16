import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Kamran Javaid,</span> frontend developer based in Pakistan</h1>
      <p>NUML BS Software Engineering student with a solid foundation in HTML, CSS, and JavaScript. My interest has blossomed in ReactJS, and I'm actively learning its core concepts. Eager to leverage my skills and contribute to innovative web development projects in a challenging environment.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero