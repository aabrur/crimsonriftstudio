import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowDown, Camera, Monitor, Zap, Megaphone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = "/logo/logo-crimson-rift-studio.png";

// Komponen Animasi yang dipercepat durasinya agar jauh lebih snappy dan responsif
function FadeInSection({ children, delay = 0, duration = 800, scale = false }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.1 }); // Threshold diperkecil agar muncul lebih sigap saat di-scroll

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : `opacity-0 translate-y-8 blur-sm ${scale ? 'scale-95' : ''}`
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const clients = [
    { name: "0xTanda", logo: "/clients/0xtanda.png" },
    { name: "TK Islam-TPQ Al-Huda", logo: "/clients/tk-alhuda.png" },
    { name: "Lakeswaramoto", logo: "/clients/lakeswaramoto.png" }
  ];

  return (
    <div className="flex flex-col bg-[#1c1917] text-gray-200 selection:bg-red-900 selection:text-white overflow-x-hidden font-sans">
      
      {/* BAGIAN 1: THE GRAND ENTRANCE */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(192,43,66,0.12),transparent_65%)] pointer-events-none"></div>
        
        <FadeInSection duration={1000} scale={true}>
          <div className="flex flex-col items-center">
            <img 
              src={LOGO_URL} 
              alt="Crimson Rift Studio" 
              className="w-64 md:w-[380px] lg:w-[480px] h-auto object-contain mb-8 animate-float" 
            />
            <div className="flex flex-col items-center text-center">
              <div className="w-px h-20 bg-gradient-to-b from-red-600 to-transparent mb-8"></div>
              <h1 className="text-sm tracking-[0.8em] uppercase text-red-500 font-black mb-4">Creative Agency Studio</h1>
              <p className="text-xl md:text-2xl text-gray-400 font-extralight tracking-wide max-w-2xl leading-relaxed italic">
                “Membangun warisan digital melalui estetika yang jujur dan dedikasi yang tulus.”
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-600">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Gulir untuk Memulai</span>
          <ArrowDown size={18} strokeWidth={1} className="animate-bounce" />
        </div>
      </section>

      {/* BAGIAN 2: BRANDING & LINGKUP USAHA */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-20 px-6 md:px-24 pt-52 pb-24 relative border-t border-gray-800/30">
        <FadeInSection scale={true}>
          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl border border-gray-800/50">
            <img 
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200" 
              alt="Proses Branding" 
              className="w-full h-[500px] md:h-[750px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-10 left-10 flex items-center gap-4 bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/5">
                <ShieldCheck size={24} className="text-red-500" />
                <span className="text-xs font-bold tracking-widest uppercase">Verified Excellence</span>
            </div>
          </div>
        </FadeInSection>
        <div className="space-y-12">
          <FadeInSection delay={150}>
            <h2 className="text-red-500 font-black text-xs tracking-[0.5em] uppercase">Identitas Bisnis</h2>
            <h3 className="text-4xl md:text-6xl text-white font-medium leading-tight mt-6">
              Memberi Jiwa pada <br/> Setiap Lingkup Usaha.
            </h3>
          </FadeInSection>
          <FadeInSection delay={300}>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
              Branding bukan sekadar logo yang indah. Ia adalah janji yang Anda berikan kepada pelanggan. Kami membantu bisnis Anda berbicara dengan bahasa visual yang tepat, memastikan setiap sentuhan desain mencerminkan kualitas dan profesionalitas yang Anda miliki.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* BAGIAN 3: MENGABADIKAN MOMEN */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative bg-[#171413] py-24 border-y border-gray-800/30 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none group">
          <img src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt="Momentum" />
        </div>
        
        <div className="max-w-5xl z-10 space-y-10">
          <FadeInSection scale={true}>
            <div className="flex justify-center mb-10 text-red-600">
              <Camera size={64} strokeWidth={1} className="drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]" />
            </div>
            <h3 className="text-4xl md:text-7xl text-white font-bold tracking-tighter leading-tight">
              Momentum yang tulus <br/> takkan terulang dua kali.
            </h3>
          </FadeInSection>
          <FadeInSection delay={200}>
            <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto italic">
              Ada emosi yang tak terucap dalam setiap tatapan, ada kebanggaan dalam setiap peluncuran produk. Kami hadir untuk membekukan detik-detik berharga tersebut melalui lensa profesional, menjadikannya aset abadi yang selalu bisa Anda banggakan.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* BAGIAN 4: REALITA & EMPATI */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center max-w-6xl mx-auto py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
            EMPATHY
        </div>
        <FadeInSection>
          <p className="text-2xl md:text-4xl text-gray-500 font-light leading-relaxed mb-12 tracking-wide">
            Kami memahami lelahnya perjuangan Anda.
          </p>
        </FadeInSection>
        <FadeInSection delay={150}>
          <p className="text-3xl md:text-5xl text-white font-medium leading-tight max-w-4xl mx-auto">
            "Membangun mimpi dengan hati, namun seringkali merasa tak terdengar di tengah bisingnya dunia digital."
          </p>
        </FadeInSection>
        <FadeInSection delay={300}>
          <div className="mt-20 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(220,38,38,0.8)]"></div>
          <p className="mt-16 text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto font-light">
            Anda layak mendapatkan panggung yang sebanding dengan kerja keras yang telah Anda curahkan selama ini. Izinkan kami membantu Anda bersinar kembali.
          </p>
        </FadeInSection>
      </section>

      {/* BAGIAN 5: SOLUSI */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden py-32 bg-gradient-to-b from-[#1c1917] to-[#171413]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/5 rounded-full blur-[250px] pointer-events-none"></div>

        <FadeInSection duration={1000} scale={true}>
          <div className="mb-24 space-y-10">
            <span className="inline-block px-6 py-2 border border-red-600/30 rounded-full text-red-500 text-xs font-black tracking-[0.6em] uppercase bg-red-600/5">
              Portal Keunggulan
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-14">
              CRIMSON <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-950">RIFT</span> <br /> <span className="text-7xl md:text-9xl font-black text-white">STUDIO</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Mari berhenti menjadi sekadar 'angka' di internet. Masuklah ke dalam dimensi baru, di mana setiap karya kami rancang untuk memenangkan hati audiens Anda.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 mb-24 text-gray-600 max-w-6xl mx-auto">
             <div className="flex flex-col items-center gap-4 group hover:text-red-500 transition-all duration-500 cursor-default">
                <Monitor size={48} strokeWidth={1} className="group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]" />
                <span className="text-[12px] uppercase tracking-[0.3em] font-black">Development</span>
             </div>
             <div className="flex flex-col items-center gap-4 group hover:text-red-500 transition-all duration-500 cursor-default">
                <Zap size={48} strokeWidth={1} className="group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]" />
                <span className="text-[12px] uppercase tracking-[0.3em] font-black">Branding</span>
             </div>
             <div className="flex flex-col items-center gap-4 group hover:text-red-500 transition-all duration-500 cursor-default">
                <Camera size={48} strokeWidth={1} className="group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]" />
                <span className="text-[12px] uppercase tracking-[0.3em] font-black">Visuals</span>
             </div>
             <div className="flex flex-col items-center gap-4 group hover:text-red-500 transition-all duration-500 cursor-default">
                <Megaphone size={48} strokeWidth={1} className="group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]" />
                <span className="text-[12px] uppercase tracking-[0.3em] font-black">Advocacy</span>
             </div>
          </div>
          
          <Link 
            to="/services" 
            className="group relative inline-flex items-center justify-center px-16 py-8 overflow-hidden font-black text-white transition-all bg-red-600 rounded-full hover:bg-red-700 shadow-[0_0_50px_rgba(192,43,66,0.4)] hover:scale-105 active:scale-95"
          >
            <span className="relative flex items-center gap-5 text-2xl tracking-tighter">
              EKSPLORASI LAYANAN <ChevronRight size={28} className="group-hover:translate-x-3 transition-transform" />
            </span>
          </Link>
        </FadeInSection>
      </section>

      {/* BAGIAN 6: CLIENTS (FOOTER MARQUEE) - Full Colorful Logos */}
      <section className="w-full bg-[#171413] border-t border-gray-800 py-36 overflow-hidden relative z-10 flex flex-col items-center">
        <FadeInSection>
          <p className="text-gray-600 text-[10px] md:text-xs font-bold tracking-[0.8em] uppercase mb-20 opacity-50">Mereka Yang Menembus Batas Bersama Kami</p>
        </FadeInSection>
        
        <div className="absolute left-0 w-32 md:w-80 h-full bg-gradient-to-r from-[#171413] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 w-32 md:w-80 h-full bg-gradient-to-l from-[#171413] to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex whitespace-nowrap w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-around min-w-max">
              {clients.map((client, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center mx-16 md:mx-32 transition-all duration-700 hover:scale-110 cursor-default group">
                  {/* Memaksa logo berwarna penuh, tanpa filter, dan opacity penuh */}
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-14 md:h-24 w-auto object-contain opacity-100 grayscale-0 brightness-100 transition-all duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}