import React from 'react';
import './Articles.css';

const Articles = () => {
  const articlesData = [
    {
      id: 1,
      title: 'An In-Depth Guide to Machine Learning',
      excerpt: 'Explore the fundamental concepts of machine learning algorithms, their applications, and how to build your first model from scratch using modern frameworks.',
      link: '#',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Mastering React Performance Optimization',
      excerpt: 'Learn advanced techniques for optimizing your React applications, including memoization, code splitting, and managing complex UI state cleanly.',
      link: '#',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="articles-section" id="articles">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest <span className="gradient-text">Articles</span></h2>
        </div>
        <div className="articles-grid">
          {articlesData.map(article => (
            <div className="article-card" key={article.id}>
              <div className="article-image-container">
                <img src={article.image} alt={article.title} className="article-image" />
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <a href={article.link} className="read-medium-btn" target="_blank" rel="noopener noreferrer">
                  <span>Read on Medium</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="external-icon">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
