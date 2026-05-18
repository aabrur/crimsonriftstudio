import { useRef, useState } from 'react';
import { Disc, VolumeX } from 'lucide-react';
import { siteContent } from '../content/siteContent.js';

export default function GlobalAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { shared } = siteContent;

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.22;
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying((value) => !value);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
        loop
      />

      <button
        type="button"
        onClick={toggleMusic}
        className={`group fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-700 md:bottom-8 md:right-8 md:h-14 md:w-14 ${
          isPlaying
            ? 'border-red-300/40 bg-[#b11226]/18 text-red-100 shadow-[0_0_36px_rgba(177,18,38,0.32)]'
            : 'border-[#f4ede7]/10 bg-[#070303]/76 text-[#f4ede7]/42 hover:border-red-200/30 hover:text-[#f4ede7]'
        }`}
        aria-label={isPlaying ? shared.audioOnAria : shared.audioOffAria}
      >
        {isPlaying ? <Disc size={22} className="animate-[spin_5s_linear_infinite]" /> : <VolumeX size={22} />}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full border border-[#f4ede7]/10 bg-black/78 px-4 py-2 text-[9px] font-black uppercase tracking-[0.28em] text-[#f4ede7]/76 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {isPlaying ? shared.audioOn : shared.audioOff}
        </span>
      </button>
    </>
  );
}
