import { Award, Compass, Layers, Sparkles } from 'lucide-react';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';

const principles = [
  { icon: Compass, title: 'Strategic before beautiful', copy: 'Every visual decision is anchored to positioning, audience psychology, and measurable business intent.' },
  { icon: Layers, title: 'Systems over templates', copy: 'We build reusable design languages, not disposable layouts that collapse after the first campaign.' },
  { icon: Award, title: 'Luxury through restraint', copy: 'Generous space, disciplined typography, and subtle motion create a brand presence that feels expensive.' },
];

export default function About() {
  return (
    <PageShell>
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <p className="eyebrow mb-6">Studio Philosophy</p>
            <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.84] tracking-tighter text-white md:text-8xl lg:text-[9.5rem]">We design market presence, not decoration.</h1>
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <Reveal delay={120}>
              <div className="glass-panel flex h-full min-h-[520px] items-end overflow-hidden rounded-[2.5rem] p-8 md:p-10">
                <img src="/logo/logo-crimson-rift-studio.svg" alt="Crimson Rift Studio" className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-float object-contain opacity-90 drop-shadow-[0_0_90px_rgba(220,38,38,0.22)]" />
                <p className="relative z-10 text-2xl font-light leading-tight text-white/65 md:text-4xl">A compact studio with a cinematic eye and an obsession for high-perceived value.</p>
              </div>
            </Reveal>
            <div className="grid gap-5">
              {principles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={200 + index * 100}>
                    <div className="luxury-card rounded-[2rem] p-8 md:p-10">
                      <Icon className="mb-8 text-red-300" size={32} strokeWidth={1.25} />
                      <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-white">{item.title}</h2>
                      <p className="max-w-2xl leading-7 text-white/52">{item.copy}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <Reveal delay={420}>
            <div className="mt-20 rounded-[2.5rem] border border-white/8 bg-white/[0.035] p-8 text-center md:p-14">
              <Sparkles className="mx-auto mb-6 text-red-400" size={34} strokeWidth={1.2} />
              <p className="mx-auto max-w-4xl text-3xl font-light leading-tight text-white/76 md:text-5xl">The best digital experiences feel inevitable: simple at first glance, meticulous under the surface.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
