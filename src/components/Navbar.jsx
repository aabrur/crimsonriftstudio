import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const FAVICON_URL = '/favicon.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ], []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);


  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[100] px-4 pt-4 md:px-8 md:pt-6">
        <div className={`mx-auto flex max-w-[92rem] items-center justify-between rounded-full border px-4 py-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-5 ${
          scrolled
            ? 'border-white/10 bg-[#050505]/72 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
            : 'border-white/5 bg-white/[0.025] backdrop-blur-md'
        }`}>
          <Link to="/" className="group flex items-center gap-3" aria-label="Crimson Rift Studio home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-red-500/40 group-hover:shadow-[0_0_35px_rgba(220,38,38,0.2)]">
              <img src={FAVICON_URL} alt="" className="h-6 w-6 object-contain" />
            </span>
            <span className="hidden text-[10px] font-black uppercase tracking-[0.38em] text-white/80 sm:block">Crimson Rift</span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/5 bg-black/20 p-1 md:flex">
            {links.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full px-5 py-3 text-[9px] font-black uppercase tracking-[0.32em] transition-all duration-500 ${active ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.12)]' : 'text-white/45 hover:bg-white/[0.055] hover:text-white'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <a
            href="https://wa.me/6281398621530"
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-black uppercase tracking-[0.28em] text-black transition-all duration-500 hover:bg-red-600 hover:text-white hover:shadow-[0_0_55px_rgba(220,38,38,0.38)] lg:inline-flex"
          >
            Start Project
            <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            className="relative z-[120] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all hover:border-red-500/40 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[90] bg-[#030303]/96 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="aurora absolute inset-0 opacity-50" />
        <div className="relative flex h-full flex-col justify-end px-7 pb-12 pt-28">
          <p className="eyebrow mb-8">Navigation</p>
          <div className="space-y-3">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 70}ms` }}
                className={`block border-b border-white/8 py-4 text-5xl font-black uppercase leading-none tracking-tighter transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} ${location.pathname === link.path ? 'text-white' : 'text-white/32'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a href="https://wa.me/6281398621530" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-5 text-xs font-black uppercase tracking-[0.35em] text-black">
            Begin a Brief
          </a>
        </div>
      </div>
    </>
  );
}
