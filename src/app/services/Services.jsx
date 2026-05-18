import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Code2, Megaphone, PenTool } from 'lucide-react';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';

const services = [
  { title: 'Web Architecture', path: '/services/web-development', icon: Code2, span: 'lg:col-span-7', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1800&auto=format&fit=crop', copy: 'Bespoke websites, launch pages, product interfaces, and conversion systems tuned for speed and prestige.' },
  { title: 'Brand Identity', path: '/services/logo-branding', icon: PenTool, span: 'lg:col-span-5', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop', copy: 'Logo, visual language, typography, and brand rules that create a premium first impression.' },
  { title: 'Lens & Motion', path: '/services/photography-videography', icon: Camera, span: 'lg:col-span-5', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop', copy: 'Photography and cinematic video direction for campaigns, profiles, products, and launches.' },
  { title: 'Growth Engine', path: '/services/social-media', icon: Megaphone, span: 'lg:col-span-7', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1800&auto=format&fit=crop', copy: 'Content systems, campaign planning, and social media management built to compound demand.' },
];

export default function Services() {
  return (
    <PageShell>
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <p className="eyebrow mb-6">Capabilities</p>
                <h1 className="text-6xl font-black uppercase leading-[0.84] tracking-tighter text-white md:text-8xl lg:text-[10rem]">The Arsenal.</h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-white/55 lg:justify-self-end">
                A curated stack of strategy, identity, interface, motion, and growth—packaged as a luxury execution system for ambitious brands.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 120} className={service.span}>
                  <Link to={service.path} className="group luxury-card relative block h-[480px] overflow-hidden rounded-[2.5rem] md:h-[560px]">
                    <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover brightness-50 grayscale transition-all duration-[1800ms] group-hover:scale-110 group-hover:brightness-90 group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                      <div className="flex items-center justify-between">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/8 backdrop-blur-xl transition-all duration-500 group-hover:bg-red-600 group-hover:text-white">
                          <Icon size={25} strokeWidth={1.35} />
                        </span>
                        <ArrowUpRight className="text-white/35 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                      </div>
                      <div className="max-w-2xl">
                        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.38em] text-red-300">0{index + 1} / Service</p>
                        <h2 className="mb-5 text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-6xl">{service.title}</h2>
                        <p className="max-w-xl text-base leading-7 text-white/58 transition-colors duration-500 group-hover:text-white/78">{service.copy}</p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
