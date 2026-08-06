import React, { Suspense } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhyThisMatters from './components/WhyThisMatters';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Games from './components/Games';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-300 font-sans selection:bg-accent/30 selection:text-white">
      {/* We use Suspense to prevent blocking the initial render while the 3D scene loads */}
      <Suspense fallback={<div className="h-screen w-full bg-background flex items-center justify-center text-accent">Loading Experience...</div>}>
        <Hero />
      </Suspense>
      
      <main>
        <About />
        <WhyThisMatters />
        <Skills />
        <Projects />
        <Games />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
