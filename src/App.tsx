import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* Add padding top to main to account for fixed navbar height if needed, 
          Bootstrap often handles this with body padding or custom styles.
          Hero is min-vh-100, so it will fill screen below navbar.
          Other sections will flow naturally.
      */}
      <main className="flex-shrink-0">
        <Hero />
        <About />
        <Projects/>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
