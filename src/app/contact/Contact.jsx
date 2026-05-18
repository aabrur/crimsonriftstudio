import { useMemo, useState } from 'react';
import { ArrowRight, Check, Mail, Upload } from 'lucide-react';
import PageShell from '../../components/ui/PageShell.jsx';
import Reveal from '../../components/ui/Reveal.jsx';

export default function Contact() {
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState('kurasi');
  const [sent, setSent] = useState(false);

  const services = useMemo(() => ['Website', 'Identitas', 'Foto / Video', 'Konten Sosial'], []);
  const budgets = [
    ['arah', 'Arah Awal'],
    ['kurasi', 'Kurasi Premium'],
    ['signature', 'Signature'],
    ['retainer', 'Retainer'],
  ];

  const toggle = (item) => setSelected((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);

  return (
    <PageShell>
      <section className="px-6 pb-24 pt-36 md:px-12 md:pt-44 lg:px-24">
        <div className="mx-auto max-w-[94rem]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="eyebrow mb-6">Mulai Percakapan</p>
                <h1 className="text-balance text-6xl font-black uppercase leading-[0.84] tracking-tighter text-[#f8eee9] md:text-8xl lg:text-[8.8rem]">Ceritakan bagian brand yang ingin Anda angkat.</h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#f4ede7]/58 lg:justify-self-end">Kami akan membaca konteksnya dengan tenang, lalu mengubahnya menjadi arah visual, ruang lingkup, dan langkah eksekusi yang lebih jernih.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal delay={120}>
              <aside className="glass-panel rounded-[2.5rem] p-8 md:p-10">
                <Mail className="mb-8 text-red-200" size={32} strokeWidth={1.25} />
                <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-[#f8eee9]">Jalur langsung</h2>
                <p className="mb-8 leading-7 text-[#f4ede7]/54">Jika Anda lebih nyaman memulai dari percakapan singkat, kirim pesan melalui WhatsApp. Kami akan membantu merapikan brief setelahnya.</p>
                <a href="https://wa.me/6281398621530" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#f4ede7] px-7 py-4 text-[10px] font-black uppercase tracking-[0.32em] text-[#120506] transition-all duration-700 hover:bg-[#b11226] hover:text-white">Hubungi studio</a>
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
                    <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter text-[#f8eee9]">Arahan tersimpan.</h2>
                    <p className="max-w-md leading-7 text-[#f4ede7]/54">Form ini siap dihubungkan ke sistem pengiriman. Secara visual, alur brief sudah dirancang untuk terasa tenang dan premium.</p>
                  </div>
                ) : (
                  <div className="space-y-9">
                    <div className="grid gap-5 md:grid-cols-2">
                      <input required placeholder="Nama" className="rounded-2xl border border-[#f4ede7]/10 bg-black/35 px-5 py-5 text-[#f4ede7] outline-none transition-colors placeholder:text-[#f4ede7]/30 focus:border-red-200/55" />
                      <input required type="email" placeholder="Email bisnis" className="rounded-2xl border border-[#f4ede7]/10 bg-black/35 px-5 py-5 text-[#f4ede7] outline-none transition-colors placeholder:text-[#f4ede7]/30 focus:border-red-200/55" />
                    </div>

                    <div>
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-[#f4ede7]/38">Kebutuhan utama</p>
                      <div className="flex flex-wrap gap-3">
                        {services.map((item) => (
                          <button key={item} type="button" onClick={() => toggle(item)} className={`rounded-full border px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 ${selected.includes(item) ? 'border-red-200/50 bg-[#b11226]/16 text-[#f4ede7]' : 'border-[#f4ede7]/10 bg-[#f4ede7]/[0.035] text-[#f4ede7]/46 hover:text-[#f4ede7]'}`}>{item}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-[#f4ede7]/38">Tingkat investasi</p>
                      <div className="grid gap-3 sm:grid-cols-4">
                        {budgets.map(([id, label]) => (
                          <button key={id} type="button" onClick={() => setBudget(id)} className={`rounded-2xl border px-4 py-4 text-xs font-bold transition-all duration-500 ${budget === id ? 'border-[#f4ede7] bg-[#f4ede7] text-[#120506]' : 'border-[#f4ede7]/10 bg-[#f4ede7]/[0.035] text-[#f4ede7]/46 hover:text-[#f4ede7]'}`}>{label}</button>
                        ))}
                      </div>
                    </div>

                    <textarea required rows="6" placeholder="Apa yang sedang terasa buntu, dan hasil seperti apa yang ingin Anda rasakan dari brand ini?" className="w-full resize-none rounded-2xl border border-[#f4ede7]/10 bg-black/35 px-5 py-5 text-[#f4ede7] outline-none transition-colors placeholder:text-[#f4ede7]/30 focus:border-red-200/55" />

                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[#f4ede7]/12 px-5 py-4 text-sm text-[#f4ede7]/44">
                        <Upload size={17} /> Referensi atau brief opsional
                      </div>
                      <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f4ede7] px-8 py-5 text-[10px] font-black uppercase tracking-[0.32em] text-[#120506] transition-all duration-700 hover:bg-[#b11226] hover:text-white">
                        Kirim brief <ArrowRight size={16} />
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
