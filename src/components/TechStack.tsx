import { motion } from 'framer-motion';

export default function TechStack() {
  return (
    <section id="techstack" className="py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2 sm:gap-3">
          <span className="text-[#ff003c] glitch bg-[#ff003c]/10 border border-[#ff003c]/20 px-2 py-0.5 text-base rounded-sm" data-text="03">03</span>
          <span className="text-zinc-600">&gt;</span>
          <span className="text-white">DEPLOYED_STACKS</span>
        </h2>
        <span className="text-[#00ff41]/40 text-sm hidden sm:block">usr/local/etc/arch.conf</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-box p-0"
        >
          <div className="bg-[#00ff41]/5 text-zinc-300 px-5 sm:px-6 py-2 font-bold flex justify-between border-b border-[#00ff41]/20">
            <span>MERN_ARCH.cfg</span>
            <span className="opacity-50">#01</span>
          </div>
          <div className="p-5 sm:p-7 font-mono text-sm sm:text-base space-y-4">
            {[
              { l: 'M', name: 'MongoDB', role: 'NoSQL' },
              { l: 'E', name: 'Express.js', role: 'Backend' },
              { l: 'R', name: 'React', role: 'Frontend' },
              { l: 'N', name: 'Node.js', role: 'Runtime' }
            ].map((t, i) => (
              <motion.div 
                key={t.l}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 flex-shrink-0 border border-white/10 bg-black/40 flex items-center justify-center font-bold text-xl group-hover:border-[#00ff41] group-hover:text-[#00ff41] transition-colors rounded-sm">{t.l}</div>
                <div className="min-w-0">
                  <div className="font-bold text-zinc-200 group-hover:text-white transition-colors leading-tight">{t.name}</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 leading-tight mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-500 leading-relaxed bg-black/40 p-4 rounded-sm">
              // Ideal for dynamic web applications with real-time capabilities. High throughput detected.
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="cyber-box p-0"
        >
          <div className="bg-[#00aaff]/5 text-zinc-300 px-5 sm:px-6 py-2 font-bold flex justify-between border-b border-[#00aaff]/20">
            <span>PNRN_ARCH.cfg</span>
            <span className="opacity-50">#02</span>
          </div>
          <div className="p-5 sm:p-7 font-mono text-sm sm:text-base space-y-4">
            {[
              { l: 'P', name: 'PostgreSQL', role: 'Relational' },
              { l: 'N', name: 'NestJS', role: 'Backend' },
              { l: 'R', name: 'React', role: 'Frontend' },
              { l: 'N', name: 'Node.js', role: 'Runtime' }
            ].map((t, i) => (
              <motion.div 
                key={t.l}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 flex-shrink-0 border border-white/10 bg-black/40 flex items-center justify-center font-bold text-xl group-hover:border-[#00aaff] group-hover:text-[#00aaff] transition-colors rounded-sm">{t.l}</div>
                <div className="min-w-0">
                  <div className="font-bold text-zinc-200 group-hover:text-white transition-colors leading-tight">{t.name}</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 leading-tight mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-500 leading-relaxed bg-black/40 p-4 rounded-sm">
              // TypeScript-first enterprise-grade stack with structured architecture. Perfect for scalability.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
