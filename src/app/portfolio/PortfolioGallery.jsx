import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Sparkles, MoveRight, ChevronLeft, Eye, Wind, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

// ---------------------------------------------------------
// FASE 5: CMS SANITY SETUP (MOCKING LOKAL)
// Data ini merepresentasikan skema dari Headless CMS (Sanity).
// Disatukan di file ini untuk menghindari error import.
// ---------------------------------------------------------
export const fetchPortfolioData = () => {
  return [
    {
      id: "proj-001",
      title: "SILENT SYMPHONY",
      category: "Surrealism Portrait",
      year: "2025",
      story: "Sebuah ode untuk keheningan malam. Karya ini mengeksplorasi batas antara realitas dan mimpi, di mana subjek seolah membeku dalam waktu.",
      mood: "Melankolis, Intim, dan Penuh Misteri.",
      focal: "Pendaran cahaya tunggal (chiaroscuro) yang menyorot pada satu titik fokus.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "proj-002",
      title: "NEON ECHOES",
      category: "Cinematic Landscape",
      year: "2024",
      story: "Distopia urban yang direkam melalui palet warna cyberpunk. Menggambarkan kesepian di tengah keramaian kota metropolitan.",
      mood: "Futuristik, Nostalgik, Terasing.",
      focal: "Refleksi cahaya neon pada aspal basah, memberikan tekstur visual yang kaya.",
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "proj-003",
      title: "ETHEREAL BOND",
      category: "Fine Art Documentation",
      year: "2026",
      story: "Kemurnian cinta yang ditangkap tanpa rekayasa pose. Karya ini didedikasikan untuk membekukan detak jantung ke dalam sebuah medium visual abadi.",
      mood: "Hangat, Murni, Membumi (Earthy).",
      focal: "Bahasa tubuh yang halus—sentuhan jemari dan tatapan mata yang natural.",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop"
    }
  ];
};

