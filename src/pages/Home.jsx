import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Python', category: 'Data Analysis' },
    { name: 'SQL', category: 'Database' },
    { name: 'Pandas', category: 'Data Analysis' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in-up, .tech-item, .cta-button').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home" id="home">
      <div className="swiss-cross"></div>
      <div className="grid-container">
        <div className="hero-section fade-in-up">
          <p className="swiss-label">Portfolio / 2025</p>
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Jericho Foong</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          <div className="swiss-line"></div>
          <p className="hero-description">
            Based in Kuala Lumpur, Malaysia. Passionate about creating engaging web experiences 
            with a background in data analysis. I focus on building user-friendly interfaces
            that make an impact.
          </p>
        </div>

        <div className="cta-container fade-in-up delay-1">
          <Link to="/projects" className="cta-button primary">
            <span className="button-number">01</span>
            <span className="button-text">View Projects</span>
          </Link>
          <Link to="/contact" className="cta-button secondary">
            <span className="button-number">02</span>
            <span className="button-text">Contact Me</span>
          </Link>
        </div>

        <div className="tech-stack fade-in-up delay-2">
          <div className="swiss-label">Tech Stack</div>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={tech.name} className={`tech-item delay-${index + 1}`}>
                <span className="tech-number">{(index + 1).toString().padStart(2, '0')}</span>
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 