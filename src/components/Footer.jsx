import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    ['Services', '/services'],
    ['Gallery', '/gallery'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#030303] px-6 py-20 md:px-12 md:py-28">
      <div className="aurora absolute inset-0 opacity-35" />
      <div className="relative mx-auto max-w-[92rem]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">Crimson Rift Studio</p>
            <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-tighter text-white md:text-7xl lg:text-8xl">
              Build something impossible to ignore.
            </h2>
          </div>
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="text-sm leading-7 text-white/55">
              A premium digital atelier for brand systems, cinematic websites, content engines, and conversion-focused launch experiences.
            </p>
            <a href="https://wa.me/6281398621530" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.32em] text-black transition-all duration-500 hover:bg-red-600 hover:text-white hover:shadow-[0_0_50px_rgba(220,38,38,0.32)]">
              Start Project <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/8 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {links.map(([label, path]) => (
              <Link key={path} to={path} className="rounded-full border border-white/8 px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/45 transition-all duration-500 hover:border-red-500/40 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/28">© {year} Crimson Rift Studio</p>
        </div>
      </div>
    </footer>
  );
}
