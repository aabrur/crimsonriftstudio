import Reveal from './Reveal.jsx';

export default function SectionHeader({ eyebrow, title, children, align = 'left', className = '' }) {
  const centered = align === 'center';

  return (
    <Reveal className={className}>
      <div className={centered ? 'mx-auto max-w-5xl text-center' : 'max-w-6xl'}>
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="text-balance text-4xl font-black uppercase leading-[0.88] tracking-tighter text-[#f8eee9] md:text-6xl lg:text-7xl">
          {title}
        </h2>
        {children && (
          <div className={`mt-7 text-base leading-8 text-[#f4ede7]/56 md:text-lg ${centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>
            {children}
          </div>
        )}
      </div>
    </Reveal>
  );
}
