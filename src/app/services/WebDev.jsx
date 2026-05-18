import { useState } from 'react';
import { CheckCircle2, ChevronLeft, LayoutTemplate, Layers, Building2, Store, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDev() {
  const [activeTab, setActiveTab] = useState('landing');

  const categories = [
    { id: 'landing', label: 'Halaman Arahan', icon: <LayoutTemplate size={20} strokeWidth={1.5} /> },
    { id: 'single', label: 'Satu Halaman', icon: <Layers size={20} strokeWidth={1.5} /> },
    { id: 'company', label: 'Profesionalfil Perusahaan', icon: <Building2 size={20} strokeWidth={1.5} /> },
    { id: 'store', label: 'Toko Daring', icon: <Store size={20} strokeWidth={1.5} /> }
  ];

  const pricingData = {
    landing: {
      target: "Target: UMKM / Jualan Cepat / Alur Iklan",
      packages: [
        {
          name: "DASAR", price: "Rp650.000", isPopular: false,
          features: ["1 halaman arahan", "Bagian Utama (Judul Utama + ajakan)", "Bagian Produk/Jasa", "Bagian Keunggulan Singkat", "Bagian Testimoni Sederhana", "Ajakan WhatsApp (ketuk untuk berbincang)", "Pola siap pakai + penyesuaian ringan", "Responsif di ponsel", "Publikasi ke peladen (Vercel/Netlify)", "Revisi: 1x"]
        },
        {
          name: "STANDAR", price: "Rp1.200.000", isPopular: true,
          features: ["1 Halaman Arahan (Lebih Lengkap)", "Utama (Judul Utama + Subjudul)", "Masalah dan solusi", "Detail Produk/Jasa & manfaat", "Bagian testimoni & tanya jawab", "Ajakan berulang", "Desain semi-kustom", "Penulisan dasar (penyusunan ulang)", "Optimasi ponsel", "Integrasi formulir (Surel/WA)", "Optimasi mesin pencari dasar (judul dan deskripsi meta)", "Revisi: 1x besar + 2x kecil"]
        },
        {
          name: "PREMIUM", price: "Mulai Rp1.800.000", isPopular: false,
          features: ["Halaman arahan dengan alur penuh", "Pemikat, masalah, solusi", "Bukti sosial, penawaran, urgensi", "Desain antarmuka kustom (tanpa pola siap pakai)", "Penulisan konversi", "Hierarki visual lanjutan", "Animasi mikro ringan", "Pengalaman ponsel dioptimalkan", "Integrasi WA + Formulir prospek", "Piksel opsional (Meta/Google)", "Revisi: 2x besar + 3x kecil"]
        }
      ]
    },
    single: {
      target: "Target: Merek Personal / Jasa / Portofolio",
      packages: [
        {
          name: "DASAR", price: "Rp900.000", isPopular: false,
          features: ["1 Halaman Gulir", "Bagian Utama", "Tentang", "Layanan", "Kontak", "Desain sederhana", "Responsif di ponsel", "Ajakan WhatsApp", "Revisi: 1x"]
        },
        {
          name: "PRO", price: "Rp1.800.000", isPopular: true,
          features: ["1 Halaman Gulir (Lengkap)", "Utama + Subjudul", "Tentang (Lebih Detail)", "Layanan & Pameran portofolio", "Testimoni & Kontak", "Antarmuka bersih dan modern", "Penulisan dan optimasi mesin pencari dasar", "Optimasi ponsel", "Revisi: 1x besar + 2x kecil"]
        },
        {
          name: "KUSTOM", price: "Mulai Rp2.500.000", isPopular: false,
          features: ["Satu halaman kustom penuh", "Tata letak tanpa pola siap pakai", "Bagian utama sinematik / visual kuat", "Cerita tentang merek", "Layanan + penempatan posisi", "Portofolio lanjutan & testimoni", "Antarmuka dan pengalaman kustom dengan interaksi mikro", "Penulisan naskah disesuaikan merek", "Revisi: 2x besar + 3x kecil"]
        }
      ]
    },
    company: {
      target: "Target: Bisnis Serius / Membangun kepercayaan",
      packages: [
        {
          name: "DASAR", price: "Rp2.000.000", isPopular: false,
          features: ["3–5 Halaman Situs", "Beranda, Tentang, Layanan, Kontak", "Pola dengan penyesuaian", "Responsif di ponsel", "Struktur Standar Bisnis", "Revisi: 1x besar"]
        },
        {
          name: "PROFESIONAL", price: "Mulai Rp3.500.000", isPopular: true,
          features: ["5–10 Halaman Situs", "Beranda, Tentang, Layanan, Portofolio", "Kontak & tanya jawab", "Blog opsional", "Antarmuka lebih bersih dan profesional", "Struktur konten lebih rapi", "Optimasi mesin pencari dasar & ponsel", "Revisi: 2x besar"]
        },
        {
          name: "PREMIUM", price: "Mulai Rp6.000.000", isPopular: false,
          features: ["Situs kustom penuh", "Beranda sinematik / visual kuat", "Cerita tentang merek", "Penempatan layanan", "Pameran portofolio", "Kustom UI/UX (No Pola siap pakai)", "Identitas visual kuat", "Tata letak berbasis pengalaman", "Penulisan naskah disesuaikan merek", "Interaksi mikro / animasi", "Revisi: 2x besar + 3x kecil"]
        }
      ]
    },
    store: {
      target: "Target: UMKM Jualan Daring",
      packages: [
        {
          name: "TOKO DASAR", price: "Rp3.500.000", isPopular: false,
          features: ["Wadah: WooCommerce/Shopify", "Beranda, Toko, Detail Produk", "Keranjang & pembayaran", "Unggah 10 Produk", "Struktur Kategori Sederhana", "Integrasi Pesanan WhatsApp", "Responsif di ponsel", "Revisi: 1x besar"]
        },
        {
          name: "TOKO TUMBUH", price: "Mulai Rp5.000.000", isPopular: true,
          features: ["Wadah: WooCommerce/Shopify", "Beranda, Toko, Detail Produk", "Keranjang & pembayaran", "Kategori Produk Lanjutan", "Unggah 20 Produk", "Gerbang pembayaran (Midtrans/Xendit)", "Integrasi Analitik Google", "Optimasi Mesin Pencari Dasar & UX Optimal", "Optimasi ponsel", "Revisi: 2x besar"]
        }
      ]
    }
  };

  const addOns = [
    "Pemeliharaan (Rp150k - Rp500k / bulan)",
    "Optimasi Mesin Pencari Lanjutan",
    "Penulisan naskah penuh",
    "Perangkat pemerekan",
    "Desain konten (IG / Iklan)",
    "Domain & peladen premium"
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] animate-fadeIn">
      <div className="maksimal-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-12 font-medium">
          <ChevronLeft size={20} strokeWidth={1.5} /> Kembali ke Layanan
        </Link>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-3">Detail Harga Jasa</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Pengembangan Situs <br/>& Optimasi Mesin Pencari</h1>
          <p className="text-gray-400 maksimal-w-2xl mx-auto text-lg leading-relaxed">Pilih paket pengembangan situs yang paling sesuai dengan skala dan kebutuhan bisnis Anda.</p>
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
                {/* Wrapper khusus untuk background glow agar tetap terpotong rapi tanpa memotong badge "Paling Laris" */}
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
                    href={`https://wa.me/6281398621530?text=Halo%20Crimson%20Rift,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20untuk%20layanan%20Situs%20Development.`}
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
              <p className="text-gray-400 leading-relaxed">Tingkatkan performa situs Anda dengan fitur dan layanan tambahan dari kami.</p>
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