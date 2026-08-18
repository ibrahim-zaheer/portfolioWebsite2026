import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyThisMatters from '@/components/WhyThisMatters';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Games from '@/components/Games';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-gray-300 font-sans selection:bg-accent/30 selection:text-white">
      <Hero />
      
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
