import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { useCMS } from '../context/CMSContext';

interface NutriDiversaLogoProps {
  variant?: 'horizontal' | 'stacked' | 'symbol-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  showSubtitle?: boolean;
  lightText?: boolean;
}

export const NutriDiversaLogo: React.FC<NutriDiversaLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showSubtitle = true,
  lightText = false,
}) => {
  const { highContrast } = useAccessibility();
  const cms = useCMS();
  const siteConfig = cms?.siteConfig;

  // Custom logo from CMS (User can upload or link the official PNG/SVG in the CMS admin panel)
  if (siteConfig?.logoType === 'custom_url' && (siteConfig?.logoUrl || siteConfig?.logoUrlStacked)) {
    const activeUrl = (variant === 'stacked' && siteConfig.logoUrlStacked)
      ? siteConfig.logoUrlStacked
      : (siteConfig.logoUrl || siteConfig.logoUrlStacked || '');

    const imgHeight = {
      sm: 'h-8 sm:h-9',
      md: variant === 'stacked' ? 'h-12 sm:h-14' : 'h-10 sm:h-12',
      lg: variant === 'stacked' ? 'h-16 sm:h-20' : 'h-12 sm:h-14',
      xl: variant === 'stacked' ? 'h-24 sm:h-28' : 'h-16 sm:h-20',
      '2xl': variant === 'stacked' ? 'h-28 sm:h-32' : 'h-20 sm:h-24',
      '3xl': variant === 'stacked' ? 'h-36 sm:h-44' : 'h-24 sm:h-28',
    }[size];

    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={activeUrl}
          alt="Logotipo Oficial NutriDiversa"
          className={`${imgHeight} max-w-full w-auto object-contain drop-shadow-xs transition-transform`}
        />
      </div>
    );
  }

  // Official Brand Color Palette (uses CMS dynamic colors unless highContrast is active)
  const greenForest = highContrast ? '#FFFF00' : (lightText ? '#FFFFFF' : (siteConfig?.primaryColor || '#165B2E'));
  const greenMedium = highContrast ? '#FFFF99' : (lightText ? '#34D399' : '#237A38');
  const orangeWarm = highContrast ? '#FFFFFF' : (siteConfig?.secondaryColor || '#EB5A18');
  const textDark = highContrast ? '#FFFFFF' : (lightText ? '#FFFFFF' : (siteConfig?.primaryColor || '#165B2E'));
  const textSubtitle = highContrast ? '#FFFFE0' : (lightText ? '#A7F3D0' : (siteConfig?.primaryColor || '#165B2E'));
  const ruleColor = highContrast ? '#FFFF00' : (lightText ? '#34D399' : (siteConfig?.primaryColor || '#165B2E'));

  const titleFirst = siteConfig?.logoTitleFirst || 'Nutri';
  const titleSecond = siteConfig?.logoTitleSecond || 'Diversa';
  const subtitle = siteConfig?.logoSubtitle || 'ASOCIACIÓN DE NUTRICIÓN EN LA DISCAPACIDAD';

  // Dimension scaling configuration
  const dimensions = {
    sm: { symbolSize: 34, textScale: 'text-lg', subScale: 'text-[9.5px]', ruleW: 'w-4' },
    md: { symbolSize: 46, textScale: 'text-2xl', subScale: 'text-[11px]', ruleW: 'w-6' },
    lg: { symbolSize: 64, textScale: 'text-3xl', subScale: 'text-xs', ruleW: 'w-8' },
    xl: { symbolSize: 96, textScale: 'text-4xl sm:text-5xl', subScale: 'text-xs sm:text-sm', ruleW: 'w-10 sm:w-14' },
    '2xl': { symbolSize: 118, textScale: 'text-5xl sm:text-6xl', subScale: 'text-xs sm:text-base', ruleW: 'w-12 sm:w-20' },
    '3xl': { symbolSize: 140, textScale: 'text-6xl sm:text-7xl', subScale: 'text-sm sm:text-lg', ruleW: 'w-14 sm:w-24' }
  }[size];

  // Official NutriDiversa Emblem (ND + Joyful Sprouting Figure + Caring Palm)
  const OfficialSymbol = ({ sizeInPx }: { sizeInPx: number }) => (
    <svg
      width={sizeInPx}
      height={sizeInPx}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-colors"
      aria-hidden="true"
    >
      {/* 1. Caring Palm / Hand Foundation (Bottom of Emblem) */}
      <path
        d="M 52 148 
           C 68 140 86 138 104 140 
           C 122 142 138 134 148 122 
           C 146 135 134 150 114 154 
           C 94 158 78 168 64 176 
           C 68 166 70 156 52 148 Z"
        fill={greenForest}
      />
      <path
        d="M 98 146 
           C 116 142 134 136 152 118 
           C 140 131 122 142 102 149 Z"
        fill={greenMedium}
      />

      {/* 2. Serif Letter 'N' in Forest Green */}
      <path
        d="M 40 48 
           C 36 48 32 46 30 44 
           L 30 52 
           L 38 52 
           L 38 144 
           C 32 146 30 148 28 150 
           L 28 156 
           L 54 156 
           L 54 150 
           C 50 148 48 146 44 144 
           L 44 68 
           L 96 156 
           L 110 156 
           L 110 52 
           L 100 52 
           C 100 58 98 64 94 68 
           L 94 134 
           L 46 54 
           L 40 48 Z"
        fill={greenForest}
      />

      {/* 3. Letter 'D' Arch in Warm Vibrant Orange */}
      <path
        d="M 76 28 
           C 124 28 174 62 174 104 
           C 174 142 142 174 96 176 
           C 118 166 150 142 150 104 
           C 150 68 116 40 76 38 
           L 76 28 Z"
        fill={orangeWarm}
      />

      {/* 4. Orange Circular Head */}
      <circle cx="120" cy="74" r="10.5" fill={orangeWarm} />

      {/* 5. Joyous Human Sprout (Body & Raised Arms) */}
      <path
        d="M 120 88 
           C 113 88 106 94 102 102 
           C 108 99 114 100 118 104 
           C 112 116 100 128 90 136 
           C 104 128 120 110 126 96 
           C 132 108 138 114 146 116 
           C 140 108 134 100 132 94 
           C 129 89 125 88 120 88 Z"
        fill={greenMedium}
      />

      {/* 6. Sprouting Nutrition Leaf */}
      <path
        d="M 130 72 
           C 130 72 150 46 156 42 
           C 160 56 148 76 136 82 
           C 131 80 130 76 130 72 Z"
        fill={greenForest}
      />
      <path
        d="M 132 72 Q 142 60 152 48"
        stroke={highContrast ? '#000000' : '#FFFFFF'}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  // Variant 1: Symbol Only
  if (variant === 'symbol-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <OfficialSymbol sizeInPx={dimensions.symbolSize} />
      </div>
    );
  }

  // Variant 2: Stacked / Vertical (Corresponds strictly to logo_def_2)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <OfficialSymbol sizeInPx={dimensions.symbolSize * 1.45} />
        <div className="mt-3">
          <div
            className={`font-serif font-extrabold tracking-tight leading-none ${dimensions.textScale}`}
            style={{ fontFamily: siteConfig?.headingFont || "'Playfair Display', Georgia, serif" }}
          >
            <span style={{ color: greenForest }}>{titleFirst}</span>
            <span style={{ color: orangeWarm }}>{titleSecond}</span>
          </div>
          {showSubtitle && (
            <div className="mt-2.5 flex items-center justify-center gap-2">
              <span
                className="w-5 sm:w-8 h-[1.5px] rounded-full inline-block shrink-0"
                style={{ backgroundColor: ruleColor }}
                aria-hidden="true"
              />
              <span
                className={`font-sans tracking-[0.14em] uppercase font-bold whitespace-nowrap ${dimensions.subScale}`}
                style={{ color: textSubtitle }}
              >
                {subtitle}
              </span>
              <span
                className="w-5 sm:w-8 h-[1.5px] rounded-full inline-block shrink-0"
                style={{ backgroundColor: ruleColor }}
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Variant 3: Horizontal (Corresponds strictly to logo_def_1)
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <OfficialSymbol sizeInPx={dimensions.symbolSize} />
      <div className="flex flex-col justify-center leading-none">
        <div
          className={`font-serif font-extrabold tracking-tight ${dimensions.textScale}`}
          style={{ fontFamily: siteConfig?.headingFont || "'Playfair Display', Georgia, serif" }}
        >
          <span style={{ color: greenForest }}>{titleFirst}</span>
          <span style={{ color: orangeWarm }}>{titleSecond}</span>
        </div>
        {showSubtitle && (
          <div className="mt-1.5 flex items-center gap-2">
            <span
              className={`h-[1.5px] ${dimensions.ruleW} rounded-full inline-block shrink-0`}
              style={{ backgroundColor: ruleColor }}
              aria-hidden="true"
            />
            <span
              className={`font-sans tracking-[0.12em] uppercase font-bold whitespace-nowrap ${dimensions.subScale}`}
              style={{ color: textSubtitle }}
            >
              {subtitle}
            </span>
            <span
              className={`h-[1.5px] ${dimensions.ruleW} rounded-full inline-block shrink-0`}
              style={{ backgroundColor: ruleColor }}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </div>
  );
};
