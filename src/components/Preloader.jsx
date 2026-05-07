import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulasi loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Jeda sejenak di 100% sebelum fade out
        setTimeout(() => {
          setIsFading(true);
          // Beri tahu App.jsx bahwa loading selesai setelah fade out
          setTimeout(() => {
            onComplete();
          }, 800); // Durasi fade out
        }, 500);
      }
      setProgress(currentProgress);
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isFading ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="overflow-hidden mb-4">
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-[0.5em] uppercase animate-pulse">
          Crimson Rift
        </h1>
      </div>
      
      <div className="flex flex-col items-center mt-12 w-full max-w-xs px-6">
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="w-full flex justify-between mt-4">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Loading System</span>
          <span className="text-[10px] text-red-500 font-black tracking-widest">{progress}%</span>
        </div>
      </div>
    </div>
  );
}