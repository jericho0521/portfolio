import React from 'react';
import './About.css';

const About = () => {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
    dataAnalysis: ['Python', 'Pandas', 'SQL', 'Data Visualization'],
    tools: ['Git', 'VS Code', 'Figma', 'Chrome DevTools']
  };

  const education = [
    {
      degree: "Bachelor's Degree",
      field: "Computer Science",
      school: "Your University",
      year: "2020-2023"
    }
  ];

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Chinese", level: "Native" },
    { name: "Malay", level: "Professional" }
  ];

  return (
    <section className="about" id="about">
      <div className="grid-container">
        <div className="about-header">
          <p className="swiss-label">About Me</p>
          <h2 className="about-title">Background & Experience</h2>
          <div className="swiss-line"></div>
        </div>

        <div className="about-content">
          {/* Bio Section */}
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              As a Frontend Developer based in Kuala Lumpur, I specialize in creating 
              responsive and intuitive web interfaces. My background in data analysis 
              allows me to approach problems with both creativity and analytical precision.
            </p>
          </div>

          {/* Resume Download Section */}
          <div className="resume-section">
            <h3>Download Resume</h3>
            <div className="resume-grid">
              <a href={require("../Files/resume_en.pdf")} className="resume-card" download>
                <div className="resume-icon">🇬🇧</div>
                <div className="resume-info">
                  <h4>English Version</h4>
                  <span className="file-info">PDF • Updated Jan 2025</span>
                </div>
                <div className="download-icon">⬇</div>
              </a>
              
              <a href={require("../Files/resume_cn.pdf")} className="resume-card" download>
                <div className="resume-icon">🇨🇳</div>
                <div className="resume-info">
                  <h4>Chinese Version</h4>
                  <span className="file-info">PDF • Updated Jan 2025</span>
                </div>
                <div className="download-icon">⬇</div>
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h4>{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <ul>
                    {skillList.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h4>{edu.degree}</h4>
                  <p className="education-field">{edu.field}</p>
                  <p className="education-school">{edu.school}</p>
                  <p className="education-year">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="languages-section">
            <h3>Languages</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-card">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
