import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 bg-[#141414]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-[#F6F1E4]/20 max-w-xl w-full p-6 sm:p-8 relative text-[#F6F1E4]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar aviso de privacidad"
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-[#F6F1E4]/15 text-[#F6F1E4] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-xs tracking-[0.16em] uppercase text-[#C9A227]">
          Información Legal
        </p>
        <h3
          id="privacy-modal-title"
          className="mt-2 font-editorial text-3xl text-[#F6F1E4]"
        >
          Aviso de Privacidad
        </h3>

        <div className="mt-5 space-y-4 text-sm text-[#F6F1E4]/78 leading-relaxed">
          <p>
            <strong className="text-[#F6F1E4] font-medium">{STUDIO_INFO.fullName}</strong>, con domicilio en {STUDIO_INFO.address}, es responsable del tratamiento confidencial de los datos personales que nos proporciones para agendar citas, elaborar cotizaciones y dar seguimiento a servicios o pedidos.
          </p>
          <p>
            La información ingresada en el formulario de solicitud únicamente se utiliza para estructurar tu mensaje de contacto directo hacia nuestro canal oficial de WhatsApp ({STUDIO_INFO.whatsappDisplay}). Este sitio web no almacena bases de datos personales en servidores externos ni comparte tu información con terceros.
          </p>
          <p>
            Para cualquier aclaración sobre tus datos, citas o pagos por transferencia bancaria, puedes comunicarte directamente al teléfono {STUDIO_INFO.phoneDisplay} o vía WhatsApp al {STUDIO_INFO.whatsappDisplay}.
          </p>
        </div>

        <div className="mt-7 pt-5 border-t border-[#F6F1E4]/12 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 min-h-[40px] bg-[#C9A227] text-[#141414] text-sm font-semibold hover:bg-[#D8B442] transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