export default function PortfolioGallery() {
  const scrollRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredArt, setHoveredArt] = useState(null);
  
  // State untuk menyimpan data CMS
  const [artworks, setArtworks] = useState([]);

  // Simulasi pemuatan data layaknya fetch dari backend Sanity
  useEffect(() => {
    const data = fetchPortfolioData();
    setArtworks(data);
  }, []);

  // Mengubah scroll vertikal menjadi horizontal super mulus
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({
        left: e.deltaY * 3,
        behavior: 'auto' 
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.log("Auto-play diblokir:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative w-full h-screen text-gray-200 overflow-hidden font-sans transition-colors duration-[2000ms] ease-in-out ${hoveredArt ? 'bg-[#020202]' : 'bg-[#030303]'}`}>
      
      {/* Audio Ambient Lofi/Cinematic */}
      <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3" loop />

      {/* Latar Belakang Cahaya Mewah */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,30,50,0.06),transparent_60%)] pointer-events-none transition-opacity duration-[2000ms] ${hoveredArt ? 'opacity-20' : 'opacity-100'}`}></div>

      {/* HEADER TETAP (SUPER MINIMALIS) */}
      <header className="absolute top-0 left-0 right-0 z-50 p-8 md:p-12 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto flex flex-col group">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-4 w-fit">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Exit Gallery
          </Link>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white/90 uppercase">
            Crimson <span className="text-red-700 italic font-serif">Exhibition.</span>
          </h1>
        </div>

        {/* TOMBOL MUSIK ELEGAN */}
        <button onClick={toggleMusic} className="pointer-events-auto flex items-center gap-4 pl-6 pr-3 py-3 md:pl-8 md:pr-4 md:py-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-full backdrop-blur-3xl transition-all duration-700 group shadow-2xl">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-[9px] font-black tracking-[0.3em] uppercase text-gray-400 group-hover:text-white transition-colors">
              {isPlaying ? 'Acoustic On' : 'Silent Mode'}
            </span>
          </div>
          <div className={`p-3 rounded-full transition-all duration-1000 ${isPlaying ? 'bg-red-900/40 text-red-400 shadow-[0_0_30px_rgba(220,38,38,0.4)] rotate-0' : 'bg-black/50 text-gray-500 border border-gray-800'}`}>
            {isPlaying ? <Disc size={18} className="animate-[spin_4s_linear_infinite]" /> : <VolumeX size={18} />}
          </div>
        </button>
      </header>

      {/* PANDUAN INTERAKSI */}
      <div className="absolute bottom-10 left-12 z-50 pointer-events-none flex items-center gap-5 text-gray-500/70 opacity-80 mix-blend-difference">
        <div className="w-16 h-[1px] bg-gray-500"></div>
        <span className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-bold flex items-center gap-3">
          Scroll To Discover <MoveRight size={14} className="animate-pulse text-red-500/80" />
        </span>
      </div>

      {/* CONTAINER HORIZONTAL SCROLL (Smooth & Cinematic) */}
      <div ref={scrollRef} className="flex items-center w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar pl-[5vw] pr-[20vw] md:pl-[15vw] md:pr-[40vw] pt-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {/* SLIDE PEMBUKA */}
        <div className="min-w-[90vw] md:min-w-[70vw] h-full flex flex-col justify-center snap-center pl-4 pr-10 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-red-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <p className="text-red-700 font-bold tracking-[1em] uppercase text-xs mb-8 flex items-center gap-3">
            <Sparkles size={14} /> Virtual Museum
          </p>
          <h2 className="text-6xl md:text-[9rem] lg:text-[11rem] font-black text-white/5 tracking-tighter leading-[0.8] select-none uppercase mix-blend-overlay">
            VISUAL <br/> POETRY.
          </h2>
          <div className="absolute top-1/2 -translate-y-1/2 pl-2">
             <div className="w-20 md:w-32 h-[1px] bg-gradient-to-r from-red-600 to-transparent mb-10"></div>
             <p className="text-xl md:text-4xl text-gray-300 font-light max-w-3xl leading-relaxed italic" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
               "Seni sejati tidak membutuhkan penjelasan teknis. Ia hanya butuh <span className="text-white font-medium">dirasakan.</span>"
             </p>
          </div>
        </div>

        {/* KARYA SENI (ARTWORKS) - DIRENDER DARI DATA CMS */}
        {artworks.map((art, index) => (
          <div key={art.id} className="min-w-[90vw] md:min-w-[75vw] lg:min-w-[70vw] h-full flex items-center justify-center snap-center px-4 md:px-8 relative group" onMouseEnter={() => setHoveredArt(art.id)} onMouseLeave={() => setHoveredArt(null)}>
            
            {/* TYPOGRAPHY LATAR BELAKANG */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-red-600/[0.03] select-none pointer-events-none z-0 transition-all duration-[1500ms] whitespace-nowrap ${hoveredArt === art.id ? 'scale-110 tracking-[0.2em] opacity-100' : 'scale-90 tracking-tighter opacity-0'}`}>
              {art.title}
            </div>

            {/* FRAME KARYA */}
            <div className={`relative w-full max-w-[1200px] aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5 bg-[#0a0a0a] z-10 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${hoveredArt === art.id ? 'scale-[1.02] shadow-[0_0_100px_rgba(150,20,30,0.15)] border-white/10' : 'scale-100'}`}>
              
              <img src={art.img} alt={art.title} className={`w-full h-full object-cover transition-all duration-[3000ms] ease-out ${hoveredArt === art.id ? 'scale-105 saturate-100 brightness-100' : 'scale-100 saturate-0 brightness-75'}`} />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent transition-all duration-[1000ms] ease-in-out ${hoveredArt === art.id ? 'opacity-90' : 'opacity-0'}`}></div>

              {/* PANEL INFORMASI ARTISTIK */}
              <div className={`absolute inset-x-0 bottom-0 p-8 md:p-14 lg:p-20 flex flex-col justify-end transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${hoveredArt === art.id ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                
                <div className={`flex items-center gap-4 mb-6 transition-all duration-700 delay-100 ${hoveredArt === art.id ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase rounded-full backdrop-blur-xl">
                    {art.category}
                  </span>
                  <span className="text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase">{art.year}</span>
                </div>

                <h3 className={`text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl transition-all duration-700 delay-200 ${hoveredArt === art.id ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                  {art.title}
                </h3>
                
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 transition-all duration-700 delay-300 ${hoveredArt === art.id ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                  <div className="md:col-span-7">
                    <p className="text-[10px] text-red-500 uppercase tracking-[0.4em] font-black mb-3 flex items-center gap-2">
                      <Wind size={14} /> Narasi Karya
                    </p>
                    <p className="text-gray-300 text-sm md:text-base leading-loose font-light italic">
                      "{art.story}"
                    </p>
                  </div>
                  <div className="md:col-span-5 flex flex-col gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-[0.4em] font-bold mb-2">Atmosfer Visual</p>
                      <p className="text-white text-sm font-medium">{art.mood}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-500 uppercase tracking-[0.4em] font-bold mb-2">Focal Point</p>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">{art.focal}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 pointer-events-none ${hoveredArt === art.id ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
                <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 shadow-2xl">
                  <Eye size={24} />
                </div>
              </div>

            </div>
          </div>
        ))}
        
        {/* SLIDE PENUTUP */}
        <div className="min-w-[60vw] md:min-w-[40vw] h-full flex items-center snap-center pl-10">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-black text-gray-600 tracking-tighter mb-4">
              THE END <br/> OF EXHIBITION.
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Terima kasih telah berkunjung.</p>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}