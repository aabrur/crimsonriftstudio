import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Camera, Code2, Compass, Gem, Megaphone, PenTool, ShieldCheck, Sparkles } from 'lucide-react';
import ClientMarquee from '../../components/ClientMarquee.jsx';
import CrimsonButton from '../../components/ui/CrimsonButton.jsx';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';
import SectionHeader from '../../components/ui/SectionHeader.jsx';
import { siteContent } from '../../content/siteContent.js';

const heroImage = 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2200&auto=format&fit=crop';

export default function Beranda() {
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

  const { home } = siteContent;
  const pains = useMemo(() => home.pains, [home.pains]);
  const services = useMemo(() => home.services, [home.services]);
  const gallery = home.gallery;

  return (
    <PageShell>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={home.hero.imageAlt}
            className="h-[114%] w-full object-cover opacity-40 grayscale will-change-transform"
            style={{ transform: `translate3d(0, ${scrollY * 0.11}px, 0) scale(1.06)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/22 via-[#030303]/76 to-[#030303]" />
          <div className="absolute inset-0 crimson-vignette" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[94rem] gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <span className="eyebrow">{home.hero.eyebrow}</span>
                <span className="h-px w-16 bg-red-300/45" />
                <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#f4ede7]/38">{home.hero.meta}</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="max-w-6xl text-balance text-6xl font-black uppercase leading-[0.82] tracking-tighter text-[#f8eee9] sm:text-7xl md:text-8xl lg:text-[9.4rem]">
                {home.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[#f4ede7]/62 md:text-xl">
                {home.hero.body}
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <CrimsonButton to="/contact">{home.hero.primaryCta}</CrimsonButton>
                <CrimsonButton to="/gallery" variant="ghost">{home.hero.secondaryCta}</CrimsonButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={460} className="lg:justify-self-end">
            <div className="glass-panel relative min-h-[430px] overflow-hidden rounded-[2.7rem] p-6 md:min-h-[570px] md:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4ede7]/10 via-transparent to-[#5f121c]/34" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b11226]/18 blur-3xl" />
              <img src="/logo/logo-crimson-rift-studio.svg" alt="Crimson Rift Studio" className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 object-contain opacity-92 drop-shadow-[0_0_90px_rgba(177,18,38,0.34)] animate-float md:h-72 md:w-72" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {home.hero.pillars.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#f4ede7]/8 bg-black/32 p-4 text-center backdrop-blur-xl">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#f4ede7]/48">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#f4ede7]/34">
          <ArrowDown size={22} className="animate-bounce" />
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-[8.5rem] lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <SectionHeader eyebrow={home.painSection.eyebrow} title={home.painSection.title}>
            <p>
              {home.painSection.body}
            </p>
          </SectionHeader>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pains.map((pain, index) => (
              <Reveal key={pain.title} delay={index * 110}>
                <article className="luxury-card group min-h-[320px] rounded-[2.2rem] p-8 md:p-10">
                  <span className="mb-16 block text-5xl font-black tracking-tighter text-[#f4ede7]/10 transition-colors duration-700 group-hover:text-red-300/18">0{index + 1}</span>
                  <h3 className="mb-5 text-3xl font-black uppercase leading-none tracking-tighter text-[#f8eee9]">{pain.title}</h3>
                  <p className="leading-7 text-[#f4ede7]/52 transition-colors duration-700 group-hover:text-[#f4ede7]/72">{pain.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-36 lg:px-24">
        <div className="mx-auto grid max-w-[94rem] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.8rem] border border-[#f4ede7]/10">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop" alt={home.roleSection.imageAlt} className="h-[620px] w-full object-cover grayscale transition-all duration-[1800ms] hover:scale-105 hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/26 to-transparent" />
              <p className="absolute bottom-8 left-8 max-w-sm text-2xl font-light leading-tight text-[#f4ede7]/76">{home.roleSection.quote}</p>
            </div>
          </Reveal>
          <div>
            <SectionHeader eyebrow={home.roleSection.eyebrow} title={home.roleSection.title}>
              <p>
                {home.roleSection.body}
              </p>
            </SectionHeader>
            <Reveal delay={180}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Compass, label: home.roleSection.qualities[0] },
                  { icon: ShieldCheck, label: home.roleSection.qualities[1] },
                  { icon: Sparkles, label: home.roleSection.qualities[2] },
                ].map((item) => {
                  const Ikon = item.icon;
                  return (
                    <div key={item.label} className="rounded-3xl border border-[#f4ede7]/9 bg-[#f4ede7]/[0.035] p-6">
                      <Ikon className="mb-8 text-red-200" size={28} strokeWidth={1.25} />
                      <p className="text-sm font-black uppercase leading-5 tracking-[0.22em] text-[#f4ede7]/68">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-[8.5rem] lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <SectionHeader eyebrow={home.gallerySection.eyebrow} title={home.gallerySection.title} />
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <Link to="/gallery" className={`group luxury-card relative block overflow-hidden rounded-[2.35rem] ${index === 0 ? 'md:mt-16' : index === 2 ? 'md:mt-28' : ''}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover grayscale transition-all duration-[1700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:grayscale-0" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent opacity-92" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-red-200">{item.type}</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-[#f8eee9]">{item.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-36 lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <SectionHeader eyebrow={home.serviceSection.eyebrow} title={home.serviceSection.title} />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const serviceIcons = [Code2, PenTool, Camera, Megaphone];
              const Ikon = serviceIcons[index];
              return (
                <Reveal key={service.title} delay={index * 90}>
                  <Link to={service.path} className="group luxury-card flex min-h-[370px] flex-col justify-between rounded-[2rem] p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f4ede7]/10 bg-[#f4ede7]/[0.04] text-red-200 transition-all duration-700 group-hover:border-red-200/45 group-hover:bg-[#b11226]/24 group-hover:text-white">
                      <Ikon size={24} strokeWidth={1.4} />
                    </div>
                    <div>
                      <h3 className="mb-5 text-3xl font-black uppercase leading-none tracking-tighter text-[#f8eee9]">{service.title}</h3>
                      <p className="text-sm leading-7 text-[#f4ede7]/50 transition-colors duration-700 group-hover:text-[#f4ede7]/72">{service.copy}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ClientMarquee />

      <section className="px-6 py-28 text-center md:px-12 md:py-[10.5rem]">
        <Reveal>
          <Gem className="mx-auto mb-8 text-red-200" size={38} strokeWidth={1.2} />
          <p className="eyebrow mb-6">{home.final.eyebrow}</p>
          <h2 className="mx-auto max-w-5xl text-balance text-5xl font-black uppercase leading-[0.86] tracking-tighter text-[#f8eee9] md:text-8xl lg:text-9xl">{home.final.title}</h2>
          <div className="mt-12">
            <CrimsonButton to="/contact">{home.final.cta}</CrimsonButton>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
