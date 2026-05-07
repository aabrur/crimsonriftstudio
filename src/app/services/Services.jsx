import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, PenTool, Camera, Megaphone, ArrowUpRight } from 'lucide-react';

// Animasi Reveal yang Mulus
function Reveal({ children, delay = 0, duration = 1200, y = 30, className = "" }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.1 });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <div
      ref={domRef}
      className={className}
      style={{ 
        transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
        opacity: isVisible ? 1 : 0,
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const services = [
    { 
      id: 'web', 
      title: "Web Architecture", 
      desc: "Membangun ekosistem digital berkinerja tinggi, landing page teroptimasi, dan platform e-commerce yang mengonversi.", 
      path: "/services/web-development",
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1500&auto=format&fit=crop",
      icon: <Monitor size={24} strokeWidth={1.5} />,
      colSpan: "md:col-span-2 lg:col-span-8" // Card Super Lebar
    },
    { 
      id: 'design', 
      title: "Brand Identity", 
      desc: "Sistem visual, logo, dan filosofi merek yang menanamkan persepsi premium di benak audiens.", 
      path: "/services/logo-branding",
      // FIX: Mengganti URL gambar yang error dengan gambar branding/estetik yang baru dan aman
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
      icon: <PenTool size={24} strokeWidth={1.5} />,
      colSpan: "md:col-span-1 lg:col-span-4" // Card Kotak
    },
    { 
      id: 'multimedia', 
      title: "Lens & Motion", 
      desc: "Sinematografi dan fotografi level atas untuk membekukan emosi dan menceritakan visi brand.", 
      path: "/services/photography-videography",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
      icon: <Camera size={24} strokeWidth={1.5} />,
      colSpan: "md:col-span-1 lg:col-span-5" // Card Sedang
    },
    { 
      id: 'sosmed', 
      title: "Growth Engine", 
      desc: "Strategi konten yang agresif dan manajemen iklan berbayar untuk menskalakan bisnis.", 
      path: "/services/social-media",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1500&auto=format&fit=crop",
      icon: <Megaphone size={24} strokeWidth={1.5} />,
      colSpan: "md:col-span-2 lg:col-span-7" // Card Sedang-Lebar
    }
  ];

  return (
    <div className="bg-[#030303] pt-40 pb-32 min-h-screen">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* HEADER SECTION */}
        <Reveal>
          <div className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div>
              <span className="text-red-600 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-6 block">
                Capabilities
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                The <span className="text-gray-700">Arsenal.</span>
              </h1>
            </div>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg font-light leading-relaxed border-l border-red-600/30 pl-6">
              Kami mempersenjatai bisnis Anda dengan solusi digital end-to-end yang dirancang untuk mendominasi pasar secara elegan.
            </p>
          </div>
        </Reveal>

        {/* BENTO GRID LAYOUT ($10K VIBE) */}
        {/* FIX: Membuang auto-rows, memastikan gap lega (gap-6 md:gap-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {services.map((srv, i) => (
            <Reveal key={srv.id} delay={i * 150} className={`${srv.colSpan}`}>
              
              {/* FIX: Menetapkan tinggi card (h-[400px] / h-[500px]) agar tidak pernah mendempet */}
              <Link 
                to={srv.path} 
                className="block w-full h-[420px] md:h-[500px] rounded-[2.5rem] overflow-hidden relative group border border-white/5 hover:border-red-500/30 hover:shadow-[0_0_80px_rgba(220,38,38,0.15)] transition-all duration-700"
              >
                {/* Background Image - Cinematic Hover */}
                <img 
                  src={srv.img} 
                  alt={srv.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105 transition-all duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                
                {/* Overlay Hitam Halus untuk Visibilitas Teks */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]/95 group-hover:via-[#030303]/20 transition-all duration-700 pointer-events-none"></div>

                {/* Wrapper Konten Internal */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
                  
                  {/* Icon Bulat (Glassmorphism) */}
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-700 shadow-2xl">
                    {srv.icon}
                  </div>
                  
                  {/* Area Teks (Title & Deskripsi Meluncur Naik) */}
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase drop-shadow-2xl">
                      {srv.title}
                    </h2>
                    
                    {/* Paragraf Tersembunyi (Reveal On Hover) */}
                    <div className="overflow-hidden">
                      <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                        {srv.desc}
                      </p>
                    </div>

                    {/* Tombol Panah (Sleek) */}
                    <div className="mt-8 flex items-center gap-3 text-[10px] md:text-xs font-black tracking-[0.3em] text-red-500 uppercase opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-700 delay-100">
                      Lihat Harga & Detail <ArrowUpRight size={18} />
                    </div>
                  </div>

                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        
      </div>
    </div>
  );
}