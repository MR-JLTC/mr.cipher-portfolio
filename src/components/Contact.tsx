import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', body: '' });

  return (
    <section id="contact" className="py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2 sm:gap-3">
          <span className="text-[#ff003c] glitch bg-[#ff003c]/10 border border-[#ff003c]/20 px-2 py-0.5 text-base rounded-sm" data-text="06">06</span>
          <span className="text-zinc-600">&gt;</span>
          <span className="text-white">SECURE_COMMS</span>
        </h2>
        <span className="text-[#00ff41]/40 text-sm hidden sm:block">usr/local/bin/ssh-connect</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="cyber-box p-6 sm:p-8 space-y-4">
            <h3 className="font-bold text-zinc-500 border-b border-white/10 pb-2 text-sm uppercase tracking-widest">
              Available_Vectors.log
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Initiate encrypted communication sequence. 
              Direct transmission lines are open. 
              Response time estimated: {'<'} 24 hours.
            </p>
            <div className="space-y-3 font-mono text-sm pt-4">
              <a href="https://facebook.com/MR.JLTC" target="_blank" rel="noreferrer" className="flex items-start gap-2 sm:gap-4 group">
                <span className="w-20 sm:w-24 flex-shrink-0 text-zinc-500 group-hover:text-[#00ff41] transition-colors">FACEBOOK:</span>
                <span className="text-zinc-300 group-hover:text-white transition-colors break-words min-w-0 flex-1">@MR.JLTC</span>
              </a>
              <a href="https://github.com/MR.JLTC" target="_blank" rel="noreferrer" className="flex items-start gap-2 sm:gap-4 group">
                <span className="w-20 sm:w-24 flex-shrink-0 text-zinc-500 group-hover:text-[#00ff41] transition-colors">GITHUB:</span>
                <span className="text-zinc-300 group-hover:text-white transition-colors break-words min-w-0 flex-1">github.com/MR-JLTC</span>
              </a>
              <a href="https://mr-jltc.github.io/JLTC_PORTFOLIO/" target="_blank" rel="noreferrer" className="flex items-start gap-2 sm:gap-4 group">
                <span className="w-20 sm:w-24 flex-shrink-0 text-zinc-500 group-hover:text-[#00ff41] transition-colors">PORTFOLIO:</span>
                <span className="text-zinc-300 group-hover:text-white transition-colors break-words min-w-0 flex-1">mr-jltc.github.io</span>
              </a>
            </div>
          </div>
          
          {/* Decorative Terminal History */}
          <div className="hidden lg:block cyber-box p-4 font-mono text-[0.65rem] text-zinc-600 opacity-80">
            <p className="mb-1 text-zinc-500">{'>'} Running diagnostic checks...</p>
            <p className="mb-1 text-zinc-500">{'>'} Routing through secure proxy [192.168.0.x]</p>
            <p className="mb-1 text-zinc-500">{'>'} Handshake established.</p>
            <p className="animate-pulse text-[#00aaff]">{'>'} Waiting for payload injection...</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-box p-0"
        >
          <div className="bg-[#050505]/80 border-b border-white/10 px-4 py-3 flex items-center justify-between text-xs font-bold text-zinc-500">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff003c]/80 shadow-[0_0_8px_rgba(255,0,60,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#fadb00]/80 shadow-[0_0_8px_rgba(250,219,0,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#00ff41]/80 shadow-[0_0_8px_rgba(0,255,65,0.5)]"></div>
              </div>
              <span className="font-mono tracking-widest uppercase text-xs">Terminal - Mail_Client</span>
            </div>
          </div>
          <form className="p-6 sm:p-8 space-y-5 text-sm font-mono" action="mailto:mr.jltc@example.com" method="get">
            <div>
              <label className="block text-zinc-400 mb-2 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
                {'>'} Input Target Identity
              </label>
              <div className="flex items-center border border-white/10 bg-black/50 focus-within:border-[#00ff41]/50 transition-colors rounded-sm overflow-hidden">
                <span className="px-3 text-zinc-500">ID:</span>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  placeholder="Enter Name / Subject" 
                  className="w-full bg-transparent p-2.5 pl-0 text-zinc-200 focus:outline-none placeholder-zinc-700" 
                />
              </div>
            </div>
            <div>
              <label className="block text-zinc-400 mb-2 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
                {'>'} Inject Payload String
              </label>
              <textarea 
                rows={5} 
                name="body" 
                required 
                value={form.body}
                onChange={(e) => setForm({...form, body: e.target.value})}
                placeholder="Enter encrypted message here..." 
                className="w-full bg-black/50 border border-white/10 p-3 text-zinc-200 focus:outline-none focus:border-[#00ff41]/50 transition-colors placeholder-zinc-700 resize-none rounded-sm" 
              />
            </div>
            <button 
              type="submit" 
              className="bg-[#ff003c]/10 border border-[#ff003c]/50 text-[#ff003c] font-bold w-full py-3 hover:bg-[#ff003c] hover:text-[#050505] transition-all tracking-widest uppercase relative group overflow-hidden rounded-sm"
            >
              <span className="relative z-10">[ INITIATE_TRANSMISSION ]</span>
              <div className="absolute inset-0 bg-[#ff003c] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></div>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
