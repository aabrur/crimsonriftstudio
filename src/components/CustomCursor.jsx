import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sembunyikan kursor kustom di perangkat mobile/touch
    if (window.innerWidth < 768) return;
    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      // Cek apakah mouse berada di atas elemen interaktif
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Kursor Titik Inti */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      
      {/* Kursor Lingkaran Luar (Membesar saat hover) */}
      <div 
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering 
            ? 'w-16 h-16 bg-red-600/20 border-red-600/50 backdrop-blur-[2px]' 
            : 'w-8 h-8 border-white/20 bg-transparent'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  );
}