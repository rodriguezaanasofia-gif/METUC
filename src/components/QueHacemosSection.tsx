import React from 'react';
import {
  HeartPulse,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface QueHacemosProps {
  onOpenServicios: () => void;
  onOpenSepelioModal: () => void;
  onOpenPlanes: () => void;
}

export const QueHacemosSection: React.FC<QueHacemosProps> = ({
  onOpenServicios,
  onOpenSepelioModal,
  onOpenPlanes,
}) => {
  return (
    <section id="que-hacemos" className="w-full max-w-[1400px] mx-auto mt-14 sm:mt-20 px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
          ¿Qué Hacemos?
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0a1b33] mt-1.5">
          Dos pilares indispensables para la tranquilidad de tu hogar
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
          Brindamos soluciones concretas y humanas para cuidar la salud de tu familia en el día a día y respaldarte en los momentos más difíciles.
        </p>
      </div>

      {/* The Two Main Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Pilar 1: Cobertura Social de Salud */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Pilar 1 · Salud
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0a1b33]">
              Cobertura Social & Atención Médica
            </h3>
            <p className="text-xs uppercase tracking-wider text-emerald-700 font-semibold mt-1">
              Tu salud, nuestra prioridad
            </p>

            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              Ponemos a disposición de los afiliados y su grupo familiar una completa red de profesionales de la salud con <strong>carencia inmediata</strong> y autorizaciones sencillas vía web o en oficina.
            </p>

            {/* List of services from flyer */}
            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Consultas Médicas:</strong> Clínicas y especialidades con atención inmediata.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Óptica con Valor Social:</strong> Armazones, cristales y lentes recetados accesibles.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Estudios de Laboratorio & Imágenes:</strong> Análisis clínicos, radiografías y ecografías.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Odontología Integral:</strong> Cuidado bucal para niños y adultos.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-700">
              Carencia: Inmediata
            </span>
            <button
              onClick={onOpenServicios}
              className="text-xs font-semibold text-[#0a1b33] hover:text-blue-700 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Ver prestaciones de salud</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pilar 2: Servicio de Sepelio Prestacional */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Pilar 2 · Sepelio 24 Hs
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0a1b33]">
              Servicio de Sepelio Prestacional
            </h3>
            <p className="text-xs uppercase tracking-wider text-blue-900 font-semibold mt-1">
              Tranquilidad en los momentos difíciles
            </p>

            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              Acceso directo e inmediato al servicio funerario completo en caso de fallecimiento por cualquier causa (inclusive COVID-19). Cuando restar preocupaciones y costos imprevistos es lo más importante.
            </p>

            {/* List of funeral services from flyer */}
            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <strong>Servicio Completo:</strong> Retiro, traslado y acondicionamiento del fallecido.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <strong>Salas Velatorias & Cafetería:</strong> Provisión de ataúd y salas de velatorio.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <strong>Inhumación o Cremación:</strong> Asesoramiento total en trámites y certificaciones.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <strong>Cobertura Familiar & Adherentes:</strong> Titular, cónyuge, hasta 2 hijos y adherentes.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-700" />
              <span>Guardia 24 hs los 365 días</span>
            </span>
            <button
              onClick={onOpenSepelioModal}
              className="text-xs font-semibold text-[#0a1b33] hover:text-blue-700 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Detalles del sepelio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Extra Benefits Banner */}
      <div className="mt-8 bg-gradient-to-r from-[#0a152d] to-[#162a56] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs text-blue-300 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Beneficios Exclusivos con Plan METUC FULL</span>
          </div>
          <h4 className="font-display text-xl sm:text-2xl font-bold">
            10% de Reintegro en Farmacias + Turismo & Capacitaciones
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Reintegro en medicamentos recetados con tope de <strong>$10.000 mensual</strong> para el grupo familiar, más convenios de turismo social y formación con certificación mutual.
          </p>
        </div>

        <button
          onClick={onOpenPlanes}
          className="bg-white text-[#0a152d] hover:bg-slate-100 px-6 py-3 rounded-full text-xs font-bold transition-all shrink-0 shadow-xs cursor-pointer"
        >
          Ver Plan METUC FULL
        </button>
      </div>
    </section>
  );
};
