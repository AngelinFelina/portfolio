import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Languages', 'Web Development', 'Database', 'Cloud & Tools'];

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/skills');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setSkills(data);
      } catch (err) {
        console.error('Error fetching skills, using local fallback', err);
        setSkills([
          // Languages
          { name: 'JavaScript', category: 'Languages', level: 90 },
          { name: 'Java', category: 'Languages', level: 85 },
          { name: 'Python', category: 'Languages', level: 80 },
          { name: 'C++', category: 'Languages', level: 75 },
          { name: 'C', category: 'Languages', level: 70 },
          // Web Development
          { name: 'React.js', category: 'Web Development', level: 90 },
          { name: 'Node.js', category: 'Web Development', level: 85 },
          { name: 'Express.js', category: 'Web Development', level: 85 },
          { name: 'HTML5 & CSS3', category: 'Web Development', level: 95 },
          { name: 'Bootstrap', category: 'Web Development', level: 80 },
          // Databases
          { name: 'MongoDB', category: 'Database', level: 85 },
          { name: 'MySQL', category: 'Database', level: 80 },
          // Cloud & Tools
          { name: 'Git & GitHub', category: 'Cloud & Tools', level: 90 },
          { name: 'AWS', category: 'Cloud & Tools', level: 75 },
          { name: 'Postman', category: 'Cloud & Tools', level: 85 },
          { name: 'VS Code', category: 'Cloud & Tools', level: 90 },
          { name: 'SQL Workbench', category: 'Cloud & Tools', level: 80 }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        {/* Tab Controls */}
        <div className="skills-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`skills-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {loading ? (
          <div className="skills-loading">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="skills-grid">
            {filteredSkills.map((skill, idx) => (
              <div key={skill._id || idx} className="skill-card glass-panel">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
