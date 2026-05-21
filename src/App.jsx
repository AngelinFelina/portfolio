import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="portfolio-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Angelin Felina A. All rights reserved.</p>
          <p className="footer-subtext">Built with React, Express, and MongoDB.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
