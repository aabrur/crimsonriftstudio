import { useState } from 'react';
import { CheckCircle2, ChevronLeft, Camera, Video, Layers, Sparkles, Film, UserSquare, Plus, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Multimedia() {
  const [activeTab, setActiveTab] = useState('wedding');

  const categories = [
    { id: 'wedding', label: 'Pernikahan & Profesionalfesional', icon: <HeartHandshake size={18} strokeWidth={1.5} /> },
    { id: 'foto', label: 'Foto Produk', icon: <Camera size={18} strokeWidth={1.5} /> },
    { id: 'video', label: 'Video Produk', icon: <Video size={18} strokeWidth={1.5} /> },
    { id: 'bundle', label: 'Paket Foto + Video', icon: <Layers size={18} strokeWidth={1.5} /> },
    { id: 'aifoto', label: 'Foto Kecerdasan Buatan', icon: <Sparkles size={18} strokeWidth={1.5} /> },
    { id: 'aivideo', label: 'Video Kecerdasan Buatan', icon: <Film size={18} strokeWidth={1.5} /> },
    { id: 'aichar', label: 'Karakter Kecerdasan Buatan', icon: <UserSquare size={18} strokeWidth={1.5} /> }
  ];

  const pricingData = {
    wedding: {
      target: "Target: Pernikahan, Prewedding, Keterlibatan & Profesionalfesional Events",
      isComplex: true,
      sections: [
        {
          title: "MOMENT PAKET",
          subtitle: "This is not the end of the story, this is the first chapter of a love i will never finish writing",
          packages: [
            {
              name: "BRONZE PAKET", price: "Rp 1.900.000", isPopular: false,
              features: ["1 Fotografer", "Pengambilan tanpa batas", "Semua foto asli", "50 - 100 foto disunting", "berkas di penyimpanan awan", "DURASI: 2 - 4 jam"]
            },
            {
              name: "PAKET PERAK", price: "Rp 2.900.000", isPopular: false,
              features: ["1 Fotografer", "1 Videografer", "Pengambilan tanpa batas", "Semua foto asli", "50 - 100 foto disunting", "Video sinematik (2-3 menit)", "berkas di penyimpanan awan", "DURASI: 2 - 4 jam", "(pertunangan, pra-pernikahan, intim, siraman, dan sejenisnya)"]
            },
            {
              name: "PAKET EMAS", price: "Rp 4.200.000", isPopular: true,
              features: ["1 Fotografer", "1 Videografer", "Pengambilan tanpa batas", "Semua foto asli", "100 - 200 foto disunting", "Video sinematik (2-3 menit)", "berkas di penyimpanan awan", "DURASI: 6 - 8 jam"]
            },
            {
              name: "PAKET ZAMRUD", price: "Rp 5.000.000", isPopular: false,
              features: ["1 Fotografer", "1 Videografer", "Pengambilan tanpa batas", "Semua foto asli", "100 - 200 foto disunting", "kolase potret album 11 lembar + kotak", "Video cuplikan (30 detik - 1 menit)", "Video sinematik (2-3 menit)", "berkas di penyimpanan awan", "DURASI: 6 - 8 jam"]
            },
            {
              name: "PAKET BERLIAN", price: "Rp 6.850.000", isPopular: false,
              features: ["1 Fotografer", "1 Videografer", "Pengambilan tanpa batas", "Semua foto asli", "200 - 300 foto disunting", "album potret 11 lembar + kotak", "Video cuplikan (30 detik - 1 menit)", "Video sinematik (3 - 5 menit)", "berkas di penyimpanan awan", "DURASI: 10 - 12 jam"]
            },
            {
              name: "PAKET TITANIUM", price: "Rp 9.600.000", isPopular: false,
              features: ["1 Fotografer", "1 Videografer", "Pengambilan tanpa batas", "Semua foto asli", "400 - 500 foto disunting", "album potret 11 lembar + kotak", "1 Cetak kanvas foto 40x50 cm", "Video cuplikan (1 - 2 menit)", "Video sinematik (3 - 10 menit)", "berkas di penyimpanan awan", "DURASI: 14 - 16 jam"]
            }
          ]
        },
        {
          title: "FOTOGRAFER KANDID",
          packages: [
            {
              name: "KANDID I", price: "Rp 1.750.000", isPopular: false,
              features: ["1 fotografer", "Sunting foto", "Semua berkas di Google Drive", "Maksimal 4 jam"]
            },
            {
              name: "KANDID II", price: "Rp 2.250.000", isPopular: true,
              features: ["1 fotografer", "50 foto disunting", "Semua berkas di Google Drive", "Maksimal 8 jam"]
            },
            {
              name: "KANDID III", price: "Rp 2.750.000", isPopular: false,
              features: ["1 fotografer", "100 foto disunting", "Semua berkas di Google Drive", "Maksimal 12 jam"]
            }
          ]
        },
        {
          title: "PAKET PERNIKAHAN PREMIUM",
          packages: [
            {
              name: "PAKET LILY", price: "Rp 7.400.000", isPopular: false,
              features: ["2 fotografer", "1 videografer", "Asisten kru", "200 foto tersunting", "1 menit cuplikan pernikahan", "2-3 menit klip sinematik", "Semua JPG mentah + berkas sunting di USB", "DURASI: 6 - 8 jam"]
            },
            {
              name: "PAKET JASMINE", price: "Rp 9.750.000", isPopular: false,
              features: ["2 fotografer", "2 videografer", "Asisten kru", "1 album potret 20x30", "300 foto tersunting", "1 menit video cuplikan", "3-5 menit klip sinematik video", "Semua JPG mentah + berkas sunting di USB", "DURASI: 6 - 8 jam"]
            },
            {
              name: "PAKET ORCHID", price: "Rp 12.950.000", isPopular: true,
              badge: "Best PRICE",
              features: ["2 fotografer", "1 Pembuat konten pernikahan", "2 videografer", "Asisten kru", "2 kanvas foto berbingkai 40x50", "1 album potret 20x30", "400 foto tersunting", "1 menit video cuplikan", "5-8 menit klip sinematik video", "Semua JPG mentah + berkas sunting di USB", "DURASI: 6 - 8 jam"]
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
            "DP tidak dapat dikembalikan (non-pengembalian danaable) dengan alasan apa pun, karena dianggap sebagai komitmen reservasi tanggal.",
            "Jika acara diundur, tanggal baru bisa dijadwalkan ulang selama masih tersedia.",
            "Jika acara dibatalkan sepenuhnya oleh klien, maka DP hangus.",
            "Jika acara dibatalkan oleh pihak fotografer karena alasan mendesak (sakit berat, force majeure), maka DP akan dikembalikan 100%."
          ]
        },
        {
          icon: "⏰", title: "3. Durasi & Waktu Kerja",
          points: [
            "Jam kerja tim Crimson Rift Studio terhitung dari awal pengambilan gambar dekorasi dalam keadaan sudah rapih serta area bersih, atau bisa saja 1 atau 2 jam sebelum acara penyambutan mempelai pria di mulai, agar tim ada waktu untuk pengambilan kecantikan di pagi hari, saat rias wajah masih segar dan cahaya matahari sedang bagus-bagusnya.",
            "Klien diharapkan menyesuaikan rundown agar dokumentasi maksimal sesuai waktu yang disepakati."
          ]
        },
        {
          icon: "📦", title: "4. Hasil & Pengiriman File",
          points: [
            "Semua berkas akan dikirim melalui Google Drive / flashdisk (sesuai paket yang dipilih).",
            "Estimasi waktu pengerjaan: Lamaran & pra-pernikahan (1 - 2 minggu kerja) | Pernikahan (4 - 8 minggu kerja).",
            "Revisi hanya berlaku untuk warna & tone kecil.",
            "File mentahan (RAW) tidak diberikan, kecuali ada perjanjian khusus sebelumnya."
          ]
        },
        {
          icon: "🚗", title: "5. Biaya Tambahan",
          points: [
            "Biaya transportasi & akomodasi di luar area Jakarta, ditanggung oleh klien.",
            "Untuk pra-pernikahan luar kota, biaya perjalanan & izin lokasi dibebankan kepada klien.",
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
            "Untuk pra-pernikahan, klien disarankan melakukan meeting konsep & lokasi minimal 1 minggu sebelum sesi foto (bisa via chat dengan mengirimkan suasana hatiboard ke admin)."
          ]
        },
        {
          icon: "🪶", title: "9. Ketentuan Tambahan (Opsional)",
          points: [
            "Masa kadarluarsa berkas yang ada di Google Drive 3 - 5 bulan.",
            "Setelah lewat masa itu, Crimson Rift Studio akan menghapusnya dari Google Drive.",
            "Untuk berkas asli/sunting tetap kami cadangkan di cakram keras pribadi kami secara permanen.",
            "Klien diharapkan melakukan cadangan mandiri segera setelah menerima berkas."
          ]
        }
      ]
    },
    foto: {
      target: "Target: Visual Produk Profesionalfesional, Katalog & Kampanye",
      packages: [
        {
          name: "DASAR PRODUCT PHOTO", price: "Rp250.000", isPopular: false,
          features: ["1 produk", "5 Foto disunting", "1 Sudut Utama + 1-2 Pengambilan detail", "Latar Bersih/Putih/Polos", "Pencahayaan Sederhana", "File JPG/PNG via Google Drive", "Revisi: 1x Warna/nada"]
        },
        {
          name: "STANDAR PRODUCT PHOTO", price: "Rp450.000", isPopular: true,
          features: ["1–3 produk", "10 Foto disunting (Beberapa Sudut)", "Pengambilan detail + Pengambilan utama", "Penataan Sederhana", "Latar Bersih / Mereked Look", "File Siap Unggah Pasar daring", "Revisi: 1x Warna/nada"]
        },
        {
          name: "CATALOG PRODUCT PHOTO", price: "Rp750.000", isPopular: false,
          features: ["3–5 produk", "20 Foto disunting (Variasi Sudut)", "Utama, Detail & Pengambilan kelompok", "Penataan Visual Lebih Rapi", "Berkas resolusi tinggi", "Cocok untuk Katalog & Web", "Revisi: 2x Warna/nada"]
        },
        {
          name: "PREMIUM CAMPkecerdasan buatanGN PHOTO", price: "Rp1.250.000", isPopular: false,
          features: ["1 Konsep Kampanye Visual", "1–5 Produk (30 Foto disunting)", "Arahan kreatif & Pemotretan tertata", "Suasana visual Khusus Merek", "Foto Utama Spanduk / Halaman Arahan", "Berkas resolusi tinggi", "Revisi: 2x Besar + 2x Kecil"]
        }
      ]
    },
    video: {
      target: "Target: Promosisi Video pendek, TikTok & Video Iklan",
      packages: [
        {
          name: "DASAR PRODUCT REEL", price: "Rp350.000", isPopular: false,
          features: ["1 Video vertikal (15–30 detik)", "1 produk & 1 konsep Sederhana", "Potongan cepat & Musik Dasar", "Teks lapis sederhana", "Format IG video pendek / TikTok", "Revisi: 1x"]
        },
        {
          name: "STANDAR PRODUCT PROMO", price: "Rp650.000", isPopular: true,
          features: ["1 Video vertikal (30–60 detik)", "1–3 produk", "Pemikat, Sorotan & ajakan", "Takarir / Teks lapis", "Pewarnaan dasar & Desain suara", "Format IG/TikTok/Iklan", "Revisi: 1x Besar + 1x Kecil"]
        },
        {
          name: "CINEMATIC PRODUCT VIDEO", price: "Rp1.200.000", isPopular: false,
          features: ["1 Video Utama (45–90 detik)", "Konsep Penceritaan", "Pengambilan Detail & Transisi Mulus", "Pewarnaan sinematik", "Gerak/Efek teks Ringan", "Pencampuran audio dasar", "Revisi: 2x Kecil"]
        },
        {
          name: "PRODUCT CONTENT PACK", price: "Rp1.800.000", isPopular: false,
          features: ["2 Video vertikal", "1 Utama (30-60s) + 1 Cuplikan (10-15s)", "1–3 produk", "Pemikat + ajakan, Sunting Ritmis", "Visual Tajam & Siap unggah", "Cocok untuk Peluncuran Kampanye", "Revisi: 2x"]
        }
      ]
    },
    bundle: {
      target: "Target: Paket Lengkap Sosial Media & Pasar daring",
      packages: [
        {
          name: "STARTER BUNDLE", price: "Rp900.000", isPopular: false,
          features: ["1 produk", "8 Foto disunting", "1 Video pendek (15–30 detik)", "Latar Bersih", "Format Pasar daring & media sosial", "Berkas digital", "Revisi: 1x"]
        },
        {
          name: "GROWTH BUNDLE", price: "Rp1.500.000", isPopular: true,
          features: ["1–3 produk", "15 Foto disunting", "1 Video Promosi (30–60 detik)", "1 Video pendek", "Penataan Sederhana, Visual Seragam", "Berkas resolusi tinggi", "Revisi: 1x Besar + 1x Kecil"]
        },
        {
          name: "CAMPkecerdasan buatanGN BUNDLE", price: "Rp2.500.000", isPopular: false,
          features: ["3–5 produk", "25 Foto disunting", "2 Video vertikal", "1 Kampanye Visual", "Arahan kreatif", "Nada merek lebih kuat", "Revisi: 2x Besar"]
        }
      ]
    },
    aifoto: {
      target: "Target: Solusi Aset Visual Hemat & Cepat untuk UMKM",
      packages: [
        {
          name: "kecerdasan buatan DASAR", price: "Rp150.000", isPopular: false,
          features: ["3 Gambar kecerdasan buatan", "1 produk Referensi", "1 Gaya visual", "1 Latar Arah", "Keluaran Konsep Promosi/Gambar ringkas", "Berkas JPG / PNG", "Revisi: 1x Arahan"]
        },
        {
          name: "kecerdasan buatan STANDAR", price: "Rp300.000", isPopular: true,
          features: ["6 Gambar kecerdasan buatan", "2 Arah gaya", "Variasi Sudut & Pencahayaan", "Visual untuk Katalog/Kampanye", "Keluaran Umpan / Halaman Arahan", "Berkas JPG / PNG", "Revisi: 2x Arahan"]
        },
        {
          name: "kecerdasan buatan CAMPkecerdasan buatanGN", price: "Rp500.000", isPopular: false,
          features: ["10 Gambar kecerdasan buatan", "1 Konsep Kampanye Penuh", "Visual Promosi Spanduk", "Visual Halaman Arahan Utama", "Gaya Premium / Futuristik / Bersih", "Berkas resolusi tinggi", "Revisi: 2x Arahan"]
        }
      ]
    },
    aivideo: {
      target: "Target: Iklan & Cuplikan Cepat Berbasis kecerdasan buatan",
      packages: [
        {
          name: "kecerdasan buatan REEL DASAR", price: "Rp250.000", isPopular: false,
          features: ["1 Video vertikal berbantuan kecerdasan buatan", "Durasi 10–15 detik", "Gaya gerak produk", "Teks lapis sederhana", "Format IG video pendek / TikTok", "Revisi: 1x"]
        },
        {
          name: "kecerdasan buatan PROMO", price: "Rp450.000", isPopular: true,
          features: ["1 Video vertikal", "Durasi 15–30 detik", "Konsep iklan singkat", "Visual Gerak kecerdasan buatan", "Teks + ajakan", "Cocok untuk Peluncuran halus", "Revisi: 1x Besar"]
        },
        {
          name: "kecerdasan buatan CAMPkecerdasan buatanGN PRO", price: "Rp750.000", isPopular: false,
          features: ["1 Video Utama", "Durasi 30–45 detik", "Kampanye visual lebih kuat", "Transisi adegan", "Ritme iklan", "Cocok untuk kesadaran merek", "Revisi: 2x Kecil"]
        }
      ]
    },
    aichar: {
      target: "Target: Maskot Virtual & Karakter Merek",
      packages: [
        {
          name: "CHARACTER DASAR", price: "Rp200.000", isPopular: false,
          features: ["1 Karakter Utama", "3 Pose", "2 Ekspresi", "1 Gaya visual", "Cocok untuk Pemerekan Awal", "Berkas JPG / PNG", "Revisi: 1x Arahan"]
        },
        {
          name: "PAKET KARAKTER", price: "Rp400.000", isPopular: true,
          features: ["1 Karakter Utama", "6 Pose", "4 Ekspresi", "2 Variasi gaya", "Latar transparan / bersih", "Berkas resolusi tinggi", "Revisi: 2x Arahan"]
        },
        {
          name: "MASKOT / MEREK", price: "Rp650.000", isPopular: false,
          features: ["1 Karakter Merek", "Pose Set Lengkap", "Ekspresi Set Lengkap", "Panduan gaya Sederhana", "Siap untuk media sosial & poster", "File Transparan Resolusi Tinggi", "Revisi: 2x Arahan"]
        }
      ]
    }
  };

  const addOns = {
    manual: [
      "Tambahan foto sunting (Rp15k–25k/foto)",
      "Tambahan produk (Rp75k–150k/produk)",
      "Tambahan potongan video pendek (Rp100k–250k)",
      "Sunting hari yang sama (Rp300k–800k)",
      "Pesanan cepat (Menyesuaikan slot)"
    ],
    ai: [
      "Tambahan gambar (Rp25k–50k/gambar)",
      "Tambahan pose karakter (Rp50k–100k)",
      "Tambahan revisi arahan (Rp25k–50k)",
      "Variasi gaya baru (Rp75k–150k)"
    ]
  };

  const getGridClass = (len) => {
    if (len === 1) return 'grid-cols-1 maksimal-w-md mx-auto';
    if (len === 2) return 'grid-cols-1 md:grid-cols-2 maksimal-w-4xl mx-auto';
    if (len === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (len === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'; 
    if (len === 6) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'; 
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
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Foto Profesionalfesional <br/>& Videografi</h1>
          <p className="text-gray-400 maksimal-w-2xl mx-auto text-lg leading-relaxed">Pilih dari solusi dokumentasi acara profesional, produksi visual lapangan, hingga pembuatan aset digital dengan kecerdasan buatan.</p>
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
                      <p className="text-red-500 italic mt-3 maksimal-w-2xl mx-auto leading-relaxed">"{sec.subtitle}"</p>
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

                          <a 
                            href={`https://wa.me/6281398621530?text=Halo%20Crimson%20Rift,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20untuk%20layanan%20Photo%20%26%20Videography.`}
                            target="_blank"
                            rel="noreferrer"
                            className={`block text-center w-full py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${pkg.isPopular || pkg.badge ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-900/20 hover:-translate-y-1' : 'bg-[#1a1a1a] hover:bg-red-600 text-gray-300 hover:text-white border border-gray-800 hover:border-red-600 shadow-sm hover:shadow-md hover:-translate-y-1'}`}
                          >
                            Pilih Paket Ini
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Pilihan Tambahan Khusus Pernikahan */}
              <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-gray-800 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4 relative z-10">Pilihan Tambahan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {pricingData[activeTab].additionalItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col p-5 bg-[#1a1a1a] rounded-2xl border border-gray-800 hover:border-red-900/30 transition-colors">
                      <span className="text-sm font-bold text-gray-400 mb-1">{item.name}</span>
                      <span className="text-lg font-bold text-red-500">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms & Conditions Bagian */}
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
            // --- LAYOUT STANDAR UNTUK FOTO/VIDEO PRODUK & kecerdasan buatan ---
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

                    <a 
                      href={`https://wa.me/6281398621530?text=Halo%20Crimson%20Rift,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20untuk%20layanan%20Photo%20%26%20Videography.`}
                      target="_blank"
                      rel="noreferrer"
                      className={`block text-center w-full py-4 rounded-xl font-bold transition-all duration-300 mt-auto ${pkg.isPopular ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-900/20 hover:-translate-y-1' : 'bg-[#1a1a1a] hover:bg-red-600 text-gray-300 hover:text-white border border-gray-800 hover:border-red-600 shadow-sm hover:shadow-md hover:-translate-y-1'}`}
                    >
                      Pilih Paket Ini
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Ons Bagian (Hanya tampil jika bukan di tab wedding yang punya addons khusus) */}
        {!pricingData[activeTab].isComplex && (
          <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12">
              
              <div className="lg:w-1/3">
                <h3 className="text-2xl font-bold text-white mb-3">Layanan Tambahan (Tambahan)</h3>
                <p className="text-gray-400 leading-relaxed">Kustomisasi paket Anda sesuai dengan skala dan jadwal proyek yang dibutuhkan.</p>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="bg-[#111] p-6 rounded-3xl border border-gray-800 hover:border-red-900/10 transition-colors">
                  <h4 className="text-red-500 font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                    <Camera size={20} strokeWidth={1.5} /> Tambahan Produksi Manual
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
                    <Sparkles size={20} strokeWidth={1.5} /> Tambahan Layanan kecerdasan buatan
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