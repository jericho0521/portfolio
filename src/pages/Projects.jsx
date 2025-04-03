import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "Project Play By CW Website",
      description: "A modern gaming and esports center website located in Kuala Lumpur. Features include a sleek design showcasing gaming facilities, event spaces, and tournament areas. The website highlights their high-end gaming setups and community-focused environment.",
      image: require("../Files/webppbycw.png"),
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveLink: "https://ppbycw.com/",
      category: "Web Development",
      highlights: [
        "Implemented responsive design for optimal viewing across all devices",
        "Created an immersive gallery showcasing gaming facilities and event spaces",
        "Designed modern UI highlighting gaming and esports features",
        "Optimized performance for fast loading times"
      ]
    },
    {
      name: "Customer Personality Analysis",
      description: "A data analysis project that segments customers based on their purchasing behavior, demographics, and preferences. Using machine learning techniques to identify distinct customer groups and provide actionable marketing insights.",
      image: require("../Files/cpa.png"),
      technologies: ["Scala", "SQL", "Spark", "Data Visualization"],
      liveLink: "/Customer Personality Analysis Code (2).html",
      category: "Data Analysis",
      highlights: [
        "Analyzed customer data using clustering algorithms",
        "Created visualizations to identify customer segments",
        "Provided insights for targeted marketing strategies",
        "Implemented data preprocessing and feature engineering"
      ]
    }
    ,
    {
      name: "Project Power By CW Website",
      description: "Custom Engineering Solutions Website showcasing industrial automation, control systems, and engineering services. Features detailed project portfolios, technical capabilities, and consultation services. The website emphasizes their expertise in power systems and industrial solutions.",
      image: require("../Files/powercw.png"),
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveLink: "https://projectpowerbycw.com/",
      category: "Web Development",
      highlights: [
        "Implemented responsive design for optimal viewing across all devices",
        "Created an immersive gallery showcasing gaming facilities and event spaces",
        "Designed modern UI highlighting gaming and esports features",
        "Optimized performance for fast loading times"
      ]
    }


  ];

  return (
    <div className="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="swiss-line"></div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  <div className="image-placeholder">{project.name}</div>
                )}
              </div>
              <div className="project-content">
                <h2>{project.name}</h2>
                <p className="category">{project.category}</p>
                <p className="description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="view-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 