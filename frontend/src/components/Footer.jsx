import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <p>contact@kasunw.com</p>
                    <p>+94 77 XXX XXXX</p>
                    <p>Sri Lanka</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#portfolio">Projects</a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Social Media</h4>
                    <div className="footer-socials">
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
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
