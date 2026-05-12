import React from 'react';
import './Footer.css';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-glow"></div>
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>Kasun <span className="gradient-text">Nadeera</span></h3>
                    <p className="footer-bio">Building scalable and aesthetic digital experiences with modern web technologies.</p>
                </div>
                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <div className="footer-links">
                        <a href="mailto:kasunnadeera100@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MailIcon /> kasunnadeera100@gmail.com
                        </a>
                        <a href="tel:+94741013068" target="_blank" rel="noopener noreferrer">
                            <PhoneIcon /> +94 74 101 3068
                        </a>
                        <span className="footer-text-link">
                            <MapPinIcon /> Sri Lanka
                        </span>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#expertise">Expertise</a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Social Media</h4>
                    <div className="footer-links">
                        <a href="https://github.com/nadeera-se22018" target="_blank" rel="noopener noreferrer">
                            <GithubIcon /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/kasun-nadeera-6bb48530a" target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon /> LinkedIn
                        </a>
                        <a href="https://medium.com/@kasunnadeera100" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm-6 20v-2c0-3.31 2.69-6 6-6s6 2.69 6 6v2H6z"/>
                            </svg> Medium
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kasun Nadeera. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
