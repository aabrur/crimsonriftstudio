import { useState } from 'react';
import { ArrowRight, Check, Mail, Upload } from 'lucide-react';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';
import { siteContent } from '../../content/siteContent.js';

export default function Contact() {
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState('kurasi');
  const [sent, setSent] = useState(false);
  const { contact, shared } = siteContent;

  const toggle = (item) => setSelected((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);

  return (
    <PageShell>
      <section className="px-6 pb-24 pt-36 md:px-12 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="eyebrow mb-6">{contact.eyebrow}</p>
                <h1 className="text-balance text-6xl font-black uppercase leading-[0.84] tracking-tighter text-[#f8eee9] md:text-8xl lg:text-[8.8rem]">{contact.title}</h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#f4ede7]/58 lg:justify-self-end">{contact.body}</p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal delay={120}>
              <aside className="glass-panel rounded-[2.5rem] p-8 md:p-10">
                <Mail className="mb-8 text-red-200" size={32} strokeWidth={1.25} />
                <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-[#f8eee9]">{contact.sideTitle}</h2>
                <p className="mb-8 leading-7 text-[#f4ede7]/54">{contact.sideBody}</p>
                <a href={shared.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#f4ede7] px-7 py-4 text-[10px] font-black uppercase tracking-[0.32em] text-[#120506] transition-all duration-700 hover:bg-[#b11226] hover:text-white">{contact.sideCta}</a>
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
                    <span className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#b11226]/16 text-red-200"><Check size={34} /></span>
                    <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter text-[#f8eee9]">{contact.sentTitle}</h2>
                    <p className="max-w-md leading-7 text-[#f4ede7]/54">{contact.sentBody}</p>
                  </div>
                ) : (
                  <div className="space-y-9">
                    <div className="grid gap-5 md:grid-cols-2">
                      <input required placeholder={contact.fields.name} className="rounded-2xl border border-[#f4ede7]/10 bg-black/35 px-5 py-5 text-[#f4ede7] outline-none transition-colors placeholder:text-[#f4ede7]/30 focus:border-red-200/55" />
                      <input required type="email" placeholder={contact.fields.email} className="rounded-2xl border border-[#f4ede7]/10 bg-black/35 px-5 py-5 text-[#f4ede7] outline-none transition-colors placeholder:text-[#f4ede7]/30 focus:border-red-200/55" />
                    </div>

                    <div>
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-[#f4ede7]/38">{contact.serviceLabel}</p>
                      <div className="flex flex-wrap gap-3">
                        {contact.services.map((item) => (
                          <button key={item} type="button" onClick={() => toggle(item)} className={`rounded-full border px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 ${selected.includes(item) ? 'border-red-200/50 bg-[#b11226]/16 text-[#f4ede7]' : 'border-[#f4ede7]/10 bg-[#f4ede7]/[0.035] text-[#f4ede7]/46 hover:text-[#f4ede7]'}`}>{item}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-[#f4ede7]/38">{contact.budgetLabel}</p>
                      <div className="grid gap-3 sm:grid-cols-4">
                        {contact.budgets.map(([id, label]) => (
                          <button key={id} type="button" onClick={() => setBudget(id)} className={`rounded-2xl border px-4 py-4 text-xs font-bold transition-all duration-500 ${budget === id ? 'border-[#f4ede7] bg-[#f4ede7] text-[#120506]' : 'border-[#f4ede7]/10 bg-[#f4ede7]/[0.035] text-[#f4ede7]/46 hover:text-[#f4ede7]'}`}>{label}</button>
                        ))}
                      </div>
                    </div>

                    <textarea required rows="6" placeholder={contact.fields.message} className="w-full resize-none rounded-2xl border border-[#f4ede7]/10 bg-black/35 px-5 py-5 text-[#f4ede7] outline-none transition-colors placeholder:text-[#f4ede7]/30 focus:border-red-200/55" />

                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[#f4ede7]/12 px-5 py-4 text-sm text-[#f4ede7]/44">
                        <Upload size={17} /> {contact.upload}
                      </div>
                      <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f4ede7] px-8 py-5 text-[10px] font-black uppercase tracking-[0.32em] text-[#120506] transition-all duration-700 hover:bg-[#b11226] hover:text-white">
                        {contact.submit} <ArrowRight size={16} />
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
