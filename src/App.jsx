import React, { useState, useEffect, useRef } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate
} from 'react-router-dom';
import { 
  Menu, X, ChevronRight, ArrowDown, Camera, Monitor, 
  Zap, Megaphone, ShieldCheck, ChevronLeft, PenTool, 
  Palette, Diamond, Plus, CheckCircle2, XCircle, 
  LayoutTemplate, Layers, Building2, Store, Heart, 
  Sparkles, Film, UserSquare, HeartHandshake 
} from 'lucide-react';

// --- KONSTANTA & ASSET ---
const LOGO_URL = "/logo/logo-crimson-rift-studio.png";
const FAVICON_URL = "/favicon.png";

// --- KOMPONEN PEMBANTU (UTILS) ---

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function FadeInSection({ children, delay = 0, duration = 800, scale = false }) {
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
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : `opacity-0 translate-y-8 blur-sm ${scale ? 'scale-95' : ''}`
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

// --- KOMPONEN NAVIGASI (OPTIMASI MOBILE) ---
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/services' },
    { name: 'Tentang Kami', path: '/about' },
  ];

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#1c1917]/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link to="/" className="flex items-center transition-transform hover:scale-105" onClick={() => setIsOpen(false)}>
            <img src={FAVICON_URL} alt="Logo" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors hover:text-red-500 ${location.pathname === link.path ? 'text-red-500' : 'text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/6281398621530" target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-[10px] font-black tracking-[0.2em] rounded-full transition-all shadow-lg shadow-red-600/20">
              HUBUNGI KAMI
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-300 p-2 z-[110]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 bg-[#1c1917] z-[105] transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full p-8 space-y-10 text-center">
          {links.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black uppercase tracking-tighter transition-colors ${location.pathname === link.path ? 'text-red-600' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/6281398621530" className="w-full max-w-xs py-5 bg-red-600 text-white font-black rounded-2xl text-lg shadow-xl shadow-red-900/40 uppercase tracking-widest">
            HUBUNGI KAMI
          </a>
        </div>
      </div>
    </nav>
  );
}

// --- KOMPONEN FOOTER ---
function Footer() {
  return (
    <footer className="bg-[#171413] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <img src={FAVICON_URL} alt="Logo" className="h-8 opacity-40 grayscale" />
        <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-[10px] tracking-widest font-black uppercase">
          <Link to="/">BERANDA</Link>
          <Link to="/services">LAYANAN</Link>
          <Link to="/about">TENTANG</Link>
          <a href="https://wa.me/6281398621530">KONTAK</a>
        </div>
        <p className="text-gray-600 text-[10px] tracking-widest uppercase text-center">&copy; 2024 Crimson Rift Studio</p>
      </div>
    </footer>
  );
}

// --- HALAMAN UTAMA (HOME) ---
function Home() {
  const clients = [
    { name: "0xTanda", logo: "/clients/0xtanda.png" },
    { name: "TK Al-Huda", logo: "/clients/tk-alhuda.png" },
    { name: "Lakeswara", logo: "/clients/lakeswaramoto.png" }
  ];

  return (
    <div className="bg-[#1c1917] overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative text-center pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(192,43,66,0.12),transparent_70%)] pointer-events-none"></div>
        <FadeInSection scale duration={1200}>
          <img src={LOGO_URL} alt="Crimson Rift" className="w-64 sm:w-80 md:w-[450px] lg:w-[500px] mb-8 animate-float" />
          <div className="w-px h-12 md:h-20 bg-gradient-to-b from-red-600 to-transparent mx-auto mb-6"></div>
          <h1 className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-red-500 font-black mb-4 px-4">Creative Agency Studio</h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light italic max-w-2xl mx-auto leading-relaxed px-4">
            “Membangun warisan digital melalui estetika yang jujur dan dedikasi yang tulus.”
          </p>
        </FadeInSection>
        <div className="absolute bottom-10 animate-bounce text-gray-600"><ArrowDown size={20} /></div>
      </section>

      {/* Story: Branding */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <FadeInSection scale>
            <div className="aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200" className="w-full h-full object-cover" alt="Branding" />
            </div>
          </FadeInSection>
        </div>
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
          <FadeInSection delay={200}>
            <span className="text-red-500 font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">Identitas Bisnis</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-black leading-tight tracking-tighter">Memberi Jiwa pada <br className="hidden md:block"/> Bisnis Anda.</h2>
            <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed pt-2">
              Branding bukan sekadar logo. Ia adalah janji emosional. Kami memastikan setiap sentuhan visual mencerminkan kualitas profesionalitas yang Anda miliki.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Story: Multimedia */}
      <section className="py-24 md:py-32 px-6 text-center bg-[#171413] relative overflow-hidden border-y border-white/5">
        <FadeInSection scale>
          <Camera size={48} className="text-red-600 mx-auto mb-8 opacity-40" strokeWidth={1} />
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-black tracking-tighter max-w-4xl mx-auto leading-tight mb-8 px-2">Momentum yang tulus <br className="hidden md:block"/> takkan terulang dua kali.</h2>
          <p className="text-base md:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed italic px-4">
            Lebih dari sekadar merekam, kami hadir untuk membekukan waktu. Melalui lensa, kami menangkap emosi tulus untuk menjadikannya aset abadi yang berharga.
          </p>
        </FadeInSection>
      </section>

      {/* Solution Section (Adaptive Typography) */}
      <section className="py-24 md:py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-red-600/5 blur-[100px] md:blur-[150px] pointer-events-none"></div>
        <FadeInSection scale>
          <span className="inline-block px-4 py-1.5 border border-red-600/20 rounded-full text-red-500 text-[10px] font-black tracking-widest uppercase bg-red-600/5 mb-8">Portal Keunggulan</span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-white leading-[1.1] tracking-tighter mb-12">
            CRIMSON <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900">RIFT</span> STUDIO
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-16 text-gray-500">
            {[
              { icon: <Monitor size={24} />, label: "SYSTEMS" },
              { icon: <Zap size={24} />, label: "BRANDING" },
              { icon: <Camera size={24} />, label: "CAPTURE" },
              { icon: <Megaphone size={24} />, label: "ADVOCACY" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-5 sm:p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:text-red-500 transition-all">
                {s.icon}
                <span className="text-[9px] font-black tracking-[0.2em]">{s.label}</span>
              </div>
            ))}
          </div>
          <Link to="/services" className="inline-flex items-center gap-4 px-10 md:px-14 py-5 md:py-7 bg-red-600 hover:bg-red-700 text-white font-black rounded-full transition-all hover:scale-105 shadow-2xl shadow-red-900/40 text-xs sm:text-sm md:text-base uppercase tracking-widest">
            EKSPLORASI LAYANAN <ChevronRight />
          </Link>
        </FadeInSection>
      </section>

      {/* Marquee Clients */}
      <section className="py-20 border-t border-white/5 bg-[#171413] overflow-hidden">
        <p className="text-center text-gray-600 text-[9px] md:text-[10px] font-black tracking-[0.6em] md:tracking-[1em] uppercase mb-12">DIPERCAYA OLEH PARA VISIONER</p>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-24 px-6 md:px-12">
              {clients.map(c => (
                <img key={c.name} src={c.logo} alt={c.name} className="h-8 md:h-14 w-auto grayscale-0 opacity-100 transition-all" />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// --- HALAMAN TENTANG KAMI ---
function About() {
  return (
    <div className="bg-[#1c1917] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <FadeInSection scale>
          <div className="text-center mb-20 md:mb-32">
            <h1 className="text-[10px] md:text-xs font-black text-red-500 tracking-[0.5em] uppercase mb-6 px-4">Tentang Kami</h1>
            <h2 className="text-4xl md:text-8xl font-black text-white leading-none tracking-tighter mb-10 px-2">Mendobrak Batas <br/><span className="text-red-600">Kreativitas.</span></h2>
            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed px-4">
              Kami adalah arsitek visual dan teknolog yang menghubungkan visi brand Anda dengan dunia digital melalui pintu inovasi yang kami sebut "The Rift".
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-24 md:mb-32">
          <div className="p-8 md:p-12 bg-white/[0.03] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:border-red-500/30 transition-all group">
            <Zap className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase">Filosofi Rift</h3>
            <p className="text-gray-400 italic text-sm md:text-lg">"Celah yang membawa Anda keluar dari kebisingan konvensional menuju dominasi pasar yang eksklusif."</p>
          </div>
          <div className="p-8 md:p-12 bg-white/[0.03] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:border-red-500/30 transition-all group">
            <ShieldCheck className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase">Dedikasi Penuh</h3>
            <p className="text-gray-400 italic text-sm md:text-lg">"Setiap pixel dan baris kode kami kerjakan dengan standar keunggulan yang tidak mengenal kata kompromi."</p>
          </div>
        </div>

        <div className="bg-red-600 p-10 md:p-24 rounded-[2.5rem] md:rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <h3 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter relative z-10 leading-tight">SIAP MENJADI BAGIAN <br className="hidden md:block"/> DARI EPISODE KAMI?</h3>
          <a href="https://wa.me/6281398621530" className="inline-flex items-center gap-4 bg-white text-red-600 px-8 md:px-12 py-4 md:py-6 rounded-full font-black uppercase text-[10px] md:text-sm shadow-xl hover:scale-105 transition-all relative z-10 tracking-widest">
            MULAI TRANSFORMASI <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

// --- HALAMAN LAYANAN (GRID) ---
function Services() {
  const list = [
    { name: "Web Dev & SEO", path: "/services/web", desc: "Sistem web kencang, responsif, dan siap huni di halaman utama Google.", icon: <Monitor /> },
    { name: "Logo & Branding", path: "/services/design", desc: "Ciptakan identitas visual yang melekat kuat di ingatan audiens.", icon: <PenTool /> },
    { name: "Photo & Video", path: "/services/multimedia", desc: "Produksi visual sinematik kelas atas untuk kampanye brand Anda.", icon: <Camera /> },
    { name: "Social Media", path: "/services/sosmed", desc: "Eksistensi total dan manajemen iklan cerdas yang menghasilkan konversi.", icon: <Megaphone /> }
  ];

  return (
    <div className="bg-[#1c1917] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-24">
          <h1 className="text-[10px] md:text-xs font-black text-red-500 tracking-widest mb-6 px-4">LAYANAN SPESIALIS</h1>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight px-2">Satu Portal Untuk <br/><span className="text-red-600">Semua Kebutuhan Digital.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((s, i) => (
            <Link key={i} to={s.path} className="p-8 md:p-12 bg-white/[0.03] border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:border-red-600/50 transition-all group flex flex-col items-start shadow-xl">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-all">{s.icon}</div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4">{s.name}</h3>
              <p className="text-gray-400 mb-10 leading-relaxed text-sm md:text-lg">{s.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-red-500 font-black uppercase tracking-widest text-[10px]">
                LIHAT DETAIL HARGA <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- LAYOUT DETAIL LAYANAN (DENGAN TABS RESPONSIF) ---
function ServiceDetailLayout({ title, subtitle, icon, categories, pricingData, addOns, terms }) {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const navigate = useNavigate();

  return (
    <div className="bg-[#1c1917] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate('/services')} className="flex items-center gap-2 text-gray-500 hover:text-red-500 mb-12 font-black transition-colors text-[10px] tracking-widest">
          <ChevronLeft size={18} /> KEMBALI KE LAYANAN
        </button>

        <div className="text-center mb-16 px-4">
          <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">{icon}</div>
          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">{title}</h1>
          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto italic font-light leading-relaxed">{subtitle}</p>
        </div>

        {/* Tab Scroller (Fixed: Swipeable on small screens) */}
        <div className="flex overflow-x-auto pb-4 mb-12 gap-3 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 sm:justify-center scroll-smooth">
          {categories.map(c => (
            <button 
              key={c.id} 
              onClick={() => setActiveTab(c.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all border ${activeTab === c.id ? 'bg-red-600 border-red-600 text-white shadow-xl scale-105' : 'bg-white/5 border-white/5 text-gray-500 hover:text-white'}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {pricingData[activeTab]?.map((pkg, i) => (
            <div key={i} className={`p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex flex-col relative transition-all hover:scale-[1.02] ${pkg.isPopular ? 'ring-2 ring-red-600/50 shadow-2xl shadow-red-900/20 md:scale-105 z-10' : ''}`}>
              {pkg.isPopular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">POPULER</span>}
              <h3 className="text-xl font-black text-white mb-2 uppercase">{pkg.name}</h3>
              <p className="text-3xl font-black text-red-500 mb-8 tracking-tighter">{pkg.price}</p>
              <ul className="space-y-4 mb-12 flex-grow text-left">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-gray-400 text-xs md:text-sm leading-snug">
                    <CheckCircle2 size={16} className="text-red-600 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/6281398621530?text=Halo Crimson Rift, saya tertarik dengan paket ${pkg.name} untuk ${title}`} target="_blank" rel="noreferrer" className="w-full py-4 bg-white/5 hover:bg-red-600 text-white font-black text-[10px] tracking-widest rounded-2xl border border-white/10 transition-all text-center uppercase">
                PILIH PAKET
              </a>
            </div>
          ))}
        </div>

        {/* Addons & Terms (Responsive Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 bg-white/[0.03] rounded-[2.5rem] border border-white/5">
            <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-3"><Plus size={20} className="text-red-500" /> Opsional (Add-ons)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addOns?.map((a, i) => (
                <div key={i} className="flex gap-3 text-gray-400 text-[10px] font-bold p-4 bg-black/20 rounded-2xl border border-white/5 uppercase">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1 shrink-0"></div> {a}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12 bg-black/40 rounded-[2.5rem] border border-white/5">
            <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-3"><ShieldCheck size={20} className="text-red-500" /> Syarat & Ketentuan</h3>
            <div className="space-y-8">
              {terms?.map((t, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="text-red-500 font-black text-[10px] tracking-[0.2em] uppercase flex items-center gap-2">
                    <span className="text-lg">{t.icon}</span> {t.title}
                  </h4>
                  <ul className="space-y-2">
                    {t.points.map((p, j) => (
                      <li key={j} className="text-gray-500 text-[11px] leading-relaxed italic">• {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MAIN APP ---
export default function App() {
  const defaultTerms = [
    { icon: "💳", title: "Pembayaran", points: ["Down Payment 50% di awal sebagai tanda jadi.", "Pelunasan wajib dilakukan sebelum serah terima file final.", "Pembayaran resmi melalui Transfer Bank."] },
    { icon: "📐", title: "Scope & Revisi", points: ["Revisi hanya bersifat minor (Warna/Typo).", "Perubahan konsep total di tengah pengerjaan akan dikenakan biaya tambahan.", "File final dikirim melalui Google Drive."] }
  ];

  const detailData = {
    web: {
      title: "Web Dev & SEO",
      subtitle: "Arsitektur digital yang presisi, cepat, dan teroptimasi untuk performa bisnis jangka panjang.",
      icon: <Monitor />,
      categories: [{ id: 'lp', label: 'Landing Page' }, { id: 'cp', label: 'Company Profile' }, { id: 'store', label: 'Toko Online' }],
      pricingData: {
        lp: [
          { name: "Basic", price: "Rp650rb", features: ["1 Halaman", "Mobile Responsive", "WA Integration", "Vercel Hosting"], isPopular: false },
          { name: "Standard", price: "Rp1.2jt", features: ["Landing Funnel", "SEO Setup", "Copywriting Basic", "2x Revisi"], isPopular: true },
          { name: "Premium", price: "Mulai Rp1.8jt", features: ["Custom UI/UX", "Conversion Kit", "Animation", "Full Support"], isPopular: false }
        ],
        cp: [{ name: "Professional", price: "Mulai Rp3.5jt", features: ["5-10 Halaman Website", "Home, About, Services, Portfolio", "Clean UI & SEO Basic", "Mobile Optimized"], isPopular: true }],
        store: [{ name: "Growth Store", price: "Mulai Rp5jt", features: ["E-Commerce System", "Cart & Checkout", "Upload 20 Produk", "Payment Gateway"], isPopular: true }]
      },
      addOns: ["Maintenance (150rb/bln)", "SEO Lanjutan", "Copywriting Full", "Domain Premium"]
    },
    design: {
      title: "Logo & Branding",
      subtitle: "Menciptakan simbol ikonik dan identitas visual yang memberikan dampak psikologis kuat kepada audiens.",
      icon: <PenTool />,
      categories: [{ id: 'logo', label: 'Logo Design' }, { id: 'full', label: 'Full Branding' }],
      pricingData: {
        logo: [
          { name: "Basic", price: "Rp250rb", features: ["1 Konsep Utama", "PNG/JPG High Res", "2x Revisi"], isPopular: false },
          { name: "Standard", price: "Rp500rb", features: ["3 Konsep Variasi", "Vector AI/SVG", "Brand Guide Basic"], isPopular: true }
        ],
        full: [{ name: "Identity Pack", price: "Rp2.5jt", features: ["Full Logo System", "Color Psychology", "Stationery Kit", "Master Brand Book"], isPopular: true }]
      },
      addOns: ["Packaging Design", "Social Media Kit", "Logo Express", "Merchandise Design"]
    },
    multimedia: {
      title: "Photo & Video",
      subtitle: "Menyampaikan pesan melalui sinematografi dan visual yang menyentuh emosi terdalam.",
      icon: <Camera />,
      categories: [{ id: 'wedding', label: 'Wedding & Pro' }, { id: 'prod', label: 'Produk & Iklan' }],
      pricingData: {
        wedding: [
          { name: "Bronze", price: "Rp1.9jt", features: ["1 Photographer", "Unlimited Shoot", "G-Drive File", "Duration 2-4h"], isPopular: false },
          { name: "Gold", price: "Rp4.2jt", features: ["Photo + Video", "8 Hour Work", "Cinematic Clip", "Edit 100+ Foto"], isPopular: true }
        ],
        prod: [{ name: "Catalog", price: "Rp750rb", features: ["Up to 5 Products", "20 Edited Photos", "Styled Shoot", "Marketplace Ready"], isPopular: true }]
      },
      addOns: ["Same Day Edit", "Album Kolase", "Drone Footage", "Extra Photographer"]
    },
    sosmed: {
      title: "Social Media",
      subtitle: "Manajemen konten yang konsisten dan strategi iklan yang tepat sasaran untuk pertumbuhan brand.",
      icon: <Megaphone />,
      categories: [{ id: 'umkm', label: 'Starter UMKM' }, { id: 'agency', label: 'Premium Agency' }],
      pricingData: {
        umkm: [{ name: "Growth", price: "Rp1.2jt/bln", features: ["12 Feed + 12 Story", "Content Planner", "Basic Admin", "Monthly Report"], isPopular: true }],
        agency: [{ name: "Premium", price: "Rp7.5jt/bln", features: ["30 Feed + Daily Story", "15 Video Reels", "Full Admin Handling", "Ads Management"], isPopular: true }]
      },
      addOns: ["Ads Budget Management", "KOL Setup", "Photo Content", "AI Generated Content"]
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#1c1917] text-gray-100 font-sans selection:bg-red-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web" element={<ServiceDetailLayout {...detailData.web} terms={defaultTerms} />} />
            <Route path="/services/design" element={<ServiceDetailLayout {...detailData.design} terms={defaultTerms} />} />
            <Route path="/services/multimedia" element={<ServiceDetailLayout {...detailData.multimedia} terms={defaultTerms} />} />
            <Route path="/services/sosmed" element={<ServiceDetailLayout {...detailData.sosmed} terms={defaultTerms} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}