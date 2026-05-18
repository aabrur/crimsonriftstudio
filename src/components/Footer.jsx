import { Link } from 'react-router-dom';
import CrimsonButton from './ui/CrimsonButton.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    ['Layanan', '/services'],
    ['Galeri', '/gallery'],
    ['Tentang', '/about'],
    ['Kontak', '/contact'],
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#f4ede7]/8 bg-[#030303] px-6 py-20 md:px-12 md:py-[7.5rem]">
      <div className="aurora absolute inset-0 opacity-38" />
      <div className="absolute inset-0 crimson-vignette" />
      <div className="relative mx-auto max-w-[94rem]">
        <div className="grid gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">Crimson Rift Studio</p>
            <h2 className="max-w-5xl text-balance text-5xl font-black uppercase leading-[0.86] tracking-tighter text-[#f8eee9] md:text-7xl lg:text-8xl">
              Saat identitas perlu terasa tak tergantikan.
            </h2>
          </div>
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="text-sm leading-7 text-[#f4ede7]/58">
              Kami merancang arah visual, website, dan sistem konten untuk brand yang ingin tampil lebih tenang, lebih tajam, dan lebih bernilai.
            </p>
            <CrimsonButton href="https://wa.me/6281398621530" className="mt-8">Mulai percakapan</CrimsonButton>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-[#f4ede7]/8 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {links.map(([label, path]) => (
              <Link key={path} to={path} className="rounded-full border border-[#f4ede7]/8 px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#f4ede7]/46 transition-all duration-500 hover:border-red-200/35 hover:text-[#f4ede7]">
                {label}
              </Link>
            ))}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#f4ede7]/28">© {year} Crimson Rift Studio</p>
        </div>
      </div>
    </footer>
  );
}
