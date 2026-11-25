import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#el-studio', label: 'El Studio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#141414]/92 backdrop-blur-md border-b border-[#F6F1E4]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#inicio"
          className="font-editorial text-2xl sm:text-[26px] font-medium tracking-tight text-[#F6F1E4] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A227]"
        >
          Botsuana Studio
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-[#F6F1E4]/80 hover:text-[#F6F1E4] transition-colors duration-200 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A227]"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-[#C9A227] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 min-h-[40px] bg-[#C9A227] text-[#141414] text-sm font-semibold tracking-wide hover:bg-[#D8B442] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F1E4]"
          >
            Agendar cita
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#F6F1E4] border border-[#F6F1E4]/15 hover:border-[#C9A227] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#F6F1E4]/10 bg-[#141414] px-5 py-6"
        >
          <nav aria-label="Menú móvil" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-3 px-2 text-base font-medium text-[#F6F1E4]/90 hover:text-[#C9A227] border-b border-[#F6F1E4]/8 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="mt-4 w-full min-h-[44px] px-5 py-3 bg-[#C9A227] text-[#141414] text-sm font-semibold tracking-wide hover:bg-[#D8B442] transition-colors cursor-pointer"
            >
              Agendar cita
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
