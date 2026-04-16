import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = "/logo/logo-crimson-rift-studio.png";

export default function Home() {
  return (
    <div className="flex flex-col animate-fadeIn">
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-[#0a0a0a] to-[#0a0a0a] z-0"></div>
        <div className="z-10 flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            {/* Ukuran logo diperkecil di sini (h-24 md:h-32) */}
            <img src={LOGO_URL} alt="Logo" className="relative w-auto h-54 md:h-72 object-contain mb-8 animate-[pulse_4s_ease-in-out_infinite]" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">EXCELLENCE</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Satu solusi untuk semua kebutuhan digital. Kami ahlinya dalam Website, Desain, Fotografi, Videografi, dan Manajemen Sosial Media.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link to="/services" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-3 group">
              Jelajahi Layanan <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full bg-red-600 py-4 overflow-hidden flex whitespace-nowrap shadow-[0_0_20px_rgba(220,38,38,0.15)] relative z-10">
        <div className="animate-marquee inline-block text-white font-black tracking-widest uppercase text-sm md:text-base">
          {Array(6).fill("• WEBSITE & SEO • LOGO & BRANDING • PHOTOGRAPHY • VIDEOGRAPHY • SOSMED MANAGER • DIGITAL ADS ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}