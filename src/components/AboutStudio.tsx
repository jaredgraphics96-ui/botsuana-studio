import React from 'react';
import { EditorialFrame } from './EditorialFrame';
import { STUDIO_INFO } from '../data/studioData';

const PILLARS = [
  {
    index: '01.',
    title: 'Diagnóstico y asesoría previa',
    description:
      'Cada procedimiento capilar, diseño de color o servicio de micropigmentación comienza evaluando tu estructura, tono y estado actual para recomendar la técnica exacta.',
  },
  {
    index: '02.',
    title: 'Fórmulas limpias y alta técnica',
    description:
      'Trabajamos con alaciados progresivos libres de formol, cosmética profesional de gama alta y técnicas rotativas de precisión para proteger tu piel y fibra capilar.',
  },
  {
    index: '03.',
    title: 'Continuidad en casa',
    description:
      'Complementamos tu visita con mascarillas reestructurantes, línea de cuidado facial y capilar bajo pedido y suplementación multivitamínica.',
  },
];

export const AboutStudio: React.FC = () => {
  return (
    <section id="el-studio" className="bg-[#F6F1E4] text-[#141414] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Editorial Visual Placeholder */}
          <div className="lg:col-span-5">
            <EditorialFrame
              aspect="4/3"
              motif="studio"
              variant="light"
              label="Atmósfera de Cabina y Salón"
              sublabel="Col. Vasco de Quiroga · No. 272"
            />
            <div className="mt-4 flex items-center justify-between text-xs text-[#141414]/65">
              <span>{STUDIO_INFO.address}</span>
              <span aria-hidden="true">·</span>
              <span>Atención con previa cita</span>
            </div>
          </div>

          {/* Editorial Narrative & Numbered Pillars */}
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.18em] uppercase text-[#8A6D14] font-semibold mb-4">
              El Studio · Filosofía
            </p>
            <h2
              className="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-[#141414] leading-[1.08] max-w-2xl"
              style={{ textWrap: 'balance' }}
            >
              Un espacio pensado para realzar tu identidad con calma y detalle.
            </h2>
            <p className="mt-6 text-base sm:text-[17px] text-[#141414]/80 leading-relaxed max-w-2xl">
              {STUDIO_INFO.fullName} nace como un estudio integral de belleza, estilismo y bienestar personal. Creemos en los cambios de imagen conscientes: desde un corte o diseño de color hasta la definición permanente de cejas, ojos y labios, cuidando siempre la naturalidad y la durabilidad de cada trabajo.
            </p>

            {/* 3 Numbered Editorial Pillars */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {PILLARS.map((pillar) => (
                <div key={pillar.index} className="pt-5 border-t border-[#141414]/15">
                  <p className="font-editorial text-xl text-[#8A6D14] font-semibold tabular-nums">
                    {pillar.index}
                  </p>
                  <h3 className="mt-2 font-editorial text-xl font-medium text-[#141414]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#141414]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
