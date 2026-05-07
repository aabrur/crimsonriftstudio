import React, { useState, useEffect, useRef } from 'react';
import { Camera, Code, Paintbrush } from 'lucide-react';

function Reveal({ children, delay = 0, duration = 1200, y = 30 }) {
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
    <div className="bg-[#030303] pt-40 pb-32 overflow-hidden min-h-screen">
      
      {/* 1. Header Hero */}
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto mb-32">
        <Reveal>
          <span className="text-red-600 text-[10px] font-black tracking-[0.5em] uppercase mb-8 block">The Origins</span>
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter uppercase leading-[0.9]">
            Born from <br/> <span className="text-gray-700">Obsession.</span>
          </h1>
        </Reveal>
      </div>

      {/* 2. The Manifesto & Core Story */}
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="aspect-[4/5] bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1500&auto=format&fit=crop" 
                  alt="Studio Environment" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center h-full gap-10">
            <Reveal delay={300}>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Sebuah Pergerakan, <br/> Bukan Sekadar Agensi.</h2>
              <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed italic border-l-2 border-red-600 pl-6">
                "Di sudut kota yang bising, Crimson Rift Studio lahir dari sebuah kegelisahan. Kami melihat begitu banyak bisnis luar biasa yang tenggelam hanya karena representasi visual dan digital mereka terlihat biasa saja."
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="text-gray-500 leading-relaxed font-light">
                Kami menolak desain yang hanya "cukup bagus". Kami tidak menulis kode hanya agar aplikasi bisa berjalan. Bagi kami, setiap proyek adalah kanvas kosong yang harus diisi dengan strategi tajam, estetika berkelas, dan interaksi yang menghipnotis. Kami hadir untuk membantu brand Anda berbicara lebih lantang dan elegan di dunia digital.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 3. Filosofi Nama (Crimson & Rift) dengan Gambar */}
      <div className="bg-[#050505] py-32 border-y border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-red-600/5 blur-[150px] pointer-events-none rounded-full"></div>
        <div className="px-6 md:px-12 max-w-[100rem] mx-auto relative z-10">
          <Reveal>
            <h2 className="text-center text-sm font-black text-red-600 tracking-[0.5em] uppercase mb-20">Filosofi Kami</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* The Crimson */}
            <Reveal delay={200} className="flex flex-col">
              <div className="h-64 md:h-80 w-full rounded-3xl overflow-hidden mb-8 relative">
                <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1500&auto=format&fit=crop" alt="The Crimson" className="w-full h-full object-cover filter brightness-75" />
                <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply"></div>
              </div>
              <h3 className="text-red-500 font-black text-3xl md:text-4xl mb-4 tracking-tighter uppercase">The Crimson.</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                Melambangkan gairah, energi, dan keberanian. Kami tidak pernah merancang untuk main aman. Warna Crimson merepresentasikan detak jantung kami dalam menghasilkan karya yang berani mendominasi dan mencuri perhatian.
              </p>
            </Reveal>
            
            {/* The Rift */}
            <Reveal delay={400} className="flex flex-col">
              <div className="h-64 md:h-80 w-full rounded-3xl overflow-hidden mb-8 relative">
                <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1500&auto=format&fit=crop" alt="The Rift" className="w-full h-full object-cover filter brightness-75" />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <h3 className="text-white font-black text-3xl md:text-4xl mb-4 tracking-tighter uppercase">The Rift.</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                Sebuah portal. Sebuah celah dimensional. Kami adalah jembatan yang menarik brand Anda keluar dari realitas yang konvensional dan usang, menembus batasan ekspektasi digital menuju masa depan yang tak terbatas.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 4. Tim Kreatif / Pilar */}
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto mt-32">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16">Pilar <span className="text-gray-600">Kreativitas.</span></h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Sistem Digital", icon: <Code size={32}/>, desc: "Membangun kode yang bersih dan infrastruktur web yang tak tertembus." },
            { title: "Estetika Visual", icon: <Paintbrush size={32}/>, desc: "Meracik palet warna dan bentuk yang mendikte persepsi audiens." },
            { title: "Rekam Jejak", icon: <Camera size={32}/>, desc: "Menangkap realitas lewat lensa untuk dijadikan aset abadi." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 hover:border-red-600/30 transition-colors group">
                <div className="text-gray-600 mb-6 group-hover:text-red-500 transition-colors">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </div>
  );
}