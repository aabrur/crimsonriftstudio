const LOGO_URL = "/favicon.png";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-16 pb-8 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img src={LOGO_URL} alt="Logo" className="h-10 w-auto object-contain opacity-80" />
        <p className="text-gray-600 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Crimson Rift Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}