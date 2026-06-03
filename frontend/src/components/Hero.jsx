import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';
import heroPhoto from '../assets/MyNewProfessionalPhoto - Edited.png';

const Hero = () => {
    // typing effect config
    const titles = useMemo(() => [
        "MERN Stack Developer",
        "React.js Developer",
        "Full-Stack Developer",
        "Software Engineer"
    ], []);

    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typedText, setTypedText] = useState('');
    
    useEffect(() => {
        const activeTitle = titles[titleIndex];
        let timer;
        
        if (!isDeleting && charIndex < activeTitle.length) {
            timer = setTimeout(() => {
                setTypedText(activeTitle.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }, 75);
        } else if (isDeleting && charIndex > 0) {
            timer = setTimeout(() => {
                setTypedText(activeTitle.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            }, 35);
        } else if (!isDeleting && charIndex === activeTitle.length) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 1800);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTitleIndex(prev => (prev + 1) % titles.length);
        }
        
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, titleIndex, titles]);

    // memoized particles
    const particles = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            size: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${Math.random() * 15 + 15}s`
        }));
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            
            {/* Animated Particles and Background Glow */}
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                
                {/* Dark-colored particles */}
                <div className="particles-container">
                    {particles.map(p => (
                        <div 
                            key={p.id} 
                            className="particle"
                            style={{
                                width: `${p.size}px`,
                                height: `${p.size}px`,
                                left: p.left,
                                top: p.top,
                                animationDelay: p.delay,
                                animationDuration: p.duration
                            }}
                        />
                    ))}
                </div>

                {/* Dark-colored floating background tech logos */}
                <svg className="bg-logo bg-logo-react" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                    <circle cx="0" cy="0" r="2.05" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
                <svg className="bg-logo bg-logo-node" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.248c-5.523 0-10 4.477-10 10v.004c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10v-.004c0-5.523-4.477-10-10-10z" />
                </svg>
                <svg className="bg-logo bg-logo-mongo" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.9,1C11.9,1,10.6,4.6,9.2,7C7.6,9.7,5,10.2,5,10.2s3,0.3,5,2c0.2,0.2,0.8,0.7,0.8,0.7s-0.7,1.8-1,3c-0.6,2.3-2,5.1-2,5.1s2.8-1.5,4-3c1.3-1.6,2-4,2-4s0.6,2.2,2,4c1.1,1.5,4,3,4,3s-1.3-2.9-2-5.1c-0.3-1.1-1-3-1-3s0.7-0.5,0.9-0.7c1.9-1.8,4.9-2,4.9-2s-2.6-0.5-4.2-3.1C16.1,4.9,11.9,1,11.9,1z" />
                </svg>
            </div>

            <div className="container hero-container">
                {/* Hero Left Image Wrapper (Kept full photo same as leftside of desktop) */}
                <div className="hero-image-wrapper animate-fade-in">
                    <div className="profile-image-container">
                        {/* Circular/Oval Neon Glow behind profile photo */}
                        <div className="profile-glow-circle"></div>

                        {/* Profile Image (Full portrait object-fit contain aligned to bottom) */}
                        <img src={heroPhoto} alt="Kasun Nadeera" className="profile-image" />

                        {/* Dark floating React, Node, and MongoDB icons */}
                        <div className="floating-tech-badge float-react" title="React.js">
                            <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" width="24" height="24">
                                <circle cx="0" cy="0" r="2.05" />
                                <g stroke="currentColor" strokeWidth="1" fill="none">
                                    <ellipse rx="11" ry="4.2" />
                                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                </g>
                            </svg>
                        </div>
                        <div className="floating-tech-badge float-node" title="Node.js">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M12 2.248c-5.523 0-10 4.477-10 10v.004c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10v-.004c0-5.523-4.477-10-10-10zm-1 14.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-3.5h3v3.5zm0-5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-3.5h3v3.5zm5 5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-3.5h3v3.5zm0-5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-3.5h3v3.5z" />
                            </svg>
                        </div>
                        <div className="floating-tech-badge float-mongo" title="MongoDB">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M11.9,1C11.9,1,10.6,4.6,9.2,7C7.6,9.7,5,10.2,5,10.2s3,0.3,5,2c0.2,0.2,0.8,0.7,0.8,0.7s-0.7,1.8-1,3c-0.6,2.3-2,5.1-2,5.1s2.8-1.5,4-3c1.3-1.6,2-4,2-4s0.6,2.2,2,4c1.1,1.5,4,3,4,3s-1.3-2.9-2-5.1c-0.3-1.1-1-3-1-3s0.7-0.5,0.9-0.7c1.9-1.8,4.9-2,4.9-2s-2.6-0.5-4.2-3.1C16.1,4.9,11.9,1,11.9,1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Hero Right Content */}
                <div className="hero-content animate-fade-in">
                    <h1 className="hero-title">
                        Welcome! I'm <br />
                        <span className="gradient-text hero-name">Kasun Nadeera</span>
                    </h1>
                    
                    {/* Animated Typing Title */}
                    <div className="hero-subtitle-container">
                        <span className="hero-subtitle-static">I am a </span>
                        <span className="hero-subtitle-typed gradient-text">{typedText}</span>
                        <span className="typing-cursor"></span>
                    </div>

                    {/* Very Short Professional Bio Paragraph */}
                    <p className="hero-intro">
                        A passionate Software Engineering Undergraduate and dedicated MERN Stack Developer building high-performance, robust, and visually stunning web applications.
                    </p>

                    {/* Modern CTA Buttons */}
                    <div className="hero-actions">
                        <a href="/Kasun%20Nadeera_Software%20Engineer_CV.pdf" download className="btn btn-secondary">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download CV
                        </a>
                        <a href="#projects" className="btn btn-primary">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                            View Projects
                        </a>
                    </div>

                    {/* GitHub, LinkedIn, and Email Social Icons */}
                    <div className="hero-socials">
                        <a href="https://github.com/nadeera-se22018" target="_blank" rel="noopener noreferrer" className="social-btn github" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/kasun-nadeera-6bb48530a" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="mailto:kasunnadeera100@gmail.com" className="social-btn email" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
