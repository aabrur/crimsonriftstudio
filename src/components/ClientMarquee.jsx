const logos = ['/clients/0xtanda.png', '/clients/tk-alhuda.png', '/clients/lakeswaramoto.png'];

export default function ClientMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-[#f4ede7]/8 bg-[#030303] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#030303] to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#030303] to-transparent md:w-48" />
      <p className="eyebrow mb-11 text-center text-[#f4ede7]/34">Dipercaya oleh visi yang berani</p>
      <div className="flex w-max animate-marquee items-center gap-20 whitespace-nowrap hover:[animation-play-state:paused] md:gap-[8.5rem]">
        {[...Array(10)].map((_, group) => logos.map((logo) => (
          <img key={`${group}-${logo}`} src={logo} alt="Logo klien Crimson Rift Studio" className="h-10 w-auto shrink-0 object-contain opacity-42 grayscale transition-all duration-700 hover:scale-110 hover:opacity-100 hover:grayscale-0 md:h-14" />
        )))}
      </div>
    </section>
  );
}
