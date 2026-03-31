import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header align-center" style={{ textAlign: "center" }}>
                    <h2 className="section-title"><span className="gradient-text">Testimonials</span></h2>
                    <p className="section-subtitle">What people say about my work</p>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-quote">"Kasun delivered an exceptionally well-architected solution for our system. His attention to detail in the backend logic is outstanding."</div>
                        <div className="testimonial-author">- John Doe, Tech Lead</div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-quote">"A brilliant developer with a keen eye for premium UI design and scalable systems. Highly recommend working with him."</div>
                        <div className="testimonial-author">- Jane Smith, Project Manager</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
