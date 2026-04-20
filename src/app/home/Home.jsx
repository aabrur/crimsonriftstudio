import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = "/logo/logo-crimson-rift-studio.png";

export default function Home() {
  // Daftar Client Portofolio
  // Ganti path "logo" dengan nama file logomu nanti setelah diupload ke folder public/clients
  const clients = [
    { name: "0xTanda", logo: "/clients/0xtanda.png" },
    { name: "TK Islam-TPQ Al-Huda", logo: "/clients/tk-alhuda.png" },
    { name: "Lakeswaramoto", logo: "/clients/lakeswaramoto.png" }
  ];

  return (
    <div className="flex flex-col animate-fadeIn">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden pt-24 pb-12">
        {/* Glow background radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-[#0a0a0a] to-[#0a0a0a] z-0"></div>
        
        <div className="z-10 flex flex-col items-center">
          <div className="relative group">
            {/* Glow di balik logo */}
            <div className="absolute -inset-1 bg-red-600 rounded-full blur opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Animasi float */}
            <img 
              src={LOGO_URL} 
              alt="Logo" 
              className="relative w-auto h-54 md:h-72 object-contain mb-8 animate-float" 
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">EXCELLENCE</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Satu solusi untuk semua kebutuhan digital. Kami ahlinya dalam Website, Desain, Fotografi, Videografi, dan Manajemen Sosial Media.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-3 group shadow-lg shadow-red-900/20 hover:-translate-y-1"
            >
              Jelajahi Layanan <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Marquee Banner (Trusted By) */}
      <div className="w-full bg-[#111] border-y border-gray-800 py-10 overflow-hidden relative z-10 flex flex-col items-center">
        <p className="text-gray-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-8">Telah Dipercaya Oleh</p>
        
        {/* Gradient Mask agar logo menghilang secara halus di ujung layar */}
        <div className="absolute left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#111] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#111] to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex whitespace-nowrap w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Di-render 6 kali agar perputarannya (looping) tidak pernah putus */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-around min-w-max">
              {clients.map((client, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center mx-8 md:mx-16 transition-transform duration-500 hover:scale-105 cursor-default">
                  {/* Gambar Logo Client Saja (Sudah Full Color) */}
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-12 md:h-16 w-auto object-contain"
                    /* Kode di bawah ini berguna untuk MENGHILANGKAN icon gambar pecah jika kamu belum mengupload logo clientnya */
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}