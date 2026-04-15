import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  { id: '0x0A1', name: 'Readify', desc: 'Lightweight Android PDF viewer for reading and managing documents on mobile devices.', status: 'LIVE', type: 'MOBILE', langs: ['Java'], images: ['/images/readify/669046326_35003655982613930_3477266724580271484_n.jpg', '/images/readify/669051485_1699917171451210_7072478993961894641_n.jpg', '/images/readify/669993460_1292245052846403_7135353248958328550_n.jpg'] },
  { id: '0x0A2', name: 'Fintract', desc: 'Dual-platform financial tracker for personal budgeting and expense monitoring (Console + Android).', status: 'LIVE', type: 'MOBILE', langs: ['Java'], images: ['/images/fintract/338902480-5bf87c01-6305-494b-8267-158959faa49e.png', '/images/fintract/339228588-157f1f91-fee4-4f73-b4a4-67f40f7bee30.png'] },
  { id: '0x0A3', name: 'ShadowCrypt', desc: 'Cipher system supporting Shift, Vigenère, and Vernam encryption algorithms.', status: 'LIVE', type: 'SYSTEM', langs: ['Java'], images: ['/images/ShadowCrypt/mobile1.png', '/images/ShadowCrypt/mobile2.jpg', '/images/ShadowCrypt/mobile3.jpg'] },
  { id: '0x0A4', name: 'CyberZone', desc: 'Console-based POS system with an integrated AI chatbot for order assistance and inventory management.', status: 'LIVE', type: 'SYSTEM', langs: ['C'], images: ['/images/CyberZone/250027445-74371fa8-5501-4776-9759-4002d7861069.png', '/images/CyberZone/250027500-6382e077-7aa3-4008-80ff-514eb884c75a.png', '/images/CyberZone/250027603-8cd3146f-9b67-4221-8290-f038bc211090.png', '/images/CyberZone/250027677-0781c00b-3ae7-4fac-a4e1-1441cb6eca3d.png'] },
  { id: '0x0B1', name: 'SFSEAS', desc: 'Student Faculty Schedule & Attendance System built with Java Swing for institutional use.', status: 'PRIVATE', type: 'SYSTEM', langs: ['Java'], images: [] },
  { id: '0x0B2', name: 'Monkey Detection', desc: 'TensorFlow Lite Android classifier for real-time monkey species identification using on-device ML.', status: 'PRIVATE', type: 'MOBILE', langs: ['Java', 'Python'], images: [] },
  { id: '0x0B3', name: 'SGLF Scanner', desc: 'Android-based student gadget detection and logging system for campus compliance monitoring.', status: 'PRIVATE', type: 'MOBILE', langs: ['Java', 'Python'], images: [] },
  { id: '0x0C1', name: 'Memory Quest', desc: 'A mobile-friendly memory card matching game with timed challenges and score tracking.', status: 'LIVE', type: 'MOBILE', langs: ['Java', 'HTML', 'CSS', 'JS'], images: ['/images/Memory%20Quest/mr-jltc.github.io_Memory_Card-Game_(iPhone%20XR).png', '/images/Memory%20Quest/mr-jltc.github.io_Memory_Card-Game_(iPhone%20XR)%20(1).png', '/images/Memory%20Quest/mr-jltc.github.io_Memory_Card-Game_(iPhone%20XR)%20(2).png', '/images/Memory%20Quest/mr-jltc.github.io_Memory_Card-Game_(iPhone%20XR)%20(3).png'] },
  { id: '0x0C2', name: 'Queueing System', desc: 'Web-based queue management platform with real-time ticketing, status tracking, and admin dashboard.', status: 'PENDING', type: 'WEB', langs: ['MySQL', 'NestJS', 'ReactJS'], images: [] },
  { id: '0x0D1', name: 'Phonebook Desktop', desc: 'A JavaFX desktop application for managing personal and professional contacts with full CRUD operations, real-time search filtering, and local SQLite data persistence.', status: 'LIVE', type: 'SYSTEM', langs: ['Java', 'JavaFX', 'MySQL'], images: [] },
  { id: '0x0D2', name: 'TutorFriends', desc: 'A full-stack web platform connecting students with peer tutors for personalized academic support. Features tutor discovery, session booking, and a review system.', status: 'LIVE', type: 'WEB', url: 'https://tutorfriends.online', langs: ['ReactJS', 'NestJS', 'PostgreSQL'], images: ['/images/TutorFriends/Screenshot_20260415_205311.png', '/images/TutorFriends/Screenshot_20260415_205327.png', '/images/TutorFriends/Screenshot_20260415_205338.png'] },
];

