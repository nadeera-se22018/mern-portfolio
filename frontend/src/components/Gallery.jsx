import React from 'react';
import './Gallery.css';

const galleryImages = [
  'https://placehold.co/600x600/1e293b/ffffff?text=Gallery+Image',
  'https://placehold.co/600x600/1e293b/ffffff?text=Gallery+Image',
  'https://placehold.co/600x600/1e293b/ffffff?text=Gallery+Image'
];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header align-center" style={{ textAlign: 'center' }}>
          <h2 className="section-title">My <span className="gradient-text">Gallery</span></h2>
          <p className="section-subtitle">Showcasing personal and event photos</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((imgSrc, index) => (
            <div className="gallery-item glass-panel" key={index}>
              <img 
                src={imgSrc} 
                alt={`Gallery visual ${index + 1}`} 
                className="gallery-image rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
