import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
      <div className="max-w-[90rem] mx-auto flex flex-col items-center">
        <h2 className="text-[12vw] md:text-[8rem] font-black text-white/5 tracking-tighter leading-none mb-12 select-none text-center">
          CRIMSON RIFT.
        </h2>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          <div className="flex gap-8 text-[9px] font-black tracking-[0.3em] text-gray-500 uppercase">
            <Link className="hover:text-white transition-colors" to="/services">Services</Link>
            <Link className="hover:text-white transition-colors" to="/gallery">Gallery</Link>
            <Link className="hover:text-white transition-colors" to="/about">About</Link>
          </div>
          <p className="text-[9px] text-gray-600 tracking-[0.3em] uppercase">© {new Date().getFullYear()} Crimson Rift Studio</p>
        </div>
      </div>
    </footer>
  );
}