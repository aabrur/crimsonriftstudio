import React from 'react';

export default function ClientMarquee() {
  // Daftar logo klien (Bisa ditambah/dikurangi sesuai kebutuhan)
  const clientLogos = [
    '/clients/0xtanda.png',
    '/clients/tk-alhuda.png',
    '/clients/lakeswaramoto.png',
    // Gandakan untuk memastikan layar penuh sebelum looping
    '/clients/0xtanda.png',
    '/clients/tk-alhuda.png',
    '/clients/lakeswaramoto.png',
    '/clients/0xtanda.png',
    '/clients/tk-alhuda.png',
    '/clients/lakeswaramoto.png'
  ];

  return (
    <div className="w-full bg-[#030303] py-20 overflow-hidden border-t border-white/5 relative z-20">
      
      {/* Teks Pengantar Marquee */}
      <p className="text-center text-gray-500 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-12 flex items-center justify-center gap-4">
        <span className="w-8 h-px bg-gray-700"></span>
        Dipercaya oleh Para Visioner
        <span className="w-8 h-px bg-gray-700"></span>
      </p>
      
      {/* Wrapper Animasi Berjalan */}
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] group">
        
        {/* Gandakan konten untuk efek seamless tanpa putus */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client Logo ${index}`}
                className="h-10 md:h-14 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              />
            ))}
          </div>
        ))}
        
      </div>
      
      {/* Bayangan Gradasi di Kanan-Kiri agar terlihat memudar elegan */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none"></div>
    </div>
  );
}