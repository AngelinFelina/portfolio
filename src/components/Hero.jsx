import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const roles = ['Full-Stack Developer', 'B.Tech IT Student', 'Software Engineer', 'Problem Solver'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentFullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentFullText) {
          // Pause at the end of typing
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background radial glow */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="hero-content animate-fade-in">
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-title">
          Angelin Felina A<span className="period">.</span>
        </h1>
        <h2 className="hero-subtitle">
          I'm a <span className="typewriter-text">{displayText}</span>
          <span className="typewriter-cursor">|</span>
        </h2>
        <p className="hero-description">
          An engineering student specializing in Information Technology. I build robust web applications
          integrating frontend experiences with scalable backends and database systems.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#projects')}>
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary-outline" onClick={(e) => scrollToSection(e, '#contact')}>
            Get In Touch
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/AngelinFelina" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/angelin-felina-a-8881a1329" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
