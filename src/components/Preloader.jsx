import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 650);
    const doneTimer = setTimeout(onComplete, 1150);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${exiting ? 'pointer-events-none opacity-0 blur-sm' : 'opacity-100'}`}>
      <div className="absolute inset-0 aurora opacity-40" />
      <div className="relative flex flex-col items-center gap-7 px-6 text-center">
        <div className="h-px w-44 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left scale-x-100 bg-gradient-to-r from-red-900 via-red-500 to-white transition-transform duration-700" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.62em] text-red-400">Crimson Rift</p>
          <p className="mt-3 text-xs uppercase tracking-[0.4em] text-white/35">Loading the experience</p>
        </div>
      </div>
    </div>
  );
}
