import React, { useState, useEffect, useRef } from 'react';
import { Camera, Code, Paintbrush, ArrowDown, Sparkles, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Komponen Reveal untuk animasi masuk yang super mulus
function Reveal({ children, delay = 0, duration = 1200, y = 40, className = "" }) {
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

export default function About() {
  return (
    <div className="bg-[#030303] pt-32 pb-0 overflow-x-hidden min-h-screen font-sans selection:bg-red-600 selection:text-white text-gray-200">
      
      {/* 1. EPIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-[100rem] mx-auto mb-20">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <Reveal delay={100}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-red-600"></div>
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-red-500 uppercase">The Origins</span>
          </div>
        </Reveal>
        
        <Reveal delay={300}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black text-white tracking-tighter uppercase leading-[0.85] mix-blend-difference z-10 relative">
            Born from <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">Obsession.</span>
          </h1>
        </Reveal>
        
        <Reveal delay={500} className="mt-12 md:mt-16 relative z-10">
          <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl leading-relaxed italic border-l-2 border-red-600 pl-6 md:pl-8">
            "Kami lahir di persimpangan antara seni dan teknologi. Tempat di mana estetika bertemu dengan presisi digital."
          </p>
        </Reveal>

        <Reveal delay={800} className="absolute bottom-10 left-6 md:left-12">
          <div className="flex items-center gap-3 text-gray-600 text-[9px] uppercase tracking-widest font-bold animate-bounce">
            <ArrowDown size={16} /> Scroll To Explore
          </div>
        </Reveal>
      </section>

      {/* 2. THE MANIFESTO (ASYMMETRICAL STORY GRID) */}
      <section className="px-6 md:px-12 max-w-[100rem] mx-auto mb-40 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Kolom Teks */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                Sebuah Pergerakan, <br/> <span className="text-red-600 italic font-serif tracking-normal">Bukan Sekadar Agensi.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                Di sudut kota yang bising, Crimson Rift Studio lahir dari sebuah kegelisahan. Kami melihat begitu banyak bisnis luar biasa yang tenggelam hanya karena representasi visual dan ekosistem digital mereka terlihat biasa saja.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                Kami menolak desain yang hanya "cukup bagus". Kami tidak menulis kode hanya agar aplikasi bisa berjalan. Bagi kami, setiap proyek adalah kanvas kosong yang harus diisi dengan strategi tajam, estetika berkelas, dan interaksi yang menghipnotis.
              </p>
            </Reveal>
          </div>

          {/* Kolom Gambar (Bento/Masonry Style) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[600px] md:h-[700px]">
            <Reveal delay={400} className="col-span-1 h-full">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop" 
                  alt="Studio Environment" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
              </div>
            </Reveal>
            <div className="col-span-1 flex flex-col gap-4 h-full">
              <Reveal delay={600} className="h-2/5">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Creative Process" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1500ms] group-hover:scale-110" 
                  />
                </div>
              </Reveal>
              <Reveal delay={800} className="h-3/5">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative group bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-end">
                  <Sparkles className="text-red-600 mb-auto" size={32} />
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">100+</h3>
                  <p className="text-gray-500 text-sm font-light">Visi Klien Telah Diwujudkan Menjadi Realitas Digital.</p>
                </div>
              </Reveal>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. FILOSOFI NAMA (THE CRIMSON & THE RIFT) - CINEMATIC LAYOUT */}
      <section className="bg-[#050505] py-40 border-y border-white/5 relative overflow-hidden">
        {/* Glow Latar Belakang */}
        <div className="absolute top-0 right-0 w-full h-[500px] bg-red-900/5 blur-[200px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-black blur-[150px] pointer-events-none"></div>

        <div className="px-6 md:px-12 max-w-[100rem] mx-auto relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-24 justify-center">
              <div className="w-10 h-[1px] bg-gray-600"></div>
              <h2 className="text-center text-[10px] md:text-xs font-black text-gray-500 tracking-[0.5em] uppercase">Core Philosophy</h2>
              <div className="w-10 h-[1px] bg-gray-600"></div>
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-32">
            
            {/* The Crimson */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal delay={200} className="order-2 lg:order-1 flex flex-col justify-center">
                <h3 className="text-red-600 font-black text-5xl md:text-7xl mb-6 tracking-tighter uppercase">The Crimson.</h3>
                <p className="text-gray-300 leading-relaxed font-light text-lg md:text-xl mb-8">
                  Melambangkan gairah yang membara, energi, dan keberanian. Kami tidak pernah merancang untuk main aman. Warna Crimson merepresentasikan detak jantung kami dalam menghasilkan karya yang agresif, mendominasi, dan mencuri perhatian audiens sejak detik pertama.
                </p>
                <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-red-500 uppercase">
                  <span className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center">01</span> Passion & Power
                </div>
              </Reveal>
              <Reveal delay={400} className="order-1 lg:order-2">
                <div className="h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden relative group shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                  <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1500&auto=format&fit=crop" alt="The Crimson" className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-all duration-[3000ms] ease-out" />
                  <div className="absolute inset-0 bg-red-600/30 mix-blend-multiply group-hover:bg-red-600/10 transition-colors duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80"></div>
                </div>
              </Reveal>
            </div>
            
            {/* The Rift */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal delay={200}>
                <div className="h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden relative group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1500&auto=format&fit=crop" alt="The Rift" className="w-full h-full object-cover filter brightness-50 group-hover:scale-105 transition-all duration-[3000ms] ease-out" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80"></div>
                </div>
              </Reveal>
              <Reveal delay={400} className="flex flex-col justify-center">
                <h3 className="text-white font-black text-5xl md:text-7xl mb-6 tracking-tighter uppercase">The Rift.</h3>
                <p className="text-gray-300 leading-relaxed font-light text-lg md:text-xl mb-8">
                  Sebuah portal. Sebuah celah dimensional. Kami adalah jembatan yang menarik brand Anda keluar dari realitas yang konvensional dan usang, menembus batasan ekspektasi digital menuju masa depan yang tak terbatas dan penuh inovasi.
                </p>
                <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">02</span> Portal & Innovation
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PILAR KREATIVITAS (INTERACTIVE CARDS) */}
      <section className="px-6 md:px-12 max-w-[100rem] mx-auto py-32 md:py-40">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Pilar <br/> <span className="text-gray-600">Kreativitas.</span>
            </h2>
            <p className="text-gray-400 font-light max-w-md text-base md:text-lg">
              Tiga elemen inti yang menyatukan metodologi kerja kami dalam setiap mahakarya yang kami hasilkan.
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Digital Architecture", icon: <Code size={40} strokeWidth={1.5}/>, desc: "Membangun baris kode yang bersih dan infrastruktur ekosistem web yang tak tertembus, cepat, serta fungsional." },
            { title: "Visual Aesthetics", icon: <Paintbrush size={40} strokeWidth={1.5}/>, desc: "Meracik palet warna, tipografi, dan bentuk yang mampu mendikte psikologi dan persepsi audiens secara instan." },
            { title: "Lens & Reality", icon: <Camera size={40} strokeWidth={1.5}/>, desc: "Menangkap realitas lewat lensa untuk dijadikan aset abadi yang bercerita tanpa perlu mengucapkan satu kata pun." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 150} className="h-full">
              <div className="bg-[#0a0a0a] p-10 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-red-600/50 hover:bg-[#111] transition-all duration-500 group h-full flex flex-col">
                <div className="w-20 h-20 bg-black border border-white/5 rounded-2xl flex items-center justify-center text-gray-600 mb-10 group-hover:text-red-500 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light flex-grow">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION (CTA) */}
      <section className="bg-red-600 py-32 px-6 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8 leading-[0.9]">
              Mari Bangun <br/> Warisan Anda.
            </h2>
            <p className="text-red-200 text-lg md:text-2xl mb-12 font-light">
              Berhenti menjadi opsi kedua. Saatnya brand Anda mendominasi pasar.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs md:text-sm rounded-full hover:bg-[#0a0a0a] hover:text-white transition-all duration-500 shadow-2xl hover:shadow-black/50 hover:-translate-y-1"
            >
              Mulai Proyek Sekarang <MoveRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}