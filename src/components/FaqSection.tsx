import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/studioData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#141414] text-[#F6F1E4] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column Intro */}
          <div className="lg:col-span-4">
            <p className="text-xs tracking-[0.18em] uppercase text-[#C9A227] font-medium mb-4">
              Preguntas Frecuentes
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl font-normal tracking-tight text-[#F6F1E4] leading-[1.1]"
              style={{ textWrap: 'balance' }}
            >
              Claridad antes de tu visita al studio.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#F6F1E4]/72 leading-relaxed">
              Resolvemos las dudas más habituales sobre durabilidad, tiempos de sesión, cotizaciones personalizadas, productos recomendados y métodos de pago.
            </p>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-8 border-t border-[#F6F1E4]/14">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="border-b border-[#F6F1E4]/14">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 sm:py-6 flex items-center justify-between gap-6 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                  >
                    <span className="font-editorial text-xl sm:text-2xl font-normal text-[#F6F1E4] group-hover:text-[#C9A227] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center border border-[#F6F1E4]/15 text-[#C9A227] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      className="pb-6 pr-8 text-sm sm:text-base text-[#F6F1E4]/78 leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
