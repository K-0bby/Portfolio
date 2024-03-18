import React from 'react';
// import { Link } from 'react-scroll';
// import kobby from '../Assets/images/me(2).png'
import SocialMedia from './SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {

  return (
    <section className='homePage' id='home'>
      <div className="home-container">
        <h2>Hi 👋, I am <span>Gideon Korbla Hoenyefia</span></h2>
        <h3>
          <Typewriter
            options={{
            strings: ['Frontend Developer', 'UI/UX Designer'],
            autoStart: true,
            loop: true,
            }}
          />
        </h3>
        <p>My expertise is creating contemporary and engaging websites and web apps that 
          enhance customer engagement through user-friendly designs that combine
          style and functionality.
        </p>
        <SocialMedia />
        <div className="buttons">
          <a href="https://drive.google.com/file/d/1m-IAv2yghKPPmqCUek8dCiYUp2NcdV8b/view?usp=sharing" download={true} target='_blank' rel='noreferrer' className="h-button">Download CV <FontAwesomeIcon icon={faDownload} /></a>
        </div>
      </div>
      {/* <img src={kobby} alt="Gideon" /> */}
      <div className="mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
      
    </section>
  )
}

export default Home;
