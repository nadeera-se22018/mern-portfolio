import React from 'react';
import './Projects.css';
import project1Img from '../assets/project_1_img_new.png';
import project2Img from '../assets/project_2_img_new.png';
import project3Img from '../assets/Book Fair Reservation System UI2.png';
import project4Img from '../assets/Binkeyit app UI.png';

const projectsData = [
    {
        id: 1,
        title: 'LankaGrocery',
        description: 'Developed a full-stack, modern online grocery shopping web application tailored for the Sri Lankan market using the MERN stack. Features include a clean and responsive user interface, secure authentication, a robust shopping cart management system, and efficient media handling.',
        techStack: ['React', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary API', 'Google OAuth', 'Vercel', 'AI Assistant'],
        githubLink: 'https://github.com/nadeera-se22018/LankaGrocery.git',
        liveDemo: 'https://lankagrocery.vercel.app/',
        image: project1Img
    },
    {
        id: 2,
        title: 'LkTranslaterAI',
        description: 'Developed a responsive, high-performance frontend for an AI translation application powered by Google Gemini and the Groq inference engine. Features include a modern glassmorphism user interface, real-time cross-lingual translations connected to a backend REST API, and a persistent history tracking system using robust centralized state management.',
        techStack: ['React', 'Redux', 'Tailwind CSS', 'Vite', 'Node.js', 'Google Gemini API', 'Groq API'],
        githubLink: 'https://github.com/nadeera-se22018/ai-translator-mern.git',
        liveDemo: 'https://lk-translater-ai.vercel.app/',
        image: project2Img
    },
    {
        id: 3,
        title: 'Book Fair Reservation System',
        description: 'A robust backend-focused reservation system featuring core reservation logic and QR code generation.',
        techStack: ['Spring Boot', 'Java', 'REST APIs'],
        githubLink: 'https://github.com/nadeera-se22018/sa-project.git',
        liveDemo: '#',
        image: project3Img
    },
    {
        id: 4,
        title: 'BinkeyitApp',
        description: 'A comprehensive E-commerce platform delivering seamless shopping experiences.',
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        githubLink: 'https://github.com/nadeera-se22018/BinkeyitApp.git',
        liveDemo: '#',
        image: project4Img
    }
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-header align-center" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">A selection of my recent work</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <span className="tech-badge" key={i}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    <a href={project.githubLink} className="p-btn p-btn-primary" target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        GitHub Repo
                                    </a>
                                    <a href={project.liveDemo} className="p-btn p-btn-secondary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
