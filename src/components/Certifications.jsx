import React, { useState, useEffect } from 'react';
import './Certifications.css';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/certifications');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setCertifications(data);
      } catch (err) {
        console.error('Error fetching certs, using fallback', err);
        setCertifications([
          { title: 'Node.js & Express.js', issuer: 'Infosys Springboard' },
          { title: 'MongoDB Basics', issuer: 'MongoDB University' },
          { title: 'Cisco Python Essentials & Cybersecurity', issuer: 'Cisco' },
          { title: 'AWS Cloud Practitioner (Foundations)', issuer: 'Amazon Web Services' },
          { title: 'TCS iON Career Edge – Young Professional', issuer: 'TCS iON' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCerts();
  }, []);

  return (
    <section id="certifications" className="section">
      <div className="certs-container">
        <h2 className="section-title">Certifications</h2>

        {loading ? (
          <div className="certs-loading">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div key={cert._id || idx} className="cert-card glass-panel">
                <div className="cert-badge">
                  <svg viewBox="0 0 24 24" width="30" height="30" stroke="var(--secondary)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="cert-info">
                  <h3 className="cert-title-text">{cert.title}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
