import { useMemo, useState } from 'react';
import { ArrowRight, Check, Mail, Upload } from 'lucide-react';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';

export default function Contact() {
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState('premium');
  const [sent, setSent] = useState(false);

  const services = useMemo(() => ['Website', 'Brand Identity', 'Photo / Video', 'Social Growth'], []);
  const budgets = ['Starter', 'Premium', 'Flagship', 'Retainer'];

  const toggle = (item) => setSelected((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);

  return (
    <PageShell>
      <section className="px-6 pb-24 pt-36 md:px-12 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="eyebrow mb-6">Begin the Brief</p>
                <h1 className="text-6xl font-black uppercase leading-[0.84] tracking-tighter text-white md:text-8xl lg:text-[9rem]">Tell us what you want to dominate.</h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-white/55 lg:justify-self-end">Share the ambition. We will shape it into a refined digital direction, practical scope, and launch path.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal delay={120}>
              <aside className="glass-panel rounded-[2.5rem] p-8 md:p-10">
                <Mail className="mb-8 text-red-300" size={32} strokeWidth={1.25} />
                <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-white">Direct line</h2>
                <p className="mb-8 leading-7 text-white/52">Prefer a fast conversation? Start with WhatsApp and we will route your brief from there.</p>
                <a href="https://wa.me/6281398621530" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-white px-7 py-4 text-[10px] font-black uppercase tracking-[0.32em] text-black transition-all duration-500 hover:bg-red-600 hover:text-white">WhatsApp Studio</a>
              </aside>
            </Reveal>

            <Reveal delay={220}>
              <form
                className="luxury-card rounded-[2.5rem] p-6 md:p-10"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                {sent ? (
                  <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                    <span className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/15 text-red-300"><Check size={34} /></span>
                    <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter text-white">Brief captured.</h2>
                    <p className="max-w-md leading-7 text-white/52">This demo form is ready for integration. Your selected experience has been staged visually.</p>
                  </div>
                ) : (
                  <div className="space-y-9">
                    <div className="grid gap-5 md:grid-cols-2">
                      <input required placeholder="Name" className="rounded-2xl border border-white/10 bg-black/35 px-5 py-5 text-white outline-none transition-colors placeholder:text-white/28 focus:border-red-400/55" />
                      <input required type="email" placeholder="Email" className="rounded-2xl border border-white/10 bg-black/35 px-5 py-5 text-white outline-none transition-colors placeholder:text-white/28 focus:border-red-400/55" />
                    </div>

                    <div>
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-white/38">Services</p>
                      <div className="flex flex-wrap gap-3">
                        {services.map((item) => (
                          <button key={item} type="button" onClick={() => toggle(item)} className={`rounded-full border px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 ${selected.includes(item) ? 'border-red-400/50 bg-red-500/15 text-white' : 'border-white/10 bg-white/[0.035] text-white/45 hover:text-white'}`}>{item}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-white/38">Budget Signal</p>
                      <div className="grid gap-3 sm:grid-cols-4">
                        {budgets.map((item) => (
                          <button key={item} type="button" onClick={() => setBudget(item.toLowerCase())} className={`rounded-2xl border px-4 py-4 text-xs font-bold transition-all duration-500 ${budget === item.toLowerCase() ? 'border-white bg-white text-black' : 'border-white/10 bg-white/[0.035] text-white/45 hover:text-white'}`}>{item}</button>
                        ))}
                      </div>
                    </div>

                    <textarea required rows="6" placeholder="What are we building, and what should it change for your business?" className="w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-5 py-5 text-white outline-none transition-colors placeholder:text-white/28 focus:border-red-400/55" />

                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/12 px-5 py-4 text-sm text-white/42">
                        <Upload size={17} /> Optional brief / references
                      </div>
                      <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.32em] text-black transition-all duration-500 hover:bg-red-600 hover:text-white">
                        Send Brief <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
