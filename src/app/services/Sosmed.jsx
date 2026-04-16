import { useState } from 'react';
import { CheckCircle2, XCircle, ChevronLeft, Smartphone, TrendingUp, Crown, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sosmed() {
  const [activeTab, setActiveTab] = useState('starter');

  const categories = [
    { id: 'starter', label: 'UMKM & Starter', icon: <Smartphone size={18} /> },
    { id: 'business', label: 'Business & Growth', icon: <TrendingUp size={18} /> },
    { id: 'premium', label: 'Premium Full Service', icon: <Crown size={18} /> }
  ];

  const pricingData = {
    starter: {
      target: "Target: Mulai konsisten, branding dasar & eksistensi di sosial media",
      packages: [
        {
          name: "STARTER (ENTRY UMKM)", 
          price: "Rp650.000", 
          period: "/ bulan",
          focus: "Fokus: 'Exist & Jalan'",
          isPopular: false,
          features: [
            "1 Platform (IG / TikTok)", 
            "8 Konten Feed (Static/Carousel)", 
            "8 Caption + Hashtag Basic", 
            "4 Story Design", 
            "Template-based Design", 
            "Basic Content Planning", 
            "Admin Posting & Scheduling"
          ],
          batasan: [
            "Tidak termasuk Video Reels", 
            "Tidak termasuk Riset Kompetitor", 
            "Tidak termasuk DM / Komentar", 
            "Tidak termasuk Branding Visual Custom", 
            "Revisi hanya 1x per konten (Minor)"
          ]
        },
        {
          name: "BASIC GROWTH", 
          price: "Rp1.200.000", 
          period: "/ bulan",
          focus: "Fokus: 'Mulai Naik & Lebih Rapi'",
          isPopular: true,
          features: [
            "1 Platform (IG / TikTok)", 
            "12 Konten Feed & 8–12 Story", 
            "1 Video Reels / Short", 
            "Copywriting (Caption + Hashtag)", 
            "Content Calendar Bulanan", 
            "Design Semi-custom", 
            "Admin Posting + Scheduling", 
            "Insight Basic"
          ],
          batasan: [
            "Hanya 1 Video / bulan", 
            "Belum ada strategi branding mendalam", 
            "Tidak termasuk DM Handling & Campaign", 
            "Revisi max 2x (Minor)"
          ]
        },
        {
          name: "UMKM PRO", 
          price: "Rp2.000.000", 
          period: "/ bulan",
          focus: "Fokus: 'Mulai Serius & Konsisten'",
          isPopular: false,
          features: [
            "1–2 Platform", 
            "15 Konten Feed & 20–30 Story", 
            "2 Video Reels", 
            "Content Strategy Ringan", 
            "Visual Custom (No Template Feel)", 
            "Copywriting Optimized & Hashtag Research", 
            "Admin + Posting + Scheduling", 
            "Monthly Report"
          ],
          batasan: [
            "Strategi masih basic (belum full funnel)", 
            "Tidak termasuk Ads Management", 
            "DM & Comment hanya monitoring", 
            "Revisi max 2x"
          ]
        }
      ]
    },
    business: {
      target: "Target: Scale up, optimasi penjualan & audience engagement",
      packages: [
        {
          name: "BUSINESS", 
          price: "Rp3.500.000", 
          period: "/ bulan",
          focus: "Fokus: 'Branding + Mulai Jualan'",
          isPopular: false,
          features: [
            "2 Platform (IG + TikTok)", 
            "20 Konten Feed & 30 Story", 
            "4 Video Reels", 
            "Content Strategy (Branding + Selling)", 
            "Visual Branding Konsisten", 
            "Copywriting Conversion", 
            "Basic Competitor Research", 
            "Admin + Reply Comment (Basic)", 
            "Monthly Report + Insight"
          ],
          batasan: [
            "DM handling masih terbatas (reply basic)", 
            "Belum termasuk Ads Management", 
            "Belum termasuk KOL / Influencer", 
            "Revisi max 3x"
          ]
        },
        {
          name: "GROWTH BRAND", 
          price: "Rp5.000.000", 
          period: "/ bulan",
          focus: "Fokus: 'Scale & Growth Serius'",
          isPopular: true,
          features: [
            "2–3 Platform", 
            "25 Konten Feed & 30–50 Story", 
            "6–8 Video Reels", 
            "Content Planning (Weekly System)", 
            "Visual Identity Kuat", 
            "Copywriting Storytelling + Selling", 
            "Trend Research & Audience Targeting", 
            "Admin + Reply DM / Comment", 
            "Analytics + Improvement Strategy", 
            "Monthly Report Detail"
          ],
          batasan: [
            "Ads belum termasuk (Optional setup)", 
            "Campaign belum full scale", 
            "Tidak termasuk full funnel marketing system", 
            "Revisi max 3x"
          ]
        }
      ]
    },
    premium: {
      target: "Target: Brand ekosistem, campaign besar & delegasi total",
      packages: [
        {
          name: "PREMIUM SOCIAL BRAND", 
          price: "Rp7.500.000", 
          period: "/ bulan",
          focus: "Fokus: 'Full Handled + Scale + Branding Kuat'",
          isPopular: true,
          badge: "FULL SERVICE",
          features: [
            "3 Platform (IG + TikTok + Optional)", 
            "30 Konten Feed & Daily Story", 
            "10–15 Video Reels", 
            "Full Content Strategy & Campaign Planning", 
            "Branding Direction (Visual + Tone)", 
            "Content Funnel (Awareness → Conversion)", 
            "Copywriting Advanced (Sales-driven)", 
            "Trend + Viral System", 
            "Admin Full Handling (DM + Comment)", 
            "Community Management", 
            "Performance Tracking (Weekly)", 
            "Monthly Report + Strategy Improvement", 
            "Brainstorming Session Bulanan",
            "Termasuk: Positioning, Targeting & Engagement Strategy"
          ],
          batasan: [
            "Ads Management belum termasuk budget iklan", 
            "KOL / Influencer belum termasuk biaya talent", 
            "Produksi foto/video skala besar = Add-on", 
            "Revisi fleksibel tapi tetap dalam scope"
          ]
        }
      ]
    }
  };

  const addOns = [
    "Extra Reels: Rp150.000 – Rp300.000",
    "Extra Design: Rp50.000 – Rp100.000",
    "Ads Management: Rp500.000 – Rp2.000.000",
    "KOL / Influencer Setup: Mulai Rp300.000",
    "Photoshoot: Mulai Rp500.000",
    "Video Shoot: Mulai Rp750.000",
    "AI Content Pack: Rp300.000 – Rp1.000.000"
  ];

  const terms = [
    {
      icon: "💳", title: "1. Pembayaran",
      points: [
        "Sistem berbasis layanan bulanan (Monthly retainer).",
        "Full payment wajib dibayarkan di awal sebelum project dimulai.",
        "Tidak ada refund dengan alasan apa pun.",
        "Keterlambatan pembayaran = Project delay / ditunda."
      ]
    },
    {
      icon: "⏳", title: "2. Durasi & Workflow",
      points: [
        "Masa kerja adalah 30 hari per cycle (siklus bulanan).",
        "Posting dilakukan secara rutin mengikuti content calendar yang disepakati.",
        "Perubahan konsep mendadak di tengah jalan dapat menyebabkan delay jadwal tayang."
      ]
    },
    {
      icon: "📏", title: "3. Revisi (Strict Control)",
      points: [
        "Jumlah revisi hanya berlaku sesuai batas paket yang dipilih.",
        "Revisi hanya berlaku untuk perubahan minor (Visual minor, typography, atau caption minor).",
        "Revisi besar (ubah angle, ubah konsep) = Dihitung sebagai project/konten baru."
      ]
    },
    {
      icon: "🛡️", title: "4. Scope Control (Sangat Penting)",
      points: [
        "Kami bekerja secara profesional, tidak menerima permintaan 'ubah konsep total' di tengah jalan.",
        "Tidak menerima request 'ikut mood hari ini'.",
        "Semua eksekusi harus berbasis pada brief awal yang sudah disetujui bersama."
      ]
    },
    {
      icon: "📦", title: "5. Material & Konten",
      points: [
        "Klien wajib men-supply materi (foto/video mentah) jika ada.",
        "Jika klien tidak memiliki materi, tim CRS akan men-create konten sesuai batasan paket.",
        "Kualitas visual akhir sangat bergantung pada kualitas input/materi dari brand Anda."
      ]
    },
    {
      icon: "💬", title: "6. Admin & Handling",
      points: [
        "Paket Starter hingga Business memiliki fitur admin yang terbatas (hanya posting/monitoring).",
        "Paket Growth dan Premium memiliki admin aktif (balas DM & Komen).",
        "Tidak termasuk aktivitas closing sales (Kecuali mengambil add-on khusus)."
      ]
    },
    {
      icon: "⚠️", title: "7. Result Disclaimer",
      points: [
        "Layanan ini tidak menjamin konten pasti viral atau terjadinya sales instan.",
        "Fokus utama kami adalah: Membangun Branding, Menjaga Consistency, dan Organic Growth jangka panjang."
      ]
    },
    {
      icon: "🛑", title: "8. Termination (Pemberhentian)",
      points: [
        "Pemberitahuan stop/berhenti layanan minimal H-7 sebelum cycle bulan baru dimulai.",
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
    if (len === 1) return 'grid-cols-1 max-w-md mx-auto';
    if (len === 2) return 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto';
    if (len === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors mb-12 font-medium">
          <ChevronLeft size={20} /> Kembali ke Layanan
        </Link>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">Detail Harga Jasa</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Social Media <br/>& Ads Agency</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Tingkatkan interaksi audiens, bangun kepercayaan brand, dan dorong penjualan dengan pengelolaan media sosial yang profesional.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
              <span className="text-sm md:text-base">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="animate-fadeIn">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-red-900/20 text-red-500 rounded-full text-sm font-semibold border border-red-900/50">
              {pricingData[activeTab].target}
            </span>
          </div>

          <div className={`grid ${getGridClass(pricingData[activeTab].packages.length)} gap-8`}>
            {pricingData[activeTab].packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col bg-[#111] p-8 rounded-2xl transition-all duration-300 ${
                  pkg.isPopular 
                  ? 'border-2 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.15)] md:-translate-y-4' 
                  : 'border border-gray-800 hover:border-gray-600'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                )}
                {!pkg.badge && pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-red-600 text-white text-xs font-bold tracking-widest uppercase rounded-full">
                    Paling Laris
                  </div>
                )}
                
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
                        <CheckCircle2 size={18} className="text-red-600 shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Batasan Scope (Limitations) */}
                {pkg.batasan && pkg.batasan.length > 0 && (
                  <div className="mt-auto mb-8 pt-6 border-t border-gray-800/60">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block">Batasan & Scope:</span>
                    <ul className="space-y-3">
                      {pkg.batasan.map((bts, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-gray-500">
                          <XCircle size={16} className="text-gray-600 shrink-0 mt-0.5" />
                          <span className="text-xs leading-snug">{bts}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${
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

        {/* Add Ons Section */}
        <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-3">Layanan Tambahan (Add-on)</h3>
              <p className="text-gray-400">Tingkatkan efektivitas promosi dengan aset visual tambahan dan optimasi iklan.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addOns.map((addon, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300 bg-[#1a1a1a] p-4 rounded-xl border border-gray-800">
                  <Plus size={18} className="text-red-500 shrink-0" />
                  <span className="text-sm font-medium">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div className="mt-24 bg-[#050505] p-8 md:p-12 rounded-3xl border border-red-900/30 shadow-[0_0_30px_rgba(220,38,38,0.03)]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Syarat & Ketentuan (T&C)</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">Untuk menjaga profesionalisme dan kualitas kerja, berikut adalah aturan tegas yang kami terapkan pada layanan Social Media Management.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {terms.map((term, idx) => (
              <div key={idx} className="bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800/60 flex flex-col">
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