export default function Projects() {
  const [filter, setFilter] = useState('ALL');
  const [viewProject, setViewProject] = useState<(typeof projects)[number] | null>(null);
  const [viewImageIdx, setViewImageIdx] = useState(0);
  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-16">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
        <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2 sm:gap-3">
          <span className="text-[#ff003c] glitch bg-[#ff003c]/10 border border-[#ff003c]/20 px-2 py-0.5 text-base rounded-sm" data-text="04">04</span>
          <span className="text-zinc-600 text-2xl sm:text-3xl">&gt;</span>
          <span className="text-white text-2xl sm:text-3xl">PROJECTS</span>
        </h2>
        <div className="flex flex-wrap gap-2 text-xs font-bold">
          {['ALL', 'WEB', 'MOBILE', 'SYSTEM'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`border px-3 sm:px-4 py-1.5 transition-colors flex-1 sm:flex-none text-center rounded-sm ${filter === f ? 'bg-[#00ff41] text-[#030303] border-[#00ff41]' : 'border-white/10 text-zinc-500 hover:border-[#00ff41] hover:text-[#00ff41] bg-black/40'}`}
            >
              [{f}]
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="cyber-box p-5 sm:p-6 flex flex-col h-full group cursor-crosshair relative"
            >
              <div className="absolute top-1 right-6 text-[0.65rem] font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                TARGET_ID: {p.id}
              </div>
              
              <div className="flex justify-between items-start mb-3 pt-2">
                <h3 className="font-bold text-lg text-white group-hover:text-[#00ff41] transition-colors">{p.name}</h3>
              </div>
              <div className="flex items-center flex-wrap gap-2 mb-4">
                <span className={`text-[0.65rem] px-2 py-0.5 font-bold rounded-sm ${p.status === 'LIVE' ? 'bg-[#00ff41] text-[#030303]' : p.status === 'PRIVATE' ? 'bg-[#ff003c] text-white' : 'bg-yellow-400 text-black'}`}>
                  {p.status}
                </span>
                <span className="text-[0.65rem] border border-white/20 bg-black/40 px-2 py-0.5 text-zinc-400 rounded-sm">
                  {p.type}
                </span>
              </div>
              <p className="text-sm text-zinc-400 flex-1 mb-4 leading-relaxed">{p.desc}</p>
              
              <div className="border-t border-white/10 pt-3 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.langs.map(lang => (
                    <span key={lang} className="text-[0.6rem] font-mono font-bold px-1.5 py-0.5 border border-[#00aaff]/30 text-[#00aaff]/60 bg-[#00aaff]/5 rounded-sm">
                      {lang}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); setViewProject(p); setViewImageIdx(0); }}
                    className="flex-1 text-[0.7rem] font-bold font-mono py-2 border border-white/10 text-zinc-500 hover:border-[#00ff41]/50 hover:text-[#00ff41] hover:bg-[#00ff41]/5 transition-all rounded-sm tracking-widest"
                  >
                    [VIEW_PROJECT]
                  </button>
                  {'url' in p && p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="px-3 py-2 text-[0.7rem] font-bold font-mono border border-white/10 text-zinc-500 hover:border-[#00aaff]/50 hover:text-[#00aaff] hover:bg-[#00aaff]/5 transition-all rounded-sm tracking-widest"
                    >
                      [VISIT]
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {viewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setViewProject(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl cyber-box p-0 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="bg-[#050505] border-b border-white/10 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[#ff003c] font-bold font-mono text-xs shrink-0">{viewProject.id}</span>
                  <span className="text-zinc-300 font-bold font-mono text-sm truncate">{viewProject.name}</span>
                </div>
                <button onClick={() => setViewProject(null)} className="text-zinc-600 hover:text-white transition-colors p-1 shrink-0 ml-3">
                  <X size={16} />
                </button>
              </div>

              {/* Image area */}
              {viewProject.images.length > 0 ? (
                <div className="relative bg-black select-none">
                  <img
                    key={viewImageIdx}
                    src={viewProject.images[viewImageIdx]}
                    alt={`${viewProject.name} screenshot ${viewImageIdx + 1}`}
                    className="w-full max-h-[65vh] object-contain"
                  />
                  {viewProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setViewImageIdx(i => Math.max(0, i - 1))}
                        className={`absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 border bg-black/70 font-mono text-sm transition-all rounded-sm ${
                          viewImageIdx === 0 ? 'border-white/10 text-zinc-700 pointer-events-none' : 'border-white/20 text-white hover:border-[#00ff41] hover:text-[#00ff41]'
                        }`}
                      >&lt;</button>
                      <button
                        onClick={() => setViewImageIdx(i => Math.min(viewProject.images.length - 1, i + 1))}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 border bg-black/70 font-mono text-sm transition-all rounded-sm ${
                          viewImageIdx === viewProject.images.length - 1 ? 'border-white/10 text-zinc-700 pointer-events-none' : 'border-white/20 text-white hover:border-[#00ff41] hover:text-[#00ff41]'
                        }`}
                      >&gt;</button>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-48 bg-black text-zinc-700 font-mono text-xs tracking-widest">
                  [NO_PREVIEW_AVAILABLE]
                </div>
              )}

              {/* Modal footer */}
              <div className="bg-[#050505] border-t border-white/10 px-5 py-2.5 flex items-center justify-between text-[0.65rem] font-mono gap-3">
                <div className="flex gap-1.5 flex-wrap">
                  {viewProject.langs.map(l => (
                    <span key={l} className="px-1.5 py-0.5 border border-[#00aaff]/30 text-[#00aaff]/60 bg-[#00aaff]/5 rounded-sm">{l}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  {viewProject.images.length > 1 && (
                    <span className="text-[#00ff41]/60 tabular-nums">{viewImageIdx + 1}/{viewProject.images.length}</span>
                  )}
                  {'url' in viewProject && viewProject.url && (
                    <a href={viewProject.url} target="_blank" rel="noreferrer" className="text-[#00aaff]/60 hover:text-[#00aaff] transition-colors font-bold">[VISIT_SITE]</a>
                  )}
                  <span className="text-zinc-700 hidden sm:block">CLICK_OUTSIDE TO CLOSE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
