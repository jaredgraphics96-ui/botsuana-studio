import React, { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { EditorialFrame } from './EditorialFrame';
import {
  GALLERY_ITEMS,
  STUDIO_INFO,
  STUDIO_SERVICES,
  type GalleryItem,
} from '../data/studioData';

interface GallerySectionProps {
  onSelectService: (serviceName: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectService,
}) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedItem]);

  return (
    <section
      id="galeria"
      className="bg-[#2B2B2B] text-[#F6F1E4] py-20 sm:py-28 border-t border-b border-[#F6F1E4]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F6F1E4]/12">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[#C9A227] font-medium mb-4">
              Galería · Lookbook Editorial
            </p>
            <h2
              className="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-[#F6F1E4] leading-[1.08] max-w-xl"
              style={{ textWrap: 'balance' }}
            >
              Estética visual, texturas y resultados reales.
            </h2>
          </div>

          <div className="text-sm text-[#F6F1E4]/75 max-w-md">
            <p>
              Espacios curados para destacar cada especialidad del estudio. Explora nuestros trabajos y transformaciones reales en canales oficiales:
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#C9A227]">
              <span>Instagram: {STUDIO_INFO.socials.instagram}</span>
              <span aria-hidden="true">·</span>
              <span>Facebook: {STUDIO_INFO.socials.facebook}</span>
              <span aria-hidden="true">·</span>
              <span>TikTok: {STUDIO_INFO.socials.tiktok}</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className={`${item.spanClass} group text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A227]`}
            >
              <div className="overflow-hidden">
                <EditorialFrame
                  aspect={item.aspect}
                  motif={item.motif}
                  label={item.title}
                  sublabel={item.category}
                  className="group-hover:scale-[1.015] group-hover:border-[#C9A227]/60"
                />
              </div>
              <div className="mt-3.5 flex items-start justify-between gap-4">
                <p className="text-sm text-[#F6F1E4]/78 leading-relaxed">
                  {item.caption}
                </p>
                <span className="text-xs text-[#C9A227] inline-flex items-center gap-1 whitespace-nowrap shrink-0 mt-0.5 group-hover:underline">
                  Ver detalle
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Detail Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          className="fixed inset-0 z-50 bg-[#141414]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#141414] border border-[#F6F1E4]/20 max-w-2xl w-full p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Cerrar detalle"
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-[#F6F1E4]/15 text-[#F6F1E4] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="text-xs tracking-[0.16em] uppercase text-[#C9A227]">
              {selectedItem.category}
            </p>
            <h3
              id="gallery-modal-title"
              className="mt-2 font-editorial text-3xl text-[#F6F1E4] pr-12"
            >
              {selectedItem.title}
            </h3>

            <div className="mt-6">
              <EditorialFrame
                aspect="4/3"
                motif={selectedItem.motif}
                label={selectedItem.title}
                sublabel={selectedItem.technique}
              />
            </div>

            <p className="mt-5 text-sm sm:text-base text-[#F6F1E4]/80 leading-relaxed">
              {selectedItem.caption}
            </p>
            <p className="mt-2 text-xs text-[#F6F1E4]/60">
              Técnica destacada: {selectedItem.technique}
            </p>

            <div className="mt-7 pt-5 border-t border-[#F6F1E4]/12 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#F6F1E4]/65">
                Portafolio completo en IG / FB: {STUDIO_INFO.socials.instagram} · TikTok: {STUDIO_INFO.socials.tiktok}
              </span>
              <button
                type="button"
                onClick={() => {
                  const matchedService = STUDIO_SERVICES.find(
                    (s) => s.id === selectedItem.serviceId
                  );
                  const targetName = matchedService
                    ? matchedService.name
                    : selectedItem.title;
                  setSelectedItem(null);
                  onSelectService(targetName);
                }}
                className="px-5 py-2.5 min-h-[42px] bg-[#C9A227] text-[#141414] text-sm font-semibold hover:bg-[#D8B442] transition-colors cursor-pointer"
              >
                Solicitar este servicio
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
