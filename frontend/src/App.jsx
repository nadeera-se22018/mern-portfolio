import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="portfolio-app">
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
