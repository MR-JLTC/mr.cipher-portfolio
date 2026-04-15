import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#00ff41] font-mono crt-flicker relative overflow-hidden">
      <div className="bg-grid"></div>
      <div className="scanlines"></div>
      <div className="relative z-10 flex flex-col items-center min-h-screen">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl px-8 sm:px-14 lg:px-20 pt-20 sm:pt-24 pb-12 space-y-24 sm:space-y-32">
          <Hero />
          <About />
          <div className="h-16" />
          <Skills />
          <div className="h-16" />
          <TechStack />
          <div className="h-16" />
          <Projects />
          <div className="h-16" />
          <Services />
          <div className="h-16" />
          <Contact />
        </main>
        <div className="h-16" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
