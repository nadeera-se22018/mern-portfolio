import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="nav-logo">
                    <span className="logo-symbol">&lt; / &gt;</span> Kasun N.
                </div>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#skills" onClick={() => setIsOpen(false)}>Expertise</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                    <div className="nav-action-mobile">
                        <button className="btn btn-primary btn-hire">Hire Me</button>
                    </div>
                </div>

                <div className="nav-action-desktop">
                    <button className="btn btn-primary btn-hire">Hire Me</button>
                </div>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    <div className={`hamburger ${isOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
