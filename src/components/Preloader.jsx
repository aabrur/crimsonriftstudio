import { useEffect, useState } from 'react';
import { siteContent } from '../content/siteContent.js';

export default function Preloader({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  const { shared } = siteContent;

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 720);
    const doneTimer = setTimeout(onComplete, 1240);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${exiting ? 'pointer-events-none opacity-0 blur-sm' : 'opacity-100'}`}>
      <div className="absolute inset-0 aurora opacity-50" />
      <div className="absolute inset-0 crimson-vignette" />
      <div className="relative flex flex-col items-center gap-7 px-6 text-center">
        <div className="h-px w-52 overflow-hidden rounded-full bg-[#f4ede7]/10">
          <div className="h-full w-full origin-left bg-gradient-to-r from-[#2a050b] via-[#b11226] to-[#f4ede7]" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.64em] text-red-200">{shared.preloaderBrand}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.38em] text-[#f4ede7]/36">{shared.preloaderText}</p>
        </div>
      </div>
    </div>
  );
}
