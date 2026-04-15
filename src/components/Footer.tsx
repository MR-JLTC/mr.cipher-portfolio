export default function Footer() {
  return (
    <footer className="w-full max-w-6xl px-8 sm:px-14 lg:px-20 border-t border-[#00ff41]/30 py-6 mt-12 text-center text-xs text-[#00ff41]/50 font-mono">
      <p className="blinking-cursor">SYSTEM TERMINATED.</p>
      <p className="mt-2 text-[#00ff41]/30">© {new Date().getFullYear()} Mr. Loyd (MR_JLTC). "Code with passion"</p>
    </footer>
  );
}
