import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
<<<<<<< HEAD
=======
        <img src={theme_pattern} alt="" />
>>>>>>> color-update
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
<<<<<<< HEAD
              I'm a passionate and detail-oriented developer with a strong
              desire to constantly learn and grow in the field of web
              development. While pursuing my BS in Software Engineering at NUML,
              I have built a solid foundation in core web technologies such as
              HTML, CSS, and JavaScript, with a particular focus on frontend
              development.
            </p>
            <p>
              Beyond academics, I enjoy diving into new frameworks and
              technologies like ReactJS, which has sparked my interest in
              building dynamic, interactive user interfaces. In addition to
              coding, I love solving complex problems and learning new tools
              that make development faster and more efficient.
=======
              I’m Kamran Javaid, a driven software engineering student who loves
              turning ideas into reality with code. My journey has led me to
              master HTML, CSS, JavaScript, and ReactJS. 
              </p>
              <p>Currently, I’m delving
              into the MERN stack to broaden my development capabilities. I’m
              passionate about learning, creating, and collaborating on
              innovative projects. Welcome to my world of coding!
>>>>>>> color-update
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Figma</p>
              <hr style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
