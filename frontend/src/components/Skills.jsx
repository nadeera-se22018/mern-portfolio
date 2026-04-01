import React, { useState, useRef, useEffect } from 'react';
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
        skills: ['Net Centric (Web & Cloud)', 'Data Science & Engineering', 'Health Informatics'],
        icon: '📚'
    }
];

const SkillCard = ({ category, index }) => {
    const cardRef = useRef(null);
    const [transformStyle, setTransformStyle] = useState({});

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const center = rect.height / 2;
        // Cursor moves down -> card moves down
        const offsetY = (y - center) / center;

        setTransformStyle({
            transform: `translateY(${offsetY * 20}px) scale(1.05)`,
            transition: 'transform 0.1s ease-out'
        });
    };

    const handleMouseLeave = () => {
        setTransformStyle({
            transform: 'translateY(0) scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
        });
    };

    return (
        <div
            ref={cardRef}
            className={`skill-card auto-float floating-delay-${index % 4}`}
            style={transformStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
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
    );
};

const Skills = () => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e) => {
        const container = e.target;
        const scrollPosition = container.scrollLeft + container.clientWidth / 2;
        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child, index) => {
            const childCenter = child.offsetLeft + child.clientWidth / 2;
            const distance = Math.abs(childCenter - scrollPosition);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }
    };

    const scrollTo = (index) => {
        setActiveIndex(index);
        if (scrollContainerRef.current && scrollContainerRef.current.children[index]) {
            const container = scrollContainerRef.current;
            const child = container.children[index];
            
            // Calculate center position without triggering page-level scrolling
            const childRect = child.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const scrollOffset = (childRect.left - containerRect.left) + container.scrollLeft - (container.clientWidth / 2) + (childRect.width / 2);

            container.scrollTo({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    };

    // Auto-play interval for the horizontal slider
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % skillCategories.length;
            scrollTo(nextIndex);
        }, 5000); // Automove every 5 seconds

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">Technical proficiencies that power my solutions</p>
                </div>

                <div
                    className="skills-slider"
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                >
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} index={index} category={category} />
                    ))}
                </div>

                <div className="skills-dots">
                    {skillCategories.map((_, index) => (
                        <button
                            key={index}
                            className={`skill-dot ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => scrollTo(index)}
                            aria-label={`View expertise ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
