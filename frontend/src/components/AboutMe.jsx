import React from 'react';
import './AboutMe.css';
import aboutPhoto from '../assets/about-photo.png';

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <div className="container">
                <div className="section-header align-center">
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                </div>

                <div className="about-content">
                    <div className="about-image-wrapper">
                        <div className="about-image-aura"></div>
                        <img src={aboutPhoto} alt="About Kasun Nadeera" className="about-image" />
                    </div>
                    <div className="about-card">
                        <p className="about-text">
                            I am Kasun Nadeera, a passionate <span className="highlight-text">Software Engineering Undergraduate</span> and a dedicated <span className="highlight-text">MERN Stack Developer</span>.
                            I thrive on solving complex problems and transforming them into beautifully intuitive, responsive, and robust web applications.
                        </p>
                        <p className="about-text">
                            With a strong foundation in <span className="highlight-text">scalable software architectures</span>, I specialize in building efficient backend services alongside <span className="highlight-text">premium frontend experiences</span>.
                            My journey involves continuous learning, exploring cloud infrastructures, and driving meaningful impact through globally-standard solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutMe;
