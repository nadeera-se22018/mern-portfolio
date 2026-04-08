import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section" id="contact-section">
      <div className="container contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message..." required></textarea>
          </div>
          <button type="submit" className="submit-form-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
