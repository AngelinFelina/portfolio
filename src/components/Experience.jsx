import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'AICTE Eduskills',
      duration: 'May 2024 - July 2024',
      points: [
        'Built responsive web pages using HTML, CSS, and JavaScript, improving UI consistency across systems by 30%.',
        'Developed dynamic interactive components in React.js and integrated with Node.js + Express.js backend.',
        'Worked with REST APIs & MySQL to structure database interaction, helping reduce query latency by 20%.',
        'Created a prototype of an Emergency Assistance App designed for real-time safety reporting and support.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <div className="role-company">
                    <h3>{exp.role}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>
                  <span className="duration-tag">{exp.duration}</span>
                </div>

                <ul className="timeline-details">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>
                      <span className="bullet-glow"></span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
