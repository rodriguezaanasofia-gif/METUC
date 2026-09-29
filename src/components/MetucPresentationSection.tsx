import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  LayoutDashboard,
  GraduationCap,
  Users2,
  CalendarCheck,
  Award,
  ArrowRight,
  ShieldCheck,
  FolderOpen
} from 'lucide-react';

interface MetucPresentationSectionProps {
  onOpenSystem: () => void;
  onOpenDocs: () => void;
}

export const MetucPresentationSection: React.FC<MetucPresentationSectionProps> = ({
  onOpenSystem,
  onOpenDocs,
}) => {
  return (
    <section className="w-full max-w-[1400px] mx-auto mt-16 px-6 md:px-12 pb-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Presentación Oficial METUC</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-[#0a1b33]">
            Sistema Integral de Gestión Educativa
          </h2>
          <p className="font-sans text-sm md:text-base text-[#64748b] mt-2 max-w-2xl">
            Solución tecnológica modular para la administración académica, control de asistencia, registro de calificaciones y comunicación en tiempo real.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSystem}
            className="bg-[#0a152d] text-white px-6 py-3 rounded-full text-xs md:text-sm font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <FolderOpen className="w-4 h-4" />
            <span>Abrir Sistema & Cargar inicio.html</span>
          </button>
        </div>
      </div>

      {/* Feature Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Card 1: Dashboard de Inicio */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
              Módulo Central (inicio.html)
            </span>
            <h3 className="font-display font-medium text-xl text-[#0a1b33] mt-2">
              Panel de Control Institucional
            </h3>
            <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
              Vista unificada con indicadores clave en tiempo real: matrícula activa, asistencia diaria del plantel, calendario de evaluaciones y avisos urgentes.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">Acceso Rápido</span>
            <button
              onClick={onOpenSystem}
              className="text-xs font-semibold text-[#0a1b33] hover:text-blue-600 flex items-center gap-1 cursor-pointer"
            >
              <span>Ver Tablero</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 2: Calificaciones y Curricular */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-semibold text-purple-600 uppercase tracking-wider">
              Académico
            </span>
            <h3 className="font-display font-medium text-xl text-[#0a1b33] mt-2">
              Evaluaciones & Registro de Notas
            </h3>
            <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
              Cálculo automatizado de promedios ponderados, actas oficiales de notas, alertas de alumnos en riesgo pedagógico y emisión de certificados.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">Ponderaciones 100% configurables</span>
            <button
              onClick={onOpenDocs}
              className="text-xs font-semibold text-[#0a1b33] hover:text-blue-600 flex items-center gap-1 cursor-pointer"
            >
              <span>Guía</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 3: Asistencia y Alumnos */}
        <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">
              Control Diario
            </span>
            <h3 className="font-display font-medium text-xl text-[#0a1b33] mt-2">
              Pase de Asistencia Digital
            </h3>
            <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
              Toma de asistencia instantánea por hora y asignatura desde cualquier dispositivo, con justificativos médicos en línea y estadísticas por curso.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">96.8% Asistencia Promedio</span>
            <button
              onClick={onOpenSystem}
              className="text-xs font-semibold text-[#0a1b33] hover:text-blue-600 flex items-center gap-1 cursor-pointer"
            >
              <span>Detalles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive System Preview Strip */}
      <div className="mt-12 bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Compatibilidad Completa con inicio.html</span>
          </div>
          <h3 className="font-display text-2xl font-medium text-[#0a1b33]">
            ¿Tienes el archivo inicio.html de METUC en tu equipo?
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
            Puedes abrir el visor interactivo de METUC y arrastrar tu archivo{' '}
            <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800 text-xs">
              inicio.html
            </code>{' '}
            para visualizar directamente el contenido, formularios y módulos del sistema en esta misma presentación.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onOpenSystem}
            className="w-full sm:w-auto bg-[#0a152d] text-white px-7 py-3.5 rounded-full text-xs font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Cargar y Explorar inicio.html</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
