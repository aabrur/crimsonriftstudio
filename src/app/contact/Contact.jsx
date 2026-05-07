import React, { useState } from 'react';
import { ChevronLeft, ArrowRight, Upload, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom Instagram Icon SVG untuk menghindari error import dari lucide-react
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [],
    budget: '',
    name: '',
    email: '',
    company: '',
    message: '',
    file: null,
  });

  const availableServices = [
    { id: 'web', label: 'Web Development' },
    { id: 'brand', label: 'Brand Identity' },
    { id: 'photo', label: 'Photography' },
    { id: 'video', label: 'Videography' },
    { id: 'ads', label: 'Social Media & Ads' },
  ];

  const budgetTiers = [
    { id: 'tier1', label: '< Rp 5 Juta' },
    { id: 'tier2', label: 'Rp 5 - 15 Juta' },
    { id: 'tier3', label: 'Rp 15 - 30 Juta' },
    { id: 'tier4', label: '> Rp 30 Juta' },
  ];

  const toggleService = (serviceId) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(serviceId);
      return {
        ...prev,
        services: isSelected
          ? prev.services.filter((id) => id !== serviceId)
          : [...prev.services, serviceId],
      };
    });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi proses submit
    setTimeout(() => {
      setStep(4); // Menuju halaman sukses
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-24 font-sans text-gray-200">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Kolom Kiri: Header & Info */}
        <div className="lg:col-span-4 flex flex-col">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-[10px] font-black tracking-[0.3em] uppercase mb-12 w-fit">
            <ChevronLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
            Start A <br/><span className="text-gray-700">Project.</span>
          </h1>
          <p className="text-gray-400 font-light leading-relaxed mb-16">
            Ceritakan visi Anda. Kami siap merancang strategi dan mengeksekusinya menjadi mahakarya digital.
          </p>

          <div className="space-y-8 mt-auto">
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-600 mb-2">Direct Contact</p>
              <a href="mailto:hello@crimsonrift.com" className="flex items-center gap-3 text-white hover:text-red-500 transition-colors">
                <Mail size={18} /> hello@crimsonrift.com
              </a>
              <a href="https://wa.me/6281398621530" className="flex items-center gap-3 text-white hover:text-red-500 transition-colors mt-3">
                <Phone size={18} /> +62 813 9862 1530
              </a>
            </div>
            
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-600 mb-2">Studio Location</p>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 shrink-0" />
                <p className="font-light text-sm">Jakarta Timur,<br/>DKI Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <a href="#" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} /> <span className="text-sm font-medium">@crimsonriftstudio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Multi-step Form */}
        <div className="lg:col-span-8 bg-[#0a0a0a] rounded-[2rem] border border-white/5 p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Progress Bar */}
          {step < 4 && (
            <div className="flex items-center justify-between mb-12">
              <div className="flex gap-2">
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`h-1 w-12 rounded-full transition-all duration-500 ${step >= num ? 'bg-red-600' : 'bg-gray-800'}`}></div>
                ))}
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] text-gray-500">STEP 0{step}/03</span>
            </div>
          )}

          {/* STEP 1: Services & Budget */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-white mb-8">Apa yang bisa kami bantu?</h2>
              
              <div className="mb-10">
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">Pilih Layanan (Multi-select)</p>
                <div className="flex flex-wrap gap-3">
                  {availableServices.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                        formData.services.includes(srv.id)
                          ? 'bg-red-600/10 border-red-600 text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]'
                          : 'bg-[#111] border-gray-800 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {srv.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">Estimasi Budget</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {budgetTiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setFormData(prev => ({ ...prev, budget: tier.id }))}
                      className={`p-4 rounded-xl border text-sm text-center font-medium transition-all duration-300 ${
                        formData.budget === tier.id
                          ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                          : 'bg-[#111] border-gray-800 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex justify-end">
                <button 
                  onClick={nextStep}
                  disabled={formData.services.length === 0 || !formData.budget}
                  className="px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Selanjutnya <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Project Details & File Upload */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-white mb-8">Detail Proyek</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Ceritakan Sedikit Tentang Proyek Anda</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 text-white focus:border-red-600 focus:outline-none resize-none transition-colors"
                    placeholder="Apa tujuan utama dari proyek ini?"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Lampiran (Brief / Referensi)</label>
                  <div className="border-2 border-dashed border-gray-800 rounded-xl p-8 text-center hover:border-red-600/50 hover:bg-red-600/5 transition-colors cursor-pointer group flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 group-hover:text-red-500 group-hover:scale-110 transition-all">
                      <Upload size={24} />
                    </div>
                    <p className="text-sm text-gray-400"><span className="text-white font-medium">Klik untuk upload</span> atau drag & drop file</p>
                    <p className="text-xs text-gray-600">PDF, DOCX, JPG, PNG (Max 10MB)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-between">
                <button onClick={prevStep} className="px-6 py-4 text-gray-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                  Kembali
                </button>
                <button onClick={nextStep} disabled={formData.message.length < 10} className="px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                  Selanjutnya <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Personal Info */}
          {step === 3 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-white mb-8">Identitas Anda</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Nama Lengkap</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Email Bisnis</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Nama Perusahaan / Brand (Opsional)</label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="Acme Corp" />
                </div>

                <div className="mt-12 flex justify-between items-center">
                  <button type="button" onClick={prevStep} className="px-6 py-4 text-gray-400 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                    Kembali
                  </button>
                  <button type="submit" disabled={!formData.name || !formData.email} className="px-10 py-4 bg-red-600 text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    Kirim Permintaan
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 4: Success State */}
          {step === 4 && (
            <div className="animate-fadeIn flex flex-col items-center justify-center text-center py-10 h-full">
              <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Brief Diterima!</h2>
              <p className="text-gray-400 max-w-md mb-10">
                Terima kasih, <span className="text-white font-medium">{formData.name}</span>. Tim strategi kami akan mempelajari brief Anda dan menghubungi Anda via email dalam 1x24 jam kerja.
              </p>
              <Link to="/" className="px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-gray-200 transition-colors">
                Kembali ke Beranda
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}