import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToContact = (e) => {
        e.preventDefault();
        setIsOpen(false);
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                        <li><a href="#articles" onClick={() => setIsOpen(false)}>Articles</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                    <div className="nav-action-mobile">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            {isDarkMode ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            )}
                        </button>
                        <button className="btn btn-primary btn-hire" onClick={scrollToContact}>Hire Me</button>
                    </div>
                </div>

                <div className="nav-action-desktop">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {isDarkMode ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        )}
                    </button>
                    <button className="btn btn-primary btn-hire" onClick={scrollToContact}>Hire Me</button>
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
