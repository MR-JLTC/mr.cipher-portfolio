import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    { name: 'Web Development', desc: 'Full-stack applications and scalable systems (MERN/PNRN).', payload: 'Automated deployment of robust frontend architectures hooked into high-throughput backend services. Emphasis on React and NestJS/Express.', risk: 'CRITICAL' },
    { name: 'Ads Management', desc: 'Digital reconnaissance and targeted campaigns.', payload: 'Execution of precise social media algorithms to identify and exploit target audience demographics for maximum ROI.', risk: 'HIGH' },
    { name: 'System Installation', desc: 'OS configuration, hardening, and hardware deployment.', payload: 'Low-level hardware diagnostics, OS flashing, and network interface configuration for optimal physical performance.', risk: 'MODERATE' },
    { name: 'Software Solutions', desc: 'Custom payloads, desktop apps, and automated tools.', payload: 'Development of bespoke Android applications, Java desktop GUIs, and terminal-based C automation tools.', risk: 'HIGH' },
  ];

  return (
    <section id="services" className="py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2 sm:gap-3">
          <span className="text-[#ff003c] glitch bg-[#ff003c]/10 border border-[#ff003c]/20 px-2 py-0.5 text-base rounded-sm" data-text="05">05</span>
          <span className="text-zinc-600">&gt;</span>
          <span className="text-white">TACTICAL_SERVICES</span>
        </h2>
        <span className="text-[#00ff41]/40 text-sm hidden sm:block">usr/local/bin/deploy</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div 
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="cyber-box cursor-pointer"
            onClick={() => setActiveService(activeService === i ? null : i)}
          >
            <div className={`px-5 sm:px-6 py-4 flex justify-between items-center transition-colors ${activeService === i ? 'bg-[#00ff41]/5' : 'hover:bg-white/5'}`}>
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                <span className="text-[#ff003c] font-bold text-lg">0x0{i+1}</span>
                <span className={`font-bold transition-colors ${activeService === i ? 'text-white' : 'text-zinc-400'}`}>{s.name}</span>
              </div>
              <span className="text-xs opacity-50 font-bold text-zinc-500">[{activeService === i ? '-' : '+'}]</span>
            </div>
            
            <AnimatePresence>
              {activeService === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-black/60 border-t border-white/5 overflow-hidden"
                >
                  <div className="p-5 sm:p-6 space-y-3 font-mono text-sm text-zinc-400">
                    <p>{s.desc}</p>
                    <div className="bg-[#050505] border border-white/10 p-3 text-xs rounded-sm">
                      <span className="block text-[#00aaff] mb-1 font-bold">PAYLOAD_DETAILS:</span>
                      <span className="text-zinc-500">{s.payload}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-2 font-bold">
                      <span>IMPACT: <span className={s.risk === 'CRITICAL' ? 'text-[#ff003c]' : s.risk === 'HIGH' ? 'text-yellow-400' : 'text-[#00aaff]'}>{s.risk}</span></span>
                      <span className="animate-pulse text-[#00ff41]">AVAILABLE</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
