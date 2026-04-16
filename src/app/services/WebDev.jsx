import { useState } from 'react';
import { CheckCircle2, ChevronLeft, LayoutTemplate, Layers, Building2, Store, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDev() {
  const [activeTab, setActiveTab] = useState('landing');

  const categories = [
    { id: 'landing', label: 'Landing Page', icon: <LayoutTemplate size={20} /> },
    { id: 'single', label: 'Single Page', icon: <Layers size={20} /> },
    { id: 'company', label: 'Company Profile', icon: <Building2 size={20} /> },
    { id: 'store', label: 'Toko Online', icon: <Store size={20} /> }
  ];

  const pricingData = {
    landing: {
      target: "Target: UMKM / Jualan Cepat / Ads Funnel",
      packages: [
        {
          name: "BASIC", price: "Rp650.000", isPopular: false,
          features: ["1 Halaman Landing Page", "Hero Section (Headline + CTA)", "Section Produk/Jasa", "Section Keunggulan Singkat", "Section Testimoni Sederhana", "CTA WhatsApp (Click to Chat)", "Template + Custom Ringan", "Mobile Responsive", "Publish ke Hosting (Vercel/Netlify)", "Revisi: 1x"]
        },
        {
          name: "STANDARD", price: "Rp1.200.000", isPopular: true,
          features: ["1 Landing Page (Lebih Lengkap)", "Hero (Headline + Subheadline)", "Problem vs Solution", "Detail Produk/Jasa & Benefit", "Testimoni & FAQ Section", "CTA Berulang", "Design Semi-Custom", "Copywriting Basic (Rewrite)", "Mobile Optimization", "Integrasi Form (Email/WA)", "SEO Basic (Meta Title & Desc)", "Revisi: 1x Mayor + 2x Minor"]
        },
        {
          name: "PREMIUM", price: "Mulai Rp1.800.000", isPopular: false,
          features: ["Landing Page Full Funnel", "Hook, Pain Point, Solution", "Social Proof, Offer & Urgency", "Custom UI Design (No Template)", "Copywriting Conversion", "Visual Hierarchy Advanced", "Micro Animation / Motion Ringan", "Mobile UX Optimized", "Integrasi WA + Form Lead", "Optional Pixel (Meta/Google)", "Revisi: 2x Mayor + 3x Minor"]
        }
      ]
    },
    single: {
      target: "Target: Personal Brand / Jasa / Portfolio",
      packages: [
        {
          name: "BASIC", price: "Rp900.000", isPopular: false,
          features: ["1 Halaman Scroll", "Hero Section", "About", "Services", "Contact", "Design Sederhana", "Mobile Responsive", "CTA WhatsApp", "Revisi: 1x"]
        },
        {
          name: "PRO", price: "Rp1.800.000", isPopular: true,
          features: ["1 Halaman Scroll (Lengkap)", "Hero + Subheadline", "About (Lebih Detail)", "Services & Portfolio Showcase", "Testimoni & Contact", "UI Clean & Modern", "Copywriting & SEO Basic", "Mobile Optimization", "Revisi: 1x Mayor + 2x Minor"]
        },
        {
          name: "CUSTOM", price: "Mulai Rp2.500.000", isPopular: false,
          features: ["Fully Custom Single Page", "Layout Non-Template", "Hero Cinematic / Visual Kuat", "About Storytelling", "Services + Positioning", "Portfolio Advanced & Testimoni", "Custom UI/UX & Micro Interaction", "Copywriting Disesuaikan Brand", "Revisi: 2x Mayor + 3x Minor"]
        }
      ]
    },
    company: {
      target: "Target: Bisnis Serius / Trust Building",
      packages: [
        {
          name: "BASIC", price: "Rp2.000.000", isPopular: false,
          features: ["3–5 Halaman Website", "Home, About, Services, Contact", "Template Custom", "Mobile Responsive", "Struktur Standar Bisnis", "Revisi: 1x Mayor"]
        },
        {
          name: "PROFESSIONAL", price: "Mulai Rp3.500.000", isPopular: true,
          features: ["5–10 Halaman Website", "Home, About, Services, Portfolio", "Contact & FAQ", "Optional Blog", "UI Lebih Clean & Profesional", "Struktur Konten Lebih Rapi", "SEO Basic & Mobile Opt", "Revisi: 2x Mayor"]
        },
        {
          name: "PREMIUM", price: "Mulai Rp6.000.000", isPopular: false,
          features: ["Full Custom Website", "Home Cinematic / High Visual", "About Storytelling", "Services Positioning", "Portfolio Showcase", "Custom UI/UX (No Template)", "Visual Identity Kuat", "Experience-driven Layout", "Copywriting Disesuaikan Brand", "Micro Interaction / Animation", "Revisi: 2x Mayor + 3x Minor"]
        }
      ]
    },
    store: {
      target: "Target: UMKM Jualan Online",
      packages: [
        {
          name: "BASIC STORE", price: "Rp3.500.000", isPopular: false,
          features: ["Platform: WooCommerce/Shopify", "Home, Shop, Product Detail", "Cart & Checkout", "Upload 10 Produk", "Struktur Kategori Sederhana", "Integrasi WhatsApp Order", "Mobile Responsive", "Revisi: 1x Mayor"]
        },
        {
          name: "GROWTH STORE", price: "Mulai Rp5.000.000", isPopular: true,
          features: ["Platform: WooCommerce/Shopify", "Home, Shop, Product Detail", "Cart & Checkout", "Kategori Produk Advanced", "Upload 20 Produk", "Payment Gateway (Midtrans/Xendit)", "Integrasi Google Analytics", "SEO Basic & UX Optimal", "Mobile Optimization", "Revisi: 2x Mayor"]
        }
      ]
    }
  };

  const addOns = [
    "Maintenance (Rp150k - Rp500k / bulan)",
    "SEO Lanjutan",
    "Copywriting Full",
    "Branding Kit",
    "Design Konten (IG / Ads)",
    "Domain & Hosting Premium"
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0a0a0a] animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        
        {/* Breadcrumb / Back Button */}
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors mb-12 font-medium">
          <ChevronLeft size={20} /> Kembali ke Layanan
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">Detail Harga Jasa</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Website Development <br/>& SEO</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Pilih paket pengembangan website yang paling sesuai dengan skala dan kebutuhan bisnis Anda.</p>
        </div>

        {/* Custom Tabs */}
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

        {/* Pricing Content */}
        <div className="animate-fadeIn">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-red-900/20 text-red-500 rounded-full text-sm font-semibold border border-red-900/50">
              {pricingData[activeTab].target}
            </span>
          </div>

          {/* Grid Pricing Cards */}
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

        {/* Add Ons Section */}
        <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-3">Layanan Opsional (Add-on)</h3>
              <p className="text-gray-400">Tingkatkan performa website Anda dengan fitur dan layanan tambahan dari kami.</p>
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