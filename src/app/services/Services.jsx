import { Monitor, PenTool, Video, Megaphone, CheckCircle2, MessageSquare, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      id: 'web',
      title: 'Web Development & SEO',
      icon: <Monitor size={32} strokeWidth={1.5} />,
      description: 'Pembuatan segala jenis website (E-Commerce, Company Profile, Landing Page, dll) yang cepat, responsif, dan teroptimasi SEO.',
      features: ['Custom Website Development', 'Search Engine Optimization (SEO)', 'Performa Cepat & Mobile Friendly', 'Maintenance & Keamanan'],
      link: '/services/web-development'
    },
    {
      id: 'design',
      title: 'Logo Design & Branding',
      icon: <PenTool size={32} strokeWidth={1.5} />,
      description: 'Menciptakan identitas visual yang kuat, unik, dan berkarakter untuk bisnis Anda. Merancang konsep awal hingga panduan branding utuh.',
      features: ['Desain Logo Profesional', 'Pembuatan Brand Identity', 'Panduan Visual (Brand Guidelines)', 'Desain Materi Promosi'],
      link: '/services/logo-branding'
    },
    {
      id: 'multimedia',
      title: 'Photography & Videography',
      icon: <Video size={32} strokeWidth={1.5} />,
      description: 'Layanan dokumentasi visual lengkap. Menghasilkan foto produk berkualitas tinggi dan video sinematik untuk menyampaikan pesan brand Anda.',
      features: ['Foto Produk & Profil Profesional', 'Dokumentasi Acara (Foto & Video)', 'Video Company Profile & Iklan', 'High-End Retouching & Color Grading'],
      link: '/services/photography-videography'
    },
    {
      id: 'sosmed',
      title: 'Social Media & Ads Agency',
      icon: <Megaphone size={32} strokeWidth={1.5} />,
      description: 'Serahkan urusan digital marketing kepada kami. Dari pengelolaan akun hingga optimasi iklan berbayar untuk meningkatkan penjualan.',
      features: ['Manajemen Akun & Konten Planner', 'Meta, TikTok, Google & Shopee Ads', 'Interaksi & Handle Customer Care', 'Laporan Performa Berkala'],
      link: '/services/social-media'
    }
  ];

  const workflow = [
    { step: '01', icon: <MessageSquare size={24} strokeWidth={1.5} />, title: 'Konsultasi & Brief', desc: 'Mendiskusikan target, audiens, dan kebutuhan proyek.' },
    { step: '02', icon: <Lightbulb size={24} strokeWidth={1.5} />, title: 'Strategi & Konsep', desc: 'Merancang rencana aksi dan konsep visual.' },
    { step: '03', icon: <Monitor size={24} strokeWidth={1.5} />, title: 'Produksi & Eksekusi', desc: 'Tim ahli kami mulai memproduksi dan mendesain.' },
    { step: '04', icon: <Rocket size={24} strokeWidth={1.5} />, title: 'Review & Optimasi', desc: 'Penyempurnaan akhir dan peluncuran proyek.' }
  ];

  return (
    <div className="min-h-screen pt-28 pb-12 bg-[#0a0a0a] animate-fadeIn">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 text-center mt-12 mb-20">
        <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-3">Layanan Spesialis</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
          Satu Solusi Untuk <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Semua Kebutuhan Digital</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Dari membangun identitas visual, membuat sistem website, hingga mendatangkan pelanggan melalui iklan. Kami siap menskalakan bisnis Anda.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="bg-[#111] border border-gray-800 p-8 md:p-10 rounded-3xl hover:border-red-900/50 transition-all duration-500 group flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Soft Glow di pojok kanan atas */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-bl-full -z-10 group-hover:bg-red-600/10 transition-colors duration-500"></div>

            <div className="w-16 h-16 bg-[#0a0a0a] border border-gray-800 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-red-900/30">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{service.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed flex-grow">{service.description}</p>
            
            <ul className="space-y-3 mt-auto pt-6 border-t border-gray-800/50 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            {service.link && (
              <Link to={service.link} className="block w-full py-4 bg-[#1a1a1a] hover:bg-red-600 text-gray-300 hover:text-white text-center font-bold rounded-xl transition-all duration-300 border border-gray-800 hover:border-red-600 shadow-sm hover:shadow-lg hover:shadow-red-900/20">
                Lihat Detail Harga
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Workflow Section */}
      <div className="bg-[#050505] py-24 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm mb-3">Cara Kerja Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Proses Kerja Transparan & Terukur</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Garis penghubung diredupkan (h-px bukan h-0.5) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-800 -translate-y-12 z-0"></div>

            {workflow.map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#111] border border-gray-800 rounded-full flex flex-col items-center justify-center mb-6 group hover:border-red-500 transition-colors duration-500 shadow-md hover:shadow-red-900/10">
                  <span className="text-gray-700 font-black text-2xl group-hover:text-red-500/10 absolute transition-colors duration-500">{item.step}</span>
                  <div className="text-red-500 relative z-10 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm max-w-[200px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}