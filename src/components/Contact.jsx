import React from 'react';
import './Contact.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="ContactPage" id='contact'>
        <h2>Contact <span>Me</span></h2>
        <p>You can reach me here for services</p>
        <div className="formPage">
            <form action="https://formspree.io/f/mayzzpjo" method='post'>
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input className='nameInput' type="text" placeholder='Enter your full name...' />
                </div>
                <div className="form-field">
                    <label htmlFor="Email">Email</label>
                    <input className='emailInput' type="email" placeholder='e.g mario@example.com' />
                </div>
                <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message...'></textarea>
                </div>
                <input type="submit" value='Submit' className='submitBtn' />
            </form>
        </div>
        <div className="footer">
            <p>Copyright &copy; 2024 by Gideon | All Rights Reserved</p>
        </div>
        {/* <div className="scrollUp">
            <a href="#home"><FontAwesomeIcon icon={faArrowUp} /></a>
        </div> */}
    </section>
  )
}

export default Contact