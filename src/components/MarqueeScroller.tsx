import React from 'react';
import {
  Stethoscope,
  HeartHandshake,
  Glasses,
  Pill,
  Clock,
  Sparkles,
  Smile,
  ShieldCheck,
  FileCheck2
} from 'lucide-react';

interface MarqueeBenefit {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

const BENEFITS: MarqueeBenefit[] = [
  {
    title: 'Consultas Médicas',
    category: 'Carencia Inmediata',
    icon: Stethoscope,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Servicio de Sepelio',
    category: 'Guardia 24 Hs los 365 días',
    icon: HeartHandshake,
    color: 'text-slate-700',
    bgColor: 'bg-slate-100',
  },
  {
    title: '10% Reintegro Farmacia',
    category: 'Tope $10.000 mensual',
    icon: Pill,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    title: 'Óptica & Lentes',
    category: 'Valores Sociales',
    icon: Glasses,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Odontología General',
    category: 'Red de Profesionales',
    icon: Smile,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    title: 'Laboratorio & Imágenes',
    category: 'Diagnóstico Ágil',
    icon: FileCheck2,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    title: 'Alianza AES Norte',
    category: 'Economía Social',
    icon: ShieldCheck,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
  },
  {
    title: 'Turismo & Convenios',
    category: 'Descuentos Exclusivos',
    icon: Sparkles,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
];

export const MarqueeScroller: React.FC<{ onSelectBenefit?: (title: string) => void }> = ({
  onSelectBenefit,
}) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-6 px-4 overflow-hidden marquee-mask py-2 select-none">
      <div className="animate-marquee flex items-center gap-3 sm:gap-4">
        {/* Render list duplicated for seamless smooth infinite loop */}
        {[...BENEFITS, ...BENEFITS].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.title}-${index}`}
              onClick={() => onSelectBenefit?.(item.title)}
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all cursor-pointer shrink-0"
            >
              <div className={`w-9 h-9 rounded-xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-left pr-1">
                <span className="block text-xs font-bold text-[#0a1b33] group-hover:text-blue-900 transition-colors whitespace-nowrap">
                  {item.title}
                </span>
                <span className="block text-[11px] text-slate-500 whitespace-nowrap mt-0.5">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
