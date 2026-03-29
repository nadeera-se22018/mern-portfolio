import React from 'react';
import './Skills.css';

const skillCategories = [
    {
        title: 'Full-Stack & Frameworks',
        skills: ['MERN Stack', 'Spring Boot'],
        icon: '🚀'
    },
    {
        title: 'Architecture & Design',
        skills: ['Software/Systems Architecture', 'C4 Models', 'Design Patterns'],
        icon: '🏗️'
    },
    {
        title: 'Cloud & Infrastructure',
        skills: ['DevOps', 'Cloud Technologies'],
        icon: '☁️'
    },
    {
        title: 'Academic Domains',
        skills: ['Net Centric (Web & Cloud)', 'Data Science (Data & Infrastructure)'],
        icon: '📚'
    }
];

const Skills = () => {
    // Duplicate the array to create a seamless infinite marquee effect
    const marqueeItems = [...skillCategories, ...skillCategories, ...skillCategories];

    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">Technical proficiencies that power my solutions</p>
                </div>

                <div className="marquee-wrapper">
                    <div className="skills-marquee">
                        {marqueeItems.map((category, index) => (
                            <div className="skill-card" key={index}>
                                <div className="skill-icon-wrapper">
                                    <div className="skill-icon">{category.icon}</div>
                                </div>
                                <h3 className="skill-category-title">{category.title}</h3>
                                <div className="skill-divider"></div>
                                <ul className="skill-list">
                                    {category.skills.map((skill, i) => (
                                        <li key={i} className="skill-item">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
