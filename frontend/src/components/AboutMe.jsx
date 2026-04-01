import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <div className="container">
                <div className="section-header align-center">
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                </div>

                <div className="about-card">
                    <p className="about-text">
                        I am Kasun Nadeera, a passionate Software Engineering Undergraduate and a dedicated MERN Stack Developer.
                        I thrive on solving complex problems and transforming them into beautifully intuitive, responsive, and robust web applications.
                    </p>
                    <p className="about-text">
                        With a strong foundation in scalable software architectures, I specialize in building efficient backend services alongside premium frontend experiences.
                        My journey involves continuous learning, exploring cloud infrastructures, and driving meaningful impact through globally-standard solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default AboutMe;
