import React, { useRef, useEffect, useState } from 'react';
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
    const scrollRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationFrameId;

        const scroll = () => {
            if (!isHovering) {
                el.scrollLeft += 1;
                if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
                    el.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovering]);

    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">Technical proficiencies that power my solutions</p>
                </div>

                <div
                    className="skills-grid"
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onTouchStart={() => setIsHovering(true)}
                    onTouchEnd={() => setIsHovering(false)}
                >
                    {skillCategories.map((category, index) => (
                        <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="skill-icon">{category.icon}</div>
                            <h3 className="skill-category-title">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
