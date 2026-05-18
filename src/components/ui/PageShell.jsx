export default function PageShell({ children, className = '' }) {
  return (
    <div className={`relative min-h-screen overflow-hidden bg-[#030303] animate-fadeIn ${className}`}>
      <div className="aurora pointer-events-none fixed inset-0 z-0 opacity-70" />
      <div className="luxury-grid pointer-events-none fixed inset-0 z-0 opacity-45" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
