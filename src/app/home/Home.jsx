import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, MoveRight, XCircle, AlertCircle, TrendingDown, Sparkles } from 'lucide-react';

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

// ---------------------------------------------------------
// PENTING: LINK LOGO UNTUK EFEK PECAH (SHATTER)
// ---------------------------------------------------------
const SHATTER_LOGO_URL = '/logo/logo-crimson-rift-studio.svg';

// Menghitung pecahan kaca (Grid 8x8 = 64 serpihan lebih detail)
const SHATTER_GRID = 8;
const SHATTER_PIECES = Array.from({ length: SHATTER_GRID * SHATTER_GRID }).map((_, i) => {
  const col = i % SHATTER_GRID;
  const row = Math.floor(i / SHATTER_GRID);
  const centerX = SHATTER_GRID / 2 - 0.5;
  const centerY = SHATTER_GRID / 2 - 0.5;
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
  // TIMELINE ANIMASI (SESUAI VALIDASI LU)
  // ---------------------------------------------------------
  
  // FASE 1: Logo meledak lebih cepat (selesai di 0.5x tinggi layar)
  const shatterProgress = Math.min(Math.max(scrollY / (vh * 0.5), 0), 1);
  
  // FASE 2: Teks langsung overlap (Mulai dari 0.1x hingga 0.6x)
  const textRevealProgress = Math.min(Math.max((scrollY - (vh * 0.1)) / (vh * 0.5), 0), 1);

  // DATA KELUHAN BISNIS (THE PAIN POINTS)
  const painPoints = [
    { 
      id: '01', 
      title: 'Jebakan Estetika', 
      desc: 'Membakar anggaran puluhan juta untuk desain cantik yang lambat, berat, dan gagal mengkonversi pengunjung menjadi pelanggan setia.', 
      icon: <XCircle size={32} className="text-red-500 mb-6" />,
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop' 
    },
    { 
      id: '02', 
      title: 'Krisis Identitas', 
      desc: 'Menjadi bayangan di industri sendiri. Brand Anda terlihat, bersuara, dan terasa persis seperti ratusan kompetitor lainnya.', 
      icon: <AlertCircle size={32} className="text-red-500 mb-6" />,
      img: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=2000&auto=format&fit=crop' 
    },
    { 
      id: '03', 
      title: 'Skalabilitas Buntu', 
      desc: 'Sistem digital dan marketing yang usang menghambat momentum pertumbuhan Anda saat bersiap untuk mendominasi pasar yang lebih besar.', 
      icon: <TrendingDown size={32} className="text-red-500 mb-6" />,
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop' 
    }
  ];

  // DATA LOGO KLIEN
  const clients = [
    { id: '0xtanda', src: '/clients/0xtanda.png' },
    { id: 'tk-alhuda', src: '/clients/tk-alhuda.png' },
    { id: 'lakeswara', src: '/clients/lakeswaramoto.png' }
  ];

  return (
    <div className="bg-[#030303] relative transition-colors duration-1000">
      
      {/* Background Dinamis saat Hover Layanan (FIX BUG IMAGE BLANK) */}
      <div 
        className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${activeHoverBg ? 'opacity-30' : 'opacity-0'}`}
        style={{
          backgroundImage: activeHoverBg ? `url(${activeHoverBg})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(60%) blur(8px) contrast(1.2)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-[#030303]/60"></div>
      </div>

      {/* 1. EPIC HERO SECTION (Tinggi 180vh Sesuai Validasi Terakhir Lu) */}
      <section className="h-[180vh] relative z-10 bg-[#030303]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
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
                    backgroundImage: `url('${SHATTER_LOGO_URL}')`,
                    backgroundSize: `${SHATTER_GRID * 100}% ${SHATTER_GRID * 100}%`,
                    backgroundPosition: `${piece.col * (100 / (SHATTER_GRID - 1))}% ${piece.row * (100 / (SHATTER_GRID - 1))}%`,
                    backgroundRepeat: 'no-repeat',
                    opacity: Math.max(1 - shatterProgress * 1.5, 0),
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

          {/* FASE 2: TEKS NAIK DARI BAWAH (0.1x Text Reveal Sesuai Validasi) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-30"
            style={{
              opacity: textRevealProgress,
              transform: `translateY(${40 * (1 - textRevealProgress)}px) scale(${0.95 + 0.05 * textRevealProgress})`
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

          {/* Opacity Arrow Sesuai Validasi (0.4) */}
          <div className="absolute bottom-10 flex items-center justify-center w-full pointer-events-none" style={{ opacity: Math.max(1 - (scrollY / (vh * 0.4)), 0) }}>
            <ArrowDown className="text-gray-600 animate-bounce" size={24} />
          </div>
        </div>
      </section>

      <div className="relative z-10 pt-20">
        {/* 2. Visual Story Grid */}
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[100rem] mx-auto overflow-x-hidden">
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

        {/* -------------------------------------------------------------
            3. NARRATIVE & PAIN POINTS (VIBE $20,000) 
        ------------------------------------------------------------- */}
        <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 max-w-[100rem] mx-auto relative z-10 overflow-hidden border-t border-white/5">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-red-600"></div>
                  <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-red-500 uppercase">
                    Realita Industri
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
                  Mengapa Bisnis Hebat <br/> <span className="text-gray-600">Berakhir Menjadi</span> <span className="text-red-600 italic font-serif">Bayangan?</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                  Banyak pemimpin bisnis datang kepada kami dengan frustrasi yang sama. Di tengah kebisingan era digital, menjadi 'cukup bagus' adalah jaminan untuk dilupakan.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Grid Keluhan Bisnis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {painPoints.map((point, i) => (
              <Reveal key={point.id} delay={i * 150} className="h-full">
                <div 
                  className="group flex flex-col justify-between h-full p-8 md:p-12 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-red-600/50 transition-all duration-700 relative overflow-hidden"
                  onMouseEnter={() => setActiveHoverBg(point.img)}
                  onMouseLeave={() => setActiveHoverBg(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <span className="text-gray-800 text-4xl font-black tracking-tighter group-hover:text-red-900/50 transition-colors duration-500">{point.id}</span>
                      {point.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">{point.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{point.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
             <div className="mt-20 md:mt-32 text-center max-w-4xl mx-auto">
               <p className="text-2xl md:text-4xl text-white font-light italic leading-tight mb-8">
                 "Kami tidak sekadar memperbaiki desain Anda. Kami menghancurkan hambatan yang menahan bisnis Anda, lalu merekayasa ulang <strong className="text-red-500 font-bold">Monopoli Digital</strong> Anda."
               </p>
             </div>
          </Reveal>
        </section>

        {/* -------------------------------------------------------------
            4. GIANT CTA TO SERVICES PAGE 
        ------------------------------------------------------------- */}
        <section className="relative py-32 md:py-48 px-6 md:px-12 bg-[#050505] overflow-hidden border-t border-white/5">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
            
            <Reveal>
              <Sparkles className="text-red-600 mx-auto mb-8 animate-pulse" size={40} strokeWidth={1} />
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-[10px] md:text-xs font-black text-red-600 tracking-[0.5em] uppercase mb-6">
                Berhenti Menjadi Pengikut
              </h2>
              <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter uppercase leading-[0.85] mb-12 drop-shadow-lg">
                Mulai <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-700">Dominasi.</span>
              </h3>
            </Reveal>

            <Reveal delay={300}>
              <Link 
                to="/services" 
                className="group relative inline-flex items-center justify-center gap-4 md:gap-6 px-10 py-5 md:px-16 md:py-8 bg-white hover:bg-red-600 text-black hover:text-white font-black text-xs md:text-sm uppercase tracking-[0.3em] rounded-full transition-all duration-700 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(220,38,38,0.4)]"
              >
                <span className="relative z-10">Eksplorasi Solusi Kami</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                <MoveRight size={20} className="relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </Reveal>

            <Reveal delay={500} className="mt-16">
               <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
                 <span>Web Architecture</span>
                 <span className="text-red-900">•</span>
                 <span>Brand Identity</span>
                 <span className="text-red-900">•</span>
                 <span>Cinematography</span>
                 <span className="text-red-900">•</span>
                 <span>Digital Growth</span>
               </div>
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------------------
            5. MARQUEE KLIEN (PERBAIKAN TERTUMPUK & WARNA ASLI)
        ------------------------------------------------------------- */}
        <section className="py-20 border-t border-white/5 bg-[#030303] overflow-hidden relative z-10">
          {/* Bayangan Gradasi Kanan Kiri */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>

          <p className="text-center text-gray-500 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-12 flex items-center justify-center gap-4 relative z-20">
            <span className="w-8 h-px bg-gray-800"></span>
            Dipercaya oleh Para Visioner
            <span className="w-8 h-px bg-gray-800"></span>
          </p>

          {/* PERBAIKAN: w-max mencegah flexbox menumpuk logo, mx mengatur jaraknya pasti */}
          <div className="flex w-max animate-marquee items-center whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <React.Fragment key={i}>
                {clients.map((client) => (
                  <img
                    key={`${i}-${client.id}`}
                    src={client.src}
                    alt={`Client ${client.id}`}
                    /* shrink-0 mencegah gambar menciut, mx-12 md:mx-24 memberikan jarak yang super lega antar logo */
                    className="h-10 md:h-14 w-auto shrink-0 object-contain mx-12 md:mx-24 hover:scale-110 transition-transform duration-500 cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] relative z-20"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}