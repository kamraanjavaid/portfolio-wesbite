import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.png';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi quam non architecto ad. Quae soluta assumenda reprehenderit quo aperiam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi quam non architecto ad. Quae soluta assumenda reprehenderit quo aperiam.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '70%' }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: '60%' }} /></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: '55%' }} /></div>
                        <div className="about-skill"><p>Figma</p><hr style={{ width: '75%' }} /></div>
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
    )
}

export default About