import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function useTypewriter(text: string, speed = 30) {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return displayed;
}

export default function Hero() {
  const [bootStep, setBootStep] = useState(0);
  const [sysTime, setSysTime] = useState('');

  useEffect(() => {
    const timers = [
      setTimeout(() => setBootStep(1), 800),
      setTimeout(() => setBootStep(2), 1600),
      setTimeout(() => setBootStep(3), 2200),
    ];
    
    const timeInterval = setInterval(() => {
      const now = new Date();
      setSysTime(now.toISOString().replace('T', ' ').substring(0, 23));
    }, 100);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(timeInterval);
    };
  }, []);

  const introText = " I am a Computer Science student at BISU-Calape aiming to become a full stack developer with a strong focus on cybersecurity.";
  const typedIntro = useTypewriter(bootStep >= 3 ? introText : "", 20);

  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center py-12 relative">
      {/* Background Radar visual */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-30 pointer-events-none hidden lg:block">
        <div className="radar"></div>
        <div className="absolute inset-0 border border-[#00ff41]/20 rounded-full scale-[0.7]"></div>
        <div className="absolute inset-0 border border-[#00ff41]/20 rounded-full scale-[0.4]"></div>
        <div className="absolute w-full h-[1px] bg-[#00ff41]/20 top-1/2"></div>
        <div className="absolute h-full w-[1px] bg-[#00ff41]/20 left-1/2"></div>
        {/* Fake dots */}
        <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full top-[30%] left-[60%] shadow-[0_0_8px_red] animate-pulse"></div>
        <div className="absolute w-1.5 h-1.5 bg-[#00ff41] rounded-full top-[70%] left-[40%] shadow-[0_0_8px_#00ff41] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
        {/* Main Terminal */}
        <div className="cyber-box p-0 z-10">
          <div className="bg-[#050505]/80 border-b border-white/10 px-5 sm:px-8 py-3 flex items-center justify-between text-xs font-bold text-zinc-500">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff003c]/80 shadow-[0_0_8px_rgba(255,0,60,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#fadb00]/80 shadow-[0_0_8px_rgba(250,219,0,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#00ff41]/80 shadow-[0_0_8px_rgba(0,255,65,0.5)]"></div>
              </div>
              <span className="font-mono tracking-widest hidden sm:inline">sys-core-terminal</span>
            </div>
            <span className="flex gap-3 text-zinc-600"><span>_</span><span>□</span><span>X</span></span>
          </div>
          <div className="px-6 sm:px-8 py-5 sm:py-8 text-sm sm:text-base space-y-4">
            <p className="text-zinc-500 font-semibold border-b border-white/10 pb-3 mb-4 text-xs sm:text-sm truncate">
              Linux mr-jltc-sec 6.6.9-amd64 #1 SMP PREEMPT_DYNAMIC
            </p>
            
            <div className="space-y-1 font-mono text-xs sm:text-sm">
              <p>{'>'} ./initialize_system.sh --verbose</p>
              {bootStep >= 1 && <p className="text-green-400">[<span className="text-white"> OK </span>] Loading core modules... [100%]</p>}
              {bootStep >= 2 && <p className="text-green-400">[<span className="text-white"> OK </span>] Establishing secure connection... <span className="text-cyan-400">ESTABLISHED</span></p>}
              {bootStep >= 3 && <p className="text-green-400">[<span className="text-white"> OK </span>] Access granted to primary payload.</p>}
            </div>

            {bootStep >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 space-y-6">
                <div className="border-l-2 border-[#00ff41] pl-4">
                  <span className="text-zinc-500 text-xs uppercase tracking-widest block mb-1">TARGET_IDENTITY</span>
                  <h1 className="inline text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-100 glitch tracking-tighter" data-text="MR. LOYD">MR.LOYD</h1>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm bg-white/[0.02] p-4 border border-white/10 rounded-sm">
                  <div>
                    <span className="text-zinc-500 block text-xs">ALIAS</span>
                    <span className="font-bold text-[#00ff41] tracking-widest">Cipher</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-xs">ROLE</span>
                    <span className="font-semibold text-zinc-300">Full Stack / Cybersec</span>
                  </div>
                </div>
                
                <div className="max-w-2xl text-zinc-400 mt-4 leading-relaxed blinking-cursor min-h-[4rem]">
                  {typedIntro}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row flex-wrap gap-4 text-sm font-bold">
                  <a href="#projects" className="border border-[#00ff41]/50 bg-[#00ff41]/10 px-6 py-3 sm:py-2.5 text-[#00ff41] hover:bg-[#00ff41] hover:text-[#050505] transition-all relative overflow-hidden group text-center rounded-sm">
                    <span className="relative z-10">EXECUTE: VIEW_PROJECTS</span>
                    <div className="absolute inset-0 bg-[#00ff41] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></div>
                  </a>
                  <a href="#contact" className="border border-white/10 bg-white/5 text-zinc-300 px-6 py-3 sm:py-2.5 hover:bg-white/10 hover:text-white transition-all text-center rounded-sm">
                    INITIATE: COMMS
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Side Panel */}
        {bootStep >= 3 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="cyber-box p-5 sm:p-6 text-xs font-mono hidden lg:block"
          >
            <div className="text-[#00aaff] border-b border-[#00aaff]/30 pb-2 mb-3 font-bold">SYS_INFO</div>
            <div className="space-y-2 text-[#00ff41]/80">
              <div className="flex justify-between"><span>TIME:</span><span>{sysTime}</span></div>
              <div className="flex justify-between"><span>UPTIME:</span><span className="text-white">99.9%</span></div>
              <div className="flex justify-between"><span>CPU_TEMP:</span><span className="text-yellow-400">45°C</span></div>
              <div className="flex justify-between"><span>RAM_USE:</span><span>1.2TB / 2.0TB</span></div>
              <div className="flex justify-between"><span>NETWORK:</span><span className="text-[#00ff41] font-bold">SECURE</span></div>
              <div className="pt-2 border-t border-[#00ff41]/20 mt-2">
                <span className="block text-[#00ff41]/50 mb-1">ACTIVE_NODES:</span>
                <div className="grid grid-cols-5 gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`h-2 ${Math.random() > 0.2 ? 'bg-[#00ff41]' : 'bg-red-500'} opacity-80`}></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
