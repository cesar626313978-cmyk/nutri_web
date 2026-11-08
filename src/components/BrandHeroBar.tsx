import React from 'react';
import { ShieldCheck, MapPin, Globe } from 'lucide-react';

export const BrandHeroBar: React.FC = () => {
  return (
    <section
      aria-label="Identidad corporativa de la Asociación NutriDiversa"
      className="bg-gradient-to-b from-white to-[#F9FBF9] border-b border-[#D1E7DD] py-3 shadow-2xs transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center gap-2">
        {/* Institutional Accreditation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-neutral-600">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-950 rounded-full border border-emerald-300 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Registro Nacional de Asociaciones Nº 632919 · Ministerio del Interior</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-neutral-600 bg-white px-2.5 py-1 rounded-full border border-neutral-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Sede Social en Alicante · Ámbito Estatal</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-900 bg-white px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
            <Globe className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>www.nutridiversa.org</span>
          </span>
        </div>
      </div>
    </section>
  );
};
