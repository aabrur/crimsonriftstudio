import { Monitor, PenTool, Video, Megaphone, CheckCircle2, MessageSquare, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      id: 'web',
      title: 'Web Development & SEO',
      icon: <Monitor size={36} />,
      description: 'Pembuatan segala jenis website (E-Commerce, Company Profile, Landing Page, dll) yang cepat, responsif, dan teroptimasi SEO.',
      features: ['Custom Website Development', 'Search Engine Optimization (SEO)', 'Performa Cepat & Mobile Friendly', 'Maintenance & Keamanan'],
      link: '/services/web-development'
    },
    {
      id: 'design',
      title: 'Logo Design & Branding',
      icon: <PenTool size={36} />,
      description: 'Menciptakan identitas visual yang kuat, unik, dan berkarakter untuk bisnis Anda. Merancang konsep awal hingga panduan branding utuh.',
      features: ['Desain Logo Profesional', 'Pembuatan Brand Identity', 'Panduan Visual (Brand Guidelines)', 'Desain Materi Promosi']
    },
    {
      id: 'multimedia',
      title: 'Photography & Videography',
      icon: <Video size={36} />,
      description: 'Layanan dokumentasi visual lengkap. Menghasilkan foto produk berkualitas tinggi dan video sinematik untuk menyampaikan pesan brand Anda.',
      features: ['Foto Produk & Profil Profesional', 'Dokumentasi Acara (Foto & Video)', 'Video Company Profile & Iklan', 'High-End Retouching & Color Grading']
    },
    {
      id: 'sosmed',
      title: 'Social Media & Ads Agency',
      icon: <Megaphone size={36} />,
      description: 'Serahkan urusan digital marketing kepada kami. Dari pengelolaan akun hingga optimasi iklan berbayar untuk meningkatkan penjualan.',
      features: ['Manajemen Akun & Konten Planner', 'Meta, TikTok, Google & Shopee Ads', 'Interaksi & Handle Customer Care', 'Laporan Performa Berkala']
    }
  ];

  const workflow = [
    { step: '01', icon: <MessageSquare size={24} />, title: 'Konsultasi & Brief', desc: 'Mendiskusikan target, audiens, dan kebutuhan proyek.' },
    { step: '02', icon: <Lightbulb size={24} />, title: 'Strategi & Konsep', desc: 'Merancang rencana aksi dan konsep visual.' },
    { step: '03', icon: <Monitor size={24} />, title: 'Produksi & Eksekusi', desc: 'Tim ahli kami mulai memproduksi dan mendesain.' },
    { step: '04', icon: <Rocket size={24} />, title: 'Review & Optimasi', desc: 'Penyempurnaan akhir dan peluncuran proyek.' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#0a0a0a] animate-fadeIn">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 text-center mt-12 mb-20">
        <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">Layanan Spesialis</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Satu Solusi Untuk <br/><span className="text-red-600">Semua Kebutuhan Digital</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Dari membangun identitas visual, membuat sistem website, hingga mendatangkan pelanggan melalui iklan. Kami siap menskalakan bisnis Anda.</p>
      </div>

      {/* Services Grid - Menjadi 2 kolom di tablet/desktop agar simetris (4 item) */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="bg-[#111] border border-gray-800 p-8 md:p-10 rounded-2xl hover:border-red-600/50 transition-all duration-300 group flex flex-col"
          >
            <div className="w-16 h-16 bg-[#0a0a0a] border border-gray-800 rounded-xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-red-600/20">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed flex-grow">{service.description}</p>
            
            <ul className="space-y-3 mt-auto pt-6 border-t border-gray-800/50 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {service.link && (
              <Link to={service.link} className="block w-full py-3 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white text-center font-bold rounded-lg transition-colors border border-red-600/20">
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
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">Cara Kerja Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Proses Kerja Transparan & Terukur</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-12 z-0"></div>

            {workflow.map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#111] border-2 border-gray-800 rounded-full flex flex-col items-center justify-center mb-6 group hover:border-red-600 transition-colors duration-300 shadow-xl">
                  <span className="text-gray-600 font-black text-2xl group-hover:text-red-600/20 absolute">{item.step}</span>
                  <div className="text-red-600 relative z-10">{item.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}