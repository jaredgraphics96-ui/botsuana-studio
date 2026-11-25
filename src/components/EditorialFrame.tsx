import React from 'react';

export interface EditorialFrameProps {
  aspect?: '3/4' | '4/3' | '16/9' | '1/1';
  motif: 'hero' | 'studio' | 'hair' | 'color' | 'brows' | 'lashes' | 'makeup' | 'nails';
  label: string;
  sublabel?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

const ASPECT_CLASSES: Record<NonNullable<EditorialFrameProps['aspect']>, string> = {
  '3/4': 'aspect-[3/4]',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
};

function renderEditorialMotif(motif: EditorialFrameProps['motif'], isLight: boolean) {
  const strokeColor = isLight ? '#141414' : '#F6F1E4';
  const accentColor = '#C9A227';

  switch (motif) {
    case 'hero':
      return (
        <svg viewBox="0 0 360 460" fill="none" className="w-full h-full opacity-80" aria-hidden="true">
          <circle cx="180" cy="210" r="128" stroke={accentColor} strokeWidth="0.75" strokeOpacity="0.55" />
          <circle cx="180" cy="210" r="96" stroke={strokeColor} strokeWidth="0.6" strokeOpacity="0.22" />
          <path
            d="M180 54 C210 130, 260 175, 250 250 C242 315, 190 365, 180 410 C170 365, 118 315, 110 250 C100 175, 150 130, 180 54 Z"
            stroke={strokeColor}
            strokeWidth="0.85"
            strokeOpacity="0.45"
          />
          <path
            d="M142 150 C168 185, 192 225, 178 298"
            stroke={accentColor}
            strokeWidth="1"
            strokeOpacity="0.8"
          />
          <line x1="60" y1="210" x2="300" y2="210" stroke={strokeColor} strokeWidth="0.5" strokeOpacity="0.16" />
          <line x1="180" y1="36" x2="180" y2="424" stroke={strokeColor} strokeWidth="0.5" strokeOpacity="0.16" />
        </svg>
      );
    case 'studio':
      return (
        <svg viewBox="0 0 400 300" fill="none" className="w-full h-full opacity-85" aria-hidden="true">
          <rect x="65" y="38" width="270" height="224" rx="135" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.35" />
          <rect x="85" y="54" width="230" height="192" rx="115" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.65" />
          <path d="M135 205 Q200 115 265 205" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.45" />
          <circle cx="200" cy="122" r="24" stroke={accentColor} strokeWidth="0.9" strokeOpacity="0.75" />
          <line x1="40" y1="226" x2="360" y2="226" stroke={strokeColor} strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
      );
    case 'color':
      return (
        <svg viewBox="0 0 320 400" fill="none" className="w-full h-full opacity-85" aria-hidden="true">
          <path d="M110 60 C165 135, 95 240, 155 340" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.45" />
          <path d="M150 55 C205 135, 135 245, 195 345" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.85" />
          <path d="M190 60 C245 140, 175 245, 230 340" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.35" />
          <circle cx="160" cy="200" r="88" stroke={accentColor} strokeWidth="0.6" strokeOpacity="0.4" />
        </svg>
      );
    case 'hair':
      return (
        <svg viewBox="0 0 400 300" fill="none" className="w-full h-full opacity-85" aria-hidden="true">
          <path d="M70 110 Q200 72 330 110" stroke={strokeColor} strokeWidth="0.9" strokeOpacity="0.45" />
          <path d="M70 140 Q200 102 330 140" stroke={accentColor} strokeWidth="1.1" strokeOpacity="0.85" />
          <path d="M70 170 Q200 132 330 170" stroke={strokeColor} strokeWidth="0.9" strokeOpacity="0.45" />
          <path d="M70 200 Q200 162 330 200" stroke={strokeColor} strokeWidth="0.6" strokeOpacity="0.25" />
        </svg>
      );
    case 'brows':
      return (
        <svg viewBox="0 0 400 300" fill="none" className="w-full h-full opacity-85" aria-hidden="true">
          <path d="M88 158 Q175 98 292 136" stroke={accentColor} strokeWidth="1.3" strokeOpacity="0.85" />
          <path d="M98 166 Q178 112 284 144" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.45" />
          <path d="M115 190 Q200 155 285 190 Q200 225 115 190 Z" stroke={strokeColor} strokeWidth="0.7" strokeOpacity="0.35" />
          <circle cx="200" cy="190" r="14" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.7" />
        </svg>
      );
    case 'lashes':
      return (
        <svg viewBox="0 0 320 400" fill="none" className="w-full h-full opacity-85" aria-hidden="true">
          <path d="M68 215 Q160 265 252 215" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.55" />
          <path d="M92 228 L76 172" stroke={accentColor} strokeWidth="0.9" strokeOpacity="0.8" />
          <path d="M124 238 L114 164" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <path d="M160 242 L160 158" stroke={accentColor} strokeWidth="1" strokeOpacity="0.85" />
          <path d="M196 238 L206 164" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.5" />
          <path d="M228 228 L244 172" stroke={accentColor} strokeWidth="0.9" strokeOpacity="0.8" />
          <circle cx="160" cy="200" r="102" stroke={strokeColor} strokeWidth="0.5" strokeOpacity="0.18" />
        </svg>
      );
    case 'makeup':
      return (
        <svg viewBox="0 0 400 300" fill="none" className="w-full h-full opacity-85" aria-hidden="true">
          <circle cx="165" cy="150" r="68" stroke={accentColor} strokeWidth="0.9" strokeOpacity="0.7" />
          <circle cx="235" cy="150" r="68" stroke={strokeColor} strokeWidth="0.7" strokeOpacity="0.35" />
          <path d="M150 205 Q200 228 250 205" stroke={accentColor} strokeWidth="1.1" strokeOpacity="0.8" />
          <line x1="200" y1="54" x2="200" y2="246" stroke={strokeColor} strokeWidth="0.5" strokeOpacity="0.18" />
        </svg>
      );
    case 'nails':
      return (
        <svg viewBox="0 0 360 360" fill="none" className="w-full h-full opacity-85" aria-hidden="true">
          <rect x="128" y="72" width="104" height="196" rx="52" stroke={accentColor} strokeWidth="0.95" strokeOpacity="0.75" />
          <rect x="148" y="96" width="64" height="148" rx="32" stroke={strokeColor} strokeWidth="0.7" strokeOpacity="0.4" />
          <path d="M148 164 Q180 144 212 164" stroke={accentColor} strokeWidth="0.9" strokeOpacity="0.8" />
          <circle cx="180" cy="170" r="126" stroke={strokeColor} strokeWidth="0.5" strokeOpacity="0.16" />
        </svg>
      );
  }
}

export const EditorialFrame: React.FC<EditorialFrameProps> = ({
  aspect = '3/4',
  motif,
  label,
  sublabel,
  variant = 'dark',
  className = '',
}) => {
  const isLight = variant === 'light';

  return (
    <div
      className={`relative overflow-hidden border transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        ASPECT_CLASSES[aspect]
      } ${
        isLight
          ? 'bg-[#EAE3D2] border-[#141414]/15 text-[#141414]'
          : 'bg-[#1D1D1D] border-[#F6F1E4]/14 text-[#F6F1E4]'
      } ${className}`}
    >
      {/* Subtle studio lighting gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLight
            ? 'radial-gradient(circle at 32% 24%, rgba(201,162,39,0.16), transparent 62%), linear-gradient(160deg, rgba(255,255,255,0.35) 0%, rgba(20,20,20,0.06) 100%)'
            : 'radial-gradient(circle at 30% 22%, rgba(201,162,39,0.15), transparent 58%), linear-gradient(165deg, rgba(43,43,43,0.72) 0%, rgba(20,20,20,0.96) 100%)',
        }}
      />

      {/* Editorial artwork composition */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8 sm:p-10">
        {renderEditorialMotif(motif, isLight)}
      </div>

      {/* Subtle architectural corner markers */}
      <span
        aria-hidden="true"
        className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#C9A227]/60"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#C9A227]/60"
      />

      {/* Measured contrast scrim + editorial photography space caption */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 px-5 py-4 flex items-end justify-between gap-4 ${
          isLight
            ? 'bg-gradient-to-t from-[#F6F1E4]/92 via-[#F6F1E4]/65 to-transparent'
            : 'bg-gradient-to-t from-[#141414]/92 via-[#141414]/60 to-transparent'
        }`}
      >
        <div className="min-w-0">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#C9A227] font-medium truncate">
            {sublabel || 'Espacio Editorial'}
          </p>
          <p className="font-editorial text-lg sm:text-xl leading-snug truncate">
            {label}
          </p>
        </div>
        <span className="text-[11px] tracking-[0.12em] uppercase opacity-60 shrink-0 tabular-nums">
          {aspect.replace('/', ':')}
        </span>
      </div>
    </div>
  );
};
