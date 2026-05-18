import { ArrowLeftRight, ArrowUpRight } from 'lucide-react';
import CrimsonButton from '../../components/ui/CrimsonButton.jsx';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';

const projects = [
  { title: 'Obsidian Commerce', category: 'Website / Konversi', year: '2026', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1800&auto=format&fit=crop', note: 'Ruang jual yang terasa tenang, cepat, dan meyakinkan.' },
  { title: 'Monohaus Identity', category: 'Identitas Visual', year: '2026', image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1700&auto=format&fit=crop', note: 'Sistem visual untuk brand yang ingin tampil matang tanpa berteriak.' },
  { title: 'Rift Motion', category: 'Kampanye Sinematik', year: '2025', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1700&auto=format&fit=crop', note: 'Gerak, cahaya, dan ritme untuk mengubah pesan menjadi suasana.' },
  { title: 'Signal Social', category: 'Mesin Atensi', year: '2025', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1800&auto=format&fit=crop', note: 'Konten yang konsisten, rapi, dan cukup tajam untuk diingat.' },
  { title: 'Noir Product', category: 'Arahan Seni', year: '2025', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop', note: 'Detail produk diperlakukan seperti objek galeri, bukan sekadar katalog.' },
];

export default function PortfolioGallery() {
  return (
    <PageShell>
      <section className="px-6 pb-8 pt-36 md:px-12 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <Reveal>
            <p className="eyebrow mb-6">Galeri Privat</p>
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.72fr] lg:items-end">
              <h1 className="text-balance text-6xl font-black uppercase leading-[0.84] tracking-tighter text-[#f8eee9] md:text-8xl lg:text-[9.4rem]">Berjalan pelan di antara karya.</h1>
              <div>
                <p className="max-w-xl text-lg leading-8 text-[#f4ede7]/58">
                  Sebuah koridor horizontal berisi fragmen visual, sistem, dan suasana. Geser perlahan—setiap karya dirancang untuk terasa seperti ruang pamer kecil.
                </p>
                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#f4ede7]/10 bg-[#f4ede7]/[0.035] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#f4ede7]/52">
                  <ArrowLeftRight size={15} /> Geser horizontal
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-[6.5rem]">
        <div className="gallery-track flex gap-6 overflow-x-auto px-6 pb-10 pt-8 md:gap-8 md:px-12 lg:px-[calc((100vw-94rem)/2+6rem)]">
          {projects.map((project, index) => (
            <article key={project.title} className="gallery-card group relative h-[72vh] min-h-[560px] w-[84vw] min-w-[84vw] overflow-hidden rounded-[2.7rem] border border-[#f4ede7]/10 bg-[#080303] shadow-[0_40px_120px_rgba(0,0,0,0.46)] transition-all duration-700 hover:border-red-200/30 hover:shadow-[0_46px_150px_rgba(0,0,0,0.58),0_0_80px_rgba(177,18,38,0.16)] md:w-[64vw] md:min-w-[64vw] lg:w-[52rem] lg:min-w-[52rem]">
              <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/24 to-transparent opacity-92 transition-opacity duration-700 group-hover:opacity-78" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between md:inset-x-8 md:top-8">
                <span className="rounded-full border border-[#f4ede7]/12 bg-black/30 px-4 py-3 text-[9px] font-black uppercase tracking-[0.3em] text-[#f4ede7]/62 backdrop-blur-xl">{project.category}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f4ede7]/12 bg-[#f4ede7]/8 text-[#f4ede7]/62 backdrop-blur-xl transition-all duration-500 group-hover:bg-[#f4ede7] group-hover:text-[#120506]">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="absolute bottom-7 left-7 right-7 md:bottom-10 md:left-10 md:right-10">
                <div className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.34em] text-red-200">
                  <span>Eksibisi 0{index + 1}</span>
                  <span className="h-px w-10 bg-red-200/40" />
                  <span>{project.year}</span>
                </div>
                <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#f8eee9] md:text-6xl">{project.title}</h2>
                <p className="mt-5 max-w-xl translate-y-3 text-sm leading-7 text-[#f4ede7]/0 transition-all duration-700 group-hover:translate-y-0 group-hover:text-[#f4ede7]/68 md:text-base">
                  {project.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28 text-center md:px-12 lg:px-24">
        <Reveal>
          <p className="eyebrow mb-6">Karya berikutnya</p>
          <h2 className="mx-auto max-w-4xl text-balance text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#f8eee9] md:text-6xl">Jika brand Anda membutuhkan ruang pamer sendiri, kami bisa membangunnya dengan tenang.</h2>
          <div className="mt-10">
            <CrimsonButton to="/contact">Rancang eksibisi Anda</CrimsonButton>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
