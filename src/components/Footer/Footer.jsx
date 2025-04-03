import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">Jericho Foong</h3>
          <p className="footer-description">
            Frontend Developer based in Kuala Lumpur, Malaysia. Focused on creating 
            responsive and intuitive web interfaces, with experience in data analysis.
          </p>
          <div className="social-links">
            <a href="https://github.com/jericho0521" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://linkedin.com/in/jerichofoong" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:jericho0521.@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 