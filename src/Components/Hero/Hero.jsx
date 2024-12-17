<<<<<<< HEAD
import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1xyGcia038taxu65TaU9wF0NpFUk_PnHJ/view?usp=sharing";
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Kamran Javaid,</span> frontend developer based in Pakistan
      </h1>
      <p>
        NUML BS Software Engineering student with a solid foundation in HTML,
        CSS, and JavaScript. My interest has blossomed in ReactJS, and I'm
        actively learning its core concepts. Eager to leverage my skills and
        contribute to innovative web development projects in a challenging
        environment.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
=======
import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.png';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Kamran Javaid,</span> frontend developer based in Pakistan</h1>
      <p>I’m a passionate Software Engineering student with a knack for creating dynamic, user-friendly web applications. My journey in the tech world started with HTML and CSS, and soon, I found myself diving deep into JavaScript and ReactJS, where I discovered my love for building interactive web experiences.
<br/>
Currently, I’m expanding my horizons by learning the MERN stack to enhance my full-stack development skills. I’m always eager to learn, innovate, and collaborate on exciting projects. Welcome to my portfolio – let’s create something amazing together!</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
>>>>>>> color-update
