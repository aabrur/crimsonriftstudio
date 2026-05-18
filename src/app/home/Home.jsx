import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Camera, Code2, Compass, Gem, Megaphone, PenTool, ShieldCheck, Sparkles } from 'lucide-react';
import ClientMarquee from '../../components/ClientMarquee.jsx';
import CrimsonButton from '../../components/ui/CrimsonButton.jsx';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';
import SectionHeader from '../../components/ui/SectionHeader.jsx';

const heroImage = 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2200&auto=format&fit=crop';

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

  const pains = useMemo(() => [
    { title: 'Visual terasa biasa', copy: 'Brand sudah bekerja keras, tetapi tampilannya belum membuat orang berhenti, percaya, lalu memilih.' },
    { title: 'Arah digital kabur', copy: 'Website, konten, dan identitas berjalan sendiri-sendiri tanpa ritme yang menyatukan persepsi.' },
    { title: 'Konversi kehilangan tenaga', copy: 'Audiens datang, melihat sebentar, lalu pergi karena pengalaman belum terasa meyakinkan.' },
  ], []);

  const services = useMemo(() => [
    { icon: Code2, title: 'Website Sinematik', copy: 'Antarmuka cepat, jernih, dan berkarakter untuk mengubah kunjungan menjadi rasa percaya.', path: '/services/web-development' },
    { icon: PenTool, title: 'Identitas Visual', copy: 'Sistem logo, warna, tipografi, dan bahasa visual yang membuat brand terasa matang.', path: '/services/logo-branding' },
    { icon: Camera, title: 'Foto & Gerak', copy: 'Aset visual editorial yang membawa suasana, detail, dan emosi brand ke permukaan.', path: '/services/photography-videography' },
    { icon: Megaphone, title: 'Mesin Atensi', copy: 'Strategi konten dan kampanye yang membuat brand hadir konsisten tanpa kehilangan kelas.', path: '/services/social-media' },
  ], []);

  const gallery = [
    { title: 'Ruang Identitas', type: 'Brand Direction', image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1500&auto=format&fit=crop' },
    { title: 'Lanskap Digital', type: 'Website Experience', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Gerak yang Tenang', type: 'Visual Campaign', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1500&auto=format&fit=crop' },
  ];

  return (
    <PageShell>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Komposisi arsitektur gelap bernuansa crimson"
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
                <span className="eyebrow">Studio Digital Butik</span>
                <span className="h-px w-16 bg-red-300/45" />
                <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#f4ede7]/38">Crimson / Rift / Studio</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="max-w-6xl text-balance text-6xl font-black uppercase leading-[0.82] tracking-tighter text-[#f8eee9] sm:text-7xl md:text-8xl lg:text-[9.4rem]">
                Brand Anda tidak harus terasa biasa.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-[#f4ede7]/62 md:text-xl">
                Saat visual buntu, digital terasa datar, dan konversi melemah, Crimson Rift Studio merancang celah baru: arah yang jernih, identitas yang kuat, dan pengalaman yang membuat orang percaya lebih cepat.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <CrimsonButton to="/contact">Mulai dari brief</CrimsonButton>
                <CrimsonButton to="/gallery" variant="ghost">Masuki galeri</CrimsonButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={460} className="lg:justify-self-end">
            <div className="glass-panel relative min-h-[430px] overflow-hidden rounded-[2.7rem] p-6 md:min-h-[570px] md:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4ede7]/10 via-transparent to-[#5f121c]/34" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b11226]/18 blur-3xl" />
              <img src="/logo/logo-crimson-rift-studio.svg" alt="Crimson Rift Studio" className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 object-contain opacity-92 drop-shadow-[0_0_90px_rgba(177,18,38,0.34)] animate-float md:h-72 md:w-72" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {['Jernih', 'Berani', 'Bernilai'].map((item) => (
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
          <SectionHeader eyebrow="Masalah yang sering tersembunyi" title="Bisnis bisa hebat, tetapi tetap terasa tak terlihat.">
            <p>
              Banyak pemilik bisnis bukan kekurangan kualitas. Mereka kekurangan panggung visual yang mampu menerjemahkan kualitas itu menjadi rasa percaya.
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
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop" alt="Ruang editorial yang tenang dan premium" className="h-[620px] w-full object-cover grayscale transition-all duration-[1800ms] hover:scale-105 hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/26 to-transparent" />
              <p className="absolute bottom-8 left-8 max-w-sm text-2xl font-light leading-tight text-[#f4ede7]/76">Kami tidak membuat brand lebih ramai. Kami membuatnya lebih jelas.</p>
            </div>
          </Reveal>
          <div>
            <SectionHeader eyebrow="Peran Crimson Rift" title="Celah antara biasa dan bernilai harus dirancang, bukan ditunggu.">
              <p>
                Crimson adalah intensitas: keberanian untuk terlihat dengan emosi, ketajaman, dan rasa. Rift adalah celah: jarak antara bisnis yang hanya hadir dan brand yang benar-benar diingat. Di sanalah kami bekerja.
              </p>
            </SectionHeader>
            <Reveal delay={180}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Compass, label: 'Arah yang jernih' },
                  { icon: ShieldCheck, label: 'Identitas yang kuat' },
                  { icon: Sparkles, label: 'Pengalaman hidup' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-3xl border border-[#f4ede7]/9 bg-[#f4ede7]/[0.035] p-6">
                      <Icon className="mb-8 text-red-200" size={28} strokeWidth={1.25} />
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
          <SectionHeader eyebrow="Koleksi pendek" title="Cuplikan rasa visual yang kami kejar." />
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
          <SectionHeader eyebrow="Yang kami bangun" title="Sistem kreatif yang membuat brand terasa lebih utuh." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 90}>
                  <Link to={service.path} className="group luxury-card flex min-h-[370px] flex-col justify-between rounded-[2rem] p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f4ede7]/10 bg-[#f4ede7]/[0.04] text-red-200 transition-all duration-700 group-hover:border-red-200/45 group-hover:bg-[#b11226]/24 group-hover:text-white">
                      <Icon size={24} strokeWidth={1.4} />
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
          <p className="eyebrow mb-6">Jika waktunya sudah tepat</p>
          <h2 className="mx-auto max-w-5xl text-balance text-5xl font-black uppercase leading-[0.86] tracking-tighter text-[#f8eee9] md:text-8xl lg:text-9xl">Mari membuat brand Anda terasa pantas dipilih.</h2>
          <div className="mt-12">
            <CrimsonButton to="/contact">Buka percakapan</CrimsonButton>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
