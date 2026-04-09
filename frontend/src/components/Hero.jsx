import React from 'react';
import './Hero.css';
import heroPhoto from '../assets/hero-photo.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="hero-background">
                {/* Glowing Orbs */}
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>

                {/* Floating MERN & Tech Icons */}
                <svg className="floating-icon icon-1" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                    <circle cx="0" cy="0" r="2.05" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>

                <svg className="floating-icon icon-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>

                <svg className="floating-icon icon-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.9,1C11.9,1,10.6,4.6,9.2,7C7.6,9.7,5,10.2,5,10.2s3,0.3,5,2c0.2,0.2,0.8,0.7,0.8,0.7s-0.7,1.8-1,3c-0.6,2.3-2,5.1-2,5.1s2.8-1.5,4-3c1.3-1.6,2-4,2-4s0.6,2.2,2,4c1.1,1.5,4,3,4,3s-1.3-2.9-2-5.1c-0.3-1.1-1-3-1-3s0.7-0.5,0.9-0.7c1.9-1.8,4.9-2,4.9-2s-2.6-0.5-4.2-3.1C16.1,4.9,11.9,1,11.9,1z" />
                </svg>

                <svg className="floating-icon icon-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            </div>

            <div className="container hero-container">
                <div className="hero-image-wrapper animate-fade-in">
                    <div className="profile-image-container">
                        <div className="profile-aura"></div>
                        <img src={heroPhoto} alt="Kasun Nadeera" className="profile-image object-cover rounded-full" />
                    </div>
                </div>
                <div className="hero-content animate-fade-in delay-1">
                    <h1 className="hero-title">
                        Welcome! I'm <br /><span className="gradient-text">Kasun Nadeera</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        MERN Stack Developer | Software Engineering Undergraduate
                    </h2>
                    <div className="hero-actions">
                        <button className="btn btn-secondary">Download CV</button>
                        <button className="btn btn-primary">View My Work</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
