import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-[#141414] text-[#F6F1E4] border-t border-[#F6F1E4]/12 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F6F1E4]/10">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="font-editorial text-3xl text-[#F6F1E4] tracking-tight"
            >
              {STUDIO_INFO.brandName}
            </a>
            <p className="mt-3 text-sm text-[#F6F1E4]/70 max-w-sm leading-relaxed">
              {STUDIO_INFO.fullName}. Servicios profesionales en belleza, estilismo, micropigmentación y venta de productos para el cuidado personal.
            </p>
          </div>

          {/* Address & Hours */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#C9A227] font-medium">
                Ubicación y Horarios
              </p>
              <p className="mt-2 text-sm text-[#F6F1E4]/82 leading-relaxed">
                {STUDIO_INFO.address}
              </p>
              <p className="mt-1.5 text-xs text-[#F6F1E4]/60">
                Horarios y disponibilidad bajo previa cita vía WhatsApp o llamada telefónica.
              </p>
            </div>
          </div>

          {/* Contact & Social Channels */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#C9A227] font-medium">
              Contacto y Canales
            </p>
            <ul className="space-y-2 text-sm text-[#F6F1E4]/80">
              <li>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A227] transition-colors tabular-nums"
                >
                  WhatsApp: {STUDIO_INFO.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${STUDIO_INFO.phoneDigits}`}
                  className="hover:text-[#C9A227] transition-colors tabular-nums"
                >
                  Tel: {STUDIO_INFO.phoneDisplay}
                </a>
              </li>
              <li className="pt-2 text-xs text-[#F6F1E4]/60">
                Facebook: {STUDIO_INFO.socials.facebook}
              </li>
              <li className="text-xs text-[#F6F1E4]/60">
                Instagram: {STUDIO_INFO.socials.instagram}
              </li>
              <li className="text-xs text-[#F6F1E4]/60">
                TikTok: {STUDIO_INFO.socials.tiktok}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Quiet Legal & Navigation Row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#F6F1E4]/55">
          <p>
            © {new Date().getFullYear()} {STUDIO_INFO.fullName}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#servicios" className="hover:text-[#F6F1E4] transition-colors">
              Servicios
            </a>
            <a href="#faq" className="hover:text-[#F6F1E4] transition-colors">
              Preguntas Frecuentes
            </a>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#C9A227] transition-colors cursor-pointer"
            >
              Aviso de Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
