import React, { useState } from 'react';
import './ContactForm.css';

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, ERROR

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '10c92125-bd10-43f2-baf1-4526f1bea861',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error(error);
      setStatus('ERROR');
    }
  };

  return (
    <section className="contact-section" id="contact-section">
      <div className="container contact-container">
        <div className="contact-header">
            <h2 className="contact-title">Get In <span className="gradient-text">Touch</span></h2>
            <p className="contact-subtitle">Have a question or want to work together? Leave a message!</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-wrapper">
                <div className="input-icon"><UserIcon /></div>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
                <div className="input-icon"><MailIcon /></div>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <div className="input-wrapper textarea-wrapper">
                <div className="input-icon"><MessageIcon /></div>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message here..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
            </div>
          </div>
          <button type="submit" className="submit-form-btn" disabled={status === 'SUBMITTING'}>
            <span>{status === 'SUBMITTING' ? 'Sending...' : 'Send Message'}</span>
            {status !== 'SUBMITTING' && <SendIcon />}
          </button>

          {status === 'SUCCESS' && (
            <div className="form-status success">
              Message sent successfully! I will get back to you soon.
            </div>
          )}
          {status === 'ERROR' && (
            <div className="form-status error">
              Oops! Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
