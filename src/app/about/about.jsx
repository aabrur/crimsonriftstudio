import { ChevronRight, Flame, Zap, Target, Crosshair, Hexagon, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = "/logo/logo-crimson-rift-studio.png";

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] animate-fadeIn overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="flex flex-col items-center text-center z-10 relative">
          <div className="relative group mb-10">
            <div className="absolute -inset-4 bg-red-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src={LOGO_URL} 
              alt="Crimson Rift Studio" 
              className="relative w-full max-w-[200px] md:max-w-[280px] mx-auto drop-shadow-xl animate-float" 
            />
          </div>
          
          <h2 className="text-sm font-bold text-red-500 tracking-[0.3em] uppercase mb-4">Di Balik Layar</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-tight">
            Mendobrak Batas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Kreativitas Digital.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Kami bukan sekadar agensi. Kami adalah arsitek visual, pencerita digital, dan jembatan yang menghubungkan visi brand Anda dengan dunia yang tanpa batas.
          </p>
        </div>
      </section>

      {/* 2. THE STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent border border-red-900/30 rounded-3xl -rotate-3 scale-105 -z-10"></div>
            <div className="bg-[#111] border border-gray-800 p-8 md:p-12 rounded-3xl relative z-10 shadow-xl">
              <Crosshair className="text-red-500 w-12 h-12 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">Awal Mula Sebuah Epik</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  Crimson Rift Studio lahir dari sebuah kegelisahan. Kami melihat begitu banyak bisnis dan individu yang memiliki potensi luar biasa, produk yang hebat, dan cerita yang inspiratif, namun terhalang oleh representasi visual yang "biasa-biasa saja".
                </p>
                <p>
                  Di era di mana impresi pertama dibentuk dalam hitungan detik di layar kaca, menjadi biasa adalah sebuah kerugian. Dari situlah kami berkumpul—para desainer, fotografer, videografer, dan pengembang web—untuk menciptakan sebuah "Rift" (celah/portal).
                </p>
                <p>
                  Sebuah portal yang membawa klien kami keluar dari keramaian kompetisi, menuju dimensi di mana brand mereka terlihat dominan, tak terlupakan, dan eksklusif.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3">Cerita Kami</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Lahir dari Hasrat <br/>Terhadap Kesempurnaan.</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Kami menolak untuk menghasilkan karya yang diproduksi massal secara asal. Setiap pixel, setiap frame video, dan setiap baris kode yang kami buat dikerjakan dengan presisi tingkat tinggi dan strategi yang matang.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-red-500 rounded-full"></div>
              <span className="text-white font-medium italic">We don't just create, we engineer legacies.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NAME & PHILOSOPHY SECTION */}
      <section className="bg-[#050505] py-32 border-y border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="text-center mb-20">
            <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3">Identitas & Makna</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Filosofi <span className="text-red-500">Crimson Rift</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Crimson */}
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-gray-800 hover:border-red-900/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-bl-full -z-10 group-hover:bg-red-600/10 transition-colors"></div>
              <Flame className="text-red-500 w-12 h-12 mb-6" />
              <h4 className="text-3xl font-black text-white mb-4 tracking-wide">CRIMSON.</h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                Melambangkan warna merah pekat yang identik dengan <strong>gairah, energi, dan keberanian</strong>. Kami tidak mendesain untuk main aman. Kami menciptakan karya yang berani tampil beda, mencuri perhatian, dan meninggalkan jejak emosional yang kuat di benak audiens Anda.
              </p>
            </div>

            {/* Rift */}
            <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-gray-800 hover:border-red-900/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-bl-full -z-10 group-hover:bg-red-600/10 transition-colors"></div>
              <Zap className="text-red-500 w-12 h-12 mb-6" />
              <h4 className="text-3xl font-black text-white mb-4 tracking-wide">RIFT.</h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                Sebuah rekahan, celah, atau <strong>portal menuju dimensi lain</strong>. Ini adalah janji kami: menjadi jembatan yang menarik brand Anda dari realitas konvensional, membawanya menembus batasan digital, menuju masa depan yang penuh dengan inovasi dan dominasi pasar.
              </p>
            </div>
          </div>

          {/* Logo Philosophy */}
          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 md:p-16 rounded-3xl border border-red-900/30 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-lg">
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/5 blur-3xl rounded-full"></div>
            <div className="md:w-1/3 flex justify-center relative z-10">
              <img 
                src={LOGO_URL} 
                alt="Logo Crimson Rift" 
                className="w-32 md:w-48 relative z-10 drop-shadow-xl" 
              />
            </div>
            <div className="md:w-2/3 relative z-10 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-4">Makna Simbol Kami</h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                Simbol yang kami gunakan membawa makna dualitas yang mendalam. Bagian kiri membentuk <strong>belahan setengah bulan</strong> yang ditembus oleh kilatan <strong>petir (rift)</strong>, melambangkan energi, kreativitas yang mendobrak batasan, dan kemunculan visi baru. <br/><br/>
                Sementara bagian kanan adalah <strong>potongan setengah dari pentagon</strong>, merepresentasikan struktur, rasionalitas, dan pondasi profesionalisme yang kokoh. Perpaduan ini mencerminkan identitas Crimson Rift: keseimbangan sempurna antara seni yang imajinatif dan strategi digital yang terstruktur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-32">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3">Nilai Inti Kami</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Prinsip yang Menggerakkan Kami</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Aesthetic & Functional",
              desc: "Karya yang kami buat tidak hanya indah dipandang, tetapi juga harus bekerja dengan baik, mengkonversi audiens, dan memberikan hasil nyata.",
              icon: <PenTool size={32} />
            },
            {
              title: "Uncompromising Quality",
              desc: "Kami tidak percaya pada kompromi kualitas. Setiap detail, mulai dari resolusi foto hingga kecepatan website, diawasi dengan standar tertinggi.",
              icon: <Target size={32} />
            },
            {
              title: "Partnership & Growth",
              desc: "Kami bukan sekadar vendor, kami adalah rekan pertumbuhan Anda. Keberhasilan project Anda adalah satu-satunya indikator kesuksesan kami.",
              icon: <Crosshair size={32} />
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-[#111] p-10 rounded-2xl border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg">
              <div className="w-16 h-16 bg-[#0a0a0a] border border-gray-800 rounded-xl flex items-center justify-center text-red-500 mx-auto mb-6 shadow-md shadow-red-900/10">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{val.title}</h4>
              <p className="text-gray-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-red-900/20 to-[#111] border border-red-900/30 p-12 rounded-3xl text-center relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Siap Memulai Babak Baru?</h3>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Berhentilah menjadi sama dengan yang lain. Mari ciptakan portal kesuksesan digital Anda bersama Crimson Rift Studio hari ini.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link to="/services" className="inline-flex px-8 py-4 bg-[#111] hover:bg-gray-800 text-white border border-gray-700 font-bold rounded-lg transition-all items-center justify-center gap-3 group">
              Eksplorasi Layanan
            </Link>
            {/* Tombol WhatsApp */}
            <a 
              href="https://wa.me/6281398621530" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all items-center justify-center gap-3 shadow-lg shadow-red-900/20 hover:-translate-y-1"
            >
              Hubungi Kami Sekarang <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}