import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app" style={{ backgroundColor: '#0a0a0c', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <AboutMe />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
