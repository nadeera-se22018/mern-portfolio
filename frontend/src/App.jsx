import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app" style={{ backgroundColor: '#0a0a0c', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />

      </main>
      <Footer />
    </div>
  );
}

export default App;
