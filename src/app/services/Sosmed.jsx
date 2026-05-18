import { useState } from 'react';
import { CheckCircle2, XCircle, ChevronLeft, Smartphone, TrendingUp, Crown, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sosmed() {
  const [activeTab, setActiveTab] = useState('starter');

  const categories = [
    { id: 'starter', label: 'UMKM & Pemula', icon: <Smartphone size={18} strokeWidth={1.5} /> },
    { id: 'business', label: 'Bisnis & Pertumbuhan', icon: <TrendingUp size={18} strokeWidth={1.5} /> },
    { id: 'premium', label: 'Premium Layanan Penuh', icon: <Crown size={18} strokeWidth={1.5} /> }
  ];

  const pricingData = {
    starter: {
      target: "Target: Mulai konsisten, pemerekan dasar & eksistensi di sosial media",
      packages: [
        {
          name: "PEMULA UMKM", 
          price: "Rp650.000", 
          period: "/ bulan",
          focus: "Fokus: 'Hadir & berjalan'",
          isPopular: false,
          features: [
            "1 Wadah (IG / TikTok)", 
            "8 Konten umpan (statis/karusel)", 
            "8 Takarir + tagar dasar", 
            "4 Desain cerita", 
            "Desain berbasis pola", 
            "Perencanaan konten dasar", 
            "Admin unggah & penjadwalan"
          ],
          batasan: [
            "Tidak termasuk Video pendek", 
            "Tidak termasuk Riset pesaing", 
            "Tidak termasuk pesan langsung / komentar", 
            "Tidak termasuk pemerekan visual kustom", 
            "Revisi hanya 1x per konten (kecil)"
          ]
        },
        {
          name: "PERTUMBUHAN DASAR", 
          price: "Rp1.200.000", 
          period: "/ bulan",
          focus: "Fokus: 'Mulai naik & lebih rapi'",
          isPopular: true,
          features: [
            "1 Wadah (IG / TikTok)", 
            "12 Konten umpan & 8–12 Cerita", 
            "1 video pendek", 
            "Penulisan (takarir + tagar)", 
            "Kalender konten bulanan", 
            "Desain semi-kustom", 
            "Admin unggahan + penjadwalan", 
            "Wawasan dasar"
          ],
          batasan: [
            "Hanya 1 Video per bulan", 
            "Belum ada strategi pemerekan mendalam", 
            "Tidak termasuk pengelolaan pesan & kampanye", 
            "Revisi maksimal 2x (kecil)"
          ]
        },
        {
          name: "UMKM PRO", 
          price: "Rp2.000.000", 
          period: "/ bulan",
          focus: "Fokus: 'Mulai serius & konsisten'",
          isPopular: false,
          features: [
            "1–2 Wadah", 
            "15 Konten umpan & 20–30 Cerita", 
            "2 Video pendek", 
            "Strategi konten ringan", 
            "Visual kustom (tidak terasa pola siap pakai)", 
            "Penulisan teroptimasi & riset tagar", 
            "Admin + unggahan + penjadwalan", 
            "Laporan bulanan"
          ],
          batasan: [
            "Strategi masih dasar (belum alur penuh)", 
            "Tidak termasuk Manajemen iklan", 
            "DM & Komentar hanya pemantauan", 
            "Revisi maksimal 2x"
          ]
        }
      ]
    },
    business: {
      target: "Target: peningkatan skala, optimasi penjualan & keterlibatan audiens",
      packages: [
        {
          name: "BISNIS", 
          price: "Rp3.500.000", 
          period: "/ bulan",
          focus: "Fokus: 'Pemerekan + mulai menjual'",
          isPopular: false,
          features: [
            "2 Wadah (IG + TikTok)", 
            "20 Konten umpan & 30 Cerita", 
            "4 Video pendek", 
            "Strategi konten (pemerekan + penjualan)", 
            "Pemerekan visual konsisten", 
            "Penulisan konversi", 
            "Riset pesaing dasar", 
            "Admin + Balas komentar (Dasar)", 
            "Laporan bulanan + wawasan"
          ],
          batasan: [
            "pengelolaan pesan masih terbatas (balasan dasar)", 
            "Belum termasuk Manajemen iklan", 
            "Belum termasuk KOL / pemengaruh", 
            "Revisi maksimal 3x"
          ]
        },
        {
          name: "MEREK TUMBUH", 
          price: "Rp5.000.000", 
          period: "/ bulan",
          focus: "Fokus: 'Skala & pertumbuhan serius'",
          isPopular: true,
          features: [
            "2–3 Wadah", 
            "25 Konten umpan & 30–50 Cerita", 
            "6–8 Video pendek", 
            "Perencanaan konten (sistem mingguan)", 
            "Identitas visual kuat", 
            "Penulisan cerita + penjualan", 
            "Riset tren & penargetan audiens", 
            "Admin + Balas pesan / komentar", 
            "Analitik + strategi peningkatan", 
            "Laporan bulanan rinci"
          ],
          batasan: [
            "Iklan belum termasuk (pengaturan opsional)", 
            "Kampanye belum full scale", 
            "Tidak termasuk alur penuh sistem pemasaran", 
            "Revisi maksimal 3x"
          ]
        }
      ]
    },
    premium: {
      target: "Target: Merek ekosistem, campaign besar & delegasi total",
      packages: [
        {
          name: "MEREK SOSIAL PREMIUM", 
          price: "Rp7.500.000", 
          period: "/ bulan",
          focus: "Fokus: 'Ditangani penuh + skala + pemerekan kuat'",
          isPopular: true,
          badge: "LAYANAN PENUH",
          features: [
            "3 Wadah (IG + TikTok + Opsional)", 
            "30 Konten umpan & cerita harian", 
            "10–15 Video pendek", 
            "Strategi konten penuh & perencanaan kampanye", 
            "Arah pemerekan (visual + nada)", 
            "Alur konten (kesadaran → konversi)", 
            "Penulisan lanjutan (berorientasi penjualan)", 
            "Sistem tren + viral", 
            "Penanganan admenit penuh (DM + Komentar)", 
            "Pengelolaan komunitas", 
            "Pelacakan kinerja (mingguan)", 
            "Laporan bulanan + peningkatan strategi", 
            "Sesi curah gagasan Bulanan",
            "Termasuk: posisi, strategi penargetan & keterlibatan"
          ],
          batasan: [
            "Manajemen iklan belum termasuk budget iklan", 
            "KOL / pemengaruh belum termasuk biaya talent", 
            "Produksi foto/video skala besar = Tambahan", 
            "Revisi fleksibel tapi tetap dalam scope"
          ]
        }
      ]
    }
  };

  const addOns = [
    "Tambahan video pendek: Rp150.000 – Rp300.000",
    "Tambahan desain: Rp50.000 – Rp100.000",
    "Manajemen iklan: Rp500.000 – Rp2.000.000",
    "KOL / Pengaturan pemengaruh: Mulai Rp300.000",
    "Pemotretan: Mulai Rp500.000",
    "Pengambilan video: Mulai Rp750.000",
    "Paket konten kecerdasan buatan: Rp300.000 – Rp1.000.000"
  ];

  const terms = [
    {
      icon: "💳", title: "1. Pembayaran",
      points: [
        "Sistem berbasis layanan bulanan (retainer bulanan).",
        "Pembayaran penuh wajib dibayarkan di awal sebelum proyek dimulai.",
        "Tidak ada pengembalian dana dengan alasan apa pun.",
        "Keterlambatan pembayaran = proyek tertunda / ditunda."
      ]
    },
    {
      icon: "⏳", title: "2. Durasi & Alur kerja",
      points: [
        "Masa kerja adalah 30 hari per siklus (siklus bulanan).",
        "unggahan dilakukan secara rutin mengikuti kalender konten yang disepakati.",
        "Perubahan konsep mendadak di tengah jalan dapat menyebabkan tertunda jadwal tayang."
      ]
    },
    {
      icon: "📏", title: "3. Revisi (Kontrol ketat)",
      points: [
        "Jumlah revisi hanya berlaku sesuai batas paket yang dipilih.",
        "Revisi hanya berlaku untuk perubahan kecil (visual kecil, tipografi, atau takarir kecil).",
        "Revisi besar (ubah angle, ubah konsep) = Dihitung sebagai proyek/konten baru."
      ]
    },
    {
      icon: "🛡️", title: "4. Kontrol cakupan (Sangat Penting)",
      points: [
        "Kami bekerja secara profesional, tidak menerima permintaan 'ubah konsep total' di tengah jalan.",
        "Tidak menerima permintaan 'ikut suasana hati hari ini'.",
        "Semua eksekusi harus berbasis pada arahan awal yang sudah disetujui bersama."
      ]
    },
    {
      icon: "📦", title: "5. Materi & Konten",
      points: [
        "Klien wajib men-menyediakan materi (foto/video mentah) jika ada.",
        "Jika klien tidak memiliki materi, tim CRS akan membuat konten sesuai batasan paket.",
        "Kualitas visual akhir sangat bergantung pada kualitas masukan/materi dari merek Anda."
      ]
    },
    {
      icon: "💬", title: "6. Admin & Penanganan",
      points: [
        "Paket Pemula hingga Bisnis memiliki fitur admenit yang terbatas (hanya posting/pemantauan).",
        "Paket Pertumbuhan dan Premium memiliki admenit aktif (balas DM & Komen).",
        "Tidak termasuk aktivitas closing sales (Kecuali mengambil add-on khusus)."
      ]
    },
    {
      icon: "⚠️", title: "7. Result Disclaimer",
      points: [
        "Layanan ini tidak menjamenit konten pasti viral atau terjadinya sales instan.",
        "Fokus utama kami adalah: Membangun Pemerekan, Menjaga Consistency, dan Organic Pertumbuhan jangka panjang."
      ]
    },
    {
      icon: "🛑", title: "8. Termination (Pemberhentian)",
      points: [
        "Pemberitahuan stop/berhenti layanan minimal H-7 sebelum siklus bulan baru dimulai.",
        "Jika tidak ada konfirmasi H-7, sistem dianggap auto-renew untuk bulan berikutnya."
      ]
    },
    {
      icon: "🌩️", title: "9. Force Majeure",
      points: [
        "Tim Crimson Rift tidak bertanggung jawab atas kerugian akibat perubahan mendadak pada algoritma platform.",
        "Tidak bertanggung jawab atas akun yang di-banned oleh pihak ketiga (Instagram/TikTok).",
        "Tidak bertanggung jawab atas system error/down dari server platform."
      ]
    }
  ];

  const getGridClass = (len) => {
    if (len === 1) return 'grid-cols-1 maksimal-w-md mx-auto';
    if (len === 2) return 'grid-cols-1 md:grid-cols-2 maksimal-w-4xl mx-auto';
    if (len === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] animate-fadeIn">
      <div className="maksimal-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-12 font-medium">
          <ChevronLeft size={20} strokeWidth={1.5} /> Kembali ke Layanan
        </Link>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-3">Detail Harga Jasa</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Media Sosial <br/>& Iklan</h1>
          <p className="text-gray-400 maksimal-w-2xl mx-auto text-lg leading-relaxed">Tingkatkan interaksi audiens, bangun kepercayaan merek, dan dorong penjualan dengan pengelolaan media sosial yang profesional.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
              <span className="text-sm md:text-base">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Konten Area */}
        <div className="animate-fadeIn">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-red-900/10 text-red-500 rounded-full text-sm font-semibold border border-red-900/30">
              {pricingData[activeTab].target}
            </span>
          </div>

          <div className={`grid ${getGridClass(pricingData[activeTab].packages.length)} gap-8 mt-6`}>
            {pricingData[activeTab].packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col bg-[#111] p-8 rounded-3xl transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 ${
                  pkg.isPopular || pkg.badge
                  ? 'border border-red-500/30 md:-translate-y-4 hover:-translate-y-5' 
                  : 'border border-gray-800 hover:border-red-900/30'
                }`}
              >
                {/* Wrapper khusus untuk background glow agar tidak memotong label */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {(pkg.isPopular || pkg.badge) && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-bl-full -z-10"></div>
                  )}
                </div>

                {pkg.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md z-20">
                    {pkg.badge}
                  </div>
                )}
                {!pkg.badge && pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md z-20">
                    Paling Laris
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-300 mb-1">{pkg.name}</h3>
                  <p className="text-sm font-medium text-red-500 mb-4">{pkg.focus}</p>
                  <h4 className="text-3xl font-black text-white mb-1">{pkg.price}</h4>
                  <p className="text-sm text-gray-500 mb-8">{pkg.period}</p>
                  
                  {/* Features */}
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block">Yang Anda Dapatkan:</span>
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 size={18} strokeWidth={1.5} className="text-red-500 shrink-0 mt-0.5" />
                          <span className="text-sm leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Batasan Cakupan (Limitations) */}
                  {pkg.batasan && pkg.batasan.length > 0 && (
                    <div className="mt-auto mb-8 pt-6 border-t border-gray-800/60">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block">Batasan & Cakupan:</span>
                      <ul className="space-y-3">
                        {pkg.batasan.map((bts, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-gray-500">
                            <XCircle size={16} strokeWidth={1.5} className="text-gray-600 shrink-0 mt-0.5" />
                            <span className="text-xs leading-snug">{bts}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a 
                    href={`https://wa.me/6281398621530?text=Halo%20Crimson%20Rift,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20untuk%20layanan%20Social%20Media%20%26%20Iklan.`}
                    target="_blank"
                    rel="noreferrer"
                    className={`block text-center w-full py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${
                    pkg.isPopular || pkg.badge
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-900/20 hover:-translate-y-1' 
                    : 'bg-[#1a1a1a] hover:bg-red-600 text-gray-300 hover:text-white border border-gray-800 hover:border-red-600 shadow-sm hover:shadow-md hover:-translate-y-1'
                  }`}>
                    Pilih Paket Ini
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Ons Bagian */}
        <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-3">Layanan Tambahan (Tambahan)</h3>
              <p className="text-gray-400 leading-relaxed">Tingkatkan efektivitas promosi dengan aset visual tambahan dan optimasi iklan.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addOns.map((addon, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300 bg-[#1a1a1a] p-4 rounded-2xl border border-gray-800 hover:border-red-900/30 transition-colors">
                  <Plus size={18} strokeWidth={1.5} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terms & Conditions Bagian */}
        <div className="mt-24 bg-[#050505] p-8 md:p-12 rounded-3xl border border-gray-800/50 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Syarat & Ketentuan (T&C)</h3>
            <p className="text-gray-500 maksimal-w-2xl mx-auto">Untuk menjaga profesionalisme dan kualitas kerja, berikut adalah aturan tegas yang kami terapkan pada layanan manajemen media sosial.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms.map((term, idx) => (
              <div key={idx} className="bg-[#111] p-6 rounded-3xl border border-gray-800/60 hover:border-gray-700 transition-colors flex flex-col">
                <div className="flex items-center gap-3 mb-5 border-b border-gray-800/50 pb-4">
                  <span className="text-2xl">{term.icon}</span>
                  <h4 className="text-base font-bold text-red-500">{term.title}</h4>
                </div>
                <ul className="space-y-3 flex-grow">
                  {term.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-gray-400">
                      <span className="text-gray-600 mt-0.5">•</span>
                      <span className="text-sm leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}