import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const FAVICON_URL = '/favicon.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = useMemo(() => [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/services' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Tentang', path: '/about' },
  ], []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
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
        <div className={`mx-auto flex max-w-[94rem] items-center justify-between rounded-full border px-4 py-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-5 ${
          scrolled
            ? 'border-[#f4ede7]/12 bg-[#070303]/74 shadow-[0_24px_90px_rgba(0,0,0,0.54)] backdrop-blur-2xl'
            : 'border-[#f4ede7]/8 bg-[#f4ede7]/[0.025] backdrop-blur-md'
        }`}>
          <Link to="/" className="group flex items-center gap-3" aria-label="Beranda Crimson Rift Studio">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f4ede7]/12 bg-[#f4ede7]/[0.04] transition-all duration-700 group-hover:border-red-300/35 group-hover:shadow-[0_0_42px_rgba(177,18,38,0.28)]">
              <img src={FAVICON_URL} alt="" className="h-6 w-6 object-contain" />
            </span>
            <span className="hidden text-[10px] font-black uppercase tracking-[0.38em] text-[#f4ede7]/82 sm:block">Crimson Rift</span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-[#f4ede7]/7 bg-black/22 p-1 md:flex">
            {links.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-full px-5 py-3 text-[9px] font-black uppercase tracking-[0.32em] transition-all duration-500 ${active ? 'bg-[#f4ede7] text-[#150507] shadow-[0_0_34px_rgba(244,237,231,0.14)]' : 'text-[#f4ede7]/46 hover:bg-[#f4ede7]/[0.055] hover:text-[#f4ede7]'}`}
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
            className="group hidden items-center gap-2 rounded-full bg-[#f4ede7] px-5 py-3 text-[9px] font-black uppercase tracking-[0.28em] text-[#120506] transition-all duration-700 hover:bg-[#b11226] hover:text-white hover:shadow-[0_0_58px_rgba(177,18,38,0.42)] lg:inline-flex"
          >
            Mulai Brief
          </a>

          <button
            type="button"
            className="relative z-[120] flex h-10 w-10 items-center justify-center rounded-full border border-[#f4ede7]/12 bg-[#f4ede7]/[0.04] text-[#f4ede7] transition-all hover:border-red-300/40 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Buka navigasi"
          >
            {isOpen ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[90] bg-[#030303]/96 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="aurora absolute inset-0 opacity-60" />
        <div className="relative flex h-full flex-col justify-end px-7 pb-12 pt-28">
          <p className="eyebrow mb-8">Ruang Navigasi</p>
          <div className="space-y-3">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 70}ms` }}
                className={`block border-b border-[#f4ede7]/8 py-4 text-5xl font-black uppercase leading-none tracking-tighter transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} ${location.pathname === link.path ? 'text-[#f4ede7]' : 'text-[#f4ede7]/34'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a href="https://wa.me/6281398621530" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center justify-center rounded-full bg-[#f4ede7] px-8 py-5 text-xs font-black uppercase tracking-[0.35em] text-[#120506]">
            Konsultasi Tenang
          </a>
        </div>
      </div>
    </>
  );
}
