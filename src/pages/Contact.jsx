import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '83496fcc-efba-455b-a684-313c92ca6fa2',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      
      const data = await response.json();
      if (data.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <h1 style={{ marginTop: '5rem' }}>Contact</h1>
          <div className="red-line"></div>
        </header>

        <div className="contact-content">
          <section className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <p>Phone: +1 (XXX) XXX-XXXX</p>
              <p>Email: your.email@example.com</p>
              <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </section>

          <section className="contact-form">
            <h2 style={{ marginTop: '-4rem' }}>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="uuid"
                value={formData.uuid}
              />
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact; 