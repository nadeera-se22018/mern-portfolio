import React from 'react';
import './Gallery.css';

import galleryImg1 from '../assets/gallery1.jpeg';
import galleryImg2 from '../assets/gallery2.jpeg';
import galleryImg3 from '../assets/gallery3.jpeg';

const galleryImages = [
  {
    src: galleryImg1,
    caption: 'Coodinater - Open Day 2025, University of Kelaniya'
  },
  {
    src: galleryImg2,
    caption: 'Organizing Committee Member - IEEEXtreme 19.0, University of Kelaniya'
  },
  {
    src: galleryImg3,
    caption: 'Competitor - JuniorHack 7.0, Software Engineering Students\' Association, University of Kelaniya'
  }
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
          {galleryImages.map((img, index) => (
            <div className="gallery-item glass-panel" key={index}>
              <div className="gallery-image-container">
                <img
                  src={img.src}
                  alt={`Gallery visual ${index + 1}`}
                  className="gallery-image"
                />
              </div>
              {img.caption && (
                <div className="gallery-caption">
                  <p>{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
