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