import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const FAVICON_URL = "/favicon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efek transisi background Navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mencegah scroll di background saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-[#030303]/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)} className="relative z-[110]">
            <img src={FAVICON_URL} alt="Crimson Rift" className="h-8 md:h-10 opacity-90 hover:opacity-100 transition-opacity" />
          </Link>

          {/* Desktop Nav (Ultra Minimalist) */}
          <div className="hidden md:flex items-center gap-12">
            {links.map(link => (
              <Link key={link.path} to={link.path} className={`text-[9px] font-black tracking-[0.4em] uppercase transition-all duration-300 hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-gray-600'}`}>
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/6281398621530" target="_blank" rel="noreferrer" className="group relative px-6 py-3 overflow-hidden rounded-full bg-white text-black font-black text-[9px] tracking-[0.3em] uppercase transition-all hover:scale-105">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Start Project</span>
              <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden relative z-[110] text-white p-2 mix-blend-difference hover:text-red-500 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu (Luxury Style) */}
      <div className={`fixed inset-0 bg-[#030303] z-[105] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center px-8 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-red-600 text-[10px] font-black tracking-[0.5em] uppercase mb-8">Navigation</span>
        
        <div className="flex flex-col space-y-6">
          {links.map((link, i) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              style={{ transitionDelay: `${i * 100}ms` }} 
              className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${location.pathname === link.path ? 'text-white' : 'text-gray-700 hover:text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <a 
          href="https://wa.me/6281398621530" 
          target="_blank" 
          rel="noreferrer" 
          className={`mt-12 py-4 bg-red-600 text-white font-black rounded-full text-center uppercase tracking-widest text-xs transition-all duration-700 delay-500 w-full max-w-xs ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Hubungi Kami
        </a>
      </div>
    </>
  );
}