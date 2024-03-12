import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import event from '../Assets/projects/Eventnation.jpg';
import cake from '../Assets/projects/CheeseCake.jpg';
import rent from '../Assets/projects/RENT.jpg';
import nersk from '../Assets/projects/Header.jpg'

const Projects = () => {
  return (
    <section className='projectsPage' id='projects'>
      <h3>My <span>Projects</span></h3>
        <p>Here you'll find some of my projects i've worked on.</p>
      <div className="projectContainer">
        <div className="gallery">

          <div className="project-box">
            <img src={event} alt="" />
              <div className="project-layer">
                <h4>EVENT NATION</h4>
                <p>Lorem ipsum dolor sit.</p>
                <a href="https://eventnations.netlify.app/#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '1.5em' }} /></a>
              </div>
          </div>


          <div className="project-box">
            <img src={cake} alt="" />
              <div className="project-layer">
                <h4>CAKE DELIGHT</h4>
                <p>Lorem ipsum dolor sit.</p>
                <a href="https://cakedelight.netlify.app/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '1.5em' }}/></a>
              </div>
          </div>

          <div className="project-box">
            <img src={nersk} alt="" />
              <div className="project-layer">
                <h4>NERSK</h4>
                <p>Lorem ipsum dolor sit.</p>
                <a href="/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '1.5em' }}/></a>
              </div>
          </div>

          <div className="project-box">
            <img src={rent} alt="" />
              <div className="project-layer">
                <h4>RENT HOMES</h4>
                <p>Lorem ipsum dolor sit.</p>
                <a href="https://renthomes.netlify.app/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '1.5em' }}/></a>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects