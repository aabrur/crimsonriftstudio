const logos = ['/clients/0xtanda.png', '/clients/tk-alhuda.png', '/clients/lakeswaramoto.png'];

export default function ClientMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[#030303] py-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#030303] to-transparent" />
      <p className="eyebrow mb-10 text-center text-white/35">Trusted by visionary teams</p>
      <div className="flex w-max animate-marquee items-center gap-20 whitespace-nowrap hover:[animation-play-state:paused] md:gap-32">
        {[...Array(10)].map((_, group) => logos.map((logo) => (
          <img key={`${group}-${logo}`} src={logo} alt="Client logo" className="h-10 w-auto shrink-0 object-contain opacity-45 grayscale transition-all duration-700 hover:scale-110 hover:opacity-100 hover:grayscale-0 md:h-14" />
        )))}
      </div>
    </section>
  );
}
