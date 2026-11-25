import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  STUDIO_SERVICES,
  type StudioService,
} from '../data/studioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

type CategoryFilter = (typeof SERVICE_CATEGORIES)[number]['id'];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return STUDIO_SERVICES.filter((service) => {
      const matchesCategory =
        activeCategory === 'todos' || service.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.categoryLabel.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  const handleAction = (service: StudioService) => {
    onSelectService(service.name);
  };

  return (
    <section id="servicios" className="bg-[#141414] text-[#F6F1E4] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#F6F1E4]/12">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[#C9A227] font-medium mb-4">
              Catálogo · Servicios y Productos
            </p>
            <h2
              className="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-[#F6F1E4] leading-[1.08] max-w-2xl"
              style={{ textWrap: 'balance' }}
            >
              Carta de tratamientos, estilismo y cuidado personal.
            </h2>
          </div>

          {/* Search input */}
          <div className="w-full lg:w-80">
            <label htmlFor="service-search" className="sr-only">
              Buscar servicio o producto
            </label>
            <div className="relative flex items-center">
              <Search
                aria-hidden="true"
                className="w-4 h-4 text-[#F6F1E4]/50 absolute left-3.5 pointer-events-none"
              />
              <input
                id="service-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar servicio o producto..."
                className="w-full bg-[#2B2B2B] border border-[#F6F1E4]/15 text-sm text-[#F6F1E4] placeholder:text-[#F6F1E4]/45 pl-10 pr-9 py-2.5 min-h-[42px] focus:outline-none focus:border-[#C9A227] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-2.5 p-1 text-[#F6F1E4]/60 hover:text-[#F6F1E4] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Category Tabs */}
        <div
          role="tablist"
          aria-label="Filtrar por categoría de servicio"
          className="mt-8 flex items-center gap-2 overflow-x-auto pb-2"
        >
          {SERVICE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 min-h-[40px] text-xs sm:text-sm font-medium border transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227] ${
                  isActive
                    ? 'bg-[#C9A227] text-[#141414] border-[#C9A227] font-semibold'
                    : 'bg-[#2B2B2B]/60 text-[#F6F1E4]/80 border-[#F6F1E4]/12 hover:border-[#C9A227]/60 hover:text-[#F6F1E4]'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="mt-12 p-10 bg-[#2B2B2B] border border-[#F6F1E4]/12 text-center">
            <p className="font-editorial text-2xl text-[#F6F1E4]">
              No encontramos coincidencias para &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#F6F1E4]/70">
              Intenta con otro término o restablece los filtros para explorar todo el catálogo.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
              }}
              className="mt-6 px-5 py-2.5 bg-[#C9A227] text-[#141414] text-sm font-semibold hover:bg-[#D8B442] transition-colors cursor-pointer"
            >
              Ver todos los servicios
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group bg-[#2B2B2B] border border-[#F6F1E4]/10 hover:border-[#C9A227]/55 p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200"
              >
                <div>
                  {service.image && (
                    <div className="mb-5 aspect-[4/3] w-full overflow-hidden border border-[#F6F1E4]/10 bg-[#141414]">
                      <img
                        src={service.image}
                        alt={service.imageAlt || service.name}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                          service.imageObjectPosition || 'object-center'
                        }`}
                      />
                    </div>
                  )}

                  {/* Clean unboxed metadata line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#F6F1E4]/60">
                    <span className="uppercase tracking-[0.12em] text-[#C9A227]/90 font-medium">
                      {service.categoryLabel}
                    </span>
                    {service.durability && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{service.durability}</span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-3 font-editorial text-2xl font-medium text-[#F6F1E4] leading-snug">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#F6F1E4]/75 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#F6F1E4]/10 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[#F6F1E4]/50">
                      {service.isVariablePrice ? 'Tarifa referencial' : 'Precio'}
                    </p>
                    <p className="mt-0.5 text-sm sm:text-base font-semibold text-[#C9A227] tabular-nums">
                      {service.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAction(service)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] border border-[#F6F1E4]/20 text-xs font-medium text-[#F6F1E4] hover:bg-[#C9A227] hover:text-[#141414] hover:border-[#C9A227] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                  >
                    {service.isVariablePrice ? 'Cotizar' : 'Agendar'}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Footnote on transparent pricing and bank transfers */}
        <div className="mt-10 pt-6 border-t border-[#F6F1E4]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#F6F1E4]/65">
          <p>
            Los precios están expresados en pesos mexicanos (MXN). Para servicios variables (color, uñas, pestañas 1x1 o depilación) realizamos cotización personalizada.
          </p>
          <p className="text-[#C9A227] shrink-0">
            Aceptamos pagos por transferencia bancaria
          </p>
        </div>
      </div>
    </section>
  );
};
