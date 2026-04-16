import { useState } from 'react';
import { CheckCircle2, ChevronLeft, PenTool, Palette, Diamond, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Design() {
  const [activeTab, setActiveTab] = useState('logo');

  const categories = [
    { id: 'logo', label: 'Logo Design', icon: <PenTool size={20} /> },
    { id: 'basicBranding', label: 'Logo + Basic Branding', icon: <Palette size={20} /> },
    { id: 'fullBranding', label: 'Full Branding Package', icon: <Diamond size={20} /> }
  ];

  const pricingData = {
    logo: {
      target: "Target: Entry Level / Bisnis Baru / Kebutuhan Cepat",
      packages: [
        {
          name: "BASIC LOGO", price: "Rp250.000", isPopular: false,
          features: ["1 Konsep Logo Utama", "1 Alternatif Revisi Arah", "Style Sederhana (Text/Icon Basic)", "File PNG Transparan & JPG", "1 Warna + 1 Versi Hitam Putih", "Waktu Pengerjaan: 1–2 Hari", "Revisi: 2x"]
        },
        {
          name: "STANDARD LOGO", price: "Rp500.000", isPopular: true,
          features: ["2–3 Konsep Logo", "Eksplorasi Style (Icon + Typography)", "Pemilihan Warna Dasar", "File Lengkap (PNG, JPG, SVG/Vector)", "Versi Full Color, Hitam Putih, Icon", "Waktu Pengerjaan: 2–4 Hari", "Revisi: 3–5x"]
        },
        {
          name: "PROFESSIONAL", price: "Mulai Rp900.000", isPopular: false,
          features: ["3–5 Konsep Logo", "Riset Ringan Brand (Market + Vibe)", "Logo System (Primary, Secondary, Icon)", "Warna Brand (Basic Palette)", "File Lengkap Asli (AI/SVG/EPS)", "Mockup Preview (Baju/Kemasan/dll)", "Waktu Pengerjaan: 3–5 Hari", "Revisi: 5–7x"]
        }
      ]
    },
    basicBranding: {
      target: "Target: Bisnis Berkembang / Re-branding",
      packages: [
        {
          name: "STARTER BRAND", price: "Rp750.000", isPopular: false,
          features: ["2–3 Konsep Logo", "Warna Brand (Primary + Secondary)", "Font Pairing (Judul + Isi)", "Logo Usage Basic", "File Lengkap Logo", "1 Desain (Kartu Nama / IG Profile)", "Revisi: 3–5x"]
        },
        {
          name: "BRAND IDENTITY", price: "Rp1.500.000", isPopular: true,
          features: ["3–5 Konsep Logo", "Logo System (Primary, Secondary, Icon)", "Color Palette Lengkap", "Typography System", "Mini Brand Guideline (PDF)", "3 Aplikasi (Kartu Nama, Feed IG, Banner)", "Mockup Branding", "Revisi: 5–7x"]
        }
      ]
    },
    fullBranding: {
      target: "Target: Ekosistem Bisnis / Skala Menengah Atas",
      packages: [
        {
          name: "BRAND PRO", price: "Mulai Rp2.500.000", isPopular: true,
          features: ["Riset Brand & Positioning Ringan", "3–5 Konsep Logo & Logo System Lengkap", "Color System (Primary, Secondary, Accent)", "Typography Lengkap", "Brand Guideline (10–15 Halaman)", "Aplikasi: Kartu Nama, IG Template (3-6), Banner, Packaging Basic", "Mockup Profesional", "Revisi: 7x"]
        },
        {
          name: "BRAND PREMIUM", price: "Mulai Rp4.000.000", isPopular: false,
          features: ["Brand Strategy (Positioning + Tone)", "Logo System Advanced", "Visual Identity & Color Psychology", "Typography System Advanced", "Brand Guideline Lengkap (20+ Halaman)", "Aplikasi Lengkap (Socmed Kit, Packaging, Merch)", "Visual Direction (Style Guide)", "Revisi: 7–10x"]
        }
      ]
    }
  };

  const addOns = [
    "Logo Express 1 Hari (+Rp100.000)",
    "Tambahan Konsep (+Rp100.000 / konsep)",
    "Tambahan Revisi (+Rp50.000)",
    "Social Media Kit 10 Post (Rp300k - Rp500k)",
    "Packaging Design (Rp300k - Rp800k)",
    "Brand Guideline Tambahan (Mulai Rp300k)"
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors mb-12 font-medium">
          <ChevronLeft size={20} /> Kembali ke Layanan
        </Link>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">Detail Harga Jasa</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Logo Design <br/>& Branding</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Ciptakan identitas visual yang kuat dan profesional untuk meningkatkan nilai jual dan kepercayaan audiens terhadap bisnis Anda.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat.id 
                ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]' 
                : 'bg-[#111] text-gray-400 hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {cat.icon}
              <span className="hidden sm:block">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="animate-fadeIn">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-red-900/20 text-red-500 rounded-full text-sm font-semibold border border-red-900/50">
              {pricingData[activeTab].target}
            </span>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 ${pricingData[activeTab].packages.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-4xl mx-auto'} gap-8`}>
            {pricingData[activeTab].packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col bg-[#111] p-8 rounded-2xl transition-all duration-300 ${
                  pkg.isPopular 
                  ? 'border-2 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.15)] md:-translate-y-4' 
                  : 'border border-gray-800 hover:border-gray-600'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold tracking-widest uppercase rounded-full">
                    Paling Laris
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-300 mb-2">{pkg.name}</h3>
                <h4 className="text-3xl font-black text-white mb-8">{pkg.price}</h4>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 size={18} className="text-red-600 shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  pkg.isPopular 
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25' 
                  : 'bg-[#1a1a1a] hover:bg-gray-800 text-white border border-gray-700'
                }`}>
                  Pilih Paket Ini
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-3">Layanan Opsional (Add-on)</h3>
              <p className="text-gray-400">Sesuaikan paket desain dengan kebutuhan spesifik brand Anda saat ini.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addOns.map((addon, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300 bg-[#1a1a1a] p-4 rounded-xl border border-gray-800">
                  <Plus size={18} className="text-red-500" />
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