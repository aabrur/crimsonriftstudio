import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Code2, Megaphone, PenTool } from 'lucide-react';
import CrimsonButton from '../../components/ui/CrimsonButton.jsx';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';

const services = [
  { title: 'Website Sinematik', path: '/services/web-development', icon: Code2, span: 'lg:col-span-7', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1800&auto=format&fit=crop', copy: 'Website, landing page, dan pengalaman digital yang cepat, rapi, serta terasa meyakinkan sejak detik pertama.' },
  { title: 'Identitas Visual', path: '/services/logo-branding', icon: PenTool, span: 'lg:col-span-5', image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1500&auto=format&fit=crop', copy: 'Logo, warna, tipografi, dan sistem visual yang membuat brand terasa matang, langka, dan mudah dikenali.' },
  { title: 'Foto & Videografi', path: '/services/photography-videography', icon: Camera, span: 'lg:col-span-5', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1500&auto=format&fit=crop', copy: 'Aset visual editorial untuk membangun suasana, kedalaman, dan daya tarik yang tidak terasa generik.' },
  { title: 'Strategi Atensi', path: '/services/social-media', icon: Megaphone, span: 'lg:col-span-7', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1800&auto=format&fit=crop', copy: 'Sistem konten, kampanye, dan pengelolaan sosial yang menjaga brand tetap hadir dengan ritme yang elegan.' },
];

export default function Services() {
  return (
    <PageShell>
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <p className="eyebrow mb-6">Ruang Layanan</p>
                <h1 className="text-balance text-6xl font-black uppercase leading-[0.84] tracking-tighter text-[#f8eee9] md:text-8xl lg:text-[9.2rem]">Sistem untuk membuat brand terasa utuh.</h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#f4ede7]/58 lg:justify-self-end">
                Kami menggabungkan strategi, rasa visual, antarmuka, narasi, dan ritme konten agar bisnis Anda tidak hanya terlihat—tetapi terasa pantas dipercaya.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 120} className={service.span}>
                  <Link to={service.path} className="group luxury-card relative block h-[500px] overflow-hidden rounded-[2.7rem] md:h-[580px]">
                    <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover brightness-[.55] grayscale transition-all duration-[1800ms] group-hover:scale-110 group-hover:brightness-90 group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/44 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                      <div className="flex items-center justify-between">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f4ede7]/12 bg-[#f4ede7]/8 text-[#f4ede7] backdrop-blur-xl transition-all duration-700 group-hover:bg-[#b11226] group-hover:text-white">
                          <Icon size={25} strokeWidth={1.35} />
                        </span>
                        <ArrowUpRight className="text-[#f4ede7]/36 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f4ede7]" />
                      </div>
                      <div className="max-w-2xl">
                        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.38em] text-red-200">0{index + 1} / Layanan</p>
                        <h2 className="mb-5 text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#f8eee9] md:text-6xl">{service.title}</h2>
                        <p className="max-w-xl text-base leading-7 text-[#f4ede7]/58 transition-colors duration-700 group-hover:text-[#f4ede7]/78">{service.copy}</p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={420}>
            <div className="mt-[4.5rem] rounded-[2.5rem] border border-[#f4ede7]/9 bg-[#f4ede7]/[0.035] p-8 text-center md:p-12">
              <p className="mx-auto max-w-3xl text-2xl font-light leading-tight text-[#f4ede7]/72 md:text-4xl">
                Tidak yakin harus mulai dari mana? Kami dapat membaca kondisi brand Anda terlebih dahulu, lalu menyusun prioritas yang paling masuk akal.
              </p>
              <div className="mt-9">
                <CrimsonButton to="/contact">Diskusikan kebutuhan</CrimsonButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
