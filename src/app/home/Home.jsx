import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, MoveRight } from 'lucide-react';

// Animasi Mulus
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

// Menghitung pecahan kaca (Grid 8x8 = 64 serpihan lebih detail)
const SHATTER_GRID = 8;
const SHATTER_PIECES = Array.from({ length: SHATTER_GRID * SHATTER_GRID }).map((_, i) => {
  const col = i % SHATTER_GRID;
  const row = Math.floor(i / SHATTER_GRID);
  const centerX = SHATTER_GRID / 2 - 0.5;
  const centerY = SHATTER_GRID / 2 - 0.5;
  // Daya ledak
  const dx = (col - centerX) * (Math.random() * 200 + 80);
  const dy = (row - centerY) * (Math.random() * 200 + 80);
  const r = (Math.random() - 0.5) * 1080;
  return { col, row, dx, dy, r };
});

export default function Home() {
  const [activeHoverBg, setActiveHoverBg] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(800); // Tinggi viewport default

  // Efek memantau posisi scroll dan ukuran layar (Responsif)
  useEffect(() => {
    // Ambil tinggi layar asli pengguna
    setVh(window.innerHeight);
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // ---------------------------------------------------------
  // TIMELINE ANIMASI MATEMATIS (Pasti dan Presisi)
  // ---------------------------------------------------------
  
  // FASE 1: Logo meledak dan hilang (Scroll 0 hingga 1x tinggi layar)
  const shatterProgress = Math.min(Math.max(scrollY / vh, 0), 1);
  
  // JEDA KOSONG DARI (1x vh HINGGA 2x vh)
  
  // FASE 2: Teks muncul (Dimulai dari scroll 2x tinggi layar hingga 3x tinggi layar)
  const textRevealProgress = Math.min(Math.max((scrollY - (vh * 2)) / vh, 0), 1);

  const services = [
    { id: '01', title: 'Web Architecture', desc: 'Digital presence engineered for performance and conversion.', path: '/services/web-development', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop' },
    { id: '02', title: 'Brand Identity', desc: 'Timeless visual systems that command respect and authority.', path: '/services/logo-branding', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop' },
    { id: '03', title: 'Cinematography', desc: 'Visual storytelling that freezes time and evokes emotion.', path: '/services/photography-videography', img: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2000&auto=format&fit=crop' },
    { id: '04', title: 'Growth & Ads', desc: 'Data-driven advocacy to scale your business exponentially.', path: '/services/social-media', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop' }
  ];

  return (
    // FIX BUG PENTING: overflow-x-hidden DIHAPUS dari wrapper parent agar Sticky tidak mati!
    <div className="bg-[#030303] relative transition-colors duration-1000">
      
      {/* Background Dinamis saat Hover Layanan */}
      <div 
        className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${activeHoverBg ? 'opacity-30' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${activeHoverBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(50%) blur(4px)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-[#030303]/40"></div>
      </div>

      {/* 1. EPIC HERO SECTION (Tinggi 400vh untuk menampung timeline 4 Fase) */}
      <section className="h-[400vh] relative z-10 bg-[#030303]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6">
          
          {/* Glow Merah Latar Belakang */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

          {/* FIX BUG HORIZONTAL SCROLL: Overflow dipindah ke wrapper absolute ini agar Sticky aman */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
            {/* FASE 1: EFEK SHATTER LOGO SVG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {SHATTER_PIECES.map((piece, i) => (
                <div
                  key={i}
                  className="absolute drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                  style={{
                    width: `${100 / SHATTER_GRID}%`,
                    height: `${100 / SHATTER_GRID}%`,
                    left: `${piece.col * (100 / SHATTER_GRID)}%`,
                    top: `${piece.row * (100 / SHATTER_GRID)}%`,
                    backgroundImage: `url('/logo/logo-crimson-rift-studio.svg')`,
                    backgroundSize: `${SHATTER_GRID * 100}% ${SHATTER_GRID * 100}%`,
                    backgroundPosition: `${piece.col * (100 / (SHATTER_GRID - 1))}% ${piece.row * (100 / (SHATTER_GRID - 1))}%`,
                    backgroundRepeat: 'no-repeat',
                    opacity: Math.max(1 - shatterProgress * 1.5, 0), // Pudar dan hilang
                    transform: `
                      translate(${piece.dx * shatterProgress}px, ${piece.dy * shatterProgress}px) 
                      rotate(${piece.r * shatterProgress}deg) 
                      scale(${1 - shatterProgress * 0.5})
                    `,
                    willChange: 'transform, opacity'
                  }}
                />
              ))}
            </div>
          </div>

          {/* FASE 2: TEKS NAIK DARI BAWAH (Dijamin muncul pada Scroll Fase 3) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-30"
            style={{
              opacity: textRevealProgress,
              // Teks naik dari bawah layar (100px) ke titik tengah (0px)
              transform: `translateY(${100 * (1 - textRevealProgress)}px) scale(${0.95 + 0.05 * textRevealProgress})`
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-red-600"></div>
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.5em] text-red-500 uppercase">
                Creative Digital Agency
              </span>
              <div className="w-12 h-[1px] bg-red-600"></div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase mb-6 drop-shadow-2xl">
              We Engineer <br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">Legacies.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed mx-auto px-4">
              Kami tidak sekadar mendesain; kami menerjemahkan visi Anda menjadi mahakarya visual dan ekosistem digital yang mendominasi pasar.
            </p>
          </div>

          {/* Indikator Panah Bawah - Hilang seketika saat mulai scroll sedikit */}
          <div className="absolute bottom-10 flex items-center justify-center w-full pointer-events-none" style={{ opacity: Math.max(1 - (scrollY / (vh * 0.2)), 0) }}>
            <ArrowDown className="text-gray-600 animate-bounce" size={24} />
          </div>

        </div>
      </section>

      <div className="relative z-10 pt-20">
        {/* 2. Visual Story Grid */}
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[100rem] mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Narasi <span className="text-red-600 italic">Visual.</span></h2>
              <p className="text-gray-400 mt-4 max-w-xl font-light leading-relaxed">Setiap piksel dan frame yang kami ciptakan memiliki cerita, emosi, dan tujuan strategis yang jelas.</p>
            </div>
          </Reveal>

          {/* Tinggi solid untuk mencegah gambar terpotong */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[600px] md:h-[600px]">
            <Reveal delay={100} duration={1500} y={50} className="md:col-span-8 h-[400px] md:h-full">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000" alt="Excellence" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-8 md:bottom-12 md:left-12">
                  <span className="text-red-500 text-[9px] font-black tracking-[0.4em] uppercase mb-3 block">Estetika Maksimal</span>
                  <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">Menembus <br/> Batas Wajar.</h3>
                </div>
              </div>
            </Reveal>
            
            <div className="md:col-span-4 flex flex-col gap-6 h-full">
              <Reveal delay={200} duration={1500} y={50} className="flex-1 min-h-[250px] md:min-h-0 h-full">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000" alt="Code" className="w-full h-full object-cover filter saturate-0 group-hover:saturate-100 group-hover:scale-110 transition-all duration-[1500ms]" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-lg font-black text-white uppercase tracking-wider">Kode Presisi</h3>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300} duration={1500} y={50} className="flex-1 min-h-[250px] md:min-h-0 h-full">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group bg-red-900 flex items-center justify-center p-8 text-center border border-red-500/30 shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.5),transparent)]"></div>
                  <p className="relative z-10 text-white font-medium italic text-lg leading-relaxed">
                    "Karya kami adalah jembatan antara imajinasi dan realitas."
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Interactive Services Hub */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[100rem] mx-auto border-t border-white/5 relative z-10 overflow-hidden">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                The <br/> <span className="text-gray-700">Expertise.</span>
              </h2>
              <Link to="/services" className="group flex items-center gap-4 text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase text-white hover:text-red-500 transition-colors">
                Explore All 
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all">
                  <ArrowDown size={14} className="-rotate-90"/>
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {services.map((srv, i) => (
              <Reveal key={srv.id} delay={i * 100}>
                <Link 
                  to={srv.path} 
                  className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:border-red-600 transition-colors relative"
                  onMouseEnter={() => setActiveHoverBg(srv.img)}
                  onMouseLeave={() => setActiveHoverBg(null)}
                >
                  <div className="flex flex-col md:w-2/3">
                    <span className="text-red-600 text-[10px] font-black tracking-widest mb-4 block">{srv.id}</span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter group-hover:translate-x-6 transition-transform duration-500">{srv.title}</h3>
                  </div>
                  <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end md:w-1/3">
                    <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed md:text-right group-hover:text-gray-300 transition-colors">{srv.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-red-500 uppercase opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                      Selengkapnya <MoveRight size={14} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}