import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = "/logo/logo-crimson-rift-studio.png";

export default function Home() {
  return (
    <div className="flex flex-col animate-fadeIn">
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden pt-24 pb-12">
        {/* Glow background radial diubah dari /20 ke /10 agar lebih soft */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-[#0a0a0a] to-[#0a0a0a] z-0"></div>
        
        <div className="z-10 flex flex-col items-center">
          <div className="relative group">
            {/* Glow di balik logo diturunkan opacity-nya jadi sangat tipis */}
            <div className="absolute -inset-1 bg-red-600 rounded-full blur opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Animasi diubah dari pulse ke float */}
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

      {/* Marquee Banner */}
      <div className="w-full bg-red-600 py-4 overflow-hidden flex whitespace-nowrap shadow-lg relative z-10">
        <div className="animate-marquee inline-block text-white font-black tracking-widest uppercase text-sm md:text-base">
          {Array(6).fill("• WEBSITE & SEO • LOGO & BRANDING • PHOTOGRAPHY • VIDEOGRAPHY • SOSMED MANAGER • DIGITAL ADS ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}