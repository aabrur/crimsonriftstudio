import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CrimsonButton({ to, href, children, variant = 'solid', className = '' }) {
  const base = `group inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 text-[10px] font-black uppercase tracking-[0.32em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`;
  const styles = variant === 'ghost'
    ? 'border border-[#f4ede7]/12 bg-[#f4ede7]/[0.035] text-[#f4ede7]/70 backdrop-blur-xl hover:border-red-300/35 hover:bg-red-950/25 hover:text-white hover:shadow-[0_0_54px_rgba(177,18,38,0.16)]'
    : 'bg-[#f4ede7] text-[#120506] hover:bg-[#b11226] hover:text-white hover:shadow-[0_0_72px_rgba(177,18,38,0.38)]';

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight size={15} className="transition-transform duration-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>{content}</a>;
  }

  return <Link to={to} className={`${base} ${styles}`}>{content}</Link>;
}
