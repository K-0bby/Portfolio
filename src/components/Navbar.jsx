import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import kobby from '../Assets/images/me(2).png'
import './Navbar.css'


const Navbar = () => {

  //set mobile view nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    //change navbar color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    //close menu on click
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <div className="navbar-logo">
                    <img src={kobby} alt="Gideon" />
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='logo'>
                    <h1>Gideon</h1>
                    </Link>
                </div>
               
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                         <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                         <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                         <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact Me</Link>
                    </li>
                </ul>
                {/* <div className="button">
                  <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact Me</Link>
                </div> */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#4d4e52' }} />)
                        : (<FaBars size={30} style={{ color: '#4d4e52' }} />)}
                </div>
            </nav>
        </div>
    )
}

export default Navbar