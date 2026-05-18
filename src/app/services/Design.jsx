import { useState } from 'react';
import { CheckCircle2, ChevronLeft, PenTool, Palette, Diamond, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Desain() {
  const [activeTab, setActiveTab] = useState('logo');

  const categories = [
    { id: 'logo', label: 'Desain Lambang', icon: <PenTool size={20} strokeWidth={1.5} /> },
    { id: 'dasarPemerekan', label: 'Lambang + Pemerekan Dasar', icon: <Palette size={20} strokeWidth={1.5} /> },
    { id: 'fullPemerekan', label: 'Paket Pemerekan Lengkap', icon: <Diamond size={20} strokeWidth={1.5} /> }
  ];

  const pricingData = {
    logo: {
      target: "Target: Tahap Awal / Bisnis Baru / Kebutuhan Cepat",
      packages: [
        {
          name: "LAMBANG DASAR", price: "Rp250.000", isPopular: false,
          features: ["1 Konsep Lambang Utama", "1 Alternatif Revisi Arah", "Gaya sederhana (Teks/ikon dasar)", "Berkas PNG transparan & JPG", "1 Warna + 1 Versi Hitam Putih", "Waktu Pengerjaan: 1–2 Hari", "Revisi: 2x"]
        },
        {
          name: "LAMBANG STANDAR", price: "Rp500.000", isPopular: true,
          features: ["2–3 Konsep Lambang", "Eksplorasi gaya (Ikon + tipografi)", "Pemilihan Warna Dasar", "Berkas lengkap (PNG, JPG, SVG/vektor)", "Versi Warna penuh, Hitam Putih, Ikon", "Waktu Pengerjaan: 2–4 Hari", "Revisi: 3–5x"]
        },
        {
          name: "PROFESIONAL", price: "Mulai Rp900.000", isPopular: false,
          features: ["3–5 Konsep Lambang", "Riset ringan merek (pasar + rasa)", "Sistem lambang (utama, pendamping, Ikon)", "Warna merek (palet dasar)", "Berkas lengkap Asli (kecerdasan buatan/SVG/EPS)", "Pratinjau mokap (Baju/Kemasan/dll)", "Waktu Pengerjaan: 3–5 Hari", "Revisi: 5–7x"]
        }
      ]
    },
    dasarPemerekan: {
      target: "Target: Bisnis Berkembang / Re-pemerekan",
      packages: [
        {
          name: "MEREK AWAL", price: "Rp750.000", isPopular: false,
          features: ["2–3 Konsep Lambang", "Warna merek (Utama + Pendamping)", "Pasangan huruf (Judul + Isi)", "Panduan pemakaian dasar", "Berkas lengkap Lambang", "1 Desain (Kartu Nama / IG Profesionalfil)", "Revisi: 3–5x"]
        },
        {
          name: "IDENTITAS MEREK", price: "Rp1.500.000", isPopular: true,
          features: ["3–5 Konsep Lambang", "Sistem lambang (utama, pendamping, Ikon)", "Palette warna Lengkap", "Sistem tipografi", "Panduan merek ringkas (PDF)", "3 Aplikasi (Kartu Nama, Umpan IG, Spanduk)", "Mokap pemerekan", "Revisi: 5–7x"]
        }
      ]
    },
    fullPemerekan: {
      target: "Target: Ekosistem Bisnis / Skala Menengah Atas",
      packages: [
        {
          name: "MEREK PRO", price: "Mulai Rp2.500.000", isPopular: true,
          features: ["Riset Merek & posisi Ringan", "3–5 Konsep Lambang & Sistem lambang Lengkap", "Sistem warna (utama, pendamping, aksen)", "Tipografi Lengkap", "Panduan merek (10–15 Halaman)", "Aplikasi: Kartu Nama, Pola IG (3-6), Spanduk, Kemasan dasar", "Mokap Profesionalfesional", "Revisi: 7x"]
        },
        {
          name: "MEREK PREMIUM", price: "Mulai Rp4.000.000", isPopular: false,
          features: ["Strategi merek (posisi + nada)", "Sistem lambang lanjutan", "Identitas visual & psikologi warna", "Sistem tipografi lanjutan", "Panduan merek Lengkap (20+ Halaman)", "Aplikasi Lengkap (Perangkat media sosial, Kemasan, Cendera mata)", "Arah visual (Panduan gaya)", "Revisi: 7–10x"]
        }
      ]
    }
  };

  const addOns = [
    "Lambang ekspres 1 Hari (+Rp100.000)",
    "Tambahan Konsep (+Rp100.000 / konsep)",
    "Tambahan Revisi (+Rp50.000)",
    "Perangkat media sosial 10 unggahan (Rp300k - Rp500k)",
    "Desain kemasan (Rp300k - Rp800k)",
    "Panduan merek tambahan (Mulai Rp300k)"
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] animate-fadeIn">
      <div className="maksimal-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-12 font-medium">
          <ChevronLeft size={20} strokeWidth={1.5} /> Kembali ke Layanan
        </Link>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-3">Detail Harga Jasa</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Desain Lambang <br/>& Pemerekan</h1>
          <p className="text-gray-400 maksimal-w-2xl mx-auto text-lg leading-relaxed">Ciptakan identitas visual yang kuat dan profesional untuk meningkatkan nilai jual dan kepercayaan audiens terhadap bisnis Anda.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat.id 
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' 
                : 'bg-[#111] text-gray-400 hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {cat.icon}
              <span className="hidden sm:block text-sm md:text-base">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="animate-fadeIn">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-red-900/10 text-red-500 rounded-full text-sm font-semibold border border-red-900/30">
              {pricingData[activeTab].target}
            </span>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 ${pricingData[activeTab].packages.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 maksimal-w-4xl mx-auto'} gap-8 mt-6`}>
            {pricingData[activeTab].packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col bg-[#111] p-8 rounded-3xl transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 ${
                  pkg.isPopular 
                  ? 'border border-red-500/30 md:-translate-y-4 hover:-translate-y-5' 
                  : 'border border-gray-800 hover:border-red-900/30'
                }`}
              >
                {/* Wrapper khusus untuk background glow agar tetap terpotong rapi tanpa memotong kartu utamanya */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {pkg.isPopular && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-bl-full -z-10"></div>
                  )}
                </div>

                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md z-20">
                    Paling Laris
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-300 mb-2">{pkg.name}</h3>
                  <h4 className="text-3xl font-black text-white mb-8">{pkg.price}</h4>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 size={18} strokeWidth={1.5} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/6281398621530?text=Halo%20Crimson%20Rift,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20untuk%20layanan%20Lambang%20%26%20Pemerekan.`}
                    target="_blank"
                    rel="noreferrer"
                    className={`block text-center w-full py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${
                      pkg.isPopular 
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-900/20 hover:-translate-y-1' 
                      : 'bg-[#1a1a1a] hover:bg-red-600 text-gray-300 hover:text-white border border-gray-800 hover:border-red-600 shadow-sm hover:shadow-md hover:-translate-y-1'
                    }`}
                  >
                    Pilih Paket Ini
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-3">Layanan Opsional (Tambahan)</h3>
              <p className="text-gray-400 leading-relaxed">Sesuaikan paket desain dengan kebutuhan spesifik merek Anda saat ini.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addOns.map((addon, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300 bg-[#1a1a1a] p-4 rounded-2xl border border-gray-800 hover:border-red-900/30 transition-colors">
                  <Plus size={18} strokeWidth={1.5} className="text-red-500 shrink-0" />
                  <span className="text-sm font-medium">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}