import React, { useState, useRef, useEffect } from 'react';
import './Skills.css';

const skillCategories = [
    {
        title: 'Full-Stack & Frameworks',
        skills: ['MERN Stack', 'Spring Boot'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'Architecture & Design',
        skills: ['Software Architecture', 'Design Patterns', 'C4 Models'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'Cloud & Infrastructure',
        skills: ['DevOps', 'Cloud Technologies'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'Academic Domains',
        skills: ['Net Centric (Web & Cloud)', 'Data Science & Engineering', 'Health Informatics'],
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
];

const SkillCard = ({ category, index, isActive, onClick }) => {
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
            className={`skill-card auto-float floating-delay-${index % 4} ${isActive ? 'active-card' : ''}`}
            style={{ ...transformStyle, cursor: 'pointer' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick(index)}
            role="button"
            tabIndex={0}
        >
            <div className="skill-image-wrapper">
                <img src={category.image} alt={category.title} className="skill-section-image" />
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
    const [isPaused, setIsPaused] = useState(false);

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
        if (index < 0) index = skillCategories.length - 1;
        if (index >= skillCategories.length) index = 0;

        setActiveIndex(index);
        if (scrollContainerRef.current && scrollContainerRef.current.children[index]) {
            const container = scrollContainerRef.current;
            const child = container.children[index];

            // Calculate center position using simple offsets
            const scrollOffset = child.offsetLeft - (container.clientWidth / 2) + (child.clientWidth / 2);

            container.scrollTo({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    };

    const handlePrevious = () => scrollTo(activeIndex - 1);
    const handleNext = () => scrollTo(activeIndex + 1);

    // Auto-play interval for the horizontal slider
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % skillCategories.length;
            scrollTo(nextIndex);
        }, 3500); // Automove every 3.5 seconds

        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">Technical proficiencies that power my solutions</p>
                </div>

                <div
                    className="skills-nav-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >


                    <div
                        className="skills-slider"
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                    >
                        {skillCategories.map((category, index) => (
                            <SkillCard
                                key={index}
                                index={index}
                                category={category}
                                isActive={activeIndex === index}
                                onClick={scrollTo}
                            />
                        ))}
                    </div>


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
