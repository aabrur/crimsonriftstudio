import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Code2, Megaphone, PenTool } from 'lucide-react';
import CrimsonButton from '../../components/ui/CrimsonButton.jsx';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';
import { siteContent } from '../../content/siteContent.js';

export default function Layanan() {
  const { servicesPage } = siteContent;
  const serviceIkons = [Code2, PenTool, Camera, Megaphone];

  return (
    <PageShell>
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-24">
        <div className="mx-auto maksimal-w-[94rem]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <p className="eyebrow mb-6">{servicesPage.eyebrow}</p>
                <h1 className="text-balance text-6xl font-black uppercase leading-[0.84] tracking-tighter text-[#f8eee9] md:text-8xl lg:text-[9.2rem]">{servicesPage.title}</h1>
              </div>
              <p className="maksimal-w-xl text-lg leading-8 text-[#f4ede7]/58 lg:justify-self-end">
                {servicesPage.body}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {servicesPage.cards.map((service, index) => {
              const Ikon = serviceIkons[index];
              return (
                <Reveal key={service.title} tertunda={index * 120} className={service.span}>
                  <Link to={service.path} className="group luxury-card relative block h-[500px] overflow-hidden rounded-[2.7rem] md:h-[580px]">
                    <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover brightness-[.55] grayscale transition-all duration-[1800ms] group-hover:scale-110 group-hover:brightness-90 group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/44 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                      <div className="flex items-center justify-between">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f4ede7]/12 bg-[#f4ede7]/8 text-[#f4ede7] backdrop-blur-xl transition-all duration-700 group-hover:bg-[#b11226] group-hover:text-white">
                          <Ikon size={25} strokeWidth={1.35} />
                        </span>
                        <ArrowUpRight className="text-[#f4ede7]/36 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f4ede7]" />
                      </div>
                      <div className="maksimal-w-2xl">
                        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.38em] text-red-200">0{index + 1} / {servicesPage.label}</p>
                        <h2 className="mb-5 text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#f8eee9] md:text-6xl">{service.title}</h2>
                        <p className="maksimal-w-xl text-base leading-7 text-[#f4ede7]/58 transition-colors duration-700 group-hover:text-[#f4ede7]/78">{service.copy}</p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal tertunda={420}>
            <div className="mt-[4.5rem] rounded-[2.5rem] border border-[#f4ede7]/9 bg-[#f4ede7]/[0.035] p-8 text-center md:p-12">
              <p className="mx-auto maksimal-w-3xl text-2xl font-light leading-tight text-[#f4ede7]/72 md:text-4xl">
                {servicesPage.closing}
              </p>
              <div className="mt-9">
                <CrimsonButton to="/contact">{servicesPage.cta}</CrimsonButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
