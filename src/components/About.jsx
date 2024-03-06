import React from 'react';
import {Link} from 'react-scroll';
import html from '../Assets/skills/html.svg';
import css from '../Assets/skills/css.svg';
import JavaScript from '../Assets/skills/javascript.svg';
import react from '../Assets/skills/react.svg';
import tailwindCSS from '../Assets/skills/tailwind-css.svg';
import bootstrap from '../Assets/skills/bootstrap.svg';
import git from '../Assets/skills/git.svg';
import cplus from '../Assets/skills/c++.svg';
import c from '../Assets/skills/c copy.svg';
import './About.css';

const About = () => {
  return (
    <section className="about" id='about'>
      <h2>About <span>Me!</span></h2>
      <p className='text'>Get to know me and my skills</p>
        <div className="about-container">
          <div className="about-me">
            <h3>Get <span>To Know Me!</span></h3>
            <p>As a frontend web developer, I have a passion for coding and designing visually appealing websites and web apps. My expertise lies in creating interfaces that are easy to use, utilizing HTML, CSS, and JavaScript, with a particular emphasis on React. My ultimate goal is to develop innovative digital environments that engage and connect with my users.</p>
            <p>I am constantly seeking to expand my knowledge and skills, and I am excited to continue learning and growing as a web developer.</p>
            <p>When I'm not coding, you'll often find me on the basketball court, honing my skills and enjoying the thrill of the game. I'm also an avid reader, constantly exploring new topics and expanding my knowledge beyond the world of technology.</p>
            <div className="button">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='btn'>Contact</Link>
            </div>

          </div>
            <div className="skills-container">
              <h3>My <span>Skills</span></h3>
              <div className="skillsIcon">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={JavaScript} alt="" />
              <img src={react} alt="" />
              <img src={tailwindCSS} alt="" />
              <img src={bootstrap} alt="" />
              <img src={git} alt="" />
              <img src={cplus} alt="" />
              <img src={c} alt="" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default About