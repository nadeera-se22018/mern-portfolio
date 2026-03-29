import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container animate-fade-in">
                <h1 className="hero-title">
                    Hi, I'm <span className="gradient-text">Kasun Nadeera</span>
                </h1>
                <h2 className="hero-subtitle delay-1 animate-fade-in">
                    Software Engineering Undergraduate based in Sri Lanka
                </h2>
                <p className="hero-description delay-2 animate-fade-in">
                    I have a strong passion for building robust, globally-standard software solutions
                    that drive meaningful impact.
                </p>
                <div className="hero-actions delay-3 animate-fade-in">
                    <button className="btn btn-primary">View My Work</button>
                    <button className="btn btn-secondary">Download CV</button>
                </div>
            </div>
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>
        </section>
    );
};

export default Hero;
