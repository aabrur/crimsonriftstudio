import { useState } from 'react';
import { CheckCircle2, ChevronLeft, Camera, Video, Layers, Sparkles, Film, UserSquare, Plus, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Multimedia() {
  const [activeTab, setActiveTab] = useState('wedding');

  const categories = [
    { id: 'wedding', label: 'Wedding & Pro', icon: <HeartHandshake size={18} strokeWidth={1.5} /> },
    { id: 'foto', label: 'Foto Produk', icon: <Camera size={18} strokeWidth={1.5} /> },
    { id: 'video', label: 'Video Produk', icon: <Video size={18} strokeWidth={1.5} /> },
    { id: 'bundle', label: 'Bundle Foto + Video', icon: <Layers size={18} strokeWidth={1.5} /> },
    { id: 'aifoto', label: 'AI Photo', icon: <Sparkles size={18} strokeWidth={1.5} /> },
    { id: 'aivideo', label: 'AI Video', icon: <Film size={18} strokeWidth={1.5} /> },
    { id: 'aichar', label: 'AI Character', icon: <UserSquare size={18} strokeWidth={1.5} /> }
  ];

  const pricingData = {
    wedding: {
      target: "Target: Wedding, Prewedding, Engagement & Professional Events",
      isComplex: true,
      sections: [
        {
          title: "MOMENT PACKAGE",
          subtitle: "This is not the end of the story, this is the first chapter of a love i will never finish writing",
          packages: [
            {
              name: "BRONZE PACKAGE", price: "Rp 1.900.000", isPopular: false,
              features: ["1 Photographer", "Unlimited shoot", "ALL original photo", "50 - 100 photo edit", "file on drive", "DURATION: 2 - 4 hours"]
            },
            {
              name: "SILVER PACKAGE", price: "Rp 2.900.000", isPopular: false,
              features: ["1 Photographer", "1 Videographer", "Unlimited shoot", "ALL original photo", "50 - 100 photo edit", "Cinematic Video (2-3 minute)", "file on drive", "DURATION: 2 - 4 hours", "(engagement, prewedding, intimate, siraman, etc.)"]
            },
            {
              name: "GOLD PACKAGE", price: "Rp 4.200.000", isPopular: true,
              features: ["1 Photographer", "1 Videographer", "Unlimited shoot", "ALL original photo", "100 - 200 photo edit", "Cinematic Video (2-3 minute)", "file on drive", "DURATION: 6 - 8 hours"]
            },
            {
              name: "EMERALD PACKAGE", price: "Rp 5.000.000", isPopular: false,
              features: ["1 Photographer", "1 Videographer", "Unlimited shoot", "ALL original photo", "100 - 200 photo edit", "Portrait collage album 11 sheet + box", "Teaser Video (30 second - 1 minute)", "Cinematic Video (2-3 minute)", "file on drive", "DURATION: 6 - 8 hours"]
            },
            {
              name: "DIAMOND PACKAGE", price: "Rp 6.850.000", isPopular: false,
              features: ["1 Photographer", "1 Videographer", "Unlimited shoot", "ALL original photo", "200 - 300 photo edit", "Portrait album 11 sheet + box", "Teaser Video (30 second - 1 minute)", "Cinematic Video (3 - 5 minute)", "file on drive", "DURATION: 10 - 12 hours"]
            },
            {
              name: "TITANIUM PACKAGE", price: "Rp 9.600.000", isPopular: false,
              features: ["1 Photographer", "1 Videographer", "Unlimited shoot", "ALL original photo", "400 - 500 photo edit", "Portrait album 11 sheet + box", "1 Print Canvas photo 40x50 cm", "Teaser Video (1 - 2 minute)", "Cinematic Video (3 - 10 minute)", "file on drive", "DURATION: 14 - 16 hours"]
            }
          ]
        },
        {
          title: "CANDID PHOTOGRAPHER",
          packages: [
            {
              name: "CANDID I", price: "Rp 1.750.000", isPopular: false,
              features: ["1 photographer", "Edit photo", "All file Gdrive", "Max 4 hour"]
            },
            {
              name: "CANDID II", price: "Rp 2.250.000", isPopular: true,
              features: ["1 photographer", "50 edit photo", "All file Gdrive", "Max 8 hour"]
            },
            {
              name: "CANDID III", price: "Rp 2.750.000", isPopular: false,
              features: ["1 photographer", "100 edit photo", "All file Gdrive", "Max 12 hour"]
            }
          ]
        },
        {
          title: "PREMIUM WEDDING PACKAGE",
          packages: [
            {
              name: "LILY PACKAGE", price: "Rp 7.400.000", isPopular: false,
              features: ["2 photographers", "1 videographer", "Crew Asistent", "200 edited photos", "1 min wedding teaser", "2-3 min cinematic clip", "All jpg unedited + edit files in USB", "DURATION: 6 - 8 hours"]
            },
            {
              name: "JASMINE PACKAGE", price: "Rp 9.750.000", isPopular: false,
              features: ["2 photographers", "2 videographers", "Crew Asistent", "1 portrait album 20x30", "300 edited photos", "1 min video teaser", "3-5 min cinematic clip video", "All jpg unedited + edit files in USB", "DURATION: 6 - 8 hours"]
            },
            {
              name: "ORCHID PACKAGE", price: "Rp 12.950.000", isPopular: true,
              badge: "Best PRICE",
              features: ["2 photographers", "1 Wedding Content Creator WCC", "2 videographers", "Crew Asistent", "2 framed photo canvas 40x50", "1 portrait albums 20x30", "400 edited photos", "1 min video teaser", "5-8 min cinematic clip video", "All jpg unedited + edit files in USB", "DURATION: 6 - 8 hours"]
            }
          ]
        }
      ],
      additionalItems: [
        { name: "SAME DAY EDIT VIDEO", price: "IDR 2.250.000" },
        { name: "ALBUM 20 PAGE 20X30", price: "IDR 1.050.000" },
        { name: "ALBUM 20 PAGE 15X20", price: "IDR 800.000" },
        { name: "EXTRA HOUR/PERSON", price: "IDR 600.000" },
        { name: "MINI STUDIO", price: "BY REQUEST" },
        { name: "PRINT CANVAS 40X50 + FRAME", price: "IDR 850.000" },
        { name: "PRINT CANVAS 40X60 + FRAME", price: "IDR 1.000.000" }
      ],
      terms: [
        {
          icon: "🗓️", title: "1. Pemesanan & Booking",
          points: [
            "Klien wajib melakukan booking tanggal maksimal 1 bulan sebelum acara (selama slot masih tersedia).",
            "Tanggal dianggap resmi terbooking setelah pembayaran DP (booking fee) minimal 20% dari total harga paket.",
            "Sisa pembayaran (pelunasan 80%) wajib dibayarkan maksimal H-1 sebelum acara berlangsung.",
            "Jika DP belum dibayar dianggap belum mengikat."
          ]
        },
        {
          icon: "💰", title: "2. Pembatalan & Refund",
          points: [
            "DP tidak dapat dikembalikan (non-refundable) dengan alasan apa pun, karena dianggap sebagai komitmen reservasi tanggal.",
            "Jika acara diundur, tanggal baru bisa dijadwalkan ulang selama masih tersedia.",
            "Jika acara dibatalkan sepenuhnya oleh klien, maka DP hangus.",
            "Jika acara dibatalkan oleh pihak fotografer karena alasan mendesak (sakit berat, force majeure), maka DP akan dikembalikan 100%."
          ]
        },
        {
          icon: "⏰", title: "3. Durasi & Waktu Kerja",
          points: [
            "Jam kerja tim Crimson Rift Studio terhitung dari awal shoot dekorasi dalam keadaan sudah rapih serta clear area, atau bisa saja 1 atau 2 jam sebelum acara penyambutan mempelai pria di mulai, agar tim ada waktu untuk beauty shoot di pagi hari, saat makeup masih fresh dan cahaya matahari sedang bagus-bagusnya.",
            "Klien diharapkan menyesuaikan rundown agar dokumentasi maksimal sesuai waktu yang disepakati."
          ]
        },
        {
          icon: "📦", title: "4. Hasil & Pengiriman File",
          points: [
            "Semua file akan dikirim melalui Google Drive / flashdisk (sesuai paket yang dipilih).",
            "Estimasi waktu pengerjaan: Lamaran & prewedding (1 - 2 minggu kerja) | Wedding (4 - 8 minggu kerja).",
            "Revisi hanya berlaku untuk warna & tone minor.",
            "File mentahan (RAW) tidak diberikan, kecuali ada perjanjian khusus sebelumnya."
          ]
        },
        {
          icon: "🚗", title: "5. Biaya Tambahan",
          points: [
            "Biaya transportasi & akomodasi di luar area Jakarta, ditanggung oleh klien.",
            "Untuk prewedding luar kota, biaya perjalanan & izin lokasi dibebankan kepada klien.",
            "Jika acara mundur dari jadwal tanpa pemberitahuan, dikenakan biaya overtime sesuai ketentuan."
          ]
        },
        {
          icon: "🌧️", title: "6. Kondisi Tak Terduga (Force Majeure)",
          points: [
            "Pihak fotografer tidak bertanggung jawab atas keterlambatan atau kegagalan dokumentasi akibat: Cuaca buruk, Gangguan teknis di lokasi, Pembatasan pihak venue, atau Kondisi darurat di luar kendali.",
            "Namun, tim akan tetap berusaha memberikan solusi terbaik agar dokumentasi tetap optimal."
          ]
        },
        {
          icon: "🧾", title: "7. Hak Cipta & Penggunaan Karya",
          points: [
            "Semua hasil foto dan video tetap menjadi hak cipta Crimson Rift Studio, dan dapat digunakan untuk keperluan portofolio, promosi, atau media sosial.",
            "Jika klien tidak ingin hasil foto dipublikasikan, wajib menyampaikan di awal (saat booking)."
          ]
        },
        {
          icon: "📩", title: "8. Komunikasi & Koordinasi",
          points: [
            "Klien wajib memberikan informasi lengkap tentang rundown acara, lokasi, dan PIC di lapangan.",
            "Untuk prewedding, klien disarankan melakukan meeting konsep & lokasi minimal 1 minggu sebelum sesi foto (bisa via chat dengan mengirimkan moodboard ke admin)."
          ]
        },
        {
          icon: "🪶", title: "9. Ketentuan Tambahan (Opsional)",
          points: [
            "Masa kadarluarsa file yang ada di Google Drive 3 - 5 bulan.",
            "Setelah lewat masa itu, Crimson Rift Studio akan menghapusnya dari Google Drive.",
            "Untuk file asli/edit tetap kami backup di harddisk pribadi kami secara permanen.",
            "Klien diharapkan melakukan backup mandiri segera setelah menerima file."
          ]
        }
      ]
    },
    foto: {
      target: "Target: Visual Produk Profesional, Katalog & Campaign",
      packages: [
        {
          name: "BASIC PRODUCT PHOTO", price: "Rp250.000", isPopular: false,
          features: ["1 Produk", "5 Foto Edit", "1 Angle Utama + 1-2 Detail Shot", "Background Clean/Putih/Polos", "Lighting Sederhana", "File JPG/PNG via Google Drive", "Revisi: 1x Warna/Tone"]
        },
        {
          name: "STANDARD PRODUCT PHOTO", price: "Rp450.000", isPopular: true,
          features: ["1–3 Produk", "10 Foto Edit (Beberapa Angle)", "Detail Shot + Hero Shot", "Styling Sederhana", "Background Clean / Branded Look", "File Siap Upload Marketplace", "Revisi: 1x Warna/Tone"]
        },
        {
          name: "CATALOG PRODUCT PHOTO", price: "Rp750.000", isPopular: false,
          features: ["3–5 Produk", "20 Foto Edit (Variasi Angle)", "Hero, Detail & Group Shot", "Styling Visual Lebih Rapi", "File Resolusi Tinggi", "Cocok untuk Katalog & Web", "Revisi: 2x Warna/Tone"]
        },
        {
          name: "PREMIUM CAMPAIGN PHOTO", price: "Rp1.250.000", isPopular: false,
          features: ["1 Konsep Visual Campaign", "1–5 Produk (30 Foto Edit)", "Creative Direction & Styled Shoot", "Mood Visual Khusus Brand", "Foto Hero Banner / Landing Page", "File Resolusi Tinggi", "Revisi: 2x Besar + 2x Kecil"]
        }
      ]
    },
    video: {
      target: "Target: Promosi Reels, TikTok & Video Iklan",
      packages: [
        {
          name: "BASIC PRODUCT REEL", price: "Rp350.000", isPopular: false,
          features: ["1 Video Vertikal (15–30 Detik)", "1 Produk & 1 Konsep Sederhana", "Cut Cepat & Musik Dasar", "Text Overlay Sederhana", "Format IG Reels / TikTok", "Revisi: 1x"]
        },
        {
          name: "STANDARD PRODUCT PROMO", price: "Rp650.000", isPopular: true,
          features: ["1 Video Vertikal (30–60 Detik)", "1–3 Produk", "Hook, Highlight & CTA", "Subtitle / Text Overlay", "Color Grading Basic & Sound Design", "Format IG/TikTok/Ads", "Revisi: 1x Besar + 1x Kecil"]
        },
        {
          name: "CINEMATIC PRODUCT VIDEO", price: "Rp1.200.000", isPopular: false,
          features: ["1 Video Utama (45–90 Detik)", "Konsep Storytelling", "Shot Detail & Transisi Mulus", "Cinematic Color Grading", "Motion/Text Effect Ringan", "Audio Mixing Dasar", "Revisi: 2x Kecil"]
        },
        {
          name: "PRODUCT CONTENT PACK", price: "Rp1.800.000", isPopular: false,
          features: ["2 Video Vertikal", "1 Utama (30-60s) + 1 Teaser (10-15s)", "1–3 Produk", "Hook + CTA, Edit Ritmis", "Visual Tajam & Siap Posting", "Cocok untuk Launch Campaign", "Revisi: 2x"]
        }
      ]
    },
    bundle: {
      target: "Target: Paket Lengkap Sosial Media & Marketplace",
      packages: [
        {
          name: "STARTER BUNDLE", price: "Rp900.000", isPopular: false,
          features: ["1 Produk", "8 Foto Edit", "1 Video Reel (15–30 Detik)", "Background Clean", "Format Marketplace & Sosmed", "File Digital", "Revisi: 1x"]
        },
        {
          name: "GROWTH BUNDLE", price: "Rp1.500.000", isPopular: true,
          features: ["1–3 Produk", "15 Foto Edit", "1 Video Promo (30–60 Detik)", "1 Video Reel Pendek", "Styling Sederhana, Visual Seragam", "File Resolusi Tinggi", "Revisi: 1x Besar + 1x Kecil"]
        },
        {
          name: "CAMPAIGN BUNDLE", price: "Rp2.500.000", isPopular: false,
          features: ["3–5 Produk", "25 Foto Edit", "2 Video Vertikal", "1 Visual Campaign", "Creative Direction", "Brand Tone Lebih Kuat", "Revisi: 2x Besar"]
        }
      ]
    },
    aifoto: {
      target: "Target: Solusi Aset Visual Hemat & Cepat untuk UMKM",
      packages: [
        {
          name: "AI BASIC", price: "Rp150.000", isPopular: false,
          features: ["3 Gambar AI", "1 Produk Referensi", "1 Style Visual", "1 Background Direction", "Output Konsep Promo/Thumbnail", "File JPG / PNG", "Revisi: 1x Prompt"]
        },
        {
          name: "AI STANDARD", price: "Rp300.000", isPopular: true,
          features: ["6 Gambar AI", "2 Style Direction", "Variasi Angle & Lighting", "Visual untuk Katalog/Campaign", "Output Feed / Landing Page", "File JPG / PNG", "Revisi: 2x Prompt"]
        },
        {
          name: "AI CAMPAIGN", price: "Rp500.000", isPopular: false,
          features: ["10 Gambar AI", "1 Konsep Campaign Penuh", "Visual Promo Banner", "Visual Landing Page Hero", "Gaya Premium / Futuristik / Clean", "File Resolusi Tinggi", "Revisi: 2x Prompt"]
        }
      ]
    },
    aivideo: {
      target: "Target: Iklan & Teaser Cepat Berbasis AI",
      packages: [
        {
          name: "AI REEL BASIC", price: "Rp250.000", isPopular: false,
          features: ["1 Video Vertikal AI-Assisted", "Durasi 10–15 Detik", "Product Motion Style", "Text Overlay Sederhana", "Format IG Reels / TikTok", "Revisi: 1x"]
        },
        {
          name: "AI PROMO", price: "Rp450.000", isPopular: true,
          features: ["1 Video Vertikal", "Durasi 15–30 Detik", "Konsep Iklan Singkat", "Visual Motion AI", "Text + CTA", "Cocok untuk Soft Launch", "Revisi: 1x Besar"]
        },
        {
          name: "AI CAMPAIGN PRO", price: "Rp750.000", isPopular: false,
          features: ["1 Video Utama", "Durasi 30–45 Detik", "Campaign Visual Lebih Kuat", "Scene Transition", "Ad-style Pacing", "Cocok untuk Brand Awareness", "Revisi: 2x Kecil"]
        }
      ]
    },
    aichar: {
      target: "Target: Maskot Virtual & Karakter Brand",
      packages: [
        {
          name: "CHARACTER BASIC", price: "Rp200.000", isPopular: false,
          features: ["1 Karakter Utama", "3 Pose", "2 Ekspresi", "1 Style Visual", "Cocok untuk Branding Awal", "File JPG / PNG", "Revisi: 1x Prompt"]
        },
        {
          name: "CHARACTER PACK", price: "Rp400.000", isPopular: true,
          features: ["1 Karakter Utama", "6 Pose", "4 Ekspresi", "2 Style Variation", "Background Transparan / Clean", "File Resolusi Tinggi", "Revisi: 2x Prompt"]
        },
        {
          name: "MASCOT / BRAND", price: "Rp650.000", isPopular: false,
          features: ["1 Karakter Brand", "Pose Set Lengkap", "Ekspresi Set Lengkap", "Style Guideline Sederhana", "Ready untuk Sosmed & Poster", "File Transparan Resolusi Tinggi", "Revisi: 2x Prompt"]
        }
      ]
    }
  };

  const addOns = {
    manual: [
      "Extra edited photo (Rp15k–25k/foto)",
      "Extra product (Rp75k–150k/produk)",
      "Extra short video cut (Rp100k–250k)",
      "Same day edit (Rp300k–800k)",
      "Rush order (Menyesuaikan slot)"
    ],
    ai: [
      "Extra image (Rp25k–50k/gambar)",
      "Extra character pose (Rp50k–100k)",
      "Extra revision prompt (Rp25k–50k)",
      "Style variation baru (Rp75k–150k)"
    ]
  };

  const getGridClass = (len) => {
    if (len === 1) return 'grid-cols-1 max-w-md mx-auto';
    if (len === 2) return 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto';
    if (len === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (len === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'; 
    if (len === 6) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'; 
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-12 font-medium">
          <ChevronLeft size={20} strokeWidth={1.5} /> Kembali ke Layanan
        </Link>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-3">Detail Harga Jasa</h2>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Professional Photo <br/>& Videography</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Pilih dari solusi dokumentasi acara profesional, produksi visual lapangan, hingga pembuatan aset digital dengan AI.</p>
        </div>

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

        <div className="animate-fadeIn">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-red-900/10 text-red-500 rounded-full text-sm font-semibold border border-red-900/30">
              {pricingData[activeTab].target}
            </span>
          </div>

          {pricingData[activeTab].isComplex ? (
            // --- LAYOUT KHUSUS UNTUK WEDDING & PRO (COMPLEX) ---
            <div className="space-y-24">
              
              {pricingData[activeTab].sections.map((sec, secIdx) => (
                <div key={secIdx}>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white tracking-widest uppercase">{sec.title}</h2>
                    {sec.subtitle && (
                      <p className="text-red-500 italic mt-3 max-w-2xl mx-auto leading-relaxed">"{sec.subtitle}"</p>
                    )}
                  </div>
                  
                  <div className={`grid ${getGridClass(sec.packages.length)} gap-8 mt-6`}>
                    {sec.packages.map((pkg, idx) => (
                      <div key={idx} className={`relative flex flex-col bg-[#111] p-8 rounded-3xl transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 ${pkg.isPopular || pkg.badge ? 'border border-red-500/30 md:-translate-y-4 hover:-translate-y-5' : 'border border-gray-800 hover:border-red-900/30'}`}>
                        
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

                          <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${pkg.isPopular || pkg.badge ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-900/20 hover:-translate-y-1' : 'bg-[#1a1a1a] hover:bg-red-600 text-gray-300 hover:text-white border border-gray-800 hover:border-red-600 shadow-sm hover:shadow-md hover:-translate-y-1'}`}>
                            Pilih Paket Ini
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Additional Items Khusus Wedding */}
              <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-gray-800 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4 relative z-10">Additional Items</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {pricingData[activeTab].additionalItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col p-5 bg-[#1a1a1a] rounded-2xl border border-gray-800 hover:border-red-900/30 transition-colors">
                      <span className="text-sm font-bold text-gray-400 mb-1">{item.name}</span>
                      <span className="text-lg font-bold text-red-500">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms & Conditions Section */}
              <div className="bg-[#050505] p-8 md:p-12 rounded-3xl border border-gray-800/50 shadow-lg">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-2">Syarat & Ketentuan</h3>
                  <p className="text-gray-500">Penting untuk dibaca dan disepakati bersama</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {pricingData[activeTab].terms.map((term, idx) => (
                    <div key={idx} className="bg-[#111] p-6 rounded-3xl border border-gray-800/60 hover:border-gray-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{term.icon}</span>
                        <h4 className="text-lg font-bold text-red-500">{term.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {term.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-gray-400">
                            <span className="text-gray-600 mt-1">•</span>
                            <span className="text-sm leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            // --- LAYOUT STANDAR UNTUK FOTO/VIDEO PRODUK & AI ---
            <div className={`grid ${getGridClass(pricingData[activeTab].packages.length)} gap-8 mt-6`}>
              {pricingData[activeTab].packages.map((pkg, idx) => (
                <div key={idx} className={`relative flex flex-col bg-[#111] p-8 rounded-3xl transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1 ${pkg.isPopular ? 'border border-red-500/30 md:-translate-y-4 hover:-translate-y-5' : 'border border-gray-800 hover:border-red-900/30'}`}>
                  
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

                    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${pkg.isPopular ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-900/20 hover:-translate-y-1' : 'bg-[#1a1a1a] hover:bg-red-600 text-gray-300 hover:text-white border border-gray-800 hover:border-red-600 shadow-sm hover:shadow-md hover:-translate-y-1'}`}>
                      Pilih Paket Ini
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Ons Section (Hanya tampil jika bukan di tab wedding yang punya addons khusus) */}
        {!pricingData[activeTab].isComplex && (
          <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12">
              
              <div className="lg:w-1/3">
                <h3 className="text-2xl font-bold text-white mb-3">Layanan Tambahan (Add-on)</h3>
                <p className="text-gray-400 leading-relaxed">Kustomisasi paket Anda sesuai dengan skala dan timeline project yang dibutuhkan.</p>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="bg-[#111] p-6 rounded-3xl border border-gray-800 hover:border-red-900/10 transition-colors">
                  <h4 className="text-red-500 font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                    <Camera size={20} strokeWidth={1.5} /> Add-on Produksi Manual
                  </h4>
                  <div className="space-y-3">
                    {addOns.manual.map((addon, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                        <Plus size={18} strokeWidth={1.5} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{addon}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#111] p-6 rounded-3xl border border-gray-800 hover:border-red-900/10 transition-colors">
                  <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                    <Sparkles size={20} strokeWidth={1.5} /> Add-on Layanan AI
                  </h4>
                  <div className="space-y-3">
                    {addOns.ai.map((addon, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                        <Plus size={18} strokeWidth={1.5} className="text-red-400 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{addon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}