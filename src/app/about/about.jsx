const LOGO_URL = "https://github.com/aabrur/my-portfolio-assets/blob/main/Logo%20Crimson%20Rift%20Studio.png?raw=true";

export default function About() {
  return (
    <div className="min-h-screen py-32 px-4 md:px-12 lg:px-24 bg-[#0a0a0a] animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
             {/* Ukuran logo diperkecil di sini (max-w-xs) */}
            <img 
              src={LOGO_URL} 
              alt="About Crimson Rift" 
              className="w-full max-w-xs mx-auto drop-shadow-[0_0_30px_rgba(220,38,38,0.15)]" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-2">Tentang Kami</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mendobrak Batas Kreativitas.</h1>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crimson Rift Studio adalah agensi kreatif terpadu yang berdedikasi untuk memberikan solusi visual dan digital terbaik. Berawal dari kecintaan terhadap seni dan teknologi, kami hadir untuk membantu brand dan individu menceritakan kisah mereka dengan cara yang luar biasa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}