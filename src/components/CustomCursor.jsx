import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const isFinePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (!isFinePointer) return undefined;
    let frame;

    const move = (event) => {
      pos.current = { x: event.clientX, y: event.clientY };
      dotRef.current?.style.setProperty('transform', `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`);
    };
    const over = (event) => setActive(Boolean(event.target.closest('a, button, input, textarea, [data-cursor="magnetic"]')));
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.16;
      ring.current.y += (pos.current.y - ring.current.y) * 0.16;
      ringRef.current?.style.setProperty('transform', `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`);
      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over);
    frame = window.requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.cancelAnimationFrame(frame);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      <div ref={dotRef} className="fixed left-0 top-0 z-[10000] h-2 w-2 rounded-full bg-[#f4ede7] pointer-events-none mix-blend-difference" />
      <div ref={ringRef} className={`fixed left-0 top-0 z-[9999] rounded-full pointer-events-none border transition-[width,height,background,border-color,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${active ? 'h-20 w-20 border-red-200/38 bg-[#b11226]/14 shadow-[0_0_60px_rgba(177,18,38,0.34)] backdrop-blur-[2px]' : 'h-9 w-9 border-[#f4ede7]/18 bg-[#f4ede7]/[0.015] opacity-80'}`} />
    </>
  );
}
