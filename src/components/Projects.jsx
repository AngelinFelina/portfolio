import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects from API, using fallback data', err);
        // Fallback data if backend server is not running or error occurs
        setProjects([
          {
            title: 'Emergency Alert Kit',
            description: 'A full-stack system designed for both offline and online emergency communication. It provides resilient messaging channels, local alerts, and fallback mechanics utilizing React.js, Node.js, and MongoDB when normal internet connectivity or Wi-Fi is unavailable.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
            category: 'Full-Stack',
            githubUrl: 'https://github.com/AngelinFelina/emergency-alert-kit',
            liveUrl: ''
          },
          {
            title: 'Music Player Web App',
            description: 'A responsive, Spotify-inspired web application featuring smooth playback controls, customizable playlist options, and a personalized custom song upload utility that integrates track metadata, cover art, and external audio links.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            category: 'Web Development',
            githubUrl: 'https://github.com/AngelinFelina/music-player',
            liveUrl: ''
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        
        {loading ? (
          <div className="projects-loading">
            <div className="loader"></div>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={project._id || idx} className="project-card glass-panel">
                <div className="project-header">
                  <div className="project-folder">
                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="var(--primary)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="GitHub Repository">
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="Live Demo">
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-body">
                  <h3 className="project-title-text">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>

                <div className="project-footer">
                  <div className="tech-tags">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
