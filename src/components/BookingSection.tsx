import React, { useEffect, useState } from 'react';
import {
  Check,
  Copy,
  MapPin,
  MessageCircle,
  Phone,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { STUDIO_INFO, STUDIO_SERVICES } from '../data/studioData';

interface BookingSectionProps {
  selectedService: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(selectedService || 'Alaciados Permanentes');
  const [preferredSchedule, setPreferredSchedule] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      setSubmittedMessage(null);
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.replace(/\D/g, '');

    if (cleanName.length < 2) {
      setError('Por favor ingresa tu nombre completo para preparar tu solicitud.');
      return;
    }

    if (cleanPhone.length < 10) {
      setError('Ingresa un número de teléfono o WhatsApp válido de 10 dígitos.');
      return;
    }

    setError('');

    const parts = [
      `Hola Botsuana Studio, me gustaría agendar / cotizar:`,
      `• Nombre: ${cleanName}`,
      `• Teléfono: ${phone.trim()}`,
      `• Servicio de interés: ${service}`,
    ];

    if (preferredSchedule.trim()) {
      parts.push(`• Horario preferido: ${preferredSchedule.trim()}`);
    }
    if (notes.trim()) {
      parts.push(`• Detalles / largo / técnica: ${notes.trim()}`);
    }

    setSubmittedMessage(parts.join('\n'));
  };

  const handleCopy = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const whatsappHref = submittedMessage
    ? `https://wa.me/${STUDIO_INFO.whatsappDigits}?text=${encodeURIComponent(
        submittedMessage
      )}`
    : `https://wa.me/${STUDIO_INFO.whatsappDigits}?text=${encodeURIComponent(
        `Hola ${STUDIO_INFO.fullName}, me gustaría consultar disponibilidad y cotizar un servicio.`
      )}`;

  return (
    <section
      id="contacto"
      className="bg-[#2B2B2B] text-[#F6F1E4] py-20 sm:py-28 border-t border-[#F6F1E4]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Studio Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#C9A227] font-medium mb-4">
                Reserva y Cotizaciones
              </p>
              <h2
                className="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-[#F6F1E4] leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                Agenda tu cita o solicita tu cotización.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#F6F1E4]/78 leading-relaxed">
                Atendemos consultas de disponibilidad, duración estimada de sesión y cotizaciones personalizadas para color, uñas, pestañas o depilación directamente por WhatsApp y teléfono.
              </p>

              {/* Contact Details List */}
              <div className="mt-10 space-y-6 border-t border-[#F6F1E4]/12 pt-8">
                <div className="flex items-start gap-4">
                  <MessageCircle
                    aria-hidden="true"
                    className="w-5 h-5 text-[#C9A227] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#F6F1E4]/55">
                      WhatsApp Directo (Citas y Cotizaciones)
                    </p>
                    <a
                      href={`https://wa.me/${STUDIO_INFO.whatsappDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-lg font-medium text-[#F6F1E4] hover:text-[#C9A227] transition-colors tabular-nums"
                    >
                      {STUDIO_INFO.whatsappDisplay}
                      <ArrowUpRight className="w-4 h-4 text-[#C9A227]" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    aria-hidden="true"
                    className="w-5 h-5 text-[#C9A227] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#F6F1E4]/55">
                      Teléfono Celular
                    </p>
                    <a
                      href={`tel:${STUDIO_INFO.phoneDigits}`}
                      className="mt-1 inline-block text-lg font-medium text-[#F6F1E4] hover:text-[#C9A227] transition-colors tabular-nums"
                    >
                      {STUDIO_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    aria-hidden="true"
                    className="w-5 h-5 text-[#C9A227] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#F6F1E4]/55">
                      Ubicación del Studio
                    </p>
                    <p className="mt-1 text-base text-[#F6F1E4]/90 leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#F6F1E4]/12 text-xs text-[#F6F1E4]/65 leading-relaxed">
              Aceptamos pagos por transferencia bancaria. Al confirmar tu cita o solicitar tu cotización vía WhatsApp te compartiremos los datos bancarios correspondientes.
            </div>
          </div>

          {/* Right Column: Interactive Booking & Quote Builder */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#F6F1E4]/14 p-6 sm:p-10">
              {submittedMessage ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#C9A227]">
                    <span className="w-9 h-9 flex items-center justify-center border border-[#C9A227]/50">
                      <Check className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] font-semibold">
                        Solicitud lista para enviar
                      </p>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#F6F1E4]">
                        Confirma tu cita vía WhatsApp
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#F6F1E4]/75 leading-relaxed">
                    Hemos preparado tu mensaje con los detalles seleccionados. Haz clic abajo para enviarlo directamente al WhatsApp oficial de {STUDIO_INFO.fullName} ({STUDIO_INFO.whatsappDisplay}).
                  </p>

                  <pre className="bg-[#2B2B2B] border border-[#F6F1E4]/12 p-4 text-xs sm:text-sm text-[#F6F1E4]/90 whitespace-pre-wrap font-sans leading-relaxed">
                    {submittedMessage}
                  </pre>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] bg-[#C9A227] text-[#141414] text-sm font-semibold hover:bg-[#D8B442] transition-colors whitespace-nowrap"
                    >
                      Enviar por WhatsApp
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[46px] border border-[#F6F1E4]/20 text-sm font-medium text-[#F6F1E4] hover:border-[#C9A227] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#C9A227]" />
                          Mensaje copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copiar resumen
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmittedMessage(null)}
                      className="text-xs text-[#F6F1E4]/65 hover:text-[#F6F1E4] underline underline-offset-4 ml-auto cursor-pointer"
                    >
                      Editar solicitud
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#F6F1E4]">
                      Solicitud de disponibilidad y cotización
                    </h3>
                    <p className="mt-1.5 text-sm text-[#F6F1E4]/68">
                      Completa tus datos para generar tu solicitud personalizada de cita.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 p-3.5 bg-[#2B2B2B] border border-[#C9A227] text-sm text-[#F6F1E4]"
                    >
                      <AlertCircle className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-xs uppercase tracking-[0.12em] text-[#F6F1E4]/70 mb-2"
                      >
                        Nombre completo
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full bg-[#2B2B2B] border border-[#F6F1E4]/16 px-4 py-3 text-sm text-[#F6F1E4] placeholder:text-[#F6F1E4]/40 focus:outline-none focus:border-[#C9A227] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-xs uppercase tracking-[0.12em] text-[#F6F1E4]/70 mb-2"
                      >
                        Teléfono o WhatsApp (10 dígitos)
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. 443 000 0000"
                        className="w-full bg-[#2B2B2B] border border-[#F6F1E4]/16 px-4 py-3 text-sm text-[#F6F1E4] placeholder:text-[#F6F1E4]/40 focus:outline-none focus:border-[#C9A227] transition-colors tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="booking-service"
                        className="block text-xs uppercase tracking-[0.12em] text-[#F6F1E4]/70 mb-2"
                      >
                        Servicio o producto
                      </label>
                      <select
                        id="booking-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#2B2B2B] border border-[#F6F1E4]/16 px-4 py-3 text-sm text-[#F6F1E4] focus:outline-none focus:border-[#C9A227] transition-colors"
                      >
                        {STUDIO_SERVICES.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                        <option value="Cotización personalizada / Varios servicios">
                          Cotización personalizada / Varios servicios
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="booking-schedule"
                        className="block text-xs uppercase tracking-[0.12em] text-[#F6F1E4]/70 mb-2"
                      >
                        Día y horario sugerido
                      </label>
                      <input
                        id="booking-schedule"
                        type="text"
                        value={preferredSchedule}
                        onChange={(e) => setPreferredSchedule(e.target.value)}
                        placeholder="Ej. Viernes por la tarde"
                        className="w-full bg-[#2B2B2B] border border-[#F6F1E4]/16 px-4 py-3 text-sm text-[#F6F1E4] placeholder:text-[#F6F1E4]/40 focus:outline-none focus:border-[#C9A227] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-notes"
                      className="block text-xs uppercase tracking-[0.12em] text-[#F6F1E4]/70 mb-2"
                    >
                      Detalles para tu cita o cotización (opcional)
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Indícanos largo aproximado del cabello, técnica deseada, zona o producto bajo pedido..."
                      className="w-full bg-[#2B2B2B] border border-[#F6F1E4]/16 px-4 py-3 text-sm text-[#F6F1E4] placeholder:text-[#F6F1E4]/40 focus:outline-none focus:border-[#C9A227] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[46px] bg-[#C9A227] text-[#141414] text-sm font-semibold tracking-wide hover:bg-[#D8B442] transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6F1E4]"
                    >
                      Preparar cita por WhatsApp
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`tel:${STUDIO_INFO.phoneDigits}`}
                      className="text-xs text-[#F6F1E4]/70 hover:text-[#C9A227] transition-colors whitespace-nowrap"
                    >
                      O llama al {STUDIO_INFO.phoneDisplay}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
