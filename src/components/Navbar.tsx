import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home',     id: 'home' },
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Stack',    id: 'techstack' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact',  id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    setMenuOpen(false);
    setTimeout(() => window.scrollTo({ top, behavior: 'smooth' }), 50);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-8 sm:px-14 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 font-bold tracking-widest uppercase whitespace-nowrap group">
            <span className="flex items-center justify-center w-7 h-7 border border-[#00ff41]/40 bg-[#00ff41]/10 rounded-sm group-hover:bg-[#00ff41]/20 group-hover:border-[#00ff41]/70 transition-all duration-200 flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,2 22,20 2,20" fill="none" stroke="#ff003c" strokeWidth="1.8" strokeLinejoin="round"/>
                <line x1="8.5" y1="14" x2="15.5" y2="14" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="12" y1="10.5" x2="12" y2="17.5" stroke="#00ff41" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="hidden sm:inline text-sm text-zinc-300 group-hover:text-white transition-colors duration-200">
              sys<span className="text-zinc-600">@</span>mr-cipher<span className="text-[#00ff41]">:~#</span><span className="text-[#00ff41] blinking-cursor"></span>
            </span>
            <span className="sm:hidden text-sm text-zinc-300">mr-jltc<span className="text-[#00ff41]">:~#</span></span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 text-[0.8rem] font-mono transition-all whitespace-nowrap rounded-md ${
                  active === id
                    ? 'bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5 border border-transparent'
                }`}
              >
                {label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-1.5 rounded-sm border transition-all duration-200 ${
              menuOpen
                ? 'text-[#00ff41] border-[#00ff41]/40 bg-[#00ff41]/10'
                : 'text-zinc-400 border-transparent hover:text-white hover:border-white/20 hover:bg-white/5'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#050505]/98 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            {/* Menu header */}
            <div className="px-8 pt-5 pb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                <span className="text-[10px] text-[#00ff41]/50 font-mono tracking-[0.2em]">SYS_NAVIGATION</span>
              </div>
              <span className="text-[10px] text-zinc-700 font-mono">{navLinks.length}_MODULES</span>
            </div>

            <div className="px-8 pb-4 flex flex-col gap-1">
              {navLinks.map(({ label, id }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full px-4 py-3 text-sm font-bold tracking-widest transition-all rounded-sm text-left flex items-center gap-3 ${
                      active === id
                        ? 'bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30'
                        : 'text-zinc-500 hover:text-zinc-100 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span className={`text-[10px] font-mono tabular-nums ${
                      active === id ? 'text-[#00ff41]/50' : 'text-zinc-700'
                    }`}>{String(index + 1).padStart(2, '0')}</span>
                    <span className="flex-1">{label.toUpperCase()}</span>
                    {active === id && <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse flex-shrink-0" />}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Menu footer */}
            <div className="px-8 py-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-zinc-700 font-mono">CIPHER_PORTFOLIO_v1.0</span>
              <span className="text-[10px] text-[#00ff41]/30 font-mono">UPLINK::ACTIVE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
