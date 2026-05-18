import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Camera, Code2, Gem, Megaphone, MoveRight, PenTool, Sparkles } from 'lucide-react';
import ClientMarquee from '../../components/ClientMarquee.jsx';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';

const heroImage = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2200&auto=format&fit=crop';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = useMemo(() => [
    { icon: Code2, title: 'Web Architecture', copy: 'High-performance websites, landing systems, and digital products engineered for perception and conversion.', path: '/services/web-development' },
    { icon: PenTool, title: 'Brand Identity', copy: 'Logo suites, visual systems, and art direction that make your brand feel rare, deliberate, and premium.', path: '/services/logo-branding' },
    { icon: Camera, title: 'Lens & Motion', copy: 'Cinematic photography and video assets that turn your story into a market-shaping visual language.', path: '/services/photography-videography' },
    { icon: Megaphone, title: 'Growth Engine', copy: 'Content strategy, campaign direction, and social ecosystems built to compound attention over time.', path: '/services/social-media' },
  ], []);

  const gallery = [
    { title: 'Obsidian Commerce', type: 'E-commerce System', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Monohaus Identity', type: 'Brand Direction', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Rift Motion', type: 'Cinematic Launch', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop' },
  ];

  return (
    <PageShell>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury creative studio interior"
            className="h-[112%] w-full object-cover opacity-35 grayscale will-change-transform"
            style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0) scale(1.06)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/35 via-[#030303]/78 to-[#030303]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent,rgba(3,3,3,0.82)_70%)]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <span className="eyebrow">Creative Digital Atelier</span>
                <span className="h-px w-16 bg-red-500/50" />
                <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/38">Indonesia / Worldwide</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="max-w-6xl text-balance text-6xl font-black uppercase leading-[0.82] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[9.6rem]">
                Digital presence with cinematic gravity.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/58 md:text-xl">
                We craft premium websites, brand systems, and content engines for businesses that need to look expensive, move fast, and convert with quiet confidence.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/gallery" className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-5 text-[11px] font-black uppercase tracking-[0.32em] text-black transition-all duration-500 hover:bg-red-600 hover:text-white hover:shadow-[0_0_70px_rgba(220,38,38,0.34)]">
                  View Gallery <MoveRight size={17} className="transition-transform duration-500 group-hover:translate-x-1.5" />
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-8 py-5 text-[11px] font-black uppercase tracking-[0.32em] text-white/70 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:text-white">
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={420} className="lg:justify-self-end">
            <div className="glass-panel relative min-h-[420px] overflow-hidden rounded-[2.5rem] p-6 md:min-h-[560px] md:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-red-900/20" />
              <img src="/logo/logo-crimson-rift-studio.svg" alt="Crimson Rift Studio" className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 object-contain opacity-90 drop-shadow-[0_0_80px_rgba(220,38,38,0.25)] animate-float md:h-72 md:w-72" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {['Strategy', 'Identity', 'Systems'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-black/30 p-4 text-center backdrop-blur-xl">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white/42">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/35">
          <ArrowDown size={22} className="animate-bounce" />
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-24">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow mb-5">Selected Direction</p>
                <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-6xl lg:text-7xl">Minimal surfaces. Maximum emotion.</h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-white/52 lg:justify-self-end">
                Every composition is designed with negative space, precise contrast, measured motion, and tactile interaction—so the experience feels polished without feeling loud.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div className={`group luxury-card relative overflow-hidden rounded-[2.25rem] ${index === 0 ? 'md:mt-16' : index === 2 ? 'md:mt-28' : ''}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover grayscale transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:grayscale-0" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-red-300">{item.type}</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white">{item.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-36 lg:px-24">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-5">Capabilities</p>
                <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-7xl">The premium stack.</h2>
              </div>
              <Link to="/services" className="group inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-white/55 transition-colors hover:text-white">
                All services <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 90}>
                  <Link to={service.path} className="group luxury-card flex min-h-[360px] flex-col justify-between rounded-[2rem] p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-red-300 transition-all duration-500 group-hover:border-red-400/45 group-hover:bg-red-500/15 group-hover:text-white">
                      <Icon size={24} strokeWidth={1.4} />
                    </div>
                    <div>
                      <h3 className="mb-5 text-3xl font-black uppercase leading-none tracking-tighter text-white">{service.title}</h3>
                      <p className="text-sm leading-7 text-white/48 transition-colors duration-500 group-hover:text-white/68">{service.copy}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ClientMarquee />

      <section className="px-6 py-28 text-center md:px-12 md:py-40">
        <Reveal>
          <Sparkles className="mx-auto mb-8 text-red-500" size={38} strokeWidth={1.2} />
          <p className="eyebrow mb-6">Ready when you are</p>
          <h2 className="mx-auto max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-tighter text-white md:text-8xl lg:text-9xl">Let your brand feel inevitable.</h2>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-4 rounded-full bg-white px-9 py-5 text-[11px] font-black uppercase tracking-[0.32em] text-black transition-all duration-500 hover:bg-red-600 hover:text-white hover:shadow-[0_0_70px_rgba(220,38,38,0.34)]">
            Begin the Brief <Gem size={17} />
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
