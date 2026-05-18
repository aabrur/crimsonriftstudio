import { Flame, Layers, Sparkles, SplitSquareHorizontal } from 'lucide-react';
import CrimsonButton from '../../components/ui/CrimsonButton.jsx';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';
import SectionHeader from '../../components/ui/SectionHeader.jsx';
import { siteContent } from '../../content/siteContent.js';

export default function Tentang() {
  const { about } = siteContent;
  const manifestoIcons = [Flame, SplitSquareHorizontal, Layers];

  return (
    <PageShell>
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <Reveal>
            <p className="eyebrow mb-6">{about.eyebrow}</p>
            <h1 className="max-w-7xl text-balance text-6xl font-black uppercase leading-[0.84] tracking-tighter text-[#f8eee9] md:text-8xl lg:text-[9.2rem]">
              {about.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-9 max-w-3xl text-xl font-light leading-9 text-[#f4ede7]/62">
              {about.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-[94rem] gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <Reveal>
            <div className="glass-panel relative flex min-h-[560px] items-end overflow-hidden rounded-[2.8rem] p-8 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(177,18,38,0.24),transparent_36rem)]" />
              <img src="/logo/logo-crimson-rift-studio.svg" alt={about.panelAlt} className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-float object-contain opacity-92 drop-shadow-[0_0_100px_rgba(177,18,38,0.32)] md:h-80 md:w-80" />
              <p className="relative z-10 max-w-lg text-3xl font-light leading-tight text-[#f4ede7]/70 md:text-5xl">{about.statement}</p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {about.manifesto.map((item, index) => {
              const Ikon = manifestoIcons[index];
              return (
                <Reveal key={item.title} delay={160 + index * 100}>
                  <article className="luxury-card rounded-[2.2rem] p-8 md:p-10">
                    <Ikon className="mb-8 text-red-200" size={34} strokeWidth={1.2} />
                    <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-[#f8eee9]">{item.title}</h2>
                    <p className="max-w-2xl leading-7 text-[#f4ede7]/54">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-[8.5rem] lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <SectionHeader eyebrow={about.philosophy.eyebrow} title={about.philosophy.title}>
            <p>
              {about.philosophy.body}
            </p>
          </SectionHeader>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {about.philosophy.points.map((copy, index) => (
              <Reveal key={copy} delay={index * 110}>
                <div className="rounded-[2rem] border border-[#f4ede7]/9 bg-[#f4ede7]/[0.032] p-8">
                  <span className="mb-14 block text-5xl font-black tracking-tighter text-red-200/14">0{index + 1}</span>
                  <p className="text-2xl font-light leading-tight text-[#f4ede7]/72">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 text-center md:px-12 lg:px-24">
        <Reveal>
          <Sparkles className="mx-auto mb-8 text-red-200" size={36} strokeWidth={1.2} />
          <p className="eyebrow mb-6">{about.final.eyebrow}</p>
          <h2 className="mx-auto max-w-5xl text-balance text-5xl font-black uppercase leading-[0.86] tracking-tighter text-[#f8eee9] md:text-8xl">{about.final.title}</h2>
          <div className="mt-11">
            <CrimsonButton to="/contact">{about.final.cta}</CrimsonButton>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
