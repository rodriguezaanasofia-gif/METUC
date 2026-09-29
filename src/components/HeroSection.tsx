import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, HeartHandshake, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';
import { MetucLogo } from './MetucLogo';

interface HeroSectionProps {
  onOpenQuienesSomos: () => void;
  onOpenServicios: () => void;
  onOpenPlanes: () => void;
  onOpenContacto: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuienesSomos,
  onOpenServicios,
  onOpenPlanes,
  onOpenContacto,
}) => {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto rounded-3xl md:rounded-[36px] bg-white border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.04)] overflow-hidden min-h-[480px] md:min-h-[540px] flex flex-col justify-center">
      {/* Underlying video background layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-90"
        />
        {/* Soft, smooth gradient overlay for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 md:to-transparent pointer-events-none" />
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 py-12 md:py-16 flex flex-col items-start justify-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-900 text-xs font-semibold mb-5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Mutual de Salud & Sepelio • Tucumán</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] font-bold tracking-tight text-[#0a1b33]">
            Tu salud y tranquilidad en{' '}
            <span className="text-blue-900">cada etapa de la vida</span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-600 mt-4 max-w-xl">
            Cobertura médica con <strong>carencia inmediata</strong>, óptica a valor social, odontología, estudios de diagnóstico y un <strong>servicio integral de sepelio 24 hs</strong> para vos y tu grupo familiar.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            {/* The Blue Button with official METUC Logo */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContacto}
              className="group bg-[#0a152d] hover:bg-[#122349] text-white pl-2.5 pr-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-3 border border-white/10"
              title="Asociate a METUC - Mutual de Empleados Tucumanos"
            >
              {/* Logo in the blue button - perfectly proportioned and crisp */}
              <div className="bg-white p-1 rounded-full shadow-2xs flex items-center justify-center shrink-0">
                <MetucLogo size="sm" />
              </div>
              <div className="text-left">
                <span className="block text-[13px] font-bold leading-tight">Asociate a METUC</span>
                <span className="block text-[11px] text-blue-200 font-normal leading-none mt-0.5">Pedí asesoramiento hoy</span>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1" />
            </motion.button>

            {/* Secondary button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenPlanes}
              className="bg-white/95 backdrop-blur-sm text-[#0a1b33] hover:text-blue-900 border border-slate-200/90 hover:border-slate-300 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Ver Planes & Coberturas</span>
            </motion.button>
          </div>

          {/* Clean Trust Metadata (Zero-pill discipline) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 mt-8 pt-6 border-t border-slate-200/60 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Carencia inmediata en salud</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Guardia de sepelio 24/7</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>10% reintegro en farmacias</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
