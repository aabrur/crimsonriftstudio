import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';

export default function GlobalAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3; // Volume relaksasi yang pas
      audioRef.current.play().catch(e => console.log("Auto-play diblokir:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3" 
        loop 
      />
      
      {/* Floating Button Global di Kanan Bawah */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-xl border transition-all duration-700 shadow-2xl group cursor-pointer ${
          isPlaying 
            ? 'bg-red-600/20 border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.3)]' 
            : 'bg-[#111]/80 border-gray-800 hover:border-gray-500'
        }`}
      >
        <div className={`transition-all duration-1000 ${isPlaying ? 'text-red-500' : 'text-gray-500'}`}>
          {isPlaying ? <Disc size={24} className="animate-[spin_4s_linear_infinite]" /> : <VolumeX size={24} />}
        </div>
        
        {/* Tooltip Keren */}
        <span className="absolute right-16 px-3 py-1.5 bg-black/80 text-[9px] font-black tracking-widest uppercase text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
          {isPlaying ? 'Pause Ambience' : 'Play Ambience'}
        </span>
      </button>
    </>
  );
}