import React from 'react';
// import { Link } from 'react-scroll';
// import me from '../Assets/images/me.jpg';
import kobby from '../Assets/images/me(2).png'
import SocialMedia from './SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <section className='homePage' id='home'>
      <div className="home-container">
        <h2>Hi 👋, I am <span>Gideon Korbla Hoenyefia</span></h2>
        <h3>A Frontend Developer</h3>
        <p>My expertise is creating contemporary and engaging websites and web apps that 
          enhance customer engagement through user-friendly designs that combine
          style and functionality.
        </p>
        <SocialMedia />
        <div className="buttons">
          <a href="https://drive.google.com/file/d/1m-IAv2yghKPPmqCUek8dCiYUp2NcdV8b/view?usp=sharing" download={true} target='_blank' rel='noreferrer' className="h-button">Download CV <FontAwesomeIcon icon={faDownload} /></a>
          {/* <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="home-button">Hire Me</Link> */}
        </div>
      </div>
      <img src={kobby} alt="Gideon" />
      
    </section>
  )
}

export default Home;
