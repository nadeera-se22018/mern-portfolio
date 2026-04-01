import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <p>kasunnadeera100@gmail.com</p>
                    <p>+94 74 101 3068</p>
                    <p>Sri Lanka</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Social Media</h4>
                    <div className="footer-socials">
                        <a href="https://github.com/nadeera-se22018" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/kasun-nadeera-6bb48530a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://medium.com/@kasunnadeera100" target="_blank" rel="noopener noreferrer">Medium</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Kasun Nadeera. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
