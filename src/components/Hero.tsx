import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EditorialFrame } from './EditorialFrame';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onBookClick: () => void;
}

const STUDIO_HIGHLIGHTS = [
  {
    value: '21',
    label: 'Servicios y líneas de cuidado',
    detail: 'Estilismo, mirada, uñas y bienestar',
  },
  {
    value: '0% Formol',
    label: 'Alaciados progresivos',
    detail: 'Durabilidad de 4 a 6 meses',
  },
  {
    value: '1 – 2 años',
    label: 'Micropigmentación y bases',
    detail: 'Técnicas de larga duración',
  },
  {
    value: '443 182 4841',
    label: 'Atención y cotizaciones',
    detail: 'Vía WhatsApp y llamada directa',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="inicio" className="bg-[#141414] text-[#F6F1E4] pt-10 pb-16 sm:pt-14 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Asymmetric Editorial Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 lg:py-6">
            <div>
              <p className="text-xs sm:text-[13px] tracking-[0.18em] uppercase text-[#C9A227] font-medium mb-6">
                Beauty Room · Col. Vasco de Quiroga
              </p>

              <h1
                className="font-editorial font-normal tracking-tight text-[#F6F1E4] leading-[1.04] max-w-2xl"
                style={{
                  fontSize: 'clamp(2.5rem, 4.6vw, 4.35rem)',
                  textWrap: 'balance',
                }}
              >
                Precisión estética, salud capilar y cuidado personal a tu medida.
              </h1>

              <p className="mt-7 text-base sm:text-lg text-[#F6F1E4]/78 leading-relaxed max-w-xl">
                En <span className="text-[#F6F1E4] font-medium">{STUDIO_INFO.fullName}</span> unimos alta peluquería, diseño de color, micropigmentación y rituales de belleza en un espacio íntimo enfocado en resultados armónicos y duraderos.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#F6F1E4]/12 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 min-h-[46px] bg-[#C9A227] text-[#141414] text-sm font-semibold tracking-wide hover:bg-[#D8B442] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F1E4]"
              >
                Agendar cita
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#servicios"
                className="inline-flex items-center gap-2 py-2 text-sm font-medium text-[#F6F1E4]/85 hover:text-[#C9A227] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A227]"
              >
                Explorar catálogo de servicios
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Photography Placeholder */}
          <div className="lg:col-span-5 flex">
            <EditorialFrame
              aspect="3/4"
              motif="hero"
              label="Botsuana Studio Beauty Room"
              sublabel="Editorial · Retrato y Estilismo"
              className="w-full lg:h-full"
            />
          </div>
        </div>

        {/* Full-Width 4-Column Studio Strip */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#F6F1E4]/12">
          {STUDIO_HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.label}
              className={`py-6 sm:py-7 ${
                idx > 0 ? 'border-t sm:border-t-0 lg:border-l border-[#F6F1E4]/12' : ''
              } ${idx % 2 === 1 ? 'sm:border-l sm:pl-6 lg:pl-7' : ''} ${
                idx > 0 ? 'lg:pl-7' : ''
              } pr-4`}
            >
              <p className="font-editorial text-2xl sm:text-3xl text-[#C9A227] tabular-nums">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#F6F1E4]">
                {item.label}
              </p>
              <p className="mt-0.5 text-xs text-[#F6F1E4]/60">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
