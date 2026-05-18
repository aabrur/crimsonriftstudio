import { ArrowUpRight } from 'lucide-react';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';

const projects = [
  { title: 'Obsidian Commerce', category: 'Web / Conversion', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1800&auto=format&fit=crop', size: 'md:col-span-7' },
  { title: 'Monohaus Identity', category: 'Brand System', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop', size: 'md:col-span-5' },
  { title: 'Rift Motion', category: 'Cinematic Content', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop', size: 'md:col-span-5' },
  { title: 'Signal Social', category: 'Growth Engine', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1800&auto=format&fit=crop', size: 'md:col-span-7' },
  { title: 'Noir Product', category: 'Art Direction', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop', size: 'md:col-span-12' },
];

export default function PortfolioGallery() {
  return (
    <PageShell>
      <section className="px-6 pb-10 pt-36 md:px-12 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <p className="eyebrow mb-6">Luxury Gallery</p>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
              <h1 className="text-6xl font-black uppercase leading-[0.84] tracking-tighter text-white md:text-8xl lg:text-[10rem]">Selected Worlds.</h1>
              <p className="max-w-xl text-lg leading-8 text-white/55">
                A cinematic gallery concept built around depth, quiet motion, premium spacing, and editorial hover states.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-[92rem] gap-6 md:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} className={project.size}>
              <article className="group luxury-card relative h-[460px] overflow-hidden rounded-[2.5rem] md:h-[620px]">
                <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-72" />
                <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8">
                  <span className="rounded-full border border-white/12 bg-black/25 px-4 py-3 text-[9px] font-black uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl">{project.category}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/60 backdrop-blur-xl transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7 md:bottom-10 md:left-10 md:right-10">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.36em] text-red-300">Project 0{index + 1}</p>
                  <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-6xl">{project.title}</h2>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
