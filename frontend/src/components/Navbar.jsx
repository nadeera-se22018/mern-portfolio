import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="nav-logo">
                    <span className="logo-symbol">&lt; / &gt;</span> Kasun W.
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="nav-action">
                    <button className="btn btn-primary btn-hire">Hire Me</button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
