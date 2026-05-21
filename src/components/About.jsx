import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { value: '9.1/10', label: 'B.Tech CGPA', detail: 'Chennai Institute of Technology' },
    { value: '450+', label: 'LeetCode Solved', detail: 'Consistent Problem Solver' },
    { value: '150+', label: 'CodeChef Solved', detail: 'Competitive Programmer' },
    { value: 'Top 3', label: 'Rank in School', detail: 'Academic Excellence' },
  ];

  return (
    <section id="about" className="section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text-content glass-panel">
            <h3>Who I Am</h3>
            <p>
              I am a B.Tech Information Technology student at <strong>Chennai Institute of Technology</strong>.
              My academic journey is fueled by a passion for technology and a strong desire to solve real-world problems.
              I maintain a CGPA of <strong>9.1/10</strong> and actively participate in hackathons and coding contests.
            </p>
            <p>
              My coding journey revolves around build-deploy-optimize cycles. From architecting emergency alert kits using the MERN stack to constructing lightweight Spotify clones, I thrive on translating designs into functional products.
            </p>

            <div className="about-education">
              <h4>Education</h4>
              <div className="education-card">
                <div className="edu-header">
                  <h5>B.Tech in Information Technology</h5>
                  <span className="edu-date">Sep 2024 - May 2028</span>
                </div>
                <p className="edu-institute">Chennai Institute of Technology</p>
                <div className="edu-metrics">
                  <span className="metric-tag">CGPA: 9.1 / 10.0</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass-panel">
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
            
            {/* Hackathon spotlight card */}
            <div className="hackathon-card glass-panel">
              <div className="hackathon-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="var(--secondary)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div className="hackathon-title">Sakthi Hackathon</div>
              <p className="hackathon-desc">Shortlisted for Round 2 in a highly competitive technical environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
