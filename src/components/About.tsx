import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-2 sm:gap-3">
          <span className="text-[#ff003c] glitch bg-[#ff003c]/10 border border-[#ff003c]/20 px-2 py-0.5 text-base rounded-sm" data-text="01">01</span>
          <span className="text-zinc-600">&gt;</span>
          <span className="text-white">TARGET_PROFILE</span>
        </h2>
        <span className="text-[#00ff41]/40 text-sm hidden sm:block">usr/local/bin/whoami</span>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-box p-6 sm:p-8 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-[#00ff41]/30 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#00aaff]">
              <span className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse"></span>
              CONNECTION_SECURE
            </div>
            <span className="text-xs text-[#00ff41]/50">ENCRYPTION: AES-256</span>
          </div>

          <div className="space-y-4">
            <p className="leading-relaxed text-zinc-400 text-sm sm:text-base border-l-2 border-[#00ff41]/50 pl-4">
              I am continuously improving my skills in both frontend and backend development, building real-world projects that solve practical problems.
            </p>
            <p className="leading-relaxed text-zinc-400 text-sm sm:text-base border-l-2 border-[#00aaff]/50 pl-4">
              My passion lies in crafting secure, scalable applications — from mobile apps and console systems to full-stack web platforms. I thrive on learning new technologies and applying them creatively.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 text-sm">
            <div className="bg-black/40 p-4 border border-white/10 rounded-sm">
              <span className="text-zinc-500 text-xs block mb-1">LOCATION</span>
              <span className="font-bold text-zinc-200">Philippines</span>
            </div>
            <div className="bg-black/40 p-4 border border-white/10 rounded-sm">
              <span className="text-zinc-500 text-xs block mb-1">EDUCATION</span>
              <span className="font-bold text-zinc-200">Computer Science</span>
            </div>
            <div className="bg-black/40 p-4 border border-white/10 rounded-sm">
              <span className="text-zinc-500 text-xs block mb-1">CLEARANCE</span>
              <span className="font-bold text-[#ff003c]">LEVEL_3</span>
            </div>
            <div className="bg-black/40 p-4 border border-white/10 rounded-sm">
              <span className="text-zinc-500 text-xs block mb-1">STATUS</span>
              <span className="font-bold text-[#00ff41] blinking-cursor">ACTIVE</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cyber-box p-6 relative flex flex-col items-center justify-center font-mono text-[#00ff41]/40 h-full min-h-[300px] hidden lg:flex"
        >
          {/* Cyber Radar / Target Acquisition Display */}
          <svg viewBox="0 0 200 200" className="w-full h-full max-w-[260px]">
            <defs>
              <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="centerGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <path id="orbitMid" d="M 100,35 A 65,65 0 0 1 100,165 A 65,65 0 0 1 100,35" />
              <path id="orbitInner" d="M 100,58 A 42,42 0 0 1 100,142 A 42,42 0 0 1 100,58" />
            </defs>

            {/* Corner bracket markers */}
            <path d="M 6 18 L 6 6 L 18 6" fill="none" stroke="#00ff41" strokeWidth="1.2" opacity="0.7" />
            <path d="M 182 6 L 194 6 L 194 18" fill="none" stroke="#00ff41" strokeWidth="1.2" opacity="0.7" />
            <path d="M 6 182 L 6 194 L 18 194" fill="none" stroke="#00ff41" strokeWidth="1.2" opacity="0.7" />
            <path d="M 182 194 L 194 194 L 194 182" fill="none" stroke="#00ff41" strokeWidth="1.2" opacity="0.7" />

            {/* Outer ring — slow CW spin */}
            <circle cx="100" cy="100" r="88" fill="none" stroke="#00ff41" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.4"
              className="origin-center animate-[spin_20s_linear_infinite]" />

            {/* Middle ring — CCW spin */}
            <circle cx="100" cy="100" r="65" fill="none" stroke="#00aaff" strokeWidth="0.8" strokeDasharray="6 10" opacity="0.5"
              className="origin-center animate-[spin_12s_linear_infinite_reverse]" />

            {/* Inner ring — faster CW spin */}
            <circle cx="100" cy="100" r="42" fill="none" stroke="#ff003c" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4"
              className="origin-center animate-[spin_8s_linear_infinite]" />

            {/* Background hexagon — very faint */}
            <polygon points="100,35 156.3,67.5 156.3,132.5 100,165 43.7,132.5 43.7,67.5"
              fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.1"
              className="origin-center animate-[spin_40s_linear_infinite_reverse]" />

            {/* Radar sweep — animateTransform ensures correct pivot */}
            <g>
              <path d="M 100 100 L 100 12 A 88 88 0 0 1 144 23.8 Z" fill="#00ff41" opacity="0.07" />
              <line x1="100" y1="100" x2="100" y2="12" stroke="#00ff41" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
            </g>

            {/* Static cardinal tick marks */}
            <line x1="100" y1="8" x2="100" y2="17" stroke="#00ff41" strokeWidth="1.5" opacity="0.8" />
            <line x1="100" y1="183" x2="100" y2="192" stroke="#00ff41" strokeWidth="1.5" opacity="0.8" />
            <line x1="8" y1="100" x2="17" y2="100" stroke="#00ff41" strokeWidth="1.5" opacity="0.8" />
            <line x1="183" y1="100" x2="192" y2="100" stroke="#00ff41" strokeWidth="1.5" opacity="0.8" />

            {/* 45° diagonal tick marks */}
            <line x1="162.2" y1="37.8" x2="157.5" y2="42.5" stroke="#00ff41" strokeWidth="1" opacity="0.4" />
            <line x1="37.8" y1="37.8" x2="42.5" y2="42.5" stroke="#00ff41" strokeWidth="1" opacity="0.4" />
            <line x1="162.2" y1="162.2" x2="157.5" y2="157.5" stroke="#00ff41" strokeWidth="1" opacity="0.4" />
            <line x1="37.8" y1="162.2" x2="42.5" y2="157.5" stroke="#00ff41" strokeWidth="1" opacity="0.4" />

            {/* Targeting crosshair with center gap */}
            <line x1="100" y1="60" x2="100" y2="78" stroke="#00ff41" strokeWidth="1.2" opacity="0.9" filter="url(#glow)" />
            <line x1="100" y1="122" x2="100" y2="140" stroke="#00ff41" strokeWidth="1.2" opacity="0.9" filter="url(#glow)" />
            <line x1="60" y1="100" x2="78" y2="100" stroke="#00ff41" strokeWidth="1.2" opacity="0.9" filter="url(#glow)" />
            <line x1="122" y1="100" x2="140" y2="100" stroke="#00ff41" strokeWidth="1.2" opacity="0.9" filter="url(#glow)" />

            {/* Diagonal targeting notches */}
            <line x1="122" y1="78" x2="130" y2="70" stroke="#00aaff" strokeWidth="0.8" opacity="0.6" />
            <line x1="78" y1="78" x2="70" y2="70" stroke="#00aaff" strokeWidth="0.8" opacity="0.6" />
            <line x1="122" y1="122" x2="130" y2="130" stroke="#00aaff" strokeWidth="0.8" opacity="0.6" />
            <line x1="78" y1="122" x2="70" y2="130" stroke="#00aaff" strokeWidth="0.8" opacity="0.6" />

            {/* Orbiting satellite — cyan, CW on middle ring */}
            <circle r="3" fill="#00aaff" opacity="0.9" filter="url(#glow)">
              <animateMotion dur="8s" repeatCount="indefinite">
                <mpath href="#orbitMid" />
              </animateMotion>
            </circle>

            {/* Orbiting satellite — red, CCW on inner ring */}
            <circle r="2" fill="#ff003c" opacity="0.85" filter="url(#glow)">
              <animateMotion dur="5s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#orbitInner" />
              </animateMotion>
            </circle>

            {/* Triangle with cross at centroid */}
            <g className="animate-pulse">
              <polygon points="100,70 126,115 74,115" fill="none" stroke="#ff003c" strokeWidth="1.5" opacity="0.8" />
              <line x1="93" y1="100" x2="107" y2="100" stroke="#00ff41" strokeWidth="1.5" opacity="0.9" />
              <line x1="100" y1="93" x2="100" y2="107" stroke="#00ff41" strokeWidth="1.5" opacity="0.9" />
            </g>

            {/* Center target rings */}
            <circle cx="100" cy="100" r="15" fill="none" stroke="#00aaff" strokeWidth="0.8" opacity="0.35" />
            <circle cx="100" cy="100" r="8" fill="none" stroke="#00ff41" strokeWidth="1" opacity="0.6" />
            <circle cx="100" cy="100" r="2.5" fill="#00ff41" filter="url(#centerGlow)" />

            {/* Data readout labels */}
            <text x="10" y="27" fontSize="5" fill="#00ff41" opacity="0.55" fontFamily="monospace">SIG:-78dBm</text>
            <text x="145" y="27" fontSize="5" fill="#00aaff" opacity="0.55" fontFamily="monospace">LOCK:ON</text>
            <text x="10" y="177" fontSize="5" fill="#00ff41" opacity="0.45" fontFamily="monospace">ID:0x4F3A</text>
            <text x="190" y="177" fontSize="5" fill="#00aaff" opacity="0.45" fontFamily="monospace" textAnchor="end">PKT:OK</text>
          </svg>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="text-[10px] font-bold text-[#00aaff] bg-[#050505]/80 backdrop-blur-sm px-3 py-1 border border-[#00aaff]/30 rounded-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] inline-block animate-pulse" />
              NODE_UPLINK_ESTABLISHED
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
