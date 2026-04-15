import { motion } from 'framer-motion';

const competencies = [
  { label: 'Web Development', level: 85 },
  { label: 'Mobile App Development', level: 78 },
  { label: 'Software Development', level: 80 },
  { label: 'Console-Based Dev', level: 88 },
  { label: 'Computer Sys Servicing', level: 75, note: '80-hr immersion' },
  { label: 'Ethical Hacking', level: 60, note: 'Beginner-Intermediate' },
];

const languages = ['C', 'Java', 'Python', 'JavaScript', 'Node.js', 'NestJS', 'Express.js', 'React', 'PHP', 'Bootstrap', 'HTML', 'CSS', 'MySQL', 'SQLite', 'MongoDB', 'PostgreSQL'];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2 sm:gap-3">
          <span className="text-[#ff003c] glitch bg-[#ff003c]/10 border border-[#ff003c]/20 px-2 py-0.5 text-base rounded-sm" data-text="02">02</span>
          <span className="text-zinc-600">&gt;</span>
          <span className="text-white">SYS_CAPABILITIES</span>
        </h2>
        <span className="text-[#00ff41]/40 text-sm hidden sm:block">usr/local/bin/scan-ports</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-box p-6 sm:p-8"
        >
          <div className="flex justify-between items-end border-b border-white/10 pb-2 mb-6">
            <h3 className="uppercase text-sm font-bold text-zinc-500 tracking-widest">Core_Modules.exe</h3>
            <span className="text-xs text-[#00ff41]/50">[MEMORY: OK]</span>
          </div>
          
          <div className="space-y-6">
            {competencies.map((c, i) => (
              <div key={c.label}>
                <div className="flex justify-between items-start text-sm mb-2 gap-2">
                  <span className="font-bold text-zinc-300 min-w-0">{c.label}{c.note && <span className="block text-zinc-600 text-[10px] font-normal">[{c.note}]</span>}</span>
                  <span className="text-[#00ff41] flex-shrink-0">{c.level}%</span>
                </div>
                <div className="h-2 bg-white/[0.06] relative overflow-hidden rounded-sm">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-[#00ff41] shadow-[0_0_10px_#00ff41,_0_0_22px_rgba(0,255,65,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-box p-6 sm:p-8"
        >
          <div className="flex justify-between items-end border-b border-white/10 pb-2 mb-6">
            <h3 className="uppercase text-sm font-bold text-zinc-500 tracking-widest">Languages_&_Frameworks.lib</h3>
            <span className="text-xs text-[#00aaff] animate-pulse">Scanning...</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {languages.map((l, i) => (
              <motion.div 
                key={l} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="border border-white/10 p-2 text-center text-sm bg-black/40 hover:bg-[#00ff41]/20 hover:border-[#00ff41] text-zinc-300 hover:text-[#00ff41] transition-all cursor-crosshair relative group rounded-sm"
              >
                <div className="absolute inset-0 bg-[#00ff41]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">{l}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-black/50 border border-[#ff003c]/30 text-xs text-[#ff003c] rounded-sm">
            <span className="block mb-1 font-bold">WARNING:</span>
            Payloads optimized for cross-platform execution. High capability detected.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